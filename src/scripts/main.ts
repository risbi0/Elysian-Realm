import { valksLength } from './guide';
import { isMobile, signetSummary } from './data';
import { mainContainer, guideContainer } from './build';

const body = document.querySelector('body') as HTMLBodyElement;
window.scroll({ top: 0 });
body.style.overflow = 'hidden';

// execute animation after all images are loaded
function load(src: string): Promise<unknown> {
	return new Promise((resolve, reject) => {
		const image: HTMLImageElement = new Image();
		image.addEventListener('load', resolve);
		image.addEventListener('error', reject);
		image.src = src;
	});
}
let time = 0;
function fadeAnim(item: HTMLButtonElement, fade: string): void {
	setTimeout(() => {
		item.classList.remove('hidden');
		item.classList.add(fade);
		setTimeout(() => { item.classList.remove(fade) }, 1990);
	}, time);
	time += interval;
}
// insert bg and banner image paths
const banners: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.banner');
const paths: string[] = [];
const getBgPath = (el: Element): string => window.getComputedStyle(el).getPropertyValue('background-image').substring(5).slice(0, -2);
paths.push(getBgPath(body));
banners.forEach((banner: HTMLButtonElement) => paths.push(getBgPath(banner.children[0])));
// wait for images to load
const cover = document.querySelector('#cover') as HTMLDivElement;
const progressBar = document.querySelector('#progress-bar') as HTMLDivElement;
const progressBarWidthInPixels: number = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.querySelector('#meter') as HTMLDivElement;
let done = 0, progressInPixels = 0;
paths.forEach((link: string) => {
	load(link).then(() => {
		done += 1;
		// progress bar
		const percentDone: number = Math.round(done / paths.length * 100) / 100;
		const fillPixels: number = Math.round(percentDone * progressBarWidthInPixels);
		while (meter.style.width !== `${fillPixels}px`) {
			progressInPixels += 1;
			meter.style.width = `${progressInPixels}px`;
		}
		if (done === paths.length) { // start animation
			body.style.overflow = 'auto';
			cover.classList.add('fade');
			setTimeout(() => { cover.remove() }, 1000);
			// animations:
			// fade-in-up/down, only applied to the banners in the viewport (desktop)
			// fade-in-left/right, applied to all banners (mobile)
			finalArr.forEach((_, index: number) => {
				if (index % 2 === 0) {
					fadeAnim(banners[finalArr[index]], animation1);
				} else {
					fadeAnim(banners[finalArr[index]], animation2);
				}
			});
			if (!isMobile) {
				// instantly display banners outside viewport
				// not covering the one in a million chance that the user
				// expands the window width while the animation is still ongoing 😡
				banners.forEach((_, index: number) => { if (!finalArr.includes(index)) banners[index].classList.remove('hidden'); });
				// allow scroll
				setTimeout(() => { mainContainer.removeEventListener('scroll', preventScroll) }, noOfBannersInViewport * interval);
			}
		}
	}).catch(() => {
		// make reload page
		const errMsg: HTMLParagraphElement = document.createElement('p');
		errMsg.setAttribute('id', 'error-msg');
		errMsg.innerText = 'An error occured. Please reload the page.';

		const reloadBtn: HTMLButtonElement = document.createElement('button');
		reloadBtn.setAttribute('id', 'refresh');
		reloadBtn.setAttribute('onclick', 'window.location.reload();');

		const span: HTMLSpanElement = document.createElement('span');
		span.classList.add('material-icons');
		span.innerText = 'refresh';

		reloadBtn.appendChild(span);

		cover.innerHTML = '';
		cover.classList.add('f-col');
		cover.appendChild(errMsg);
		cover.appendChild(reloadBtn);
	});
});

// highlight adjacent merged cell on hover from table rows
// since rows that have an adjacent merged cell and don't have the rowspan attribute won't highlight it
function highlightAdjacentMergedCell(row: HTMLTableRowElement, bool: boolean): void {
	// check if inner HTML only has 1 pair of td tags
	// in a 2 column table it has 2 td tags per row
	// meaning if a row has one less td tag it either has
	// a missing cell in the row, or a merged cell (this case)
	if (row.innerHTML.match(/<\/td>/g)!.length === 1 ||
		// for cells with .noted class
		row.innerHTML.match(/"temp"|"noted"/) &&
		// doesn't include rowspan, since it's already part of the first row
		!row.innerHTML.includes('rowspan')) {
		// get all rows of its parent table
		const parentChildren: HTMLCollection = row.parentNode!.children;
		// iterate and check if row has a rowspan attribute in the cell of the 2nd column
		for (let i = 0; i < parentChildren.length; i++) {
			if (parentChildren[i].innerHTML.includes('rowspan')) {
				const j: number = parentChildren[i].children[0].hasAttribute('rowspan') ? 0 : 1;
				// get rowspan value
				const range: number = parseInt(parentChildren[i].children[j].getAttribute('rowspan')!) - 1;
				// get index of selected row and merged cell
				const thisIndex: number = row.rowIndex;
				const mergedCellIndex: number = (parentChildren[i] as HTMLTableRowElement).rowIndex;
				// check if index is covered within the range of merged cell
				if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
					// apply styles
					if (bool) parentChildren[i].children[j].classList.add('table-cell-hover');
					else parentChildren[i].children[j].classList.remove('table-cell-hover');
				}
			}
		}
	}
}
function notedCell(row: HTMLTableRowElement, removee: string, addee: string): void {
	// .temp class to know which had the .noted class
	for (let i = 0; i < row.children.length; i++) {
		if (row.children[i].classList.contains(removee)) {
			row.children[i].classList.remove(removee);
			row.children[i].classList.add(addee);
		}
	}
}
const rowsExceptHeader: NodeListOf<HTMLTableRowElement> = document.querySelectorAll('tr:not(thead tr):not(.gear-tbl tr)');
rowsExceptHeader.forEach((row: HTMLTableRowElement) => {
	row.addEventListener('mouseout', function(this: HTMLTableRowElement) {
		this.classList.remove('table-cell-hover');
		highlightAdjacentMergedCell(this, false);
		notedCell(this, 'temp', 'noted');
	});
});
function highlightRow(this: HTMLTableRowElement): void {
	this.classList.add('table-cell-hover');
	highlightAdjacentMergedCell(this, true);
	notedCell(this, 'noted', 'temp');
}

// highlight all adjacent rows on hover from merged cells
function highlightInvolvedRows(row: any, bool: boolean): void {
	const mergeSize: number = parseInt(row.getAttribute('rowspan')) - 1;
	const cellIndex: number = row.parentNode.rowIndex;
	for (let i = cellIndex; i < cellIndex + mergeSize; i++) {
		if (bool) {
			row.parentNode.parentNode.children[i].classList.add('table-cell-hover');
			notedCell(row.parentNode.parentNode.children[i], 'noted', 'temp');
		} else {
			row.parentNode.parentNode.children[i].classList.remove('table-cell-hover');
			notedCell(row.parentNode.parentNode.children[i], 'temp', 'noted');
		}
	}
}
const cellsWithRowspan: NodeListOf<HTMLTableCellElement> = document.querySelectorAll('td[rowspan]');
cellsWithRowspan.forEach((cell: HTMLTableCellElement) => {
	cell.addEventListener('mouseout', function(this: HTMLTableCellElement) {
		highlightInvolvedRows(this, false);
	});
});
function highlightRows(this: HTMLTableRowElement) {
	highlightInvolvedRows(this, true);
}

// hide previously clicked tooltip
const tooltipable: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
tooltipable.forEach((item: HTMLInputElement) => {
	item.addEventListener('click', () => {
		for (const otherItem of tooltipable) { if (otherItem !== item) otherItem.checked = false; }
	});
});

// anchor smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
	anchor.addEventListener('click', (e: Event) => e.preventDefault());
	anchor.addEventListener('click', function(this: HTMLDivElement) {
		document.querySelector(this.getAttribute('href')!)!.scrollIntoView({ behavior: 'smooth' });
	});
});

let originalText: string | null = null, previousText: HTMLTableCellElement;
function changeText(deez: HTMLTableCellElement): void {
	for (let i = 0; i < Object.keys(signetSummary).length; i++) {
		if (signetSummary[i].signets!.includes(deez.textContent!) ||
			signetSummary[i].signets === deez.textContent) {
			previousText = deez;
			originalText = deez.textContent;
			deez.textContent = signetSummary[i].summary;
		}
	}
}
function revertText(deez: HTMLElement): void {
	deez.textContent = originalText;
	originalText = null;
}

// close and to top button position
const closeButton = document.querySelector('#close') as HTMLDivElement;
const toTopButton: any = document.querySelector('#goToTop');
function setCloseAndTotopBtnPos(closeTop: number, closeLeft: number, toTopTop: number, toTopLeft: number): void {
	closeButton.style.top = `${closeTop}px`;
	closeButton.style.left = `${closeLeft}px`;
	toTopButton.style.top = `${toTopTop}px`;
	toTopButton.style.left = `${toTopLeft}px`;
}
let deviceWidth: number = window.innerWidth;
let deviceHeight: number = window.innerHeight;
let guideEntryAnim: string, guideExitAnim: string;
let topPos: number, bottomPos: number;
let rightPos: number = deviceWidth / 2 + 243;
let prevHeight: number = window.outerHeight;
function setAnimAndPos(): void {
	// guide animations and close/gototop button positions
	if (deviceHeight >= 950) {
		[guideEntryAnim, guideExitAnim] = ['guide-entry-desktop-n', 'guide-exit-desktop-n'];
		[topPos, bottomPos] = [135, 866];
	} else {
		[guideEntryAnim, guideExitAnim] = ['guide-entry-desktop-s', 'guide-exit-desktop-s'];
		[topPos, bottomPos] = [15, deviceHeight - 60];
	}
}

const signetTableCells: NodeListOf<HTMLTableCellElement> = document.querySelectorAll('.main-tbl td, .secondary-tbl td, .transitional-tbl td');
// setup of banner indices for animation order
// desktop - banners in the middile of mainContainer (starting view) in random order, vertical animation
// mobile - all banners in linear order, horizontal animation
let animation1: string, animation2: string;
let preventScroll: () => void;
let noOfBannersInViewport = 0;
let finalArr: number[] = [];
if (isMobile) {
	[animation1, animation2] = ['fade-in-left', 'fade-in-right'];
	finalArr = Array.from(Array(valksLength).keys()); // all

	// change signet name to summary on hover/mobile click
	((signetTableCells: NodeListOf<HTMLTableCellElement>): void => {
		signetTableCells.forEach((cell: HTMLTableCellElement) => {
			cell.addEventListener('mouseover', function(this: HTMLTableCellElement) {
				if (originalText !== null && previousText !== null && !this.textContent!.includes('(Nexus)')) {
					revertText(previousText);
					changeText(this);
				} else if (originalText === null) {
					changeText(this);
				} else {
					revertText(previousText);
				}
			});
		});
	})(signetTableCells);

	guideContainer.classList.add('hidden');
} else {
	[animation1, animation2] = ['fade-in-up', 'fade-in-down'];
	const scrollVal: number = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2; // middle
	mainContainer.scroll({ left: scrollVal }); // scroll to middle
	// lock mainContainer scroll during banner animation
	preventScroll = () => mainContainer.scroll({ left: scrollVal });
	mainContainer.addEventListener('scroll', preventScroll);

	// setup no. of banners
	noOfBannersInViewport = Math.ceil((deviceWidth + Math.floor(deviceWidth / 100)) / 100) + 1;
	const noOfBannersNotInViewport: number = valksLength - noOfBannersInViewport;
	const noOfBannersLeftOfViewport: number = Math.round(noOfBannersNotInViewport / 2);
	const bannerIndicesInDektopViewport: number[] = Array.from(Array(noOfBannersInViewport).keys()).map((e) => e + noOfBannersLeftOfViewport);
	// randomize array elements
	const bannerLength: number = bannerIndicesInDektopViewport.length;
	for (let i = 0; i < bannerLength; i++) {
		const randomIndex: number = Math.floor(Math.random() * bannerIndicesInDektopViewport.length);
		finalArr.push(bannerIndicesInDektopViewport[randomIndex]);
		bannerIndicesInDektopViewport.splice(bannerIndicesInDektopViewport.indexOf(bannerIndicesInDektopViewport[randomIndex]), 1);
	}

	((signetTableCells: NodeListOf<HTMLTableCellElement>): void => {
		signetTableCells.forEach((cell: HTMLTableCellElement) => {
			cell.addEventListener('mouseover', function(this: HTMLTableCellElement) { changeText(this) });
			cell.addEventListener('mouseout', function(this: HTMLTableCellElement) { if (originalText !== null) revertText(this); });
		});
	})(signetTableCells);

	guideContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

	setAnimAndPos();
	// wait for resize event to end before executing function
	let task: NodeJS.Timeout;
	window.addEventListener('resize', () => {
		clearTimeout(task);
		task = setTimeout(() => {
			// update animations and button positions
			deviceWidth = window.innerWidth;
			deviceHeight = window.innerHeight;
			rightPos = deviceWidth / 2 + 243;

			// hide guide when browser height threshold is reached
			if ((prevHeight <= 949 && deviceHeight >= 950) || (prevHeight >= 950 && deviceHeight <= 949)) hide();

			setAnimAndPos();
			setCloseAndTotopBtnPos(topPos, rightPos, bottomPos, rightPos);

			prevHeight = deviceHeight;
		}, 50);
	});
}

// interval gets faster the more banners are in viewport
// in mobile, interval is constant
const interval: number = 300 - noOfBannersInViewport * 5;

// setup modal closing
const verticalText: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.vertical-text');
const mainStylesheet: CSSRuleList = document.styleSheets[document.styleSheets.length - 1].cssRules; // styles.css
const mobileUpperBanners: number = valksLength - 1 - Math.floor(deviceHeight / (deviceWidth / 4));
let currentBanner: HTMLButtonElement; // for unsetting banner style in mobile
let currentGuide: HTMLDivElement;
function hide() {
	body.style.overflow = 'auto'; // resume scroll
	body.style.pointerEvents = 'none';
	guideContainer.classList.remove('bg-fade-in');
	guideContainer.classList.add('bg-fade-out');
	if (isMobile) {
		(currentBanner.children[0] as HTMLDivElement).style.filter = '';
		(currentBanner.children[1].children[0] as HTMLSpanElement).style.color = '';

		currentGuide.classList.remove('guide-bot-entry-mobile', 'guide-top-entry-mobile', 'upper');
		// exit animation
		if (Array.from(currentBanner.parentNode!.children).indexOf(currentBanner) > mobileUpperBanners) {
			currentGuide.classList.add('guide-bot-exit-mobile');
		} else {
			currentGuide.classList.add('guide-top-exit-mobile');
		}
		// unhide banner names
		verticalText.forEach((text: HTMLSpanElement) => text.style.opacity = '1');
		// hide fade effect
		for (let i = 0; i < mainStylesheet.length; i++) {
			const cssRule = mainStylesheet[i] as CSSStyleRule;
			if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
				cssRule.style.opacity = '0';
				cssRule.style.animation = '';
			}
		}
	} else {
		if (currentGuide) {
			currentGuide.classList.remove(guideEntryAnim);
			currentGuide.classList.add(guideExitAnim);
		}
	}
	closeButton.style.visibility = 'hidden';
	toTopButton.style.visibility = 'hidden';
	// re-enable pointer events and hide elements right before animation ends
	setTimeout(() => {
		body.style.pointerEvents = 'auto';
		guideContainer.classList.add('no-display');
		if (currentGuide) {
			currentGuide.classList.add('no-display');
			currentGuide.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile', guideEntryAnim, 'guide-exit-desktop-n', 'guide-exit-desktop-s');
		}
	}, 450);

	rowsExceptHeader.forEach((row: HTMLTableRowElement) => row.removeEventListener('mouseover', highlightRow));
	cellsWithRowspan.forEach((cell: HTMLTableCellElement) => cell.removeEventListener('mouseover', highlightRows));
}
closeButton.addEventListener('click', () => hide()); // close on close button click
guideContainer.addEventListener('click', () => hide()); // close when clicking outside modal

const guideContents: NodeListOf<HTMLDivElement> = document.querySelectorAll('.guide-content');
guideContents.forEach((guideContent: HTMLDivElement) => guideContent.addEventListener('click', (e) => e.stopPropagation()));
let afterOffset: string, direction: string, psuedoDirection: string;
// show respective guide content on banner click
banners.forEach((banner: HTMLButtonElement) => {
	banner.addEventListener('click', function(this: HTMLButtonElement) {
		body.style.pointerEvents = 'none'; // disable events during transition
		const index: number = Array.from(this.parentNode!.children).indexOf(this);
		currentGuide = guideContents[index];
		// animation
		guideContainer.classList.remove('bg-fade-out', 'no-display');
		guideContainer.classList.add('bg-fade-in');
		// button offsets
		let closeButtonOffsetTop: number, toTopButtonOffsetTop: number;
		if (isMobile) {
			body.style.overflow = 'hidden'; // prevent outside scroll while guide is open
			currentGuide.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile');
			// check if banner is high enough to be scrolled at the top of the viewport
			// since the banner will be used as the name instead of a plain text one
			// if not, it will be scrolled at the bottom, either applying respective styles below
			let offset = 0;
			if (index > mobileUpperBanners) { // scroll to banner on bottom
				currentGuide.classList.add('guide-bot-entry-mobile');
				// style ::before and ::after psuedo selectors for content fade effect
				[afterOffset, direction, psuedoDirection] = ['25vw', 'bottom', 'up'];
				// window scroll offset
				offset = this.offsetTop + this.offsetHeight - deviceHeight;
				// button offset
				closeButtonOffsetTop = 15;
				toTopButtonOffsetTop = deviceHeight - deviceWidth / 4 - 60;
			} else { // scroll to banner on top
				currentGuide.classList.add('guide-top-entry-mobile', 'upper'); // (animation, spacing)
				[afterOffset, direction, psuedoDirection] = ['0', 'top', 'down'];
				offset = this.offsetTop;
				closeButtonOffsetTop = deviceHeight - (deviceHeight - deviceWidth / 4) + 15;
				toTopButtonOffsetTop = deviceHeight - 60;
			}
			window.scroll({ top: offset, behavior: 'smooth' });
		} else {
			currentGuide.classList.remove(guideExitAnim, 'no-display');
			currentGuide.classList.add(guideEntryAnim);
		}

		// timeout to prevent highlighting when guide is still in animation (desktop)
		// and to wait for animation to end to apply styles (mobile)
		setTimeout(() => {
			body.style.pointerEvents = 'auto';
			rowsExceptHeader.forEach((row: HTMLTableRowElement) => row.addEventListener('mouseover', highlightRow));
			cellsWithRowspan.forEach((cell: HTMLTableCellElement) => cell.addEventListener('mouseover', highlightRows));
			closeButton.style.visibility = 'visible';

			if (isMobile) {
				// style ::after and ::before psuedo selectors
				const beforeOffset = 'calc(25vw - 5px)';
				for (let i = 0; i < mainStylesheet.length; i++) {
					const cssRule = mainStylesheet[i] as CSSStyleRule;
					if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
						cssRule.style.opacity = '1';
						cssRule.style.animation = `fadein${psuedoDirection} 0.6s ease-out forwards`;
						if (cssRule.selectorText === '#guide-container::before') {
							if (direction === 'top') {
								cssRule.style.bottom = '';
								cssRule.style.top = beforeOffset;
							} else {
								cssRule.style.top = '';
								cssRule.style.bottom = beforeOffset;
							}
							cssRule.style.backgroundImage = `linear-gradient(to ${direction}, rgba(0, 0, 0, 0.7), transparent)`;
						}
						if (cssRule.selectorText === '#guide-container::after') cssRule.style.bottom = afterOffset;
					}
				}
				// show guide
				guideContainer.classList.remove('hidden', 'no-display');
				currentGuide.classList.remove('no-display');
				currentBanner = this;
				// style banner
				(this.children[0] as HTMLElement).style.filter = 'brightness(90%) blur(4px)';
				(this.children[1].children[0] as HTMLElement).style.color = 'white';
				// hide all banner names except from the selected banner
				verticalText.forEach((text: HTMLSpanElement) => {
					if (text.innerText !== this.innerText) text.style.opacity = '0';
				});
				setCloseAndTotopBtnPos(closeButtonOffsetTop, deviceWidth - 60, toTopButtonOffsetTop, deviceWidth - 60);
			} else {
				setCloseAndTotopBtnPos(topPos, rightPos, bottomPos, rightPos);
			}
		}, 600);

		// goToTop button visibility
		currentGuide.addEventListener('scroll', (e: Event) => toTopButton.style.visibility = (e.currentTarget! as HTMLElement).scrollTop > 700 ? 'visible' : 'hidden');
		// go to top of guide
		toTopButton.addEventListener('click', (e: any) => {
			const t = e.currentTarget.currentGuide;
			guideContents[Array.from(t.parentNode.children).indexOf(t)].scroll({ top: 0, behavior: 'smooth' });
		});
		toTopButton.currentGuide = currentGuide;
		// scroll to the top
		currentGuide.scrollTo({ top: 0 });
	});
});
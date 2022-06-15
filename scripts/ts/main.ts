import { valks } from './guide.js';
import { isMobile, signetSummary } from './data.js';
import { guideContainer, guideContent, buildGuideContent } from './build.js';

const body = document.querySelector('body') as HTMLBodyElement;
const mainContainer = document.querySelector('#main-container') as HTMLDivElement;
const deviceWidth: number = window.innerWidth;
const deviceHeight: number = window.innerHeight;

window.scrollTo({ top: 0 });
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
let time: number = 0;
function fadeAnim(item: any, fade: string): void {
    setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add(fade);
    }, time);
    time += interval;
}
// insert all webp paths
const url: string[] = [];
const mainStylesheet: any = document.styleSheets[1].cssRules;
for (const cssRule of mainStylesheet) {
    if ('style' in cssRule && 'background-image' in cssRule.style && cssRule.style.backgroundImage.includes('url')) {
       url.push('assets' + cssRule.style.backgroundImage.substring(7).slice(0, -2));
    }
}
// wait for images to load
const cover = document.querySelector('#cover') as HTMLDivElement;
const progressBar = document.querySelector('#progress-bar') as HTMLDivElement;
const progressBarWidthInPixels: number = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.querySelector('#meter') as HTMLDivElement;
const banners: any = document.querySelectorAll('.banner');
let done: number = 0, progressInPixels: number = 0;
url.forEach((link: string) => {
    load(link).then(() => {
        done += 1;
        // progress bar
        const percentDone: number = Math.round(done / url.length * 100) / 100;
        const fillPixels: number = Math.round(percentDone * progressBarWidthInPixels);
        while (meter.style.width !== `${fillPixels}px`) {
            progressInPixels += 1;
            meter.style.width = `${progressInPixels}px`;
        }
        if (done === url.length) { // start animation
            body.style.overflow = 'auto';
            cover.classList.add('fade');
            setTimeout(() => { cover.remove() }, 1000);
            // fade-in-up/down animation
            // only applied to the banners in the viewport
            finalArr.forEach((_, index) => {
                if (index % 2 === 0) {
                    fadeAnim(banners[finalArr[index]], animation1);
                } else {
                    fadeAnim(banners[finalArr[index]], animation2);
                }
            });
            if (!isMobile) {
                // instantly display banners outside viewport
                // not covering the one in a million chance that the user
                // expands the window width while the animation is still ongoing
                banners.forEach((_: any, index: number) => { if (!finalArr.includes(index)) banners[index].classList.remove('hidden') });
                // allow scroll
                setTimeout(() => { mainContainer.removeEventListener('scroll', preventScroll) }, noOfBannersInViewport * interval);
            }
        }
    });
});

function highlightAdjacentMergedCell(row: any, bool: boolean): void {
    // check if inner HTML only has 1 pair of td tags
    // in a 2 column table it has 2 td tags per row
    // meaning if a row has one less td tag it either has
    // a missing cell in the row, or a merged cell (this case)
    if (row.innerHTML.match(/<\/td>/g).length === 1 ||
        // for cells with .noted class
        (row.innerHTML.match(/"temp"|"noted"/) && !(row.innerHTML.includes('rowspan')))) {
        // get all rows of its parent table
        const parentChildren: any = row.parentNode.children;
        // iterate and check if row has a rowspan attribute in the cell of the 2nd column
        for (let i = 0; i < parentChildren.length; i++) {
            if (parentChildren[i].innerHTML.includes('rowspan')) {
                let j: number;
                parentChildren[i].children[0].hasAttribute('rowspan') ? j = 0 : j = 1;
                // get rowspan value
                const range: number = parseInt(parentChildren[i].children[j].getAttribute('rowspan')) - 1;
                // get index of selected row and merged cell
                const thisIndex: number = row.rowIndex;
                const mergedCellIndex: number = parentChildren[i].rowIndex;
                // check if index is covered within the range of merged cell
                if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
                    // apply styles
                    if (bool) { parentChildren[i].children[j].classList.add('table-cell-hover') }
                    else { parentChildren[i].children[j].classList.remove('table-cell-hover') }
                }
            }
        }
    }
}
function notedCell(row: HTMLDivElement, removee: string, addee: string): void {
    // .temp class to know which had the .noted class
    for (let i = 0; i < row.children.length; i++) {
        if (row.children[i].classList.contains(removee)) {
            row.children[i].classList.remove(removee);
            row.children[i].classList.add(addee);
        }
    }
}
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

let originalText: string | null, previousText: any;
function changeText(deez: HTMLDivElement): void {
    for(let i = 0; i < Object.keys(signetSummary).length; i++) {
        if (signetSummary[i].signets.includes(deez.textContent) ||
            signetSummary[i].signets === deez.textContent) {
            previousText = deez;
            originalText = deez.textContent;
            deez.textContent = signetSummary[i].summary;
        } 
    }
}
function revertText(deez: HTMLDivElement): void {
    deez.textContent = originalText;
    originalText = null;
}

// setup of banner indices for animation order
// mobile - all banners in linear order, horizontal animation
// desktop - banners in the middile of mainContainer (starting view) in random order, vertical animation
let animation1: string, animation2: string;
let preventScroll: any;
let noOfBannersInViewport: number = 0;
let finalArr: number[] = [];
// change signet name to summary on hover/click
let summOnHover: any;
if (isMobile) {
    [animation1, animation2] = ['fade-in-left', 'fade-in-right'];
    finalArr = [...Array(valks.length).keys()]; // all

    summOnHover = (signets: any) => {
        signets.forEach((signet: any) => {
            signet.addEventListener('mouseover', function(this: any) {
                if (originalText !== null && previousText !== this) {
                    revertText(previousText);
                    changeText(this);
                } else if (originalText === null) { changeText(this);
                } else if (previousText === this) { revertText(previousText); }
            });
        });
    }
    guideContent.classList.add('mobile');
} else {
    [animation1, animation2] = ['fade-in-up', 'fade-in-down'];
    const scrollVal: number = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2; // middle
    mainContainer.scroll({ left: scrollVal }); // scroll to middle
    // lock mainContainer scroll during banner animation
    preventScroll = () => { mainContainer.scroll({ left: scrollVal }) };
    mainContainer.addEventListener('scroll', preventScroll);
    // setup no. of banners
    noOfBannersInViewport = Math.ceil((deviceWidth + Math.floor(deviceWidth / 100)) / 100) + 1;
    const noOfBannersNotInViewport: number = valks.length - noOfBannersInViewport;
    const noOfBannersLeftOfViewport: number = Math.round(noOfBannersNotInViewport / 2);
    const bannerIndicesInDektopViewport: number[] = [...Array(noOfBannersInViewport).keys()].map((e) => { return e + noOfBannersLeftOfViewport });
    // randomize array elements
    const bannerLength: number = bannerIndicesInDektopViewport.length;
    for (let i = 0; i < bannerLength; i++) {
        const randomIndex: number = Math.floor(Math.random() * bannerIndicesInDektopViewport.length);
        finalArr.push(bannerIndicesInDektopViewport[randomIndex]);
        bannerIndicesInDektopViewport.splice(bannerIndicesInDektopViewport.indexOf(bannerIndicesInDektopViewport[randomIndex]), 1);
    }

    summOnHover = (signets: any) => {
        signets.forEach((signet: any) => {
            signet.addEventListener('mouseover', function(this: any) { changeText(this) });
            signet.addEventListener('mouseout', function(this: any) { if (originalText !== null) revertText(this) });
        });
    }
    guideContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    guideContent.classList.add('desktop');
}
// interval gets faster the more banners are in viewport
// in mobile, interval is constant
const interval: number = 300 - noOfBannersInViewport * 5;

// modal closing setup
const topButton = document.querySelector('#goToTop') as HTMLDivElement;
const closeButton = document.querySelector('#close') as HTMLDivElement;
const mobileUpperBanners: number = valks.length - 1 - Math.floor(deviceHeight / (deviceWidth / 4));
let currentBanner: any; // for unsetting banner style in mobile
function hide() {
    body.style.overflow = 'auto'; // resume scroll
    guideContainer.classList.remove('bg-fade-in');
    guideContainer.classList.add('bg-fade-out');
    guideContent.innerHTML = ''; // delete HTML content
    if (isMobile) {
        currentBanner.children[0].style.filter = null;
        currentBanner.children[1].children[0].style.color = null;

        guideContent.classList.remove('guide-bot-entry-mobile', 'guide-top-entry-mobile', 'upper', 'lower');
        // exit animation
        if (Array.from(currentBanner.parentNode.children).indexOf(currentBanner) > mobileUpperBanners) {
            guideContent.classList.add('guide-bot-exit-mobile');
        } else {
            guideContent.classList.add('guide-top-exit-mobile');
        }
        // unhide banner names
        document.querySelectorAll('.vertical-text').forEach((text: any) => { text.style.opacity = '1'; });
        // hide fade effect
        for (const cssRule of mainStylesheet) {
            if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
                cssRule.style.opacity = '0';
                cssRule.style.animation = '';
            }
        }
    } else {
        guideContent.classList.remove('guide-entry-desktop');
        guideContent.classList.add('guide-exit-desktop');
    }
    closeButton.style.visibility = 'hidden';
    topButton.style.visibility = 'hidden';
    // hide element right before animation ends
    setTimeout(() => { guideContainer.style.display = 'none'; }, 450);
}
closeButton.addEventListener('click', () => { hide(); }); // close on close button click
guideContainer.addEventListener('click', () => { hide(); }); // close when clicking outside modal
guideContent.addEventListener('click', (e) => { e.stopPropagation(); });
function contentFade(topOffset: string, bottomOffset: string, direction: string, psuedoDirection: string): void {
    for (const cssRule of mainStylesheet) {
        if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
            cssRule.style.opacity = '1';
            cssRule.style.animation = `fadein${psuedoDirection} 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19) 0.1s forwards`;
            if (cssRule.selectorText === '#guide-container::before') {
                cssRule.style.top = topOffset;
                cssRule.style.backgroundImage = `linear-gradient(to ${direction}, rgba(0, 0, 0, 0.7), transparent)`;
            }
            if (cssRule.selectorText === '#guide-container::after') cssRule.style.bottom = bottomOffset;
        }
    }
}
// render guide content and listeners on click
banners.forEach((banner: any) => {
    banner.addEventListener('click', function(this: any) {
        // generate guide
        const index = Array.from(this.parentNode.children).indexOf(this);
        buildGuideContent(index);
        
        guideContent.scrollTo({ top: 0 });
        // animation
        guideContainer.classList.remove('bg-fade-out');
        guideContainer.classList.add('bg-fade-in');
        // button offsets
        let closeButtonOffsetTop: number, topButtonOffsetTop: number;
        if (isMobile) {
            body.style.overflow = 'hidden'; // prevent outside scroll while guide is open
            guideContent.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile');
            // check if banner is high enough to be scrolled at the top of the viewport
            // since the banner will be used as the name instead of a plain text one
            // if not, it will be scrolled at the bottom, either applying respective styles below
            let offset: number = 0;
            if (index > mobileUpperBanners) { // scroll to banner on bottom
               // guideContent.classList.remove('upper');
                guideContent.classList.add('guide-bot-entry-mobile', 'lower'); // (animation, spacing)
                // window scroll offset
                offset = this.offsetTop + this.offsetHeight - deviceHeight;
                // button offset
                closeButtonOffsetTop = 0;
                topButtonOffsetTop = deviceHeight - deviceWidth / 4;
                // style ::before and ::after psuedo selectors for content fade effect
                contentFade('calc(100vh - 25vw)', '25vw', 'bottom', 'up');
            } else { // scroll to banner on top
              //  guideContent.classList.remove('lower');
                guideContent.classList.add('guide-top-entry-mobile', 'upper');
                offset = this.offsetTop;
                closeButtonOffsetTop = deviceHeight - (deviceHeight - deviceWidth / 4);
                topButtonOffsetTop = deviceHeight;
                contentFade('calc(25vw - 5px)', '0', 'top', 'down');
            }
            window.scroll({ top: offset, behavior: 'smooth' });
        } else {
            guideContent.classList.remove('guide-exit-desktop');
            guideContent.classList.add('guide-entry-desktop');
        }

        // hide previously clicked tooltip
        const tooltipable: any = document.querySelectorAll('input');
        tooltipable.forEach((item: any) => {
            item.addEventListener('click', () => {
                for (const otherItem of tooltipable) { if (otherItem !== item) otherItem.checked = false }
            });
        });

        // anchor smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => { e.preventDefault() });
            anchor.addEventListener('click', function(this: any) {
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // timeout to prevent highlighting when guide is still in animation (desktop)
        // and to wait for animation to end to apply styles (mobile)
        setTimeout(() => {
            // higlight table rows, including merged cells, on hover
            // since rows that have an adjacent merged cell and don't have the rowspan attribute won't highlight it
            document.querySelectorAll('tr:not(thead tr)').forEach(row => {
                row.addEventListener('mouseover', function(this: any) {
                    this.classList.add('table-cell-hover');
                    notedCell(this, 'noted', 'temp');
                    highlightAdjacentMergedCell(this, true);
                });
                row.addEventListener('mouseout', function(this: any) {
                    this.classList.remove('table-cell-hover');
                    notedCell(this, 'temp', 'noted');
                    highlightAdjacentMergedCell(this, false);
                });
            });
            // highlight adjacent rows on hovering from merged cells
            document.querySelectorAll('td[rowspan]').forEach(cell => {
                cell.addEventListener('mouseover', function(this: any) { highlightInvolvedRows(this, true) });
                cell.addEventListener('mouseout', function(this: any) { highlightInvolvedRows(this, false) });
            });

            // close and to top button position
            const setCloseButtonPos = (topOffset: number, leftOffset: number): void => {
                closeButton.style.visibility = 'visible';
                closeButton.style.top = `${topOffset + 15}px`;
                closeButton.style.left = `${leftOffset - 60}px`;
            }
            if (isMobile) {
                guideContainer.classList.remove('hidden');
                currentBanner = this;
                // style banner
                this.children[0].style.filter = 'brightness(70%) blur(0.3px)';
                this.children[1].children[0].style.color = 'white';
                // hide all banner names except from the selected banner
                document.querySelectorAll('.vertical-text').forEach((text: any) => {
                    if (text.innerText !== this.innerText) text.style.opacity = '0';
                });
                setCloseButtonPos(closeButtonOffsetTop, deviceWidth);
                topButton.style.top = `${topButtonOffsetTop - 60}px`;
                topButton.style.left = `${deviceWidth - 60}px`;
            } else {
                const guidePos = guideContent.getBoundingClientRect();
                setCloseButtonPos(guidePos.top, guidePos.right);
                topButton.style.top = `${guidePos.bottom - 60}px`;
                topButton.style.left = `${guidePos.right - 60}px`;
            }
        }, 600);

        const signets: any = document.querySelectorAll('#main-tbl td, #secondary-tbl td, #transitional-tbl td');
        summOnHover(signets);
        
        // goToTop button visibility
        guideContent.addEventListener('scroll', function(this: any) {
            topButton.style.visibility = guideContent.scrollTop > 700 ? 'visible' : 'hidden';
        });
        // go to top of guide
        topButton.addEventListener('click', () => { guideContent.scroll({ top: 0, behavior: 'smooth' }); });
    });
});
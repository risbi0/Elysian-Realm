import { valks } from './guide.js';
import { signetSummary } from './data.js';

const body = document.querySelector('body') as HTMLBodyElement;
const mainContainer = document.querySelector('#main-container') as HTMLElement;
const banners: any = document.querySelectorAll('.banner');
const topButton = document.querySelector('#goToTop') as HTMLElement;

window.scrollTo({ top: 0 });
body.style.overflow = 'hidden';

const subEquation: number = (window.innerWidth + Math.floor(window.innerWidth / 100)) / 100;
let noOfBannersInViewport: number, scrollVal: number;
if (isMobile) {
    noOfBannersInViewport = Math.ceil(subEquation) + 0;
    scrollVal = 0; // leftmost
} else {
    noOfBannersInViewport = Math.ceil(subEquation) + 1;
    scrollVal = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2; // middle
    mainContainer.scroll({ left: scrollVal }); // scroll to middle
}
// locks scroll in mainContainer during banner animation
const preventScroll = (): void => { mainContainer.scroll({ left: scrollVal }) };
mainContainer.addEventListener('scroll', preventScroll);
// setup no. of banners

const noOfBannersNotInViewport: number = valks.length - noOfBannersInViewport;
let finalArr: number[];
// setup of banner indices for animation order
// mobile - banners on the leftmost side of mainContainer (starting view) in left to right order
// desktop - banners on the middile of mainContainer (starting view) in random order
if (isMobile) {
    finalArr = [...Array(noOfBannersInViewport).keys()];
} else {
    finalArr = [];
    const noOfBannersLeftOfViewport: number = Math.round(noOfBannersNotInViewport / 2);
    const bannerIndicesInDektopViewport: number[] = [...Array(noOfBannersInViewport).keys()].map((e) => { return e + noOfBannersLeftOfViewport });

    // randomize array elements
    const bannerLength: number = bannerIndicesInDektopViewport.length;
    for (let i = 0; i < bannerLength; i++) {
        const randomIndex: number = Math.floor(Math.random() * bannerIndicesInDektopViewport.length);
        finalArr.push(bannerIndicesInDektopViewport[randomIndex]);
        bannerIndicesInDektopViewport.splice(bannerIndicesInDektopViewport.indexOf(bannerIndicesInDektopViewport[randomIndex]), 1);
    }
}

// execute animation after all images are loaded
function load(src: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const image: HTMLImageElement = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}
// interval gets faster the more banners in viewport
const interval: number = 300 - noOfBannersInViewport * 5;
let time: number = 0;
function fadeAnim(item: any, fade: string): void {
    setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add(fade);
        setTimeout(() => { item.classList.remove(fade) }, 1990);
    }, time);
    time += interval;
}
// insert main background image link and banner image links
const url: string[] = [];
url.push(window.getComputedStyle(body).getPropertyValue('background-image').substring(5).slice(0, -2));
banners.forEach((banner: HTMLElement) => url.push(window.getComputedStyle(banner.children[0]).getPropertyValue('background-image').substring(5).slice(0, -2)));
// wait for images to load
const cover = document.querySelector('#cover') as HTMLElement;
const progressBar = document.querySelector('#progress-bar') as HTMLElement;
const progressBarWidthInPixels: number = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.querySelector('#meter') as HTMLElement;
let done: number = 0, progressInPixels: number = 0;
url.forEach((link: string) => {
    load(link).then(() => {
        done += 1;
        // progress bar
        const percentDone: number = Math.round(done / valks.length * 100) / 100;
        const fillPixels: number = Math.round(percentDone * progressBarWidthInPixels);
        while (meter.style.width != `${fillPixels}px`) {
            progressInPixels += 1;
            meter.style.width = `${progressInPixels}px`;
        }
        if (done == valks.length) { // start animation
            body.style.overflow = 'auto';
            cover.classList.add('fade');
            setTimeout(() => { cover.remove() }, 800);
            // fade-in-up/down animation
            // only applied to the banners in the viewport
            finalArr.forEach((_, index) => {
                if (index % 2 == 0) {
                    fadeAnim(banners[finalArr[index]], 'fade-in-up');
                } else {
                    fadeAnim(banners[finalArr[index]], 'fade-in-down');
                }
            });
            // instantly display banners outside viewport
            // not covering the one in a million chance that the user
            // expands the window width while the animation is still ongoing
            banners.forEach((_: any, index: number) => { if (!finalArr.includes(index)) banners[index].classList.remove('hidden') });
            // allow scroll
            setTimeout(() => { mainContainer.removeEventListener('scroll', preventScroll) }, noOfBannersInViewport * interval);
        }
    });
});

let previousOffset: number;
function collapse(content: any): void {
    const guideContainer: any = content.nextElementSibling;
    
    if (guideContainer.style.minWidth) { // collapse
        guideContainer.style.minWidth = null;
        guideContainer.style.opacity = 0;
        guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.1s';
        setTimeout(() => { guideContainer.scrollTop = 0 }, 100);
        content.children[0].style.filter = null;
    } else { // expand
        content.children[0].style.filter = 'brightness(70%)';
        let width: number, timeout: number, phoneOffset: number;
        if (window.innerWidth <= 600) {
            width = window.innerWidth, timeout = 0, phoneOffset = 100;
        } else {
            width = 600, timeout = 300, phoneOffset = 0;
        }

        guideContainer.style.minWidth = width + 'px';
        guideContainer.style.opacity = 1;
        guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.7s 0.2s';
        
        let scrollOffset: number = content.offsetLeft;
        if (previousOffset < content.offsetLeft && 
            mainContainer.scrollWidth != valks.length * 100) {
            scrollOffset -= width;
        }
        setTimeout(() => {
            // pixel by pixel scrolling for the rightmost banners covered by the viewport
            // since scrolling to a coordinate on the edge of the document with the accordion expanding
            // would not scroll at all, since the scroll method instantly goes to the assigned coordinates
            // before the accordion has finished expanding
            if (content.offsetLeft + 100 > mainContainer.scrollWidth - window.innerWidth &&
                window.innerWidth <= 600 && mainContainer.scrollWidth == valks.length * 100) {
                const travelPixels: number = content.getBoundingClientRect().right;
                for (let i = 1; i <= travelPixels; i++) {
                    setTimeout(() => {
                        mainContainer.scroll({ left: scrollOffset + phoneOffset - travelPixels + i });
                    }, i * 200 / travelPixels);
                }
            } else { // regular scroll
                mainContainer.scroll({
                    left: scrollOffset + phoneOffset,
                    behavior: 'smooth'
                });
            }
            if (window.innerWidth <= 600) {
                window.scroll({
                    top: content.offsetTop,
                    behavior: 'smooth'
                });
            }
        }, timeout);
        previousOffset = content.offsetLeft;
    }
}
// banner animation
banners.forEach((item: any) => {
    item.addEventListener('click', function(this: any) {
        // collapse previously clicked item
        if (!this.classList.contains('active')) {
            for (const coll of banners) {
                if (coll.classList.contains('active')) {
                    coll.classList.remove('active');
                    collapse(coll);
                }
            }
        }
        this.classList.toggle('active');
        collapse(this);
    });
    // goToTop button visibility
    item.nextElementSibling.addEventListener('scroll', function(this: any) {
        if (item.nextElementSibling.scrollTop > 700) {
            topButton.style.visibility = 'visible';
            if (window.innerWidth <= 600) topButton.style.top = window.innerHeight - 60 + "px";
        } else {
            topButton.style.visibility = 'hidden';
        }
    });
});

// support valk avatar transition on hover
const checkboxes: any = document.querySelectorAll('input[type="checkbox"]:not(.emblem input[type="checkbox"])').forEach(checkbox => {
    checkbox.addEventListener('mouseover', function(this: any) {
        this.parentNode.previousElementSibling.style.filter = 'brightness(50%)';
        this.parentNode.previousElementSibling.style.transition = '0.3s';
    });
    checkbox.addEventListener('mouseout', function(this: any) {
        this.parentNode.previousElementSibling.style.filter = 'unset';
        this.parentNode.previousElementSibling.style.transition = '0.2s';
    });
});

// hide previously clicked tooltip
const tooltipable: any = document.querySelectorAll('input');
tooltipable.forEach((item: any) => {
    item.addEventListener('click', function() {
        for (const otherItem of tooltipable) { if (otherItem != item) otherItem.checked = false }
    });
});

// anchor smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) { e.preventDefault() });
    anchor.addEventListener('click', function(this: any) {
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

function highlightAdjacentMergedCell(row: any, bool: boolean): void {
    // check if inner HTML only has 1 pair of td tags
    // in a 2 column table it has 2 td tags per row
    // meaning if a row has one less td tag it either has
    // a missing cell in the row, or a merged cell (this case)
    if (row.innerHTML.match(/<\/td>/g).length == 1 ||
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
function notedCell(row: HTMLElement, removee: string, addee: string): void {
    // .temp class to know which had the .noted class
    for (let i = 0; i < row.children.length; i++) {
        if (row.children[i].classList.contains(removee)) {
            row.children[i].classList.remove(removee);
            row.children[i].classList.add(addee);
        }
    }
}
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
// highlight adjacent rows on hovering from merged cells
document.querySelectorAll('td[rowspan]').forEach(cell => {
    cell.addEventListener('mouseover', function(this: any) { highlightInvolvedRows(this, true) });
    cell.addEventListener('mouseout', function(this: any) { highlightInvolvedRows(this, false) });
});

let originalText: string | null, previousText: any;
function changeText(deez: HTMLElement): void {
    for(let i = 0; i < Object.keys(signetSummary).length; i++) {
        if (signetSummary[i].signets.includes(deez.textContent) ||
            signetSummary[i].signets == deez.textContent) {
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
// change signet name to summary on hover/click
const signets: any = document.querySelectorAll('.main-tbl td, .secondary-tbl td, .transitional-tbl td');
if (isMobile) { // mobile browsers
    signets.forEach((signet: any) => {
        signet.addEventListener('mouseover', function(this: any) {
            if (originalText != null && previousText != this) {
                revertText(previousText);
                changeText(this);
            } else if (originalText == null) { changeText(this);
            } else if (previousText == this) { revertText(previousText); }
        });
    });
} else { // desktop browsers
    signets.forEach((signet: any) => {
        signet.addEventListener('mouseover', function(this: any) { changeText(this) });
        signet.addEventListener('mouseout', function(this: any) { if (originalText != null) revertText(this) });
    });
}

// go to top of guide
topButton.addEventListener('click', function (): void {
    for (const item of banners) {
        if (item.classList.contains('active')) {
            item.nextElementSibling!.scroll({ top: 0, behavior: 'smooth' });
            // scroll into view
            let offsetLeft: number;
            if (isMobile) {
                offsetLeft = item.nextElementSibling.offsetLeft;
            } else {
                offsetLeft = item.nextElementSibling.offsetLeft - 100;
            }
            mainContainer.scroll({ left: offsetLeft, behavior: 'smooth' });
        }
    }
});
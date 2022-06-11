import { valks } from './guide.js';
import { signetSummary } from './data.js';
import { guideContainer, guideContent, buildGuideContent } from './build.js';
const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container');
window.scrollTo({ top: 0 });
body.style.overflow = 'hidden';
let animation1, animation2;
let preventScroll;
let noOfBannersInViewport = 0;
let finalArr = [];
if (isMobile) {
    [animation1, animation2] = ['fade-in-left', 'fade-in-right'];
    finalArr = [...Array(valks.length).keys()];
}
else {
    [animation1, animation2] = ['fade-in-up', 'fade-in-down'];
    const scrollVal = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2;
    mainContainer.scroll({ left: scrollVal });
    preventScroll = () => { mainContainer.scroll({ left: scrollVal }); };
    mainContainer.addEventListener('scroll', preventScroll);
    noOfBannersInViewport = Math.ceil((window.innerWidth + Math.floor(window.innerWidth / 100)) / 100) + 1;
    const noOfBannersNotInViewport = valks.length - noOfBannersInViewport;
    const noOfBannersLeftOfViewport = Math.round(noOfBannersNotInViewport / 2);
    const bannerIndicesInDektopViewport = [...Array(noOfBannersInViewport).keys()].map((e) => { return e + noOfBannersLeftOfViewport; });
    const bannerLength = bannerIndicesInDektopViewport.length;
    for (let i = 0; i < bannerLength; i++) {
        const randomIndex = Math.floor(Math.random() * bannerIndicesInDektopViewport.length);
        finalArr.push(bannerIndicesInDektopViewport[randomIndex]);
        bannerIndicesInDektopViewport.splice(bannerIndicesInDektopViewport.indexOf(bannerIndicesInDektopViewport[randomIndex]), 1);
    }
}
function load(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}
const interval = 300 - noOfBannersInViewport * 5;
let time = 0;
function fadeAnim(item, fade) {
    setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add(fade);
        setTimeout(() => { item.classList.remove(fade); }, 1990);
    }, time);
    time += interval;
}
const url = [];
const mainStylesheet = document.styleSheets[1].cssRules;
for (const cssRule of mainStylesheet) {
    if ('style' in cssRule && 'background-image' in cssRule.style && cssRule.style.backgroundImage.includes('url')) {
        url.push('assets' + cssRule.style.backgroundImage.substring(7).slice(0, -2));
    }
}
const cover = document.querySelector('#cover');
const progressBar = document.querySelector('#progress-bar');
const progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.querySelector('#meter');
const banners = document.querySelectorAll('.banner');
let done = 0, progressInPixels = 0;
url.forEach((link) => {
    load(link).then(() => {
        done += 1;
        const percentDone = Math.round(done / url.length * 100) / 100;
        const fillPixels = Math.round(percentDone * progressBarWidthInPixels);
        while (meter.style.width != `${fillPixels}px`) {
            progressInPixels += 1;
            meter.style.width = `${progressInPixels}px`;
        }
        if (done == valks.length) {
            body.style.overflow = 'auto';
            cover.classList.add('fade');
            setTimeout(() => { cover.remove(); }, 800);
            finalArr.forEach((_, index) => {
                if (index % 2 == 0) {
                    fadeAnim(banners[finalArr[index]], animation1);
                }
                else {
                    fadeAnim(banners[finalArr[index]], animation2);
                }
            });
            if (!isMobile) {
                banners.forEach((_, index) => { if (!finalArr.includes(index))
                    banners[index].classList.remove('hidden'); });
                setTimeout(() => { mainContainer.removeEventListener('scroll', preventScroll); }, noOfBannersInViewport * interval);
            }
        }
    });
});
let originalText, previousText;
function changeText(deez) {
    for (let i = 0; i < Object.keys(signetSummary).length; i++) {
        if (signetSummary[i].signets.includes(deez.textContent) ||
            signetSummary[i].signets == deez.textContent) {
            previousText = deez;
            originalText = deez.textContent;
            deez.textContent = signetSummary[i].summary;
        }
    }
}
function revertText(deez) {
    deez.textContent = originalText;
    originalText = null;
}
let summOnHover;
if (isMobile) {
    summOnHover = (signets) => {
        signets.forEach((signet) => {
            signet.addEventListener('mouseover', function () {
                if (originalText != null && previousText != this) {
                    revertText(previousText);
                    changeText(this);
                }
                else if (originalText == null) {
                    changeText(this);
                }
                else if (previousText == this) {
                    revertText(previousText);
                }
            });
        });
    };
    guideContent.style.width = `${window.innerWidth}px`;
    guideContent.style.height = `${window.innerHeight}px`;
    guideContent.style.transform = 'translateX(-50%)';
}
else {
    summOnHover = (signets) => {
        signets.forEach((signet) => {
            signet.addEventListener('mouseover', function () { changeText(this); });
            signet.addEventListener('mouseout', function () { if (originalText != null)
                revertText(this); });
        });
    };
    guideContent.style.width = '600px';
    guideContent.style.height = '800px';
    guideContent.style.border = '3px solid rgba(255, 255, 255, 0.5)';
    guideContent.style.transform = 'translate(-50%, 15%)';
}
const topButton = document.querySelector('#goToTop');
const closeButton = document.querySelector('#close');
function hide() {
    guideContainer.classList.remove('bg-fade-in');
    guideContainer.classList.add('bg-fade-out');
    if (isMobile) {
        guideContent.classList.remove('guide-entry-mobile');
        guideContent.classList.add('guide-exit-mobile');
    }
    else {
        guideContent.classList.remove('guide-entry-desktop');
        guideContent.classList.add('guide-exit-desktop');
    }
    closeButton.style.visibility = 'hidden';
    topButton.style.visibility = 'hidden';
    setTimeout(() => {
        guideContent.innerHTML = '';
        guideContainer.style.display = 'none';
    }, 450);
}
closeButton.addEventListener('click', () => { hide(); });
guideContainer.addEventListener('click', () => { hide(); });
guideContent.addEventListener('click', (e) => { e.stopPropagation(); });
banners.forEach((banner) => {
    banner.addEventListener('click', function () {
        buildGuideContent(this);
        guideContent.scrollTo({ top: 0 });
        guideContainer.classList.remove('bg-fade-out');
        guideContainer.classList.add('bg-fade-in');
        if (isMobile) {
            guideContent.classList.remove('guide-exit-mobile');
            guideContent.classList.add('guide-entry-mobile');
        }
        else {
            guideContent.classList.remove('guide-exit-desktop');
            guideContent.classList.add('guide-entry-desktop');
        }
        const tooltipable = document.querySelectorAll('input');
        tooltipable.forEach((item) => {
            item.addEventListener('click', () => {
                for (const otherItem of tooltipable) {
                    if (otherItem != item)
                        otherItem.checked = false;
                }
            });
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => { e.preventDefault(); });
            anchor.addEventListener('click', function () {
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
        function highlightAdjacentMergedCell(row, bool) {
            if (row.innerHTML.match(/<\/td>/g).length == 1 ||
                (row.innerHTML.match(/"temp"|"noted"/) && !(row.innerHTML.includes('rowspan')))) {
                const parentChildren = row.parentNode.children;
                for (let i = 0; i < parentChildren.length; i++) {
                    if (parentChildren[i].innerHTML.includes('rowspan')) {
                        let j;
                        parentChildren[i].children[0].hasAttribute('rowspan') ? j = 0 : j = 1;
                        const range = parseInt(parentChildren[i].children[j].getAttribute('rowspan')) - 1;
                        const thisIndex = row.rowIndex;
                        const mergedCellIndex = parentChildren[i].rowIndex;
                        if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
                            if (bool) {
                                parentChildren[i].children[j].classList.add('table-cell-hover');
                            }
                            else {
                                parentChildren[i].children[j].classList.remove('table-cell-hover');
                            }
                        }
                    }
                }
            }
        }
        function notedCell(row, removee, addee) {
            for (let i = 0; i < row.children.length; i++) {
                if (row.children[i].classList.contains(removee)) {
                    row.children[i].classList.remove(removee);
                    row.children[i].classList.add(addee);
                }
            }
        }
        function highlightInvolvedRows(row, bool) {
            const mergeSize = parseInt(row.getAttribute('rowspan')) - 1;
            const cellIndex = row.parentNode.rowIndex;
            for (let i = cellIndex; i < cellIndex + mergeSize; i++) {
                if (bool) {
                    row.parentNode.parentNode.children[i].classList.add('table-cell-hover');
                    notedCell(row.parentNode.parentNode.children[i], 'noted', 'temp');
                }
                else {
                    row.parentNode.parentNode.children[i].classList.remove('table-cell-hover');
                    notedCell(row.parentNode.parentNode.children[i], 'temp', 'noted');
                }
            }
        }
        setTimeout(() => {
            document.querySelectorAll('input[type="checkbox"]:not(#emblem input[type="checkbox"])').forEach(checkbox => {
                checkbox.addEventListener('mouseover', function () {
                    this.parentNode.previousElementSibling.style.filter = 'brightness(50%)';
                    this.parentNode.previousElementSibling.style.transition = '0.3s';
                });
                checkbox.addEventListener('mouseout', function () {
                    this.parentNode.previousElementSibling.style.filter = 'unset';
                    this.parentNode.previousElementSibling.style.transition = '0.2s';
                });
            });
            document.querySelectorAll('tr:not(thead tr)').forEach(row => {
                row.addEventListener('mouseover', function () {
                    this.classList.add('table-cell-hover');
                    notedCell(this, 'noted', 'temp');
                    highlightAdjacentMergedCell(this, true);
                });
                row.addEventListener('mouseout', function () {
                    this.classList.remove('table-cell-hover');
                    notedCell(this, 'temp', 'noted');
                    highlightAdjacentMergedCell(this, false);
                });
            });
            document.querySelectorAll('td[rowspan]').forEach(cell => {
                cell.addEventListener('mouseover', function () { highlightInvolvedRows(this, true); });
                cell.addEventListener('mouseout', function () { highlightInvolvedRows(this, false); });
            });
            closeButton.style.visibility = 'visible';
            closeButton.style.top = `${guideContent.getBoundingClientRect().top + 15}px`;
            closeButton.style.left = `${guideContent.getBoundingClientRect().right - 60}px`;
            topButton.style.top = `${guideContent.getBoundingClientRect().bottom - 60}px`;
            topButton.style.left = `${guideContent.getBoundingClientRect().right - 60}px`;
        }, 500);
        const signets = document.querySelectorAll('#main-tbl td, #secondary-tbl td, #transitional-tbl td');
        summOnHover(signets);
        guideContent.addEventListener('scroll', function () {
            if (guideContent.scrollTop > 700) {
                topButton.style.visibility = 'visible';
                if (window.innerWidth <= 600)
                    topButton.style.top = window.innerHeight - 60 + "px";
            }
            else {
                topButton.style.visibility = 'hidden';
            }
        });
        topButton.addEventListener('click', () => { guideContent.scroll({ top: 0, behavior: 'smooth' }); });
    });
});

import { valks } from './guide.js';
import { signetSummary } from './data.js';
import { guideContainer, guideContent, buildGuideContent } from './build.js';
const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container');
const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;
window.scrollTo({ top: 0 });
body.style.overflow = 'hidden';
function load(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}
let time = 0;
function fadeAnim(item, fade) {
    setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add(fade);
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
        while (meter.style.width !== `${fillPixels}px`) {
            progressInPixels += 1;
            meter.style.width = `${progressInPixels}px`;
        }
        if (done === url.length) {
            body.style.overflow = 'auto';
            cover.classList.add('fade');
            setTimeout(() => { cover.remove(); }, 1000);
            finalArr.forEach((_, index) => {
                if (index % 2 === 0) {
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
function highlightAdjacentMergedCell(row, bool) {
    if (row.innerHTML.match(/<\/td>/g).length === 1 ||
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
let originalText, previousText;
function changeText(deez) {
    for (let i = 0; i < Object.keys(signetSummary).length; i++) {
        if (signetSummary[i].signets.includes(deez.textContent) ||
            signetSummary[i].signets === deez.textContent) {
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
let animation1, animation2;
let preventScroll;
let noOfBannersInViewport = 0;
let finalArr = [];
let summOnHover;
if (isMobile) {
    [animation1, animation2] = ['fade-in-left', 'fade-in-right'];
    finalArr = [...Array(valks.length).keys()];
    summOnHover = (signets) => {
        signets.forEach((signet) => {
            signet.addEventListener('mouseover', function () {
                if (originalText !== null && previousText !== this) {
                    revertText(previousText);
                    changeText(this);
                }
                else if (originalText === null) {
                    changeText(this);
                }
                else if (previousText === this) {
                    revertText(previousText);
                }
            });
        });
    };
    guideContent.classList.add('mobile');
}
else {
    [animation1, animation2] = ['fade-in-up', 'fade-in-down'];
    const scrollVal = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2;
    mainContainer.scroll({ left: scrollVal });
    preventScroll = () => { mainContainer.scroll({ left: scrollVal }); };
    mainContainer.addEventListener('scroll', preventScroll);
    noOfBannersInViewport = Math.ceil((deviceWidth + Math.floor(deviceWidth / 100)) / 100) + 1;
    const noOfBannersNotInViewport = valks.length - noOfBannersInViewport;
    const noOfBannersLeftOfViewport = Math.round(noOfBannersNotInViewport / 2);
    const bannerIndicesInDektopViewport = [...Array(noOfBannersInViewport).keys()].map((e) => { return e + noOfBannersLeftOfViewport; });
    const bannerLength = bannerIndicesInDektopViewport.length;
    for (let i = 0; i < bannerLength; i++) {
        const randomIndex = Math.floor(Math.random() * bannerIndicesInDektopViewport.length);
        finalArr.push(bannerIndicesInDektopViewport[randomIndex]);
        bannerIndicesInDektopViewport.splice(bannerIndicesInDektopViewport.indexOf(bannerIndicesInDektopViewport[randomIndex]), 1);
    }
    summOnHover = (signets) => {
        signets.forEach((signet) => {
            signet.addEventListener('mouseover', function () { changeText(this); });
            signet.addEventListener('mouseout', function () { if (originalText !== null)
                revertText(this); });
        });
    };
    guideContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    guideContent.classList.add('desktop');
}
const interval = 300 - noOfBannersInViewport * 5;
const topButton = document.querySelector('#goToTop');
const closeButton = document.querySelector('#close');
const mobileUpperBanners = valks.length - 1 - Math.floor(deviceHeight / (deviceWidth / 4));
let currentBanner;
function hide() {
    body.style.overflow = 'auto';
    guideContainer.classList.remove('bg-fade-in');
    guideContainer.classList.add('bg-fade-out');
    guideContent.innerHTML = '';
    if (isMobile) {
        currentBanner.children[0].style.filter = null;
        currentBanner.children[1].children[0].style.color = null;
        guideContent.classList.remove('guide-bot-entry-mobile', 'guide-top-entry-mobile', 'upper', 'lower');
        if (Array.from(currentBanner.parentNode.children).indexOf(currentBanner) > mobileUpperBanners) {
            guideContent.classList.add('guide-bot-exit-mobile');
        }
        else {
            guideContent.classList.add('guide-top-exit-mobile');
        }
        document.querySelectorAll('.vertical-text').forEach((text) => { text.style.opacity = '1'; });
        for (const cssRule of mainStylesheet) {
            if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
                cssRule.style.opacity = '0';
                cssRule.style.animation = '';
            }
        }
    }
    else {
        guideContent.classList.remove('guide-entry-desktop');
        guideContent.classList.add('guide-exit-desktop');
    }
    closeButton.style.visibility = 'hidden';
    topButton.style.visibility = 'hidden';
    setTimeout(() => { guideContainer.style.display = 'none'; }, 450);
}
closeButton.addEventListener('click', () => { hide(); });
guideContainer.addEventListener('click', () => { hide(); });
guideContent.addEventListener('click', (e) => { e.stopPropagation(); });
function contentFade(topOffset, bottomOffset, direction, psuedoDirection) {
    for (const cssRule of mainStylesheet) {
        if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
            cssRule.style.opacity = '1';
            cssRule.style.animation = `fadein${psuedoDirection} 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19) 0.1s forwards`;
            if (cssRule.selectorText === '#guide-container::before') {
                cssRule.style.top = topOffset;
                cssRule.style.backgroundImage = `linear-gradient(to ${direction}, rgba(0, 0, 0, 0.7), transparent)`;
            }
            if (cssRule.selectorText === '#guide-container::after')
                cssRule.style.bottom = bottomOffset;
        }
    }
}
banners.forEach((banner) => {
    banner.addEventListener('click', function () {
        const index = Array.from(this.parentNode.children).indexOf(this);
        buildGuideContent(index);
        guideContent.scrollTo({ top: 0 });
        guideContainer.classList.remove('bg-fade-out');
        guideContainer.classList.add('bg-fade-in');
        let closeButtonOffsetTop, topButtonOffsetTop;
        if (isMobile) {
            body.style.overflow = 'hidden';
            guideContent.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile');
            let offset = 0;
            if (index > mobileUpperBanners) {
                guideContent.classList.add('guide-bot-entry-mobile', 'lower');
                offset = this.offsetTop + this.offsetHeight - deviceHeight;
                closeButtonOffsetTop = 0;
                topButtonOffsetTop = deviceHeight - deviceWidth / 4;
                contentFade('calc(100vh - 25vw)', '25vw', 'bottom', 'up');
            }
            else {
                guideContent.classList.add('guide-top-entry-mobile', 'upper');
                offset = this.offsetTop;
                closeButtonOffsetTop = deviceHeight - (deviceHeight - deviceWidth / 4);
                topButtonOffsetTop = deviceHeight;
                contentFade('calc(25vw - 5px)', '0', 'top', 'down');
            }
            window.scroll({ top: offset, behavior: 'smooth' });
        }
        else {
            guideContent.classList.remove('guide-exit-desktop');
            guideContent.classList.add('guide-entry-desktop');
        }
        const tooltipable = document.querySelectorAll('input');
        tooltipable.forEach((item) => {
            item.addEventListener('click', () => {
                for (const otherItem of tooltipable) {
                    if (otherItem !== item)
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
        setTimeout(() => {
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
            const setCloseButtonPos = (topOffset, leftOffset) => {
                closeButton.style.visibility = 'visible';
                closeButton.style.top = `${topOffset + 15}px`;
                closeButton.style.left = `${leftOffset - 60}px`;
            };
            if (isMobile) {
                guideContainer.classList.remove('hidden');
                currentBanner = this;
                this.children[0].style.filter = 'brightness(70%) blur(0.3px)';
                this.children[1].children[0].style.color = 'white';
                document.querySelectorAll('.vertical-text').forEach((text) => {
                    if (text.innerText !== this.innerText)
                        text.style.opacity = '0';
                });
                setCloseButtonPos(closeButtonOffsetTop, deviceWidth);
                topButton.style.top = `${topButtonOffsetTop - 60}px`;
                topButton.style.left = `${deviceWidth - 60}px`;
            }
            else {
                const guidePos = guideContent.getBoundingClientRect();
                setCloseButtonPos(guidePos.top, guidePos.right);
                topButton.style.top = `${guidePos.bottom - 60}px`;
                topButton.style.left = `${guidePos.right - 60}px`;
            }
        }, 600);
        const signets = document.querySelectorAll('#main-tbl td, #secondary-tbl td, #transitional-tbl td');
        summOnHover(signets);
        guideContent.addEventListener('scroll', function () {
            topButton.style.visibility = guideContent.scrollTop > 700 ? 'visible' : 'hidden';
        });
        topButton.addEventListener('click', () => { guideContent.scroll({ top: 0, behavior: 'smooth' }); });
    });
});

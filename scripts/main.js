import { valks } from './guide.js';
import { isMobile, signetSummary } from './data.js';
import { mainContainer, guideContainer } from './build.js';
const closeButton = document.querySelector('#close');
const body = document.querySelector('body');
let deviceWidth = window.innerWidth;
let deviceHeight = window.innerHeight;
let guideEntryAnim, guideExitAnim;
let topPos, bottomPos;
const setCloseButtonPos = (top, right) => {
    closeButton.style.top = `${top}px`;
    closeButton.style.left = `${right}px`;
};
const topButton = document.querySelector('#goToTop');
let rightPos = deviceWidth / 2 + 243;
let prevHeight = window.outerHeight;
window.addEventListener('resize', () => {
    let outHeight = window.outerHeight;
    deviceWidth = window.innerWidth;
    deviceHeight = window.innerHeight;
    rightPos = deviceWidth / 2 + 243;
    if ((outHeight >= 1030 && outHeight <= 1050) ||
        ((prevHeight <= 1040 && outHeight > 1040) || (prevHeight > 1040 && outHeight <= 1040))) {
        hide();
    }
    if (outHeight > 1040) {
        [guideEntryAnim, guideExitAnim] = ['guide-entry-desktop-n', 'guide-exit-desktop-n'];
        [topPos, bottomPos] = [135, 866];
    }
    else {
        [guideEntryAnim, guideExitAnim] = ['guide-entry-desktop-s', 'guide-exit-desktop-s'];
        [topPos, bottomPos] = [15, deviceHeight - 60];
    }
    setCloseButtonPos(topPos, rightPos);
    topButton.style.top = `${bottomPos}px`;
    topButton.style.left = `${rightPos}px`;
    prevHeight = outHeight;
});
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
        setTimeout(() => { item.classList.remove(fade); }, 1990);
    }, time);
    time += interval;
}
const banners = document.querySelectorAll('.banner');
const url = [];
url.push(window.getComputedStyle(body).getPropertyValue('background-image').substring(5).slice(0, -2));
banners.forEach((banner) => url.push(window.getComputedStyle(banner.children[0]).getPropertyValue('background-image').substring(5).slice(0, -2)));
const cover = document.querySelector('#cover');
const progressBar = document.querySelector('#progress-bar');
const progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.querySelector('#meter');
let done = 0, progressInPixels = 0;
let once = true;
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
    }).catch(() => {
        if (once) {
            const errMsg = document.createElement('p');
            errMsg.setAttribute('id', 'error-msg');
            errMsg.innerText = 'An error occured. Please reload the page.';
            const reloadBtn = document.createElement('button');
            reloadBtn.setAttribute('id', 'refresh');
            reloadBtn.setAttribute('onclick', 'window.location.reload();');
            const span = document.createElement('span');
            span.classList.add('material-icons');
            span.innerText = 'refresh';
            reloadBtn.appendChild(span);
            cover.innerHTML = '';
            cover.classList.add('f-col');
            cover.appendChild(errMsg);
            cover.appendChild(reloadBtn);
            once = false;
        }
    });
});
function highlightAdjacentMergedCell(row, bool) {
    if (row.innerHTML.match(/<\/td>/g).length === 1 && !(row.innerHTML.includes('rowspan')) ||
        (row.innerHTML.match(/"temp"|"noted"/))) {
        const parentChildren = row.parentNode.children;
        for (let i = 0; i < parentChildren.length; i++) {
            if (parentChildren[i].innerHTML.includes('rowspan')) {
                let j;
                parentChildren[i].children[0].hasAttribute('rowspan') ? j = 0 : j = 1;
                const range = parseInt(parentChildren[i].children[j].getAttribute('rowspan')) - 1;
                const thisIndex = row.rowIndex;
                const mergedCellIndex = parentChildren[i].rowIndex;
                if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
                    if (bool)
                        parentChildren[i].children[j].classList.add('table-cell-hover');
                    else
                        parentChildren[i].children[j].classList.remove('table-cell-hover');
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
function highlightRow() {
    this.classList.add('table-cell-hover');
    notedCell(this, 'noted', 'temp');
    highlightAdjacentMergedCell(this, true);
}
const rowsExceptHeader = document.querySelectorAll('tr:not(thead tr):not(.gear-tbl tr)');
rowsExceptHeader.forEach((row) => {
    row.addEventListener('mouseout', function () {
        this.classList.remove('table-cell-hover');
        notedCell(this, 'temp', 'noted');
        highlightAdjacentMergedCell(this, false);
    });
});
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
const highlightRows = function () { highlightInvolvedRows(this, true); };
const cellsWithRowspan = document.querySelectorAll('td[rowspan]');
cellsWithRowspan.forEach((cell) => cell.addEventListener('mouseout', function () { highlightInvolvedRows(this, false); }));
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
    anchor.addEventListener('click', (e) => e.preventDefault());
    anchor.addEventListener('click', function () {
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
let originalText = null, previousText = null;
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
                if (originalText !== null && previousText !== null && !this.textContent.includes('(Nexus)')) {
                    revertText(previousText);
                    changeText(this);
                }
                else if (originalText === null) {
                    changeText(this);
                }
                else {
                    revertText(previousText);
                }
            });
        });
    };
    guideContainer.classList.add('hidden');
}
else {
    [animation1, animation2] = ['fade-in-up', 'fade-in-down'];
    const scrollVal = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2;
    mainContainer.scroll({ left: scrollVal });
    preventScroll = () => mainContainer.scroll({ left: scrollVal });
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
    if (window.outerHeight > 1040) {
        [guideEntryAnim, guideExitAnim] = ['guide-entry-desktop-n', 'guide-exit-desktop-n'];
        [topPos, bottomPos] = [135, 866];
    }
    else {
        [guideEntryAnim, guideExitAnim] = ['guide-entry-desktop-s', 'guide-exit-desktop-s'];
        [topPos, bottomPos] = [15, deviceHeight - 60];
    }
}
summOnHover(document.querySelectorAll('.main-tbl td, .secondary-tbl td, .transitional-tbl td'));
const interval = 300 - noOfBannersInViewport * 5;
const guideContents = document.querySelectorAll('.guide-content');
const goToTop = (e) => {
    const dis = e.currentTarget.currentGuide;
    guideContents[Array.from(dis.parentNode.children).indexOf(dis)].scroll({ top: 0, behavior: 'smooth' });
};
const buttonVisibility = (e) => topButton.style.visibility = e.currentTarget.scrollTop > 700 ? 'visible' : 'hidden';
const mainStylesheet = document.styleSheets[1].cssRules;
const mobileUpperBanners = valks.length - 1 - Math.floor(deviceHeight / (deviceWidth / 4));
let currentBanner;
let currentGuide;
function hide() {
    body.style.overflow = 'auto';
    body.style.pointerEvents = 'none';
    guideContainer.classList.remove('bg-fade-in');
    guideContainer.classList.add('bg-fade-out');
    if (isMobile) {
        currentBanner.children[0].style.filter = null;
        currentBanner.children[1].children[0].style.color = null;
        currentGuide.classList.remove('guide-bot-entry-mobile', 'guide-top-entry-mobile', 'upper');
        if (Array.from(currentBanner.parentNode.children).indexOf(currentBanner) > mobileUpperBanners) {
            currentGuide.classList.add('guide-bot-exit-mobile');
        }
        else {
            currentGuide.classList.add('guide-top-exit-mobile');
        }
        document.querySelectorAll('.vertical-text').forEach((text) => text.style.opacity = '1');
        for (const cssRule of mainStylesheet) {
            if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
                cssRule.style.opacity = '0';
                cssRule.style.animation = '';
            }
        }
        if (previousText !== null && previousText.textContent !== '')
            revertText(previousText);
    }
    else {
        if (currentGuide) {
            currentGuide.classList.remove(guideEntryAnim);
            currentGuide.classList.add(guideExitAnim);
        }
    }
    closeButton.style.visibility = 'hidden';
    topButton.style.visibility = 'hidden';
    setTimeout(() => {
        body.style.pointerEvents = 'auto';
        guideContainer.classList.add('no-display');
        if (currentGuide) {
            currentGuide.classList.add('no-display');
            currentGuide.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile', guideEntryAnim, 'guide-exit-desktop-n', 'guide-exit-desktop-s');
        }
    }, 450);
    rowsExceptHeader.forEach((row) => row.removeEventListener('mouseover', highlightRow));
    cellsWithRowspan.forEach((cell) => cell.removeEventListener('mouseover', highlightRows));
}
closeButton.addEventListener('click', () => hide());
guideContainer.addEventListener('click', () => hide());
guideContents.forEach(guideContent => guideContent.addEventListener('click', (e) => e.stopPropagation()));
function contentFade(afterOffset, direction, psuedoDirection) {
    const beforeOffset = 'calc(25vw - 5px)';
    for (const cssRule of mainStylesheet) {
        if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
            cssRule.style.opacity = '1';
            cssRule.style.animation = `fadein${psuedoDirection} 0.6s ease-out forwards`;
            if (cssRule.selectorText === '#guide-container::before') {
                if (direction === 'top') {
                    cssRule.style.bottom = null;
                    cssRule.style.top = beforeOffset;
                }
                else {
                    cssRule.style.top = null;
                    cssRule.style.bottom = beforeOffset;
                }
                cssRule.style.backgroundImage = `linear-gradient(to ${direction}, rgba(0, 0, 0, 0.7), transparent)`;
            }
            if (cssRule.selectorText === '#guide-container::after')
                cssRule.style.bottom = afterOffset;
        }
    }
}
let psuedoStyles;
banners.forEach((banner) => {
    banner.addEventListener('click', function () {
        body.style.pointerEvents = 'none';
        const index = Array.from(this.parentNode.children).indexOf(this);
        currentGuide = guideContents[index];
        guideContainer.classList.remove('bg-fade-out', 'no-display');
        guideContainer.classList.add('bg-fade-in');
        let closeButtonOffsetTop, topButtonOffsetTop;
        if (isMobile) {
            body.style.overflow = 'hidden';
            currentGuide.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile');
            let offset = 0;
            if (index > mobileUpperBanners) {
                currentGuide.classList.add('guide-bot-entry-mobile');
                psuedoStyles = ['25vw', 'bottom', 'up'];
                offset = this.offsetTop + this.offsetHeight - deviceHeight;
                closeButtonOffsetTop = 15;
                topButtonOffsetTop = deviceHeight - deviceWidth / 4 - 60;
            }
            else {
                currentGuide.classList.add('guide-top-entry-mobile', 'upper');
                psuedoStyles = ['0', 'top', 'down'];
                offset = this.offsetTop;
                closeButtonOffsetTop = deviceHeight - (deviceHeight - deviceWidth / 4) + 15;
                topButtonOffsetTop = deviceHeight - 60;
            }
            window.scroll({ top: offset, behavior: 'smooth' });
        }
        else {
            currentGuide.classList.remove(guideExitAnim, 'no-display');
            currentGuide.classList.add(guideEntryAnim);
        }
        setTimeout(() => {
            body.style.pointerEvents = 'auto';
            rowsExceptHeader.forEach((row) => row.addEventListener('mouseover', highlightRow));
            cellsWithRowspan.forEach((cell) => cell.addEventListener('mouseover', highlightRows));
            closeButton.style.visibility = 'visible';
            if (isMobile) {
                contentFade(...psuedoStyles);
                guideContainer.classList.remove('hidden', 'no-display');
                currentGuide.classList.remove('no-display');
                currentBanner = this;
                this.children[0].style.filter = 'brightness(90%) blur(0.3px)';
                this.children[1].children[0].style.color = 'white';
                document.querySelectorAll('.vertical-text').forEach((text) => {
                    if (text.innerText !== this.innerText)
                        text.style.opacity = '0';
                });
                setCloseButtonPos(closeButtonOffsetTop, deviceWidth - 60);
                topButton.style.top = `${topButtonOffsetTop}px`;
                topButton.style.left = `${deviceWidth - 60}px`;
            }
            else {
                setCloseButtonPos(topPos, rightPos);
                topButton.style.top = `${bottomPos}px`;
                topButton.style.left = `${rightPos}px`;
            }
        }, 600);
        currentGuide.addEventListener('scroll', buttonVisibility);
        topButton.addEventListener('click', goToTop);
        topButton.currentGuide = currentGuide;
        currentGuide.scrollTo({ top: 0 });
    });
});

import { valks } from './guide.js';
import { signetSummary } from './data.js';
const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container');
const banners = document.querySelectorAll('.banner');
const topButton = document.querySelector('#goToTop');
window.scrollTo({ top: 0 });
body.style.overflow = 'hidden';
const subEquation = (window.innerWidth + Math.floor(window.innerWidth / 100)) / 100;
let noOfBannersInViewport, scrollVal;
if (isMobile) {
    noOfBannersInViewport = Math.ceil(subEquation) + 0;
    scrollVal = 0;
}
else {
    noOfBannersInViewport = Math.ceil(subEquation) + 1;
    scrollVal = (mainContainer.scrollWidth - mainContainer.offsetWidth) / 2;
    mainContainer.scroll({ left: scrollVal });
}
const preventScroll = () => { mainContainer.scroll({ left: scrollVal }); };
mainContainer.addEventListener('scroll', preventScroll);
const noOfBannersNotInViewport = valks.length - noOfBannersInViewport;
let finalArr;
if (isMobile) {
    finalArr = [...Array(noOfBannersInViewport).keys()];
}
else {
    finalArr = [];
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
url.push(window.getComputedStyle(body).getPropertyValue('background-image').substring(5).slice(0, -2));
banners.forEach((banner) => url.push(window.getComputedStyle(banner.children[0]).getPropertyValue('background-image').substring(5).slice(0, -2)));
const cover = document.querySelector('#cover');
const progressBar = document.querySelector('#progress-bar');
const progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.querySelector('#meter');
let done = 0, progressInPixels = 0;
url.forEach((link) => {
    load(link).then(() => {
        done += 1;
        const percentDone = Math.round(done / valks.length * 100) / 100;
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
                    fadeAnim(banners[finalArr[index]], 'fade-in-up');
                }
                else {
                    fadeAnim(banners[finalArr[index]], 'fade-in-down');
                }
            });
            banners.forEach((_, index) => { if (!finalArr.includes(index))
                banners[index].classList.remove('hidden'); });
            setTimeout(() => { mainContainer.removeEventListener('scroll', preventScroll); }, noOfBannersInViewport * interval);
        }
    });
});
let previousOffset;
function collapse(content) {
    const guideContainer = content.nextElementSibling;
    if (guideContainer.style.minWidth) {
        guideContainer.style.minWidth = null;
        guideContainer.style.opacity = 0;
        guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.1s';
        setTimeout(() => { guideContainer.scrollTop = 0; }, 100);
        content.children[0].style.filter = null;
    }
    else {
        content.children[0].style.filter = 'brightness(70%)';
        let width, timeout, phoneOffset;
        if (window.innerWidth <= 600) {
            width = window.innerWidth, timeout = 0, phoneOffset = 100;
        }
        else {
            width = 600, timeout = 300, phoneOffset = 0;
        }
        guideContainer.style.minWidth = width + 'px';
        guideContainer.style.opacity = 1;
        guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.7s 0.2s';
        let scrollOffset = content.offsetLeft;
        if (previousOffset < content.offsetLeft &&
            mainContainer.scrollWidth != valks.length * 100) {
            scrollOffset -= width;
        }
        setTimeout(() => {
            if (content.offsetLeft + 100 > mainContainer.scrollWidth - window.innerWidth &&
                window.innerWidth <= 600 && mainContainer.scrollWidth == valks.length * 100) {
                const travelPixels = content.getBoundingClientRect().right;
                for (let i = 1; i <= travelPixels; i++) {
                    setTimeout(() => {
                        mainContainer.scroll({ left: scrollOffset + phoneOffset - travelPixels + i });
                    }, i * 200 / travelPixels);
                }
            }
            else {
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
banners.forEach((item) => {
    item.addEventListener('click', function () {
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
    item.nextElementSibling.addEventListener('scroll', function () {
        if (item.nextElementSibling.scrollTop > 700) {
            topButton.style.visibility = 'visible';
            if (window.innerWidth <= 600)
                topButton.style.top = window.innerHeight - 60 + "px";
        }
        else {
            topButton.style.visibility = 'hidden';
        }
    });
});
const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.emblem input[type="checkbox"])').forEach(checkbox => {
    checkbox.addEventListener('mouseover', function () {
        this.parentNode.previousElementSibling.style.filter = 'brightness(50%)';
        this.parentNode.previousElementSibling.style.transition = '0.3s';
    });
    checkbox.addEventListener('mouseout', function () {
        this.parentNode.previousElementSibling.style.filter = 'unset';
        this.parentNode.previousElementSibling.style.transition = '0.2s';
    });
});
const tooltipable = document.querySelectorAll('input');
tooltipable.forEach((item) => {
    item.addEventListener('click', function () {
        for (const otherItem of tooltipable) {
            if (otherItem != item)
                otherItem.checked = false;
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) { e.preventDefault(); });
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
document.querySelectorAll('td[rowspan]').forEach(cell => {
    cell.addEventListener('mouseover', function () { highlightInvolvedRows(this, true); });
    cell.addEventListener('mouseout', function () { highlightInvolvedRows(this, false); });
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
const signets = document.querySelectorAll('.main-tbl td, .secondary-tbl td, .transitional-tbl td');
if (isMobile) {
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
}
else {
    signets.forEach((signet) => {
        signet.addEventListener('mouseover', function () { changeText(this); });
        signet.addEventListener('mouseout', function () { if (originalText != null)
            revertText(this); });
    });
}
topButton.addEventListener('click', function () {
    for (const item of banners) {
        if (item.classList.contains('active')) {
            item.nextElementSibling.scroll({ top: 0, behavior: 'smooth' });
            let offsetLeft;
            if (isMobile) {
                offsetLeft = item.nextElementSibling.offsetLeft;
            }
            else {
                offsetLeft = item.nextElementSibling.offsetLeft - 100;
            }
            mainContainer.scroll({ left: offsetLeft, behavior: 'smooth' });
        }
    }
});

const cover = document.getElementById('cover');
const progressBar = document.getElementById('progress-bar');
const progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.getElementById('meter');
const accordion = document.getElementById('coll-container');
const accordionItems = document.querySelectorAll('.collapsible');
const tooltipable = document.querySelectorAll('input');
const rows = document.querySelectorAll('tr:not(thead tr)');
const mergedCellRows = document.querySelectorAll('td[rowspan]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const signets = document.querySelectorAll('.main-tbl td, .secondary-tbl td, .transitional-tbl td');
const topButton = document.querySelector('#goToTop');
const images = [], url = [];
let done = 0, timeout = 0;
let progressInPixels = 0;
let originalText = null, previousText;
let starto = false;
// execute animation after all images are loaded
function load(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}
function fadeAnim(item, fade) {
    setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add(fade);
        item.children[1].children[0].classList.add('vertical-text-anim');
    }, timeout);
    timeout += 100;
}
document.getElementsByTagName('html')[0].style.overflow = 'hidden';
accordionItems.forEach(item => { images.push(item.children[0]) });
images.forEach(img => { url.push(window.getComputedStyle(img).getPropertyValue('background-image').substring(5).slice(0,-2)) });
url.forEach(link => {
    load(link).then(() => {
        done += 1;
        // progress bar
        let percentDone = Math.round(done / valks.length * 100) / 100;
        let fillPixels = Math.round(percentDone * progressBarWidthInPixels);
        while (meter.style.width != `${fillPixels}px`) {
            progressInPixels += 1;
            meter.style.width = `${progressInPixels}px`;
        }
        if (done == valks.length) { // start animation
            document.getElementsByTagName('html')[0].style.overflow = 'auto';
            cover.classList.add('fade');
            setTimeout(() => { cover.remove() }, 800);
            accordionItems.forEach(item => {
                // fade-in-up/down animation, alternate on each successive button
                if (Array.prototype.indexOf.call(accordion.children, item) % 4 == 0) {
                    fadeAnim(item, 'fade-in-up');
                } else {
                    fadeAnim(item, 'fade-in-down');
                }
            });
        }
    });
});
function collapse(content) {
    let nextDiv = content.nextElementSibling;
    let nextDivChild = nextDiv.lastElementChild;
    nextDiv.scrollTop = 0;
    if (nextDiv.style.minWidth) { // collapse
        nextDiv.style.minWidth = null;
        nextDivChild.style.minWidth = null;
        nextDivChild.style.opacity = 0;
        nextDivChild.style.transition = '0.1s';
    } else { // expand
        nextDivChild.style.opacity = 1;
        nextDivChild.style.transition = '0.7s ease-in';
        if (window.innerWidth <= 600) {
            // set guide width to device width
            nextDiv.style.minWidth = window.innerWidth + 'px';
            nextDivChild.style.minWidth = window.innerWidth + 'px';
            if (starto) {
                window.scroll({
                    top: content.offsetTop,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    accordion.scroll({
                        left: content.offsetLeft + 100,
                        behavior: 'smooth'
                    });
                }, 500);
            }
            
        } else {
            nextDiv.style.minWidth = '600px';
            nextDivChild.style.minWidth = '600px';
            if (starto) {
                setTimeout(() => {
                    let scrollOffset = content.offsetLeft;
                    accordion.scroll({
                        left: scrollOffset,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        }
    }
}
// accordion animation
accordionItems.forEach(item => {
    item.addEventListener('click', function() {
        // collapse previously clicked item
        if (!this.classList.contains('active')) {
            for (coll of accordionItems) {
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
    item.nextElementSibling.addEventListener('scroll', function() {
        if (item.nextElementSibling.scrollTop > 700) {
            topButton.style.visibility = 'visible';
            if (window.innerWidth <= 600) {
                topButton.style.top = window.innerHeight - 60 + "px"
            }
        } else {
            topButton.style.visibility = 'hidden';
        }
    });
});
// support valk avatar transition on hover
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('mouseover', function(){
        this.parentNode.parentNode.children[0].style.filter = 'brightness(50%)';
        this.parentNode.parentNode.children[0].style.transition = '0.3s';
    });
    checkbox.addEventListener('mouseout', function(){
        this.parentNode.parentNode.children[0].style.filter = 'unset';
        this.parentNode.parentNode.children[0].style.transition = '0.2s';
    });
});
// hide previously clicked tooltip
tooltipable.forEach(item => {
    item.addEventListener('click', function() {
        for (otherItem of tooltipable) { if (otherItem != item) otherItem.checked = false }
    });
});
// anchor smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
function highlightAdjacentMergedCell2(row, bool, parentChildren, i, j) {
    // get rowspan value
    let range = parseInt(parentChildren[i].children[j].getAttribute('rowspan')) - 1;
    // get index of selected row and merged cell
    let thisIndex = row.rowIndex;
    let mergedCellIndex = parentChildren[i].rowIndex;
    // check if index is covered within the range of merged cell
    if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
        // apply styles
        if (bool) { parentChildren[i].children[j].classList.add('table-cell-hover') }
        else { parentChildren[i].children[j].classList.remove('table-cell-hover') }
    }
}
function highlightAdjacentMergedCell(row, bool) {
    // check if inner HTML only has 1 pair of td tags
    // in a 2 column table it has 2 td tags per row
    // meaning if a row has one less td tag it either has
    // a missing cell in the row, or a merged cell (this case)
    if (row.innerHTML.match(/<\/td>/g).length == 1 ||
        // for cells with .noted class
       (row.innerHTML.match(/"temp"|"noted"/) && !(row.innerHTML.includes('rowspan')))) {
        // get all rows of its parent table
        let parentChildren = row.parentNode.children;
        // iterate and check if row has a rowspan attribute in the cell of the 2nd column
        for (let i = 0; i < parentChildren.length; i++) {
            if (parentChildren[i].innerHTML.includes('rowspan')) {
                if (parentChildren[i].children[0].hasAttribute('rowspan')) {
                    highlightAdjacentMergedCell2(row, bool, parentChildren, i, 0);
                } else {
                    highlightAdjacentMergedCell2(row, bool, parentChildren, i, 1);
                }
            }
        }
    }
}
function notedCell(row, removee, addee) {
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
rows.forEach(row => {
    row.addEventListener('mouseover', function() {
        this.classList.add('table-cell-hover');
        notedCell(this, 'noted', 'temp');
        highlightAdjacentMergedCell(this, true);
    });
    row.addEventListener('mouseout', function() {
        this.classList.remove('table-cell-hover');
        notedCell(this, 'temp', 'noted');
        highlightAdjacentMergedCell(this, false);
    });
});
function highlightInvolvedRows(row, bool) {
    let mergeSize = parseInt(row.getAttribute('rowspan')) - 1;
    let cellIndex = row.parentNode.rowIndex;
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
mergedCellRows.forEach(cell => {
    cell.addEventListener('mouseover', function() { highlightInvolvedRows(this, true) });
    cell.addEventListener('mouseout', function() { highlightInvolvedRows(this, false) });
});
// change signet name to summary on hover/click
signets.forEach(signet => {
    signet.addEventListener('mouseover', function() {
        for(let i = 0; i < Object.keys(signetSummary).length; i++) {
            if (signetSummary[i].signets.includes(this.textContent) ||
                signetSummary[i].signets == this.textContent) {
                previousText = this;
                originalText = this.textContent;
                this.textContent = signetSummary[i].summary;
            } 
        }
    });
    signet.addEventListener('mouseout', function() {
        if (originalText != null) {
            this.textContent = originalText;
            originalText = null;
        }
    });
});
// go to top of guide
topButton.addEventListener('click', function () {
    for (item of accordionItems) {
        if (item.classList.contains('active')) {
            item.nextElementSibling.scroll({ top: 0, behavior: 'smooth' });
        }
    }
});
// double click accordion items because it somehow can't set transition style directly
for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].click();
    if (i == accordionItems.length - 1) accordionItems[i].click();
}
window.scrollTo({ top: 0 });
starto = true;
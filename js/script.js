const cover = document.getElementById('cover');
const progressBar = document.getElementById('progress-bar');
const progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
const meter = document.getElementById('meter');
const mainContainer = document.getElementById('main-container');
const banners = document.querySelectorAll('.banner');
const tooltipable = document.querySelectorAll('input');
const rows = document.querySelectorAll('tr:not(thead tr)');
const mergedCellRows = document.querySelectorAll('td[rowspan]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.emblem input[type="checkbox"])');
const signets = document.querySelectorAll('.main-tbl td, .secondary-tbl td, .transitional-tbl td');
const topButton = document.querySelector('#goToTop');
const images = [], url = [];
let done = 0, timeout = 0;
let progressInPixels = 0;
let originalText = null, previousText;
let previousOffset;
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
        setTimeout(() => { item.classList.remove(fade) }, 1990);
    }, timeout);
    timeout += 100;
}
document.getElementsByTagName('body')[0].style.overflow = 'hidden';
banners.forEach(item => { images.push(item.children[0]) });
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
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            cover.classList.add('fade');
            setTimeout(() => { cover.remove() }, 800);
            banners.forEach(item => {
                // fade-in-up/down animation, alternate on each successive button
                if (Array.prototype.indexOf.call(mainContainer.children, item) % 4 == 0) {
                    fadeAnim(item, 'fade-in-up');
                } else {
                    fadeAnim(item, 'fade-in-down');
                }
            });
        }
    });
});
function collapse(content) {
    let guideContainer = content.nextElementSibling;
    
    if (guideContainer.style.minWidth) { // collapse
        guideContainer.style.minWidth = null;
        guideContainer.style.opacity = 0;
        guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.1s';
        setTimeout(() => { guideContainer.scrollTop = 0 }, 100);
    } else { // expand
        if (window.innerWidth <= 600) {
            width = window.innerWidth, phoneOffset = 100;
            timeout = 0
        } else {
            width = 600, timeout = 300, phoneOffset = 0;
        }

        guideContainer.style.minWidth = width + 'px';
        guideContainer.style.opacity = 1;
        guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.7s 0.2s';

        if (starto) { // prevent scroll during pre-clicking
            let scrollOffset = content.offsetLeft;
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
                    let travelPixels = content.getBoundingClientRect().right;
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
        }
        previousOffset = content.offsetLeft;
    }
}
// banner animation
banners.forEach(item => {
    item.addEventListener('click', function() {
        // collapse previously clicked item
        if (!this.classList.contains('active')) {
            for (coll of banners) {
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
            if (window.innerWidth <= 600) topButton.style.top = window.innerHeight - 60 + "px";
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
                parentChildren[i].children[0].hasAttribute('rowspan') ? j = 0 : j = 1;
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
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
function changeText(deez) {
    for(let i = 0; i < Object.keys(signetSummary).length; i++) {
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
if (mobileAndTabletCheck()) { // mobile browsers
    signets.forEach(signet => {
        signet.addEventListener('mouseover', function() {
            if (originalText != null && previousText != this) {
                revertText(previousText);
                changeText(this);
            } else if (originalText == null) { changeText(this);
            } else if (previousText == this) { revertText(previousText); }
        });
    });
} else { // desktop browsers
    signets.forEach(signet => {
        signet.addEventListener('mouseover', function() { changeText(this) });
        signet.addEventListener('mouseout', function() { if (originalText != null) revertText(this) });
    });
}

// go to top of guide
topButton.addEventListener('click', function () {
    for (item of banners) {
        if (item.classList.contains('active')) {
            item.nextElementSibling.scroll({ top: 0, behavior: 'smooth' });
            // scroll into view
            let offsetLeft;
            if (mobileAndTabletCheck()) {
                offsetLeft = item.nextElementSibling.offsetLeft;
            } else {
                offsetLeft = item.nextElementSibling.offsetLeft - 100;
            }
            mainContainer.scroll({ left: offsetLeft, behavior: 'smooth' });
        }
    }
});
// double click all banners because it somehow can't set transition style directly
for (let i = 0; i < banners.length; i++) {
    banners[i].click();
    if (i == banners.length - 1) banners[i].click();
}
window.scrollTo({ top: 0 });
starto = true;
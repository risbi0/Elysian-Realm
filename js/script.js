const accordion = document.getElementById('coll-container');
const accordionItems = document.querySelectorAll('.collapsible');
const tooltipable = document.querySelectorAll('input');
const topButton = document.querySelector('#goToTop');
const rows = document.querySelectorAll('tr:not(thead tr)');
const mergedCellRows = document.querySelectorAll('td[rowspan]');

function collapse(content) {
    let nextDiv = content.nextElementSibling;
    let nextDivChild = nextDiv.lastElementChild;
    nextDiv.scrollTop = 0;
    if (nextDiv.style.minWidth) { // collapse
        content.classList.remove('highlight');
        nextDiv.style.width = "0px";
        nextDiv.style.minWidth = null;
        nextDivChild.style.opacity = 0;
        nextDivChild.style.transition = '0.1s';
    } else { // expand
        content.classList.add('highlight');
        nextDivChild.style.opacity = 1;
        nextDivChild.style.transition = '0.7s ease-in';
        if (window.innerWidth <= 600) {
            // set guide width to device width
            nextDiv.style.minWidth = window.innerWidth + 'px';
            window.scroll({
                top: content.offsetTop,
                behavior: 'smooth'
            })
            setTimeout(() => {
                accordion.scroll({
                    left: content.offsetLeft + 100,
                    behavior: 'smooth'
                });
            }, 300);
        } else {
            nextDiv.style.minWidth = '600px';
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
// go to top of guide
topButton.addEventListener('click', function () {
    for (item of accordionItems) {
        if (item.classList.contains('active')) {
            item.nextElementSibling.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
});
// hide previously clicked tooltip
tooltipable.forEach(item => {
    item.addEventListener('click', function() {
        for (otherItem of tooltipable) {
            if (otherItem != item) {
                otherItem.checked = false;
            }
        }
    });
});
// anchor smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function highlightAdjacentMergedCell(row, background, color) {
    // check if inner HTML only has 1 pair of td tags
    // in a 2 column table it has 2 td tags per row
    // meaning if a row has one less td tag it either has
    // a missing cell in the row, or a merged cell (this case)
    if (row.innerHTML.match(/<\/td>/g).length == 1) {
        // get all rows of its parent table
        let parentChildren = row.parentNode.children;
        // iterate and check if row has a rowspan attribute in the cell of the 2nd column
        for (let i = 0; i < row.parentNode.children.length; i++) {
            if (parentChildren[i].children.length == 2 && parentChildren[i].children[1].hasAttribute('rowspan')) {
                // get rowspan value
                let range = parseInt(parentChildren[i].children[1].getAttribute('rowspan')) - 1;
                // get index of selected row and merged cell
                let thisIndex = row.rowIndex;
                let mergedCellIndex = parentChildren[i].rowIndex;
                // check if index is covered within the range of merged cell
                if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
                    // apply styles
                    parentChildren[i].children[1].style.background = background;
                    parentChildren[i].children[1].style.color = color;
                    break;
                }
            }
        }
    }
}
// higlight table rows on hover
rows.forEach(row => {
    row.addEventListener('mouseover', function() {
        this.style.background = 'var(--white)';
        this.style.color = 'black';
        // highlight adjacent cell since rows that has an adjacent merged
        // cell and don't have the rowspan attribute won't highlight it
        highlightAdjacentMergedCell(this, 'var(--white)', 'black');
    });
    row.addEventListener('mouseout', function() {
        this.style.background = 'unset';
        this.style.color = 'unset';
        highlightAdjacentMergedCell(this, 'unset', 'unset');
    });
});
function highlightInvolvedRows(row, background, color) {
    let mergeSize = parseInt(row.getAttribute('rowspan')) - 1;
    let cellIndex = row.parentNode.rowIndex;
    for (let i = cellIndex; i < cellIndex + mergeSize; i++) {
        row.parentNode.parentNode.children[i].style.background = background;
        row.parentNode.parentNode.children[i].style.color = color;
    }
}
// highlight adjacent rows on hovering from merged cells
mergedCellRows.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        highlightInvolvedRows(this, 'var(--white)', 'black');
    });
    cell.addEventListener('mouseout', function() {
        highlightInvolvedRows(this, 'unset', 'unset');
    });
});
// double click accordion items because it somehow can't set transition style directly
for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].click();
    accordionItems[i].click();
}
//setTimeout(()=> {accordion.scrollTo({left: 100, behavior: 'smooth'})}, 1000)

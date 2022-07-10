import { valks } from './guide.js';
import { emblemTableHeaders, emblemTableTimeColumn, supportTableHeaders, supportTableTypeColumn, stigTableHeaders, exclusiveTableColumns, signetTableColumns, isMobile } from './data.js';
export const mainContainer = document.querySelector('#main-container');
mainContainer.innerHTML = '';
function imageAndLabel(cell, row, item, m, hoverLabel) {
    cell = row.insertCell();
    cell.classList.add('pos-rel');
    const pic = document.createElement('div');
    pic.classList.add('pic', item[m].acr);
    const label = document.createElement('label');
    label.classList.add('tooltip', 'flex', 'fh-center', 'pos-abs');
    const input = document.createElement('input');
    input.classList.add('pos-abs');
    input.setAttribute('type', 'checkbox');
    const span = document.createElement('span');
    span.classList.add('pos-abs');
    span.textContent = item[m].name;
    if (hoverLabel) {
        cell.classList.add('supp-pic');
        const acr = document.createElement('p');
        acr.textContent = item[m].acr.toUpperCase();
        label.appendChild(acr);
    }
    label.appendChild(input);
    label.appendChild(span);
    cell.appendChild(pic);
    cell.appendChild(label);
    return cell;
}
const buttonClasses = ['banner', 'pos-rel', 'hidden'];
const bannerClasses = [];
const mainNameDivClasses = ['main-name', 'flex', 'fh-center', 'fv-center', 'pos-abs'];
const mainNameClasses = ['vertical-text'];
let mobileOrDesktop = '';
if (isMobile) {
    mainContainer.classList.add('f-col');
    buttonClasses.push('overflow-hide');
    bannerClasses.push('mobile', 'mobile-pos');
    mainNameDivClasses.push('mobile-shadow');
    mainNameClasses.push('mobile');
    mobileOrDesktop = 'mobile';
}
else {
    bannerClasses.push('desktop', 'desktop-pos');
    mainNameClasses.push('desktop');
    mobileOrDesktop = 'desktop';
}
export const guideContainer = document.querySelector('#guide-container');
guideContainer.innerHTML = '';
for (let i = 0; i < valks.length; i++) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add(...buttonClasses);
    const banner = document.createElement('div');
    banner.setAttribute('id', valks[i].acr);
    banner.classList.add(...bannerClasses);
    const mainNameDiv = document.createElement('div');
    mainNameDiv.classList.add(...mainNameDivClasses);
    const mainName = document.createElement('span');
    mainName.classList.add(...mainNameClasses);
    mainName.textContent = valks[i].name.replace(/[:']/g, '');
    mainNameDiv.appendChild(mainName);
    button.appendChild(banner);
    button.appendChild(mainNameDiv);
    mainContainer.appendChild(button);
    const guideContent = document.createElement('div');
    guideContent.classList.add('guide-content', 'flex', 'fv-center', 'f-col', mobileOrDesktop, 'no-display');
    if (!isMobile) {
        const innerName = document.createElement('h2');
        innerName.textContent = valks[i].name;
        guideContent.appendChild(innerName);
    }
    const rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = valks[i].rate;
    guideContent.appendChild(rating);
    for (let j = 0; j < Object.keys(valks[i].builds).length; j++) {
        if (Object.keys(valks[i].builds).length > 1) {
            const buildNo = document.createElement('p');
            buildNo.classList.add('build-no');
            buildNo.innerText = `Build ${j + 1}`;
            guideContent.appendChild(buildNo);
        }
        const recSignets = document.createElement('div');
        recSignets.classList.add('rec-signets', 'flex', 'f-row');
        for (let k = 1; k <= Object.keys(valks[i].builds[j].signet).length; k++) {
            for (let l = 0; l < Object.keys(valks[i].builds[j].signet[k]).length; l++) {
                const recSignetDiv = document.createElement('div');
                recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', valks[i].builds[j].signet[k][l][0].name.toLowerCase());
                recSignets.appendChild(recSignetDiv);
            }
        }
        guideContent.appendChild(recSignets);
        const signetTableLength = Object.keys(valks[i].builds[j].signetTable).length;
        const hasTransitionTable = signetTableLength === 4;
        const anchorContainer = document.createElement('div');
        anchorContainer.classList.add('flex', 'f-row');
        const hasNotes = 'notes' in valks[i].builds[j];
        let anchors = 2;
        if (hasTransitionTable)
            anchors += 1;
        if (hasNotes)
            anchors += 1;
        for (let k = 0; k < anchors; k++) {
            let letter = '', link = '', accessibleName = '';
            const anchorDiv = document.createElement('div');
            anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');
            if (k === 0 && hasTransitionTable) {
                letter = 'T';
                link = `transitional-signets-${i + 1}-${j + 1}`;
                accessibleName = 'Transitional Signets';
            }
            else if ((k === 0 && !hasTransitionTable) || (k === 1 && hasTransitionTable)) {
                letter = 'M';
                link = `main-signets-${i + 1}-${j + 1}`;
                accessibleName = 'Main Signets';
            }
            else if ((k === 1 && !hasTransitionTable) || (k === 2 && hasTransitionTable)) {
                letter = 'S';
                link = `secondary-signets-${i + 1}-${j + 1}`;
                accessibleName = 'Secondary Signets';
            }
            else if ((k === 3 && hasNotes) || (k === 2 && !(3 in valks[i].builds[j].signetTable))) {
                letter = 'N';
                link = `notes-${i + 1}-${j + 1}`;
                accessibleName = 'Notes';
            }
            anchorDiv.innerText = letter;
            const anchor = document.createElement('a');
            anchor.setAttribute('href', `#${link}`);
            anchor.innerText = accessibleName;
            const linkSpanner = document.createElement('span');
            linkSpanner.classList.add('link-spanner', 'pos-abs');
            anchor.appendChild(linkSpanner);
            anchorDiv.appendChild(anchor);
            anchorContainer.appendChild(anchorDiv);
        }
        guideContent.appendChild(anchorContainer);
        const emblemSupportDiv = document.createElement('div');
        emblemSupportDiv.classList.add('emblem-support', 'flex', 'f-row');
        const emblemTableDiv = document.createElement('div');
        emblemTableDiv.classList.add('emblem', 'flex', 'fh-center');
        const emblemTable = document.createElement('table');
        const emblemTableHead = emblemTable.createTHead();
        const emblemTableHeadRow = emblemTableHead.insertRow();
        for (let k = 0; k < emblemTableHeaders.length; k++) {
            const emblemTableHeader = document.createElement('th');
            emblemTableHeader.textContent = emblemTableHeaders[k];
            if (k === 1)
                emblemTableHeader.setAttribute('colspan', '2');
            emblemTableHeadRow.appendChild(emblemTableHeader);
        }
        emblemTableHead.appendChild(emblemTableHeadRow);
        const emblemTableBody = emblemTable.createTBody();
        for (let k = 1; k <= 3; k++) {
            const emblemTableBodyRow = emblemTableBody.insertRow();
            for (let l = 1; l <= 2; l++) {
                let emblemTableBodyCell;
                if (l === 1) {
                    emblemTableBodyCell = emblemTableBodyRow.insertCell();
                    emblemTableBodyCell.textContent = emblemTableTimeColumn[k - 1];
                }
                else {
                    for (let m = 1; m <= Object.keys(valks[i].builds[j].emblem[k]).length; m++) {
                        emblemTableBodyCell = imageAndLabel(emblemTableBodyCell, emblemTableBodyRow, valks[i].builds[j].emblem[k], m, false);
                    }
                }
            }
            emblemTableBody.appendChild(emblemTableBodyRow);
        }
        emblemTable.appendChild(emblemTableHead);
        emblemTable.appendChild(emblemTableBody);
        emblemTableDiv.appendChild(emblemTable);
        emblemSupportDiv.appendChild(emblemTableDiv);
        const supportTableDiv = document.createElement('div');
        supportTableDiv.classList.add('supp', 'flex', 'fh-center');
        const supportTable = document.createElement('table');
        const supportTableHead = supportTable.createTHead();
        const supportTableHeadRow = supportTableHead.insertRow();
        for (let k = 0; k < supportTableHeaders.length; k++) {
            const supportTableHeader = document.createElement('th');
            supportTableHeader.textContent = supportTableHeaders[k];
            if (k === 1)
                supportTableHeader.setAttribute('colspan', '4');
            supportTableHeadRow.appendChild(supportTableHeader);
        }
        supportTableHead.appendChild(supportTableHeadRow);
        const supportTableBody = supportTable.createTBody();
        for (let k = 1; k <= 2; k++) {
            const supportTableBodyRow = supportTableBody.insertRow();
            for (let l = 1; l <= 3; l++) {
                let supportTableBodyCell;
                if (l === 1) {
                    supportTableBodyCell = supportTableBodyRow.insertCell();
                    supportTableBodyCell.textContent = supportTableTypeColumn[k - 1];
                }
                else {
                    for (let m = 1; m <= Object.keys(valks[i].builds[j].support[k][l - 1]).length; m++) {
                        supportTableBodyCell = imageAndLabel(supportTableBodyCell, supportTableBodyRow, valks[i].builds[j].support[k][l - 1], m, true);
                    }
                    if (Object.keys(valks[i].builds[j].support[k][l - 1]).length === 1) {
                        supportTableBodyCell.setAttribute('colspan', '2');
                    }
                }
            }
            supportTableBody.appendChild(supportTableBodyRow);
        }
        supportTable.appendChild(supportTableHead);
        supportTable.appendChild(supportTableBody);
        supportTableDiv.appendChild(supportTable);
        emblemSupportDiv.appendChild(supportTableDiv);
        guideContent.appendChild(emblemSupportDiv);
        if ('gears' in valks[i].builds[j]) {
            const stigTitle = document.createElement('h3');
            stigTitle.innerText = 'Recommended Gear';
            guideContent.appendChild(stigTitle);
            const stigTable = document.createElement('table');
            stigTable.classList.add('gear-tbl');
            const stigTableHead = stigTable.createTHead();
            const stigTableHeadRow = stigTableHead.insertRow();
            for (let k = 0; k < 2; k++) {
                const stigTableHeader = document.createElement('th');
                stigTableHeader.textContent = stigTableHeaders[k];
                stigTableHeadRow.appendChild(stigTableHeader);
            }
            stigTableHead.appendChild(stigTableHeadRow);
            const stigTableBody = stigTable.createTBody();
            for (let k = 0; k < Object.keys(valks[i].builds[j].gears).length; k++) {
                const stigTableBodyRow = stigTableBody.insertRow();
                for (let l = 0; l < 2; l++) {
                    let stigTableBodyCell = stigTableBodyRow.insertCell();
                    if (l === 0) {
                        stigTableBodyCell.textContent = `${k + 1}`;
                    }
                    else {
                        stigTableBodyCell.textContent = valks[i].builds[j].gears[k];
                    }
                    stigTableBodyRow.appendChild(stigTableBodyCell);
                }
                stigTableBody.appendChild(stigTableBodyRow);
            }
            stigTable.appendChild(stigTableHead);
            stigTable.appendChild(stigTableBody);
            guideContent.appendChild(stigTable);
        }
        for (let k = 0; k < signetTableLength; k++) {
            const signetTitle = document.createElement('h3');
            const signetTable = document.createElement('table');
            let title = '', link = '', headers = [];
            switch (k) {
                case 0:
                    signetTitle.textContent = 'Exclusive Signets';
                    guideContent.appendChild(signetTitle);
                    signetTable.classList.add('exclusive-tbl');
                    headers = exclusiveTableColumns;
                    break;
                default:
                    if ((k === 1 && hasTransitionTable)) {
                        title = 'Transitional Signets';
                        link = 'transitional-signets';
                        signetTable.classList.add('transitional-tbl');
                    }
                    else if ((k === 1 && !hasTransitionTable) || (k === 2 && hasTransitionTable)) {
                        title = 'Main Signets';
                        link = 'main-signets';
                        signetTable.classList.add('main-tbl');
                    }
                    else if ((k === 2 && !hasTransitionTable) || (k === 3 && hasTransitionTable)) {
                        title = 'Secondary Signets';
                        link = 'secondary-signets';
                        signetTable.classList.add('secondary-tbl');
                        if (!hasNotes)
                            signetTable.style.marginBottom = '35px';
                    }
                    signetTitle.setAttribute('id', `${link}-${i + 1}-${j + 1}`);
                    signetTitle.textContent = title;
                    headers = signetTableColumns;
                    const signets = document.createElement('div');
                    signets.classList.add('rec-signets', 'flex', 'f-row');
                    for (let l = 0; l < Object.keys(valks[i].builds[j].signet[k]).length; l++) {
                        const recSignetDiv = document.createElement('div');
                        recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', valks[i].builds[j].signet[k][l][0].name.toLowerCase());
                        const recSignetsLabel = document.createElement('label');
                        recSignetsLabel.textContent = valks[i].builds[j].signet[k][l][1] === '1' ? 'I' : 'II';
                        recSignetDiv.appendChild(recSignetsLabel);
                        signets.appendChild(recSignetDiv);
                    }
                    guideContent.appendChild(signetTitle);
                    guideContent.appendChild(signets);
                    break;
            }
            const signetTableHead = signetTable.createTHead();
            const signetTableHeadRow = signetTableHead.insertRow();
            for (let l = 0; l < 2; l++) {
                const signetTableHeader = document.createElement('th');
                signetTableHeader.textContent = headers[l];
                signetTableHeadRow.appendChild(signetTableHeader);
            }
            signetTableHead.appendChild(signetTableHeadRow);
            const signetTableBody = signetTable.createTBody();
            for (let l = 1; l <= Object.keys(valks[i].builds[j].signetTable[k]).length; l++) {
                const signetTableBodyRow = signetTableBody.insertRow();
                for (let m = 0; m < Object.keys(valks[i].builds[j].signetTable[k][l]).length; m++) {
                    let signetTableBodyCell;
                    if (!(/^[0-9]+$/.test(valks[i].builds[j].signetTable[k][l][m])) && Object.keys(valks[i].builds[j].signetTable[k][l])[m] !== 'detail') {
                        let prepend = '';
                        if (k === 0 && m === 0)
                            prepend = 'Blessing of ';
                        signetTableBodyCell = signetTableBodyRow.insertCell();
                        signetTableBodyCell.textContent = `${prepend}${valks[i].builds[j].signetTable[k][l][m]}`;
                        if (valks[i].builds[j].signetTable[k][l][m] === '')
                            signetTableBodyCell.previousElementSibling.classList.add('noted');
                    }
                    try {
                        if (/^[0-9]+$/.test(valks[i].builds[j].signetTable[k][l][m + 1])) {
                            signetTableBodyCell.setAttribute('rowspan', valks[i].builds[j].signetTable[k][l][m + 1]);
                        }
                    }
                    catch (e) {
                        continue;
                    }
                }
                signetTableBody.appendChild(signetTableBodyRow);
            }
            signetTable.appendChild(signetTableHead);
            signetTable.appendChild(signetTableBody);
            guideContent.appendChild(signetTable);
        }
        if (hasNotes) {
            const notes = document.createElement('div');
            notes.setAttribute('id', `notes-${i + 1}-${j + 1}`);
            notes.classList.add('notes');
            notes.innerHTML = `Notes:<br><br>${valks[i].builds[j].notes}`;
            guideContent.appendChild(notes);
        }
        guideContainer.appendChild(guideContent);
    }
}

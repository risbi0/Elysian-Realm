import { valks } from './guide.js';
import { emblemTableHeaders, emblemTableTimeColumn, supportTableHeaders, supportTableTypeColumn, exclusiveTableColumns, signetTableColumns } from './data.js';
const collContainer = document.querySelector('#main-container');
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
if (isMobile) {
    collContainer.classList.add('f-col');
    buttonClasses.push('overflow-hide');
    bannerClasses.push('mobile', 'mobile-pos');
    mainNameDivClasses.push('mobile-shadow');
    mainNameClasses.push('mobile');
}
else {
    bannerClasses.push('desktop', 'desktop-pos');
    mainNameClasses.push('desktop');
}
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
    collContainer.appendChild(button);
}
export const guideContainer = document.querySelector('#guide-container');
export const guideContent = document.querySelector('#guide-content');
export function buildGuideContent(i) {
    guideContainer.style.display = 'block';
    const valk = valks[i];
    if (isMobile) {
        guideContainer.classList.add('hidden');
    }
    else {
        const innerName = document.createElement('h2');
        innerName.textContent = valk.name;
        guideContent.appendChild(innerName);
    }
    const rating = document.createElement('p');
    rating.setAttribute('id', 'rating');
    rating.textContent = valk.rate;
    guideContent.appendChild(rating);
    for (let j = 0; j < Object.keys(valk.builds).length; j++) {
        if (Object.keys(valk.builds).length > 1) {
            const buildNo = document.createElement('p');
            buildNo.classList.add('build-no');
            buildNo.innerText = `Build ${j + 1}`;
            guideContent.appendChild(buildNo);
        }
        const recSignets = document.createElement('div');
        recSignets.classList.add('rec-signets', 'flex', 'f-row');
        for (let k = 1; k <= Object.keys(valk.builds[j].signet).length; k++) {
            for (let l = 0; l < Object.keys(valk.builds[j].signet[k]).length; l++) {
                const recSignetDiv = document.createElement('div');
                recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', valk.builds[j].signet[k][l][0].name.toLowerCase());
                recSignets.appendChild(recSignetDiv);
            }
        }
        guideContent.appendChild(recSignets);
        const signetTableLength = Object.keys(valk.builds[j].signetTable).length;
        const hasTransitionTable = signetTableLength == 4;
        const anchorContainer = document.createElement('div');
        anchorContainer.classList.add('flex', 'f-row');
        let anchors = 2;
        if (hasTransitionTable)
            anchors += 1;
        if ('notes' in valk.builds[j])
            anchors += 1;
        for (let k = 0; k < anchors; k++) {
            let letter = '', link = '', accessibleName = '';
            const anchorDiv = document.createElement('div');
            anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');
            if (k == 0 && hasTransitionTable) {
                letter = 'T';
                link = `transitional-signets`;
                accessibleName = 'Transitional Signets';
            }
            else if ((k == 0 && !hasTransitionTable) || (k == 1 && hasTransitionTable)) {
                letter = 'M';
                link = `main-signets`;
                accessibleName = 'Main Signets';
            }
            else if ((k == 1 && !hasTransitionTable) || (k == 2 && hasTransitionTable)) {
                letter = 'S';
                link = `secondary-signets`;
                accessibleName = 'Secondary Signets';
            }
            else if ((k == 3 && 'notes' in valk.builds[j]) || (k == 2 && !(3 in valk.builds[j].signetTable))) {
                letter = 'N';
                link = `notes`;
                accessibleName = 'Notes';
            }
            anchorDiv.innerText = letter;
            const anchor = document.createElement('a');
            anchor.setAttribute('href', `#${link}-${j + 1}`);
            anchor.innerText = accessibleName;
            const linkSpanner = document.createElement('span');
            linkSpanner.classList.add('link-spanner', 'pos-abs');
            anchor.appendChild(linkSpanner);
            anchorDiv.appendChild(anchor);
            anchorContainer.appendChild(anchorDiv);
        }
        guideContent.appendChild(anchorContainer);
        const emblemSupportDiv = document.createElement('div');
        emblemSupportDiv.setAttribute('id', 'emblem-support');
        emblemSupportDiv.classList.add('flex', 'f-row');
        const emblemTableDiv = document.createElement('div');
        emblemTableDiv.setAttribute('id', 'emblem');
        emblemTableDiv.classList.add('flex', 'fh-center');
        const emblemTable = document.createElement('table');
        const emblemTableHead = emblemTable.createTHead();
        const emblemTableHeadRow = emblemTableHead.insertRow();
        for (let k = 0; k < emblemTableHeaders.length; k++) {
            const emblemTableHeader = document.createElement('th');
            emblemTableHeader.textContent = emblemTableHeaders[k];
            if (k == 1)
                emblemTableHeader.setAttribute('colspan', '2');
            emblemTableHeadRow.appendChild(emblemTableHeader);
        }
        emblemTableHead.appendChild(emblemTableHeadRow);
        const emblemTableBody = emblemTable.createTBody();
        for (let k = 1; k <= 3; k++) {
            const emblemTableBodyRow = emblemTableBody.insertRow();
            for (let l = 1; l <= 2; l++) {
                let emblemTableBodyCell;
                if (l == 1) {
                    emblemTableBodyCell = emblemTableBodyRow.insertCell();
                    emblemTableBodyCell.textContent = emblemTableTimeColumn[k - 1];
                }
                else {
                    for (let m = 1; m <= Object.keys(valk.builds[j].emblem[k]).length; m++) {
                        emblemTableBodyCell = imageAndLabel(emblemTableBodyCell, emblemTableBodyRow, valk.builds[j].emblem[k], m, false);
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
        supportTableDiv.setAttribute('id', 'supp');
        supportTableDiv.classList.add('flex', 'fh-center');
        const supportTable = document.createElement('table');
        const supportTableHead = supportTable.createTHead();
        const supportTableHeadRow = supportTableHead.insertRow();
        for (let k = 0; k < supportTableHeaders.length; k++) {
            const supportTableHeader = document.createElement('th');
            supportTableHeader.textContent = supportTableHeaders[k];
            if (k == 1)
                supportTableHeader.setAttribute('colspan', '4');
            supportTableHeadRow.appendChild(supportTableHeader);
        }
        supportTableHead.appendChild(supportTableHeadRow);
        const supportTableBody = supportTable.createTBody();
        for (let k = 1; k <= 2; k++) {
            const supportTableBodyRow = supportTableBody.insertRow();
            for (let l = 1; l <= 3; l++) {
                let supportTableBodyCell;
                if (l == 1) {
                    supportTableBodyCell = supportTableBodyRow.insertCell();
                    supportTableBodyCell.textContent = supportTableTypeColumn[k - 1];
                }
                else {
                    for (let m = 1; m <= Object.keys(valk.builds[j].support[k][l - 1]).length; m++) {
                        supportTableBodyCell = imageAndLabel(supportTableBodyCell, supportTableBodyRow, valk.builds[j].support[k][l - 1], m, true);
                    }
                    if (Object.keys(valk.builds[j].support[k][l - 1]).length == 1) {
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
        for (let k = 0; k < signetTableLength; k++) {
            const signetTitle = document.createElement('h3');
            const signetTable = document.createElement('table');
            let title = '', link = '', headers = [];
            switch (k) {
                case 0:
                    signetTitle.textContent = 'Exclusive Signets';
                    guideContent.appendChild(signetTitle);
                    signetTable.setAttribute('id', 'exclusive-tbl');
                    headers = exclusiveTableColumns;
                    break;
                default:
                    if ((k == 1 && hasTransitionTable)) {
                        title = 'Transitional Signets';
                        link = 'transitional-signets';
                        signetTable.setAttribute('id', 'transitional-tbl');
                    }
                    else if ((k == 1 && !hasTransitionTable) || (k == 2 && hasTransitionTable)) {
                        title = 'Main Signets';
                        link = 'main-signets';
                        signetTable.setAttribute('id', 'main-tbl');
                    }
                    else if ((k == 2 && !hasTransitionTable) || (k == 3 && hasTransitionTable)) {
                        title = 'Secondary Signets';
                        link = 'secondary-signets';
                        signetTable.setAttribute('id', 'secondary-tbl');
                    }
                    signetTitle.setAttribute('id', `${link}-${j + 1}`);
                    signetTitle.textContent = title;
                    headers = signetTableColumns;
                    const signets = document.createElement('div');
                    signets.classList.add('rec-signets', 'flex', 'f-row');
                    for (let l = 0; l < Object.keys(valk.builds[j].signet[k]).length; l++) {
                        const recSignetDiv = document.createElement('div');
                        recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', valk.builds[j].signet[k][l][0].name.toLowerCase());
                        const recSignetsLabel = document.createElement('label');
                        recSignetsLabel.textContent = valk.builds[j].signet[k][l][1] == '1' ? 'I' : 'II';
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
            for (let l = 1; l <= Object.keys(valk.builds[j].signetTable[k]).length; l++) {
                const signetTableBodyRow = signetTableBody.insertRow();
                for (let m = 0; m < Object.keys(valk.builds[j].signetTable[k][l]).length; m++) {
                    let signetTableBodyCell;
                    if (!(/^[0-9]+$/.test(valk.builds[j].signetTable[k][l][m])) && Object.keys(valk.builds[j].signetTable[k][l])[m] != 'detail') {
                        let prepend = '';
                        if (k == 0 && m == 0)
                            prepend = 'Blessing of ';
                        signetTableBodyCell = signetTableBodyRow.insertCell();
                        signetTableBodyCell.textContent = `${prepend}${valk.builds[j].signetTable[k][l][m]}`;
                        if (valk.builds[j].signetTable[k][l][m] == '')
                            signetTableBodyCell.previousElementSibling.classList.add('noted');
                    }
                    try {
                        if (/^[0-9]+$/.test(valk.builds[j].signetTable[k][l][m + 1])) {
                            signetTableBodyCell.setAttribute('rowspan', valk.builds[j].signetTable[k][l][m + 1]);
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
        if ('notes' in valk.builds[j]) {
            const notes = document.createElement('div');
            notes.setAttribute('id', `notes-${j + 1}`);
            notes.classList.add('notes');
            notes.innerHTML = `Notes:<br><br>${valk.builds[j].notes}`;
            guideContent.appendChild(notes);
        }
    }
}

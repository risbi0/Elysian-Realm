import { valks } from './guide.js';
import { emblemTableHeaders, emblemTableTimeColumn,
         supportTableHeaders, supportTableTypeColumn,
         exclusiveTableColumns, signetTableColumns } from './data.js';

const collContainer = document.querySelector('#main-container') as HTMLDivElement;

function imageAndLabel(cell: HTMLTableCellElement, row: HTMLTableRowElement, item: any, m: number, hoverLabel: boolean): HTMLTableCellElement {
    cell = row.insertCell();
    cell.classList.add('pos-rel');

    const pic: HTMLDivElement = document.createElement('div');
    pic.classList.add('pic', item[m].acr);

    const label: HTMLLabelElement = document.createElement('label');
    label.classList.add('tooltip', 'flex', 'fh-center', 'pos-abs');

    const input: HTMLInputElement = document.createElement('input');
    input.classList.add('pos-abs');
    input.setAttribute('type', 'checkbox');

    const span: HTMLSpanElement = document.createElement('span');
    span.classList.add('pos-abs');
    span.textContent = item[m].name;
    // for support valk images
    if (hoverLabel) {
        const acr: HTMLParagraphElement = document.createElement('p');
        acr.textContent = item[m].acr.toUpperCase();
        label.appendChild(acr);
    }
    label.appendChild(input);
    label.appendChild(span);
    cell.appendChild(pic);
    cell.appendChild(label);

    return cell;
}

// banners
const buttonClasses: string[] = ['banner', 'pos-rel', 'hidden']
const bannerClasses: string[] = [];
const mainNameDivClasses: string[] = ['main-name', 'flex', 'fh-center', 'fv-center', 'pos-abs'];
const mainNameClasses: string[] = ['vertical-text'];
if (isMobile) {
    collContainer.classList.add('f-col');

    buttonClasses.push('overflow-hide');
    bannerClasses.push('mobile', 'mobile-pos');
    mainNameDivClasses.push('mobile-shadow');
    mainNameClasses.push('mobile');
} else {
    bannerClasses.push('desktop', 'desktop-pos');
    mainNameClasses.push('desktop');
}
for (let i = 0; i < valks.length; i++) {
    const button: HTMLButtonElement = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add(...buttonClasses);

    const banner: HTMLDivElement = document.createElement('div');
    banner.setAttribute('id', valks[i].acr);
    banner.classList.add(...bannerClasses);

    const mainNameDiv: HTMLDivElement = document.createElement('div');
    mainNameDiv.classList.add(...mainNameDivClasses);
    const mainName: HTMLSpanElement = document.createElement('span');
    mainName.classList.add(...mainNameClasses);
    mainName.textContent = valks[i].name.replace(/[:']/g, '');

    mainNameDiv.appendChild(mainName);
    button.appendChild(banner);
    button.appendChild(mainNameDiv);
    collContainer.appendChild(button);
}

export const guideContainer = document.querySelector('#guide-container') as HTMLDivElement;
export const guideContent = document.querySelector('#guide-content') as HTMLDivElement;
export function buildGuideContent(dis: any) {
    guideContainer.style.display = 'block';

    const i: number = Array.from(dis.parentNode.children).indexOf(dis);
    const valk: any = valks[i];
    // inner name
    const innerName: HTMLHeadingElement = document.createElement('h2');
    innerName.textContent = valk.name;

    guideContent.appendChild(innerName);
    // rated difficulty
    const rating: HTMLParagraphElement = document.createElement('p');
    rating.setAttribute('id', 'rating');
    rating.textContent = valk.rate;

    guideContent.appendChild(rating);
    for (let j = 0; j < Object.keys(valk.builds).length; j++) {
        if (Object.keys(valk.builds).length > 1) {
            const buildNo: HTMLParagraphElement = document.createElement('p');
            buildNo.classList.add('build-no');
            buildNo.innerText = `Build ${j + 1}`;
            guideContent.appendChild(buildNo);
        }
        // signets images
        const recSignets: HTMLDivElement = document.createElement('div');
        recSignets.classList.add('rec-signets', 'flex', 'f-row');
        for (let k = 1; k <= Object.keys(valk.builds[j].signet).length; k++) {
            for (let l = 0; l < Object.keys(valk.builds[j].signet[k]).length; l++) {
                const recSignetDiv: HTMLDivElement = document.createElement('div');
                recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', valk.builds[j].signet[k][l][0].name.toLowerCase());

                recSignets.appendChild(recSignetDiv);
            }
        }
        guideContent.appendChild(recSignets);
        // anchors
        const signetTableLength: number = Object.keys(valk.builds[j].signetTable).length;
        const hasTransitionTable: boolean = signetTableLength == 4;

        const anchorContainer: HTMLDivElement = document.createElement('div');
        anchorContainer.classList.add('flex', 'f-row');

        let anchors: number = 2;
        if (hasTransitionTable) anchors += 1; // check for transitional table
        if ('notes' in valk.builds[j]) anchors += 1;
        for (let k = 0; k < anchors; k++) {
            let letter: string = '', link: string = '', accessibleName: string = '';
            const anchorDiv: HTMLDivElement = document.createElement('div');
            anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');

            if (k == 0 && hasTransitionTable) {
                letter = 'T';
                link = `transitional-signets`;
                accessibleName = 'Transitional Signets';
            } else if ((k == 0 && !hasTransitionTable) || (k == 1 && hasTransitionTable)) {
                letter = 'M';
                link = `main-signets`;
                accessibleName = 'Main Signets';
            } else if ((k == 1 && !hasTransitionTable) || (k == 2 && hasTransitionTable)) {
                letter = 'S';
                link = `secondary-signets`;
                accessibleName = 'Secondary Signets';
            } else if ((k == 3 && 'notes' in valk.builds[j]) || (k == 2 && !(3 in valk.builds[j].signetTable))) {
                letter = 'N';
                link = `notes`;
                accessibleName = 'Notes';
            }
            anchorDiv.innerText = letter;

            const anchor: HTMLAnchorElement = document.createElement('a');
            anchor.setAttribute('href', `#${link}-${j + 1}`);
            anchor.innerText = accessibleName;

            const linkSpanner: HTMLSpanElement = document.createElement('span');
            linkSpanner.classList.add('link-spanner', 'pos-abs');

            anchor.appendChild(linkSpanner);
            anchorDiv.appendChild(anchor);
            anchorContainer.appendChild(anchorDiv);
        }
        guideContent.appendChild(anchorContainer);
        
        const emblemSupportDiv: HTMLDivElement = document.createElement('div');
        emblemSupportDiv.setAttribute('id', 'emblem-support');
        emblemSupportDiv.classList.add('flex', 'f-row');
        // emblem table
        const emblemTableDiv: HTMLDivElement = document.createElement('div');
        emblemTableDiv.setAttribute('id', 'emblem');
        emblemTableDiv.classList.add('flex', 'fh-center');

        const emblemTable: HTMLTableElement = document.createElement('table');
        const emblemTableHead: HTMLTableSectionElement = emblemTable.createTHead();
        const emblemTableHeadRow: HTMLTableRowElement = emblemTableHead.insertRow();
        for (let k = 0; k < emblemTableHeaders.length; k++) {
            const emblemTableHeader: HTMLTableCellElement = document.createElement('th');
            emblemTableHeader.textContent = emblemTableHeaders[k];
            if (k == 1) emblemTableHeader.setAttribute('colspan', '2');

            emblemTableHeadRow.appendChild(emblemTableHeader);
        }
        emblemTableHead.appendChild(emblemTableHeadRow);

        const emblemTableBody: HTMLTableSectionElement = emblemTable.createTBody();
        for (let k = 1; k <= 3; k++) { // rows
            const emblemTableBodyRow: HTMLTableRowElement = emblemTableBody.insertRow();
            for (let l = 1; l <= 2; l++) { // cells
                let emblemTableBodyCell: HTMLTableCellElement;
                if (l == 1) {
                    emblemTableBodyCell = emblemTableBodyRow.insertCell();
                    emblemTableBodyCell.textContent = emblemTableTimeColumn[k - 1];
                } else {
                    for (let m = 1; m <= Object.keys(valk.builds[j].emblem[k]).length; m++) {
                        emblemTableBodyCell = imageAndLabel(emblemTableBodyCell!, emblemTableBodyRow, valk.builds[j].emblem[k], m, false);
                    }
                }
            }
            emblemTableBody.appendChild(emblemTableBodyRow);
        }
        emblemTable.appendChild(emblemTableHead);
        emblemTable.appendChild(emblemTableBody);
        emblemTableDiv.appendChild(emblemTable);
        emblemSupportDiv.appendChild(emblemTableDiv);
        // supports table
        const supportTableDiv: HTMLDivElement = document.createElement('div');
        supportTableDiv.setAttribute('id', 'supp');
        supportTableDiv.classList.add('flex', 'fh-center');

        const supportTable: HTMLTableElement = document.createElement('table');
        const supportTableHead: HTMLTableSectionElement = supportTable.createTHead();
        const supportTableHeadRow: HTMLTableRowElement = supportTableHead.insertRow();
        for (let k = 0; k < supportTableHeaders.length; k++) {
            const supportTableHeader: HTMLTableCellElement = document.createElement('th');
            supportTableHeader.textContent = supportTableHeaders[k];
            if (k == 1) supportTableHeader.setAttribute('colspan', '4');

            supportTableHeadRow.appendChild(supportTableHeader);
        }
        supportTableHead.appendChild(supportTableHeadRow);

        const supportTableBody: HTMLTableSectionElement = supportTable.createTBody();
        for (let k = 1; k <= 2; k++) { // rows
            const supportTableBodyRow: HTMLTableRowElement = supportTableBody.insertRow();
            for (let l = 1; l <= 3; l++) { // cells
                let supportTableBodyCell: HTMLTableCellElement;
                if (l == 1) {
                    supportTableBodyCell = supportTableBodyRow.insertCell();
                    supportTableBodyCell.textContent = supportTableTypeColumn[k - 1];
                } else {
                    for (let m = 1; m <= Object.keys(valk.builds[j].support[k][l - 1]).length; m++) {
                        supportTableBodyCell = imageAndLabel(supportTableBodyCell!, supportTableBodyRow, valk.builds[j].support[k][l - 1], m, true);
                    }
                    if (Object.keys(valk.builds[j].support[k][l - 1]).length == 1) {
                        supportTableBodyCell!.setAttribute('colspan', '2');
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
        // tables
        for (let k = 0; k < signetTableLength; k++) {
            const signetTitle: HTMLHeadingElement = document.createElement('h3');
            const signetTable: HTMLTableElement = document.createElement('table');
            let title: string = '', link: string = '', headers: string[] = [];
            // title and signets
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
                        link ='transitional-signets';
                        signetTable.setAttribute('id', 'transitional-tbl');
                    } else if ((k == 1 && !hasTransitionTable) || (k == 2 && hasTransitionTable)) {
                        title = 'Main Signets';
                        link = 'main-signets';
                        signetTable.setAttribute('id', 'main-tbl');
                    } else if ((k == 2 && !hasTransitionTable) || (k == 3 && hasTransitionTable)) {
                        title = 'Secondary Signets';
                        link = 'secondary-signets';
                        signetTable.setAttribute('id', 'secondary-tbl');
                    }
                    signetTitle.setAttribute('id', `${link}-${j + 1}`);
                    signetTitle.textContent = title;

                    headers = signetTableColumns;
                    // signets
                    const signets: HTMLDivElement = document.createElement('div');
                    signets.classList.add('rec-signets', 'flex', 'f-row');
                    for (let l = 0; l < Object.keys(valk.builds[j].signet[k]).length; l++) {
                        const recSignetDiv: HTMLDivElement = document.createElement('div');
                        recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', valk.builds[j].signet[k][l][0].name.toLowerCase());
                        
                        const recSignetsLabel: HTMLLabelElement = document.createElement('label');
                        recSignetsLabel.textContent = valk.builds[j].signet[k][l][1] == '1' ? 'I' : 'II';

                        recSignetDiv.appendChild(recSignetsLabel);
                        signets.appendChild(recSignetDiv);
                    }
                    guideContent.appendChild(signetTitle);
                    guideContent.appendChild(signets);
                    break;
            }
            const signetTableHead: HTMLTableSectionElement = signetTable.createTHead();
            const signetTableHeadRow: HTMLTableRowElement = signetTableHead.insertRow(); 
            for (let l = 0; l < 2; l++) {
                const signetTableHeader: HTMLTableCellElement = document.createElement('th');
                signetTableHeader.textContent = headers[l];
                signetTableHeadRow.appendChild(signetTableHeader);
            }
            signetTableHead.appendChild(signetTableHeadRow);

            const signetTableBody: HTMLTableSectionElement = signetTable.createTBody();
            for (let l = 1; l <= Object.keys(valk.builds[j].signetTable[k]).length; l++) { // rows
                const signetTableBodyRow: HTMLTableRowElement = signetTableBody.insertRow();
                for (let m = 0; m < Object.keys(valk.builds[j].signetTable[k][l]).length; m++) { // cells
                    let signetTableBodyCell: HTMLTableCellElement;
                    // check if value isn't only a number, which is a value for rowspan 
                    if (!(/^[0-9]+$/.test(valk.builds[j].signetTable[k][l][m])) && Object.keys(valk.builds[j].signetTable[k][l])[m] != 'detail') {
                        let prepend: string = '';
                        if (k == 0 && m == 0) prepend = 'Blessing of ';
                        signetTableBodyCell = signetTableBodyRow.insertCell();
                        signetTableBodyCell.textContent = `${prepend}${valk.builds[j].signetTable[k][l][m]}`;
                        if (valk.builds[j].signetTable[k][l][m] == '') signetTableBodyCell.previousElementSibling!.classList.add('noted');
                    }
                    try { // check if next value is only a number, if so, apply as rowspan value
                        if (/^[0-9]+$/.test(valk.builds[j].signetTable[k][l][m + 1])) {
                            signetTableBodyCell!.setAttribute('rowspan', valk.builds[j].signetTable[k][l][m + 1]);
                        }
                    } catch (e) { continue; }
                }
                signetTableBody.appendChild(signetTableBodyRow);
            }
            signetTable.appendChild(signetTableHead);
            signetTable.appendChild(signetTableBody);
            guideContent.appendChild(signetTable);
        }
        if ('notes' in valk.builds[j]) {
            const notes: HTMLDivElement = document.createElement('div');
            notes.setAttribute('id', `notes-${j + 1}`);
            notes.classList.add('notes');
            notes.innerHTML = `Notes:<br><br>${valk.builds[j].notes}`;

            guideContent.appendChild(notes);
        }
    }
}
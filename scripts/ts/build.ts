import { valks } from './guide.js';
import { emblemTableHeaders, emblemTableTimeColumn,
         supportTableHeaders, supportTableTypeColumn,
         exclusiveTableColumns, signetTableColumns } from './data.js';

const collContainer: HTMLElement = document.querySelector('#main-container')!;

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
for (let i = 0; i < valks.length; i++) {
    // acordion item
    const button: HTMLButtonElement = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('banner', 'hidden', 'pos-rel');

    const banner: HTMLDivElement = document.createElement('div');
    banner.setAttribute('id', valks[i].acr);

    const mainNameDiv: HTMLDivElement = document.createElement('div');
    mainNameDiv.classList.add('main-name', 'flex', 'fh-center', 'fv-center', 'pos-abs');
    const mainName: HTMLSpanElement = document.createElement('span');
    mainName.setAttribute('id', `${valks[i].acr}-name`);
    mainName.classList.add('vertical-text');
    mainName.textContent = valks[i].name.replace(/[:']/g, '');

    mainNameDiv.appendChild(mainName);
    button.appendChild(banner);
    button.appendChild(mainNameDiv);
    // guide content
    const guideContainer: HTMLDivElement = document.createElement('div');
    guideContainer.classList.add('guide-container', 'flex', 'fv-center', 'f-col');
    // inner name
    const innerName: HTMLHeadingElement = document.createElement('h2');
    innerName.textContent = valks[i].name;

    guideContainer.appendChild(innerName);
    // rated difficulty
    const rating: HTMLParagraphElement = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = valks[i].rate;

    guideContainer.appendChild(rating);
    for (let j = 0; j < Object.keys(valks[i].builds).length; j++) {
        if (Object.keys(valks[i].builds).length > 1) {
            const buildNo: HTMLParagraphElement = document.createElement('p');
            buildNo.classList.add('build-no');
            buildNo.innerText = `Build ${j + 1}`;
            guideContainer.appendChild(buildNo);
        }
        // signets images
        const recSignets: HTMLDivElement = document.createElement('div');
        recSignets.classList.add('rec-signets', 'flex', 'f-row');
        for (let k = 1; k <= Object.keys(valks[i].builds[j].signet).length; k++) {
            for (let l = 0; l < Object.keys(valks[i].builds[j].signet[k]).length; l++) {
                const recSignetDiv: HTMLDivElement = document.createElement('div');
                recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', valks[i].builds[j].signet[k][l][0].name.toLowerCase());

                recSignets.appendChild(recSignetDiv);
            }
        }
        guideContainer.appendChild(recSignets);
        // anchors
        const signetTableLength: number = Object.keys(valks[i].builds[j].signetTable).length;
        const hasTransitionTable: boolean = signetTableLength == 4;

        const anchorContainer: HTMLDivElement = document.createElement('div');
        anchorContainer.classList.add('flex', 'f-row');

        let anchors: number = 2;
        if (hasTransitionTable) anchors += 1; // check for transitional table
        if ('notes' in valks[i].builds[j]) anchors += 1;
        for (let k = 0; k < anchors; k++) {
            let letter: string = '', link: string = '', accessibleName: string = '';
            const anchorDiv: HTMLDivElement = document.createElement('div');
            anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');

            if (k == 0 && hasTransitionTable) {
                letter = 'T';
                link = `transitional-signets-${i + 1}-${j + 1}`;
                accessibleName = 'Transitional Signets';
            } else if ((k == 0 && !hasTransitionTable) || (k == 1 && hasTransitionTable)) {
                letter = 'M';
                link = `main-signets-${i + 1}-${j + 1}`;
                accessibleName = 'Main Signets';
            } else if ((k == 1 && !hasTransitionTable) || (k == 2 && hasTransitionTable)) {
                letter = 'S';
                link = `secondary-signets-${i + 1}-${j + 1}`;
                accessibleName = 'Secondary Signets';
            } else if ((k == 3 && 'notes' in valks[i].builds[j]) || (k == 2 && !(3 in valks[i].builds[j].signetTable))) {
                letter = 'N';
                link = `notes-${i + 1}-${j + 1}`;
                accessibleName = 'Notes';
            }
            anchorDiv.innerText = letter;

            const anchor: HTMLAnchorElement = document.createElement('a');
            anchor.setAttribute('href', `#${link}`);
            anchor.innerText = accessibleName;

            const linkSpanner: HTMLSpanElement = document.createElement('span');
            linkSpanner.classList.add('link-spanner', 'pos-abs');

            anchor.appendChild(linkSpanner);
            anchorDiv.appendChild(anchor);
            anchorContainer.appendChild(anchorDiv);
        }
        guideContainer.appendChild(anchorContainer);
        
        const emblemSupportDiv: HTMLDivElement = document.createElement('div');
        emblemSupportDiv.classList.add('emblem-support', 'flex', 'f-row');
        // emblem table
        const emblemTableDiv: HTMLDivElement = document.createElement('div');
        emblemTableDiv.classList.add('emblem', 'flex', 'fh-center');

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
                    for (let m = 1; m <= Object.keys(valks[i].builds[j].emblem[k]).length; m++) {
                        emblemTableBodyCell = imageAndLabel(emblemTableBodyCell!, emblemTableBodyRow, valks[i].builds[j].emblem[k], m, false);
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
        supportTableDiv.classList.add('supp', 'flex', 'fh-center');

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
                    for (let m = 1; m <= Object.keys(valks[i].builds[j].support[k][l - 1]).length; m++) {
                        supportTableBodyCell = imageAndLabel(supportTableBodyCell!, supportTableBodyRow, valks[i].builds[j].support[k][l - 1], m, true);
                    }
                    if (Object.keys(valks[i].builds[j].support[k][l - 1]).length == 1) {
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
        guideContainer.appendChild(emblemSupportDiv);
        // tables
        for (let k = 0; k < signetTableLength; k++) {
            const signetTitle: HTMLHeadingElement = document.createElement('h3');
            const signetTable: HTMLTableElement = document.createElement('table');
            let title: string = '', link: string = '', headers: string[] = [];
            // title and signets
            switch (k) {
                case 0:
                    signetTitle.textContent = 'Exclusive Signets';
                    guideContainer.appendChild(signetTitle);
                    signetTable.classList.add('exclusive-tbl');
                    headers = exclusiveTableColumns;
                    break;
                default:
                    if ((k == 1 && hasTransitionTable)) {
                        title = 'Transitional Signets';
                        link ='transitional-signets';
                        signetTable.classList.add('transitional-tbl');
                    } else if ((k == 1 && !hasTransitionTable) || (k == 2 && hasTransitionTable)) {
                        title = 'Main Signets';
                        link = 'main-signets';
                        signetTable.classList.add('main-tbl');
                    } else if ((k == 2 && !hasTransitionTable) || (k == 3 && hasTransitionTable)) {
                        title = 'Secondary Signets';
                        link = 'secondary-signets';
                        signetTable.classList.add('secondary-tbl');
                    }
                    signetTitle.setAttribute('id', `${link}-${i + 1}-${j + 1}`);
                    signetTitle.textContent = title;

                    headers = signetTableColumns;
                    // signets
                    const signets: HTMLDivElement = document.createElement('div');
                    signets.classList.add('rec-signets', 'flex', 'f-row');
                    for (let l = 0; l < Object.keys(valks[i].builds[j].signet[k]).length; l++) {
                        const recSignetDiv: HTMLDivElement = document.createElement('div');
                        recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', valks[i].builds[j].signet[k][l][0].name.toLowerCase());
                        
                        const recSignetsLabel: HTMLLabelElement = document.createElement('label');
                        recSignetsLabel.textContent = valks[i].builds[j].signet[k][l][1] == '1' ? 'I' : 'II';

                        recSignetDiv.appendChild(recSignetsLabel);
                        signets.appendChild(recSignetDiv);
                    }
                    guideContainer.appendChild(signetTitle);
                    guideContainer.appendChild(signets);
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
            for (let l = 1; l <= Object.keys(valks[i].builds[j].signetTable[k]).length; l++) { // rows
                const signetTableBodyRow: HTMLTableRowElement = signetTableBody.insertRow();
                for (let m = 0; m < Object.keys(valks[i].builds[j].signetTable[k][l]).length; m++) { // cells
                    let signetTableBodyCell: HTMLTableCellElement;
                    // check if value isn't only a number, which is a value for rowspan 
                    if (!(/^[0-9]+$/.test(valks[i].builds[j].signetTable[k][l][m])) && Object.keys(valks[i].builds[j].signetTable[k][l])[m] != 'detail') {
                        let prepend: string = '';
                        if (k == 0 && m == 0) prepend = 'Blessing of ';
                        signetTableBodyCell = signetTableBodyRow.insertCell();
                        signetTableBodyCell.textContent = `${prepend}${valks[i].builds[j].signetTable[k][l][m]}`;
                        if (valks[i].builds[j].signetTable[k][l][m] == '') signetTableBodyCell.previousElementSibling!.classList.add('noted');
                    }
                    try { // check if next value is only a number, if so, apply as rowspan value
                        if (/^[0-9]+$/.test(valks[i].builds[j].signetTable[k][l][m + 1])) {
                            signetTableBodyCell!.setAttribute('rowspan', valks[i].builds[j].signetTable[k][l][m + 1]);
                        }
                    } catch (e) { continue; }
                }
                signetTableBody.appendChild(signetTableBodyRow);
            }
            signetTable.appendChild(signetTableHead);
            signetTable.appendChild(signetTableBody);
            guideContainer.appendChild(signetTable);
        }
        if ('notes' in valks[i].builds[j]) {
            const notes: HTMLDivElement = document.createElement('div');
            notes.setAttribute('id', `notes-${i + 1}-${j + 1}`);
            notes.classList.add('notes');
            notes.innerHTML = `Notes:<br><br>${valks[i].builds[j].notes}`;

            guideContainer.appendChild(notes);
        }
    }
    collContainer.appendChild(button);
    collContainer.appendChild(guideContainer);
}
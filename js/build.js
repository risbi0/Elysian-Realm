const collContainer = document.querySelector('#main-container');

function imageAndLabel(cell, row, item, l, hoverLabel) {
    cell = row.insertCell();
    cell.classList.add('pos-rel');

    const pic = document.createElement('div');
    pic.classList.add('pic', item[l].acr)

    const label = document.createElement('label');
    label.classList.add('tooltip', 'flex', 'fh-center', 'pos-abs');

    const input = document.createElement('input');
    input.classList.add('pos-abs');
    input.setAttribute('type', 'checkbox');

    const span = document.createElement('span');
    span.classList.add('pos-abs')
    span.textContent = item[l].name;
    // for support valk images
    if (hoverLabel) {
        const acr = document.createElement('p');
        acr.textContent = item[l].acr.toUpperCase();
        label.appendChild(acr);
    }
    label.appendChild(input);
    label.appendChild(span);
    cell.appendChild(pic)
    cell.appendChild(label);

    return cell;
}
for (let i = 0; i < valks.length; i++) {
    // acordion item
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('banner', 'hidden', 'pos-rel');

    const banner = document.createElement('div');
    banner.setAttribute('id', valks[i].acr);

    const mainNameDiv = document.createElement('div');
    mainNameDiv.classList.add('main-name', 'flex', 'fh-center', 'fv-center', 'pos-abs');
    const mainName = document.createElement('span');
    mainName.classList.add('vertical-text');
    mainName.setAttribute('id', `${valks[i].acr}-name`);
    mainName.textContent = valks[i].name.replace(/[:']/g, '');

    mainNameDiv.appendChild(mainName);
    button.appendChild(banner);
    button.appendChild(mainNameDiv);
    // guide content
    const guideContainer = document.createElement('div');
    guideContainer.classList.add('guide-container', 'flex', 'fv-center', 'f-col');
    // inner name
    const innerName = document.createElement('h2');
    innerName.textContent = valks[i].name;

    guideContainer.appendChild(innerName);
    // rated difficulty
    const rating = document.createElement('p');
    rating.classList.add('rating')
    rating.textContent = valks[i].rate;

    guideContainer.appendChild(rating);
    // signets images
    const recSignets = document.createElement('div');
    recSignets.classList.add('rec-signets', 'flex', 'f-row');
    for (let j = 1; j <= Object.keys(valks[i].signet).length; j++) {
        for (let k = 0; k < Object.keys(valks[i].signet[j]).length; k++) {
            const recSignetDiv = document.createElement('div');
            recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', valks[i].signet[j][k][0].name.toLowerCase());

            recSignets.appendChild(recSignetDiv);
        }
    }
    guideContainer.appendChild(recSignets);
    // anchors
    const anchorContainer = document.createElement('div');
    anchorContainer.classList.add('flex', 'f-row');
    let anchors = 2;
    if (3 in valks[i].signetTable) anchors += 1; // check for transitional table
    if ('notes' in valks[i]) anchors += 1;
    for (let j = 0; j < anchors; j++) {
        let letter, link;
        const anchorDiv = document.createElement('div');
        anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');

        if (j == 0) {
            letter = 'M';
            link = `main-signets-${valks.indexOf(valks[i])}`;
        }
        if (j == 1) {
            letter = 'S';
            link = `secondary-signets-${valks.indexOf(valks[i])}`;
        }
        if (j == 2 && 3 in valks[i].signetTable) {
            letter = 'T';
            link = `transitional-signets-${valks.indexOf(valks[i])}`;
        }
        if ((j == 3 && 'notes' in valks[i]) || (j == 2 && !(3 in valks[i].signetTable))) {
            letter = 'N';
            link = `notes-${valks.indexOf(valks[i])}`;
        }
        anchorDiv.innerText = letter;

        const anchor = document.createElement('a');
        anchor.setAttribute('href', `#${link}`);

        const linkSpanner = document.createElement('span');
        linkSpanner.classList.add('link-spanner', 'pos-abs');

        anchor.appendChild(linkSpanner);
        anchorDiv.appendChild(anchor);
        anchorContainer.appendChild(anchorDiv);
    }
    guideContainer.appendChild(anchorContainer);
    
    const emblemSupportDiv = document.createElement('div');
    emblemSupportDiv.classList.add('emblem-support', 'flex', 'f-row');
    // emblem table
    const emblemTableDiv = document.createElement('div');
    emblemTableDiv.classList.add('emblem', 'flex', 'fh-center');

    const emblemTable = document.createElement('table');
    const emblemTableHead = emblemTable.createTHead();
    const emblemTableHeadRow = emblemTableHead.insertRow();
    for (let j = 0; j < emblemTableHeaders.length; j++) {
        const emblemTableHeader = document.createElement('th');
        emblemTableHeader.textContent = emblemTableHeaders[j];
        if (j == 1) emblemTableHeader.setAttribute('colspan', '2');

        emblemTableHeadRow.appendChild(emblemTableHeader);
    }
    emblemTableHead.appendChild(emblemTableHeadRow);

    const emblemTableBody = emblemTable.createTBody();
    for (let j = 1; j <= 3; j++) { // rows
        const emblemTableBodyRow = emblemTableBody.insertRow();
        for (let k = 1; k <= 2; k++) { // cells
            let emblemTableBodyCell;
            if (k == 1) {
                emblemTableBodyCell = emblemTableBodyRow.insertCell();
                emblemTableBodyCell.textContent = emblemTableTimeColumn[j - 1];
            } else {
                for (let l = 1; l <= Object.keys(valks[i].emblem[j]).length; l++) {
                    supportTableBodyCell = imageAndLabel(emblemTableBodyCell, emblemTableBodyRow, valks[i].emblem[j], l, false);
                }
                if (Object.keys(valks[i].emblem[j]).length == 1) {
                    emblemTableBodyCell = emblemTableBodyRow.insertCell();
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
    const supportTableDiv = document.createElement('div');
    supportTableDiv.classList.add('supp', 'flex', 'fh-center');

    const supportTable = document.createElement('table');
    const supportTableHead = supportTable.createTHead();
    const supportTableHeadRow = supportTableHead.insertRow();
    for (let j = 0; j < supportTableHeaders.length; j++) {
        const supportTableHeader = document.createElement('th');
        supportTableHeader.textContent = supportTableHeaders[j];
        if (j == 1) supportTableHeader.setAttribute('colspan', '4');

        supportTableHeadRow.appendChild(supportTableHeader);
    }
    supportTableHead.appendChild(supportTableHeadRow);

    const supportTableBody = supportTable.createTBody();
    for (let j = 1; j <= 2; j++) { // rows
        const supportTableBodyRow = supportTableBody.insertRow();
        for (let k = 1; k <= 3; k++) { // cells
            let supportTableBodyCell;
            if (k == 1) {
                supportTableBodyCell = supportTableBodyRow.insertCell();
                supportTableBodyCell.textContent = supportTableTypeColumn[j - 1];
            } else {
                for (let l = 1; l <= Object.keys(valks[i].support[j][k - 1]).length; l++) {
                    supportTableBodyCell = imageAndLabel(supportTableBodyCell, supportTableBodyRow, valks[i].support[j][k - 1], l, true);
                }
                if (Object.keys(valks[i].support[j][k - 1]).length == 1) {
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
    guideContainer.appendChild(emblemSupportDiv);
    // signets
    for (let j = 0; j < Object.keys(valks[i].signetTable).length; j++) { // tables
        const signetTitle = document.createElement('h3');
        const signetTable = document.createElement('table');
        let title, link, headers;
        switch (j) {
            case 0:
                signetTitle.textContent = 'Exclusive Signets';
                guideContainer.appendChild(signetTitle);
                signetTable.classList.add('exclusive-tbl');
                headers = exclusiveTableColumns;
                break;
            default:
                switch (j) {
                    case 1:
                        title = 'Main Signets';
                        link = 'main-signets';
                        signetTable.classList.add('main-tbl');
                        break;
                    case 2:
                        title = 'Secondary Signets';
                        link = 'secondary-signets';
                        signetTable.classList.add('secondary-tbl');
                        break;
                    case 3:
                        title = 'Transitional Signets'
                        link ='transitional-signets';
                        signetTable.classList.add('transitional-tbl');
                        break;
                }
                signetTitle.setAttribute('id', `${link}-${valks.indexOf(valks[i])}`)
                signetTitle.textContent = title;

                headers = signetTableColumns;
                
                const signets = document.createElement('div');
                signets.classList.add('rec-signets', 'flex', 'f-row');
                for (let k = 0; k < Object.keys(valks[i].signet[j]).length; k++) {
                    const recSignetDiv = document.createElement('div');
                    recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', valks[i].signet[j][k][0].name.toLowerCase());
                    
                    const recSignetsLabel = document.createElement('label');
                    recSignetsLabel.textContent = valks[i].signet[j][k][1];

                    recSignetDiv.appendChild(recSignetsLabel);
                    signets.appendChild(recSignetDiv);
                }
                guideContainer.appendChild(signetTitle);
                guideContainer.appendChild(signets);
                break;
        }
        const signetTableHead = signetTable.createTHead();
        const signetTableHeadRow = signetTableHead.insertRow(); 
        for (let k = 0; k < 2; k++) {
            const signetTableHeader = document.createElement('th');
            signetTableHeader.textContent = headers[k];
            signetTableHeadRow.appendChild(signetTableHeader);
        }
        signetTableHead.appendChild(signetTableHeadRow);

        const signetTableBody = signetTable.createTBody();
        for (let k = 1; k <= Object.keys(valks[i].signetTable[j]).length; k++) { // rows
            const signetTableBodyRow = signetTableBody.insertRow();
            for (let l = 0; l < Object.keys(valks[i].signetTable[j][k]).length; l++) { // cells
                let signetTableBodyCell;
                // check if value isn't only a number, which is a value for rowspan 
                if (!(/^[0-9]+$/.test(valks[i].signetTable[j][k][l])) && Object.keys(valks[i].signetTable[j][k])[l] != 'detail') {
                    let prepend = '';
                    if (j == 0 && l == 0) prepend = 'Blessing of ';
                    signetTableBodyCell = signetTableBodyRow.insertCell();
                    signetTableBodyCell.textContent = `${prepend}${valks[i].signetTable[j][k][l]}`;
                    if (valks[i].signetTable[j][k][l] == '') signetTableBodyCell.previousElementSibling.classList.add('noted');
                }
                try { // check if next value is only a number, if so, apply as rowspan value
                    if (/^[0-9]+$/.test(valks[i].signetTable[j][k][l + 1])) {
                        signetTableBodyCell.setAttribute('rowspan', valks[i].signetTable[j][k][l + 1]);
                    }
                } catch (e) { continue; }
            }
            signetTableBody.appendChild(signetTableBodyRow);
        }
        signetTable.appendChild(signetTableHead);
        signetTable.appendChild(signetTableBody);
        guideContainer.appendChild(signetTable);
    }
    if ('notes' in valks[i]) {
        const notes = document.createElement('div');
        notes.setAttribute('id', `notes-${valks.indexOf(valks[i])}`)
        notes.classList.add('notes');
        notes.innerHTML = `Notes:<br><br>${valks[i].notes}`;

        guideContainer.appendChild(notes);
    }
    collContainer.appendChild(button);
    collContainer.appendChild(guideContainer);
}
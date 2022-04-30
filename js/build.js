const collContainer = document.querySelector('#main-container');

function imageAndLabel(cell, row, item, l, hoverLabel) {
    cell = row.insertCell();
    cell.classList.add('pos-relative');

    let pic = document.createElement('div');
    pic.classList.add('pic')
    pic.classList.add(item[l].acr);

    let label = document.createElement('label');
    label.classList.add('tooltip');

    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');

    let span = document.createElement('span');
    span.textContent = item[l].name;
    // for support valk images
    if (hoverLabel) {
        let acr = document.createElement('p');
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
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('banner');
    button.classList.add('hidden');

    let banner = document.createElement('div');
    banner.setAttribute('id', valks[i].acr);

    let mainNameDiv = document.createElement('div');
    mainNameDiv.classList.add('main-name');
    let mainName = document.createElement('span');
    mainName.classList.add('vertical-text');
    mainName.setAttribute('id', `${valks[i].acr}-name`);
    mainName.textContent = valks[i].name.replace(/[:']/g, '');

    mainNameDiv.appendChild(mainName);
    button.appendChild(banner);
    button.appendChild(mainNameDiv);
    // guide content
    let guideContainer = document.createElement('div');
    guideContainer.classList.add('guide-container');

    let showHide = document.createElement('div');
    showHide.classList.add('show-hide');
    // inner name
    let innerNameDiv = document.createElement('div');
    let innerName = document.createElement('h2');
    innerName.textContent = valks[i].name;

    innerNameDiv.appendChild(innerName);
    showHide.appendChild(innerNameDiv);
    // rated difficulty
    let ratingDiv = document.createElement('div');
    let rating = document.createElement('p');
    rating.classList.add('rating')
    rating.textContent = valks[i].rate;

    ratingDiv.appendChild(rating);
    showHide.appendChild(ratingDiv);
    // signets images
    let recSignets = document.createElement('div');
    recSignets.classList.add('rec-signets');
    for (let j = 1; j <= Object.keys(valks[i].signet).length; j++) {
        for (let k = 0; k < Object.keys(valks[i].signet[j]).length; k++) {
            let recSignetDiv = document.createElement('div');
            recSignetDiv.classList.add('signet');
            recSignetDiv.classList.add('sig-tog');
            recSignetDiv.classList.add(valks[i].signet[j][k][0].name.toLowerCase());

            recSignets.appendChild(recSignetDiv);
        }
    }
    showHide.appendChild(recSignets);
    // anchors
    let anchorContainer = document.createElement('div');
    anchorContainer.classList.add('anchor-container');
    let anchors = 2;
    if (3 in valks[i].signetTable) anchors += 1; // check for transitional table
    if ('notes' in valks[i]) anchors += 1;
    for (let j = 0; j < anchors; j++) {
        let letter, link;
        let anchorDiv = document.createElement('div');
        anchorDiv.classList.add('anchor');

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

        let anchor = document.createElement('a');
        anchor.setAttribute('href', `#${link}`);

        let linkSpanner = document.createElement('span');
        linkSpanner.classList.add('link-spanner');

        anchor.appendChild(linkSpanner);
        anchorDiv.appendChild(anchor);
        anchorContainer.appendChild(anchorDiv);
    }
    showHide.appendChild(anchorContainer);
    
    let emblemSupportDiv = document.createElement('div');
    emblemSupportDiv.classList.add('emblem-support');
    // emblem table
    let emblemTableDiv = document.createElement('div');
    emblemTableDiv.classList.add('emblem');

    let emblemTable = document.createElement('table');
    let emblemTableHead = emblemTable.createTHead();
    let emblemTableHeadRow = emblemTableHead.insertRow();
    for (let j = 0; j < emblemTableHeaders.length; j++) {
        let emblemTableHeader = document.createElement('th');
        emblemTableHeader.textContent = emblemTableHeaders[j];
        if (j == 1) emblemTableHeader.setAttribute('colspan', '2');

        emblemTableHeadRow.appendChild(emblemTableHeader);
    }
    emblemTableHead.appendChild(emblemTableHeadRow);

    let emblemTableBody = emblemTable.createTBody();
    for (let j = 1; j <= 3; j++) { // rows
        let emblemTableBodyRow = emblemTableBody.insertRow();
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
    let supportTableDiv = document.createElement('div');
    supportTableDiv.classList.add('supp');

    let supportTable = document.createElement('table');
    let supportTableHead = supportTable.createTHead();
    let supportTableHeadRow = supportTableHead.insertRow();
    for (let j = 0; j < supportTableHeaders.length; j++) {
        let supportTableHeader = document.createElement('th');
        supportTableHeader.textContent = supportTableHeaders[j];
        if (j == 1) supportTableHeader.setAttribute('colspan', '4');

        supportTableHeadRow.appendChild(supportTableHeader);
    }
    supportTableHead.appendChild(supportTableHeadRow);

    let supportTableBody = supportTable.createTBody();
    for (let j = 1; j <= 2; j++) { // rows
        let supportTableBodyRow = supportTableBody.insertRow();
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
    showHide.appendChild(emblemSupportDiv);
    // signets
    for (let j = 0; j < Object.keys(valks[i].signetTable).length; j++) { // tables
        let signetTitle = document.createElement('h3'), title, link;
        let signetTable = document.createElement('table'), headers;
        switch (j) {
            case 0:
                signetTitle.textContent = 'Exclusive Signets';
                showHide.appendChild(signetTitle);
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
                
                let signets = document.createElement('div');
                signets.classList.add('rec-signets');
                for (let k = 0; k < Object.keys(valks[i].signet[j]).length; k++) {
                    let recSignetDiv = document.createElement('div');
                    recSignetDiv.classList.add('signet');
                    recSignetDiv.classList.add('sig-sep');
                    recSignetDiv.classList.add(valks[i].signet[j][k][0].name.toLowerCase());
                    
                    let recSignetsLabel = document.createElement('label');
                    recSignetsLabel.textContent = valks[i].signet[j][k][1];

                    recSignetDiv.appendChild(recSignetsLabel);
                    signets.appendChild(recSignetDiv);
                }
                showHide.appendChild(signetTitle);
                showHide.appendChild(signets);
                break;
        }
        let signetTableHead = signetTable.createTHead();
        let signetTableHeadRow = signetTableHead.insertRow(); 
        for (let k = 0; k < 2; k++) {
            let signetTableHeader = document.createElement('th');
            signetTableHeader.textContent = headers[k];
            signetTableHeadRow.appendChild(signetTableHeader);
        }
        signetTableHead.appendChild(signetTableHeadRow);

        let signetTableBody = signetTable.createTBody();
        for (let k = 1; k <= Object.keys(valks[i].signetTable[j]).length; k++) { // rows
            let signetTableBodyRow = signetTableBody.insertRow();
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
        showHide.appendChild(signetTable);
    }
    if ('notes' in valks[i]) {
        let notes = document.createElement('div');
        notes.setAttribute('id', `notes-${valks.indexOf(valks[i])}`)
        notes.classList.add('notes');
        notes.innerHTML = `Notes:<br><br>${valks[i].notes}`;

        showHide.appendChild(notes);
    }
    guideContainer.appendChild(showHide);
    collContainer.appendChild(button);
    collContainer.appendChild(guideContainer);
}
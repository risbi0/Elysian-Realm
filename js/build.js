const collContainer = document.querySelector('#coll-container');

function makeSupportValk(supportTableBodyCell, i, j, l, m) {
    supportTableBodyCell.classList.add('pos-relative');

    let avatarDiv = document.createElement('div');
    avatarDiv.classList.add('pic')
    avatarDiv.classList.add(valks[i].support[j][l][m].acr);

    let supportLabel = document.createElement('label');
    supportLabel.classList.add('tooltip');

    let supportAcr = document.createElement('p');
    supportAcr.textContent = valks[i].support[j][l][m].acr.toUpperCase();

    let supportInput = document.createElement('input');
    supportInput.setAttribute('type', 'checkbox');

    let supportSpan = document.createElement('span');
    supportSpan.textContent = valks[i].support[j][l][m].name;

    supportLabel.appendChild(supportAcr);
    supportLabel.appendChild(supportInput);
    supportLabel.appendChild(supportSpan);

    supportTableBodyCell.appendChild(avatarDiv)
    supportTableBodyCell.appendChild(supportLabel);
}
function signetTitleAndSignets(title, showHide, i, j, link) {
    let signetTitle = document.createElement('h3');
    signetTitle.setAttribute('id', `${link}-${valks.indexOf(valks[i])}`)
    signetTitle.textContent = title;
    
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
}
for (let i = 0; i < valks.length; i++) {
    // acordion item
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('collapsible');
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
    // accordion content
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
    // emblem table
    let emblemTableDiv = document.createElement('div');
    emblemTableDiv.classList.add('emblem');

    let emblemTable = document.createElement('table');
    let emblemTableHead = emblemTable.createTHead();
    let emblemTableHeadRow = emblemTableHead.insertRow();
    for (let j = 0; j < emblemTableHeaders.length; j++) {
        let emblemTableHeader = document.createElement('th');
        emblemTableHeader.textContent = emblemTableHeaders[j];
        emblemTableHeadRow.appendChild(emblemTableHeader);
    }
    emblemTableHead.appendChild(emblemTableHeadRow);

    let emblemTableBody = emblemTable.createTBody();
    for (let j = 1; j <= 3; j++) { // rows
        let emblemTableBodyRow = emblemTableBody.insertRow();
        for (let k = 1; k <= 2; k++) { // cells
            let emblemTableBodyCell = emblemTableBodyRow.insertCell();
            switch (k) {
                case 1: emblemTableBodyCell.textContent = emblemTableTimeColumn[j - 1]; break;
                case 2: emblemTableBodyCell.textContent = valks[i].emblem[j]; break;
            }
        }
        emblemTableBody.appendChild(emblemTableBodyRow);
    }
    emblemTable.appendChild(emblemTableHead);
    emblemTable.appendChild(emblemTableBody);

    emblemTableDiv.appendChild(emblemTable);

    showHide.appendChild(emblemTableDiv);
    // supports table
    let supportTableDiv = document.createElement('div');
    supportTableDiv.classList.add('supp');

    let supportTable = document.createElement('table');
    let supportTableHead = supportTable.createTHead();
    let supportTableHeadRow = supportTableHead.insertRow();
    for (let j = 0; j < supportTableHeaders.length; j++) {
        let supportTableHeader = document.createElement('th');
        supportTableHeader.textContent = supportTableHeaders[j];
        supportTableHeadRow.appendChild(supportTableHeader);
        if (j == 1 || j == 2) { supportTableHeader.setAttribute('colspan', '2'); }
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
                if (Object.keys(valks[i].support[j][k - 1]).length == 2) {
                    for (let l = 1; l <= 2; l++) {
                        supportTableBodyCell = supportTableBodyRow.insertCell();
                        makeSupportValk(supportTableBodyCell, i, j, k - 1, l);
                    }
                } else {
                    supportTableBodyCell = supportTableBodyRow.insertCell();
                    supportTableBodyCell.setAttribute('colspan', '2');
                    makeSupportValk(supportTableBodyCell, i, j, k - 1, 1);
                }
            }
        }
        supportTableBody.appendChild(supportTableBodyRow);
    }
    supportTable.appendChild(supportTableHead);
    supportTable.appendChild(supportTableBody);

    supportTableDiv.appendChild(supportTable);
    
    showHide.appendChild(supportTableDiv);
    // signets
    for (let j = 0; j < Object.keys(valks[i].signetTable).length; j++) { // tables
        if (j == 0) {
            let signetTitle = document.createElement('h3');
            signetTitle.textContent = 'Exclusive Signets';
            showHide.appendChild(signetTitle);
        }
        if (j == 1) signetTitleAndSignets('Main Signets', showHide, i, j, link='main-signets');
        if (j == 2) signetTitleAndSignets('Secondary Signets', showHide, i, j, link='secondary-signets');
        if (j == 3) signetTitleAndSignets('Transitional Signets', showHide, i, j, link='transitional-signets');

        let signetTable = document.createElement('table');
        if (j == 0) signetTable.classList.add('exclusive-tbl');
        if (j == 1) signetTable.classList.add('main-tbl');
        if (j == 2) signetTable.classList.add('secondary-tbl');
        if (j == 3) signetTable.classList.add('transitional-tbl');

        let signetTableHead = signetTable.createTHead();
        let signetTableHeadRow = signetTableHead.insertRow(); 
        for (let k = 0; k < signetTableColumns.length; k++) {
            let signetTableHeader = document.createElement('th');
            signetTableHeader.textContent = signetTableColumns[k];
            signetTableHeadRow.appendChild(signetTableHeader);
        }
        signetTableHead.appendChild(signetTableHeadRow);

        let signetTableBody = signetTable.createTBody();
        for (let k = 1; k <= Object.keys(valks[i].signetTable[j]).length; k++) { // rows
            let signetTableBodyRow = signetTableBody.insertRow();
            for (let l = 0; l < Object.keys(valks[i].signetTable[j][k]).length; l++) { // cells
                let signetTableBodyCell;
                //for (key in valks[i].signetTable[j][k]) { if (key == 'mark') { marked = true; }}  
                // check if value isn't only a number, which is a value for rowspan 
                if (!(/^[0-9]+$/.test(valks[i].signetTable[j][k][l]))) {
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
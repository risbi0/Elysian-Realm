const collContainer = document.querySelector('#coll-container');

for (let i = 0; i < valks.length; i++) {
    // acordion item
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', valks[i].acr);
    button.classList.add('collapsible');

    let mainName = document.createElement('span');
    mainName.classList.add('vertical-text');
    mainName.innerHTML = valks[i].name.replace(':', '');

    button.appendChild(mainName);
    // accordion content
    let guideContainer = document.createElement('div');
    guideContainer.classList.add('guide-container');

    let showHide = document.createElement('div');
    showHide.classList.add('show-hide');
    // inner name
    let innerNameDiv = document.createElement('div');
    let innerName = document.createElement('h2');
    innerName.innerHTML = valks[i].name;

    innerNameDiv.appendChild(innerName);
    showHide.appendChild(innerNameDiv);
    // builds
    for (let j = 0; j < Object.keys(valks[i].builds).length; j++) {
        if (Object.keys(valks[i].builds).length > 1) {
            let buildNo = document.createElement('h4');
            buildNo.innerHTML = `BUILD ${j + 1}`;
            buildNo.setAttribute('id', `build-${j + 1}`);
            if (j == 0) {
                let buildAnchorDiv = document.createElement('div');
                buildAnchorDiv.classList.add('build-anchor');
                for (let k = 0; k < Object.keys(valks[i].builds).length; k++) {
                    let buildAnchor = document.createElement('a');
                    buildAnchor.setAttribute('href', `#build-${k + 1}`);
                    buildAnchor.innerHTML = `[${k + 1}]`;

                    buildAnchorDiv.appendChild(buildAnchor);
                }
                showHide.appendChild(buildAnchorDiv);
            }
            showHide.appendChild(buildNo);
        }
        // signets image and anchor
        let recSignets = document.createElement('div');
        recSignets.classList.add('rec-signets');
        for (let k = 1; k <= Object.keys(valks[i].builds[j].signet).length; k++) {
            let recSignetDiv = document.createElement('div');
            recSignetDiv.classList.add('signet');
            recSignetDiv.classList.add(valks[i].builds[j].signet[k].name);

            let recSignetAnchor = document.createElement('a');
            recSignetAnchor.setAttribute('href', `#${valks[i].acr}-${valks[i].builds[j].signet[k].name}-${j + 1}`);
            recSignetAnchor.innerHTML = 'O';

            let recSignetsLabel = document.createElement('label');
            recSignetsLabel.innerHTML = valks[i].builds[j].signetPr[k];

            recSignetDiv.appendChild(recSignetAnchor);
            recSignetDiv.appendChild(recSignetsLabel);

            recSignets.appendChild(recSignetDiv);
        }
        // comp table
        let compTableDiv = document.createElement('div');
        compTableDiv.classList.add('comp');
        compTableDiv.classList.add('tbl');

        let compTable = document.createElement('table');
        let compTableHead = compTable.createTHead();
        let compTableHeadRow = compTableHead.insertRow();
        for (let k = 0; k < compTableHeaders.length; k++) {
            let compTableHeader = document.createElement('th');
            compTableHeader.innerHTML = compTableHeaders[j];
            compTableHeadRow.appendChild(compTableHeader);
            if (k == 2) { compTableHeader.setAttribute('colspan', '2'); }
        }
        compTableHead.appendChild(compTableHeadRow);

        let compTableBody = compTable.createTBody();
        for (let k = 1; k <= 3; k++) { // rows
            let compTableBodyRow = compTableBody.insertRow();
            for (let l = 1; l <= 4; l++) { // cells
                let compTableBodyCell = compTableBodyRow.insertCell();
                switch (l) {
                    // 1st col (time column)
                    case 1:
                        compTableBodyCell.appendChild(document.createTextNode(compTableTimeColumn[k - 1]));
                        break;
                    // 2nd col (emblem column)
                    case 2:
                        compTableBodyCell.appendChild(document.createTextNode(valks[i].builds[j].emblem[k]));
                        break;
                    // 3rd and 4th col (support column)
                    case 3: case 4:
                        compTableBodyCell.classList.add(valks[i].builds[j][l][k].acr);

                        let supportLabel = document.createElement('label');
                        supportLabel.classList.add('tooltip');
                        supportLabel.innerHTML = valks[i].builds[j][l][k].acr.toUpperCase();

                        let supportInput = document.createElement('input');
                        supportInput.setAttribute('type', 'checkbox');

                        let supportSpan = document.createElement('span');
                        supportSpan.innerHTML = valks[i].builds[j][l][k].name;

                        supportLabel.appendChild(supportInput);
                        supportLabel.appendChild(supportSpan);

                        compTableBodyCell.appendChild(supportLabel);
                        break;
                }
            }
            compTableBody.appendChild(compTableBodyRow);
        }
        compTable.appendChild(compTableHead);
        compTable.appendChild(compTableBody);

        compTableDiv.appendChild(compTable);

        showHide.appendChild(recSignets);
        showHide.appendChild(compTableDiv);

        for (let k = 0; k < Object.keys(valks[i].builds[j].signetTable).length; k++) { // tables
            let signetTitle = document.createElement('h3');
            if (k == 0) {
                signetTitle.innerHTML = `Signets of ${elysiaSignetName}`;
            } else {
                signetTitle.innerHTML = `Signets of ${valks[i].builds[j].signet[k].signet}`;
                signetTitle.setAttribute('id', `${valks[i].acr}-${valks[i].builds[j].signet[k].name}-${j + 1}`);
            }
            let signetTable = document.createElement('table');
            let signetTableHead = signetTable.createTHead();
            let signetTableHeadRow = signetTableHead.insertRow();
            for (let l = 0; l < signetTableColumns.length; l++) {
                let signetTableHeader = document.createElement('th');
                signetTableHeader.innerHTML = signetTableColumns[l];
                signetTableHeadRow.appendChild(signetTableHeader);
            }
            signetTableHead.appendChild(signetTableHeadRow);
                
            let signetTableBody = signetTable.createTBody();
            for (let l = 1; l <= Object.keys(valks[i].builds[j].signetTable[k]).length; l++) { // rows
                let signetTableBodyRow = signetTableBody.insertRow();
                for (let m = 0; m < Object.keys(valks[i].builds[j].signetTable[k][l]).length; m++) { // cells
                    let signetTableBodyCell;
                    switch (m) {
                        case 0:
                            let apendeeStr1 = '', apendeeStr2 = '';
                            signetTableBodyCell = signetTableBodyRow.insertCell();
                            if (l == 7 && !('pr' in valks[i].builds[j].signetTable[k][l])) {
                                signetTableBodyCell.setAttribute('colspan', '2');
                                signetTableBodyCell.style.fontSize = '20px';
                            } else if (l == 7) {
                                apendeeStr2 = ' (Nexus Signet)';
                            } else if (k == 0) {
                                apendeeStr1 = 'Blessing of '
                            }
                            signetTableBodyCell.appendChild(document.createTextNode(`${apendeeStr1}${valks[i].builds[j].signetTable[k][l].name}${apendeeStr2}`));
                            break;
                        case 1:
                            signetTableBodyCell = signetTableBodyRow.insertCell();
                            signetTableBodyCell.appendChild(document.createTextNode(valks[i].builds[j].signetTable[k][l].pr));
                            if ('rowspan' in valks[i].builds[j].signetTable[k][l]) {
                                signetTableBodyCell.setAttribute('rowspan', valks[i].builds[j].signetTable[k][l].rowspan);
                            }
                            break;
                    }
                }
                signetTableBody.appendChild(signetTableBodyRow);
            }
            signetTable.appendChild(signetTableHead);
            signetTable.appendChild(signetTableBody);

            showHide.appendChild(signetTitle);
            showHide.appendChild(signetTable);
        }
    }
    guideContainer.appendChild(showHide);

    collContainer.appendChild(button);
    collContainer.appendChild(guideContainer);
}
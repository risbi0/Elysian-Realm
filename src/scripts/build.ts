import { valks } from './guide';
import { emblemTableHeaders, emblemTableTimeColumn,
		 supportTableHeaders, supportTableTypeColumn,
		 exclusiveTableHeaders, signetTableHeaders,
		 buffTableHeaders, isMobile, NameAcr, buffs } from './data';

function imageAndLabel(cell: HTMLTableCellElement,
					   row: HTMLTableRowElement,
					   gear: NameAcr,
					   hoverLabel: boolean): HTMLTableCellElement {
	cell = row.insertCell();
	cell.classList.add('pos-rel');

	const pic: HTMLDivElement = document.createElement('div');
	pic.classList.add('pic', gear.acr);

	cell.appendChild(pic);

	if (gear.acr !== 'hawp') {
		const label: HTMLLabelElement = document.createElement('label');
		label.classList.add('tooltip', 'flex', 'fh-center', 'pos-abs');

		const input: HTMLInputElement = document.createElement('input');
		input.classList.add('pos-abs');
		input.setAttribute('type', 'checkbox');

		const span: HTMLSpanElement = document.createElement('span');
		span.classList.add('pos-abs');
		span.textContent = gear.name;
		// for support valk images
		if (hoverLabel) {
			cell.classList.add('supp-pic');
			const acr: HTMLParagraphElement = document.createElement('p');
			acr.textContent = gear.acr.toUpperCase();
			label.appendChild(acr);
		}
		label.appendChild(input);
		label.appendChild(span);
		cell.appendChild(label);
	}
	return cell;
}

function getIndex(str: string): number {
	for (let i = 0; i < buffs.length; i++) {
		for (let j = 0; j < buffs[i].length; j++) {
			if (buffs[i][j] === str) {
				return i;
			}
		}
	}
	return -1;
}

export const mainContainer = document.querySelector('#main-container') as HTMLDivElement;
export const guideContainer = document.querySelector('#guide-container') as HTMLDivElement;
export const bg = document.querySelector('#bg') as HTMLDivElement;
const title = document.querySelector('header h1') as HTMLDivElement;
// setup classes
const buttonClasses: string[] = ['banner', 'pos-rel', 'hidden'];
const bannerClasses: string[] = [];
const mainNameDivClasses: string[] = ['main-name', 'flex', 'fh-center', 'fv-center', 'pos-abs'];
const mainNameClasses: string[] = ['vertical-text'];
let device = '';
if (isMobile) {
	title.style.fontSize = '4.5em';
	mainContainer.classList.add('f-col');
	mainContainer.style.overflowX = 'hidden';
	buttonClasses.push('overflow-hide');
	device = 'mb';
} else {
	device = 'dt';
}
bg.classList.add(`bg-${device}`);
mainContainer.classList.add(device);
bannerClasses.push(device, `${device}-pos`);
mainNameClasses.push(device);

// DOM generation start
for (let i = 0; i < valks.length; i++) {
	// banners start
	const button: HTMLButtonElement = document.createElement('button');
	button.setAttribute('type', 'button');
	button.classList.add(...buttonClasses);

	const banner: HTMLDivElement = document.createElement('div');
	banner.setAttribute('id', `${valks[i].acr}-${device}`);
	banner.classList.add(...bannerClasses);

	const mainNameDiv: HTMLDivElement = document.createElement('div');
	mainNameDiv.classList.add(...mainNameDivClasses, `-${valks[i].acr}-`);
	const mainName: HTMLSpanElement = document.createElement('span');
	mainName.classList.add(...mainNameClasses, `-${valks[i].acr}-`);
	mainName.textContent = valks[i].name.replace(/[^a-z A-Z -]/g, '');

	mainNameDiv.appendChild(mainName);
	button.appendChild(banner);
	button.appendChild(mainNameDiv);
	mainContainer.appendChild(button);
	// banners end

	// guides start
	const guideContent = document.createElement('div');
	guideContent.classList.add('guide-content', 'flex', 'fv-center', 'f-col', device, 'no-display');

	if (!isMobile) {
		// inner name
		const innerName: HTMLHeadingElement = document.createElement('h2');
		innerName.textContent = valks[i].name;

		guideContent.appendChild(innerName);
	}

	// iterate through builds
	for (let j = 0; j < Object.keys(valks[i].builds).length; j++) {
		const signetTypes: string[] = Object.keys(valks[i].builds[j].signetTable);
		const [, ...signetTypesWithoutExclusive]: string[] = signetTypes;
		// build name
		if (Object.keys(valks[i].builds).length > 1) {
			const buildNo: HTMLParagraphElement = document.createElement('p');
			buildNo.classList.add('build-no');
			buildNo.textContent = `Build: ${valks[i].builds[j].name}`;

			guideContent.appendChild(buildNo);
		}
		// signets images
		const recSignets: HTMLDivElement = document.createElement('div');
		recSignets.classList.add('rec-signets', 'flex', 'f-row');
		signetTypesWithoutExclusive.forEach((signetType) => {
			for (let k = 0; k < valks[i].builds[j].signet[signetType].length; k++) {
				const recSignetDiv: HTMLDivElement = document.createElement('div');
				recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', valks[i].builds[j].signet[signetType][k][0].name.toLowerCase());

				recSignets.appendChild(recSignetDiv);
			}
		});
		guideContent.appendChild(recSignets);
		// anchors start
		const anchorContainer: HTMLDivElement = document.createElement('div');
		anchorContainer.classList.add('flex', 'f-row');

		const anchorSymbol = document.createElement('span');
		anchorSymbol.classList.add('material-symbols-outlined', 'flex', 'fv-center');
		anchorSymbol.textContent = 'anchor';
		anchorContainer.appendChild(anchorSymbol);

		const hasNotes: boolean = 'notes' in valks[i].builds[j];
		let anchorTypes: string[] = [...signetTypes];
		if (hasNotes) anchorTypes.push('notes');
		anchorTypes.forEach((anchorType) => {
			const anchorDiv: HTMLDivElement = document.createElement('div');
			anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');
			anchorDiv.textContent = anchorType.charAt(0).toUpperCase();

			const anchor: HTMLAnchorElement = document.createElement('a');
			anchor.setAttribute('href', `#${anchorType}-${i + 1}-${j + 1}`);

			const linkSpanner: HTMLSpanElement = document.createElement('span');
			linkSpanner.classList.add('link-spanner', 'pos-abs');

			anchor.appendChild(linkSpanner);
			anchorDiv.appendChild(anchor);
			anchorContainer.appendChild(anchorDiv);
		});
		anchorContainer.appendChild(anchorSymbol.cloneNode(true));
		//  anchors end
		guideContent.appendChild(anchorContainer);

		// buffs tables start
		if ('buff' in valks[i].builds[j]) {
			const buffTable: HTMLTableElement = document.createElement('table');
			buffTable.classList.add('buff-tbl');
			// header
			const buffTableHead: HTMLTableSectionElement = buffTable.createTHead();
			const buffTableHeadRow: HTMLTableRowElement = buffTableHead.insertRow();
			for (let k = 0; k < buffTableHeaders.length; k++) {
				const buffTableHeader: HTMLTableCellElement = document.createElement('th');
				buffTableHeader.textContent = buffTableHeaders[k];

				buffTableHeadRow.appendChild(buffTableHeader);
			}
			buffTableHead.appendChild(buffTableHeadRow);
			// body
			const buffTableBody: HTMLTableSectionElement = buffTable.createTBody();
			for (let k = 0; k < valks[i].builds[j].buff.length; k++) { // rows
				const buffTableBodyRow: HTMLTableRowElement = buffTableBody.insertRow();
				const cost: string = (5 * getIndex(valks[i].builds[j].buff[k])).toString();
				for (let l = 0; l < 2; l++) { // cells
					const buffTableBodyCell: HTMLTableCellElement = buffTableBodyRow.insertCell();
					if (l === 0) {
						buffTableBodyCell.textContent = cost;
					} else {
						buffTableBodyCell.textContent = valks[i].builds[j].buff[k];
					}
				}
			}
			buffTable.appendChild(buffTableHead);
			buffTable.appendChild(buffTableBody);
			guideContent.appendChild(buffTable);
		}
		// buffs table end

		const emblemSupportDiv: HTMLDivElement = document.createElement('div');
		emblemSupportDiv.classList.add('emblem-support', 'flex', 'f-row');
		// emblem table start
		const emblemTableDiv: HTMLDivElement = document.createElement('div');
		emblemTableDiv.classList.add('emblem', 'flex', 'fh-center');

		const emblemTable: HTMLTableElement = document.createElement('table');
		// header
		const emblemTableHead: HTMLTableSectionElement = emblemTable.createTHead();
		const emblemTableHeadRow: HTMLTableRowElement = emblemTableHead.insertRow();
		for (let k = 0; k < emblemTableHeaders.length; k++) {
			const emblemTableHeader: HTMLTableCellElement = document.createElement('th');
			emblemTableHeader.textContent = emblemTableHeaders[k];
			if (k === 1) emblemTableHeader.setAttribute('colspan', '2');

			emblemTableHeadRow.appendChild(emblemTableHeader);
		}
		emblemTableHead.appendChild(emblemTableHeadRow);
		// body
		const emblemTableBody: HTMLTableSectionElement = emblemTable.createTBody();
		for (let k = 0; k < 3; k++) { // rows
			const emblemTableBodyRow: HTMLTableRowElement = emblemTableBody.insertRow();
			for (let l = 0; l < 2; l++) { // cells
				let emblemTableBodyCell: HTMLTableCellElement;
				if (l === 0) {
					emblemTableBodyCell = emblemTableBodyRow.insertCell();
					emblemTableBodyCell.textContent = emblemTableTimeColumn[k];
				} else {
					for (let m = 0; m < valks[i].builds[j].emblem[k].length; m++) {
						emblemTableBodyCell = imageAndLabel(emblemTableBodyCell!, emblemTableBodyRow, valks[i].builds[j].emblem[k][m], false);
					}
				}
			}
			emblemTableBody.appendChild(emblemTableBodyRow);
		}
		emblemTable.appendChild(emblemTableHead);
		emblemTable.appendChild(emblemTableBody);
		emblemTableDiv.appendChild(emblemTable);
		emblemSupportDiv.appendChild(emblemTableDiv);
		// emblem table end

		// supports table start
		const supportTableDiv: HTMLDivElement = document.createElement('div');
		supportTableDiv.classList.add('supp', 'flex', 'fh-center');

		const supportTable: HTMLTableElement = document.createElement('table');
		// header
		const supportTableHead: HTMLTableSectionElement = supportTable.createTHead();
		const supportTableHeadRow: HTMLTableRowElement = supportTableHead.insertRow();
		for (let k = 0; k < supportTableHeaders.length; k++) {
			const supportTableHeader: HTMLTableCellElement = document.createElement('th');
			supportTableHeader.textContent = supportTableHeaders[k];
			if (k === 1 || k === 2) supportTableHeader.setAttribute('colspan', '2');

			supportTableHeadRow.appendChild(supportTableHeader);
		}
		supportTableHead.appendChild(supportTableHeadRow);
		// body
		const supportTableBody: HTMLTableSectionElement = supportTable.createTBody();
		for (let k = 0; k < 2; k++) { // rows
			const supportTableBodyRow: HTMLTableRowElement = supportTableBody.insertRow();
			for (let l = 0; l < 3; l++) { // cells
				let supportTableBodyCell: HTMLTableCellElement;
				if (l === 0) {
					supportTableBodyCell = supportTableBodyRow.insertCell();
					supportTableBodyCell.textContent = supportTableTypeColumn[k];
				} else {
					for (let m = 0; m < valks[i].builds[j].support[k][l - 1].length; m++) {
						supportTableBodyCell = imageAndLabel(supportTableBodyCell!, supportTableBodyRow, valks[i].builds[j].support[k][l - 1][m], true);
					}
					if (valks[i].builds[j].support[k][l - 1].length === 1) {
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
		// supports table end
		guideContent.appendChild(emblemSupportDiv);

		// gear start
		if ('gear' in valks[i].builds[j]) {
			const stigTitle: HTMLHeadingElement = document.createElement('h3');
			stigTitle.textContent = 'Recommended Gear';

			guideContent.appendChild(stigTitle);

			const stigTable: HTMLTableElement = document.createElement('table');
			stigTable.classList.add('gear-tbl');

			const stigTableBody: HTMLTableSectionElement = stigTable.createTBody();
			for (let k = 0; k < Object.keys(valks[i].builds[j].gear!).length; k++) { // rows
				const stigTableBodyRow: HTMLTableRowElement = stigTableBody.insertRow();
				for (let l = 0; l < valks[i].builds[j].gear![k].length; l++) { // cells
					let stigTableBodyCell: HTMLTableCellElement;
					stigTableBodyCell = imageAndLabel(stigTableBodyCell!, stigTableBodyRow, valks[i].builds[j].gear![k][l], false);
				}
				stigTableBody.appendChild(stigTableBodyRow);
			}
			stigTable.appendChild(stigTableBody);
			guideContent.appendChild(stigTable);
		}
		// gear end

		// signet tables start
		signetTypes.forEach((signetType) => {
			const signetTitle: HTMLHeadingElement = document.createElement('h3');
			const signetTable: HTMLTableElement = document.createElement('table');
			signetTable.classList.add(`${signetType}-tbl`);

			const signetTypeIsExclusive = signetType === 'exclusive';
			let headers: string[] = [];

			// title
			signetTitle.textContent = `${signetType} signets`;
			signetTitle.setAttribute('id', `${signetType}-${i + 1}-${j + 1}`);

			guideContent.appendChild(signetTitle);

			if (!signetTypeIsExclusive) {
				// signets
				const signets: HTMLDivElement = document.createElement('div');
				signets.classList.add('rec-signets', 'flex', 'f-row');
				for (let k = 0; k < valks[i].builds[j].signet[signetType].length; k++) {
					const recSignetDiv: HTMLDivElement = document.createElement('div');
					recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', valks[i].builds[j].signet[signetType][k][0].name.toLowerCase());

					const recSignetsLabel: HTMLLabelElement = document.createElement('label');
					recSignetsLabel.textContent = valks[i].builds[j].signet[signetType][k][1] === '1' ? 'I' : 'II';

					recSignetDiv.appendChild(recSignetsLabel);
					signets.appendChild(recSignetDiv);
				}
				guideContent.appendChild(signets);
				// assign table headers
				headers = signetTableHeaders;
			} else {
				headers = exclusiveTableHeaders;
			}

			// table
			const signetTableHead: HTMLTableSectionElement = signetTable.createTHead();
			const signetTableHeadRow: HTMLTableRowElement = signetTableHead.insertRow();
			for (let k = 0; k < 2; k++) {
				const signetTableHeader: HTMLTableCellElement = document.createElement('th');
				signetTableHeader.textContent = headers[k];
				signetTableHeadRow.appendChild(signetTableHeader);
			}
			signetTableHead.appendChild(signetTableHeadRow);

			const signetTableBody: HTMLTableSectionElement = signetTable.createTBody();
			const signets = Object.keys(valks[i].builds[j].signetTable[signetType]);
			signets.forEach((key: string) => {
				const signetAmount = valks[i].builds[j].signetTable[signetType][key].length;
				for (let k = 0; k < signetAmount; k++) { // rows
					const signetTableBodyRow: HTMLTableRowElement = signetTableBody.insertRow();
					for (let l = 0; l < 2; l++) { // cells
						// change boolean depending if for exclusive table or the rest
						const applySignetName = signetTypeIsExclusive ? l === 0 : l === 1;
						const applyRowspan = signetTypeIsExclusive ? k === 0 : k === 0 && l === 0;
						if (applySignetName || applyRowspan) {
							const signetTableBodyCell: HTMLTableCellElement = signetTableBodyRow.insertCell();
							if (applySignetName) { // signet name
								signetTableBodyCell.textContent = valks[i].builds[j].signetTable[signetType][key][k];
								if (signetTypeIsExclusive) signetTableBodyCell.textContent = `Blessing of ${signetTableBodyCell.textContent}`;
							} else if (applyRowspan) { // signet owner/priority
								signetTableBodyCell.textContent = key;
								signetTableBodyCell.setAttribute('rowspan', `${signetAmount}`);
							}
						}
					}
					signetTableBody.appendChild(signetTableBodyRow);
				}
			});

			// apply bottom margin on the last signet table
			// so the bottom row wouldn't be partly covered by the fade effect on mobile
			// also useful as spacing in desktop
			if (!hasNotes) signetTable.style.marginBottom = '35px';

			signetTable.appendChild(signetTableHead);
			signetTable.appendChild(signetTableBody);
			guideContent.appendChild(signetTable);
		});
		// signet tables end

		// notes
		if (hasNotes) {
			const notes: HTMLDivElement = document.createElement('div');
			notes.setAttribute('id', `notes-${i + 1}-${j + 1}`);
			notes.classList.add('notes');
			notes.innerHTML = `Notes:<br><br>${valks[i].builds[j].notes}`;

			guideContent.appendChild(notes);
		}
	}
	guideContainer.appendChild(guideContent);
	// guides end
}
// DOM generation end
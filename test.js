/**
 * @jest-environment jsdom
 */
import { describe, test, expect } from '@jest/globals';
import { valks } from './src/scripts/guide';

// valks
for (let i = 0; i < valks.length; i++) {
    describe(`${valks[i].name}`, () => {
        // builds
        for (let j = 0; j < Object.keys(valks[i].builds).length; j++) {
            const signetTableLength = valks[i].builds[j].signetTable.length;
            const hasTransitionTable = signetTableLength === 4;
            describe(`Build #${j + 1}`, () => {
                // signet tables
                for (let k = 0; k < signetTableLength; k++) {
                    const signetTable = valks[i].builds[j].signetTable[k];
                    const tableLength = signetTable.length;
                    if (k === 0) {
                        describe(`Exclusive Signets`, () => {
                            for (let l = 0; l < tableLength; l++) {
                                if (signetTable[l].length === 3) {
                                    describe('Rowspan value', () => {
                                        const endIndex = parseInt(signetTable[l][2]);
                                        test('Within rowspan value', () => {
                                            let withinRowspanValue = true;
                                            for (let k = 1; k < endIndex; k++) {
                                                if (signetTable[l + k].length !== 1) {
                                                    console.log(signetTable[l + k]);
                                                    withinRowspanValue = false;
                                                }
                                            }
                                            if (endIndex === 1) withinRowspanValue = false;
											expect(withinRowspanValue).toBe(true);
                                        });
                                    });
                                }
                            }
                        });
                    } else {
                        let  tableName;
                        if (k === 1 && hasTransitionTable) {
                            tableName = 'Transitional';
                        } else if ((k === 1 && !hasTransitionTable) || (k === 2 && hasTransitionTable)) {
                            tableName = 'Main';
                        } else if ((k === 2 && !hasTransitionTable) || (k === 3 && hasTransitionTable)) {
                            tableName = 'Secondary';
                        }
                        describe(`${tableName} Signets`, () => {
                            const accountedRows = [];
							let signetOwner;
                            for (let l = 0; l < tableLength; l++) {
								const isSignetOwnerStart = [3, 4].includes(signetTable[l].length);
								if (isSignetOwnerStart) signetOwner = signetTable[l][0];
								describe(signetOwner, () => {
									// check if row is signet owner start
									if (isSignetOwnerStart) {
										describe('Rowspan value', () => {
											const endIndex = parseInt(signetTable[l][1]) + l;
											// store rows within range of rowspan value for another layer of validation
											accountedRows.push(valks[i].builds[j].signetTable[k].slice(l, endIndex));
											test('Next row is new signet or end of table', () => {
												expect(
													tableLength === endIndex || // end of table
													signetTable[endIndex] !== undefined && // short-circuit
													[3, 4].includes(signetTable[endIndex].length) // 3/4 = signet owner start
												).toBe(true);
											});
											test('Last row is own signet and not starting signet', () => {
												expect(
													signetTable[endIndex - 1] !== undefined && // short-circuit
													[1, 2].includes(signetTable[endIndex - 1].length) // 1/2 = signet name
												).toBe(true);
											});
										});
									}
									// check if marked signet is mentioned in notes
									if ([2, 4].includes(signetTable[l].length)) {
										let signetName;
										if (signetTable[l].length === 2) {
											signetName = signetTable[l][0];
										} else {
											signetName = signetTable[l][2];
										}
										describe('Notes', () => {
											test('Marked signet is mentioned', () => {
												expect(
													'notes' in valks[i].builds[j] && // short-circuit
													valks[i].builds[j].notes.includes(signetName)
												).toBe(true);
											});
										});
									}
								});
                            }
                            test('Accounted rows are equal to table size', () => {
                                expect(accountedRows.flat().length).toEqual(valks[i].builds[j].signetTable[k].length);
                            });
                        });
                    }
                }
            });
        }
    });
	break;
}
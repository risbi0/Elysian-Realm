/**
 * @jest-environment jsdom
 */
import { describe, test, expect } from '@jest/globals';
import { valks } from './src/scripts/guide';

// check signet names are not undefined
// valks
for (let i = 0; i < valks.length; i++) {
  describe(valks[i].name, () => {
    // builds
    for (let j = 0; j < Object.keys(valks[i].builds).length; j++) {
      describe(`Build #${j + 1}`, () => {
        // signet tables
        const signetTables = Object.keys(valks[i].builds[j].signetTable);
        const [, ...signetTableNoEx] = signetTables; // exclude exclusive signets
        signetTableNoEx.forEach((tableName) => {
          describe(`${tableName.charAt(0).toUpperCase() + tableName.slice(1)} Signets`, () => {
            // signet owners
            const signetTables = valks[i].builds[j].signetTable[tableName];
            const signetOwners = Object.keys(signetTables);
            signetOwners.forEach((signetOwner, index) => {
              describe(signetOwner, () => {
                const signetNames = signetTables[signetOwner];
                describe('Display', () => {
                  test('Signet image is correct', () => {
                    expect(signetOwner).toEqual(valks[i].builds[j].signet[tableName][index][0].name);
                  });
                  // check nexus series if nexus series is in guide
                  const nexusName = signetNames.find((signet) => signet.includes('Nexus'));
                  if (nexusName) {
                    const nexusSeries = valks[i].builds[j].signet[tableName][index][1];
                    const nexusSeriesName = valks[i].builds[j].signet[tableName][index][0][`nexus${nexusSeries}`].name;
                    test('Nexus series is correct', () => {
                      expect(nexusName).toEqual(nexusSeriesName);
                    });
                  }
                });
                describe('Signets', () => {
                  signetNames.forEach((signet) => {
                    test(signet, () => {
                      expect(signet !== undefined).toBe(true);
                    });
                  });
                });
              });
            });
          });
        });
      })
    }
  });
}
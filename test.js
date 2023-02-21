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
          const signetTables = Object.values(valks[i].builds[j].signetTable[tableName]);
          describe(`${tableName.charAt(0).toUpperCase() + tableName.slice(1)} Signets`, () => {
            signetTables.forEach((signetTable) => {
              signetTable.forEach((signet) => {
                test(signet, () => {
                  expect(signet !== undefined).toBe(true);
                });
              });
            });
          });
        });
      })
    }
  });
}
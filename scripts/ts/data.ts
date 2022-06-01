type Name = {
    name: string;
}
export type NameAcr = Name & {
    acr: string;
}
type Nexus = Name & {
    1: string;
    2: string;
    3: string;
}
export type Signets = Name & {
    signet: string;
    regular: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    }
    nexus1: Nexus;
    nexus2?: Nexus;
}
// difficulties
export const abstinence: string = 'Abstinence';
export const corruption: string = 'Corruption';
export const inferno: string = 'Inferno';
// priority terms
export const start: string = 'Start';
export const first: string = '1st';
export const second: string = '2nd';
export const filler: string = 'Filler';
export const reinforcement: string = 'Reinforcement';
export const no: string = 'No';
// table headers
export const supportTableHeaders:      string[] = ['Type', 'Supports'];
export const supportTableTypeColumn:   string[] = ['Utility', 'Damage'];
export const emblemTableHeaders:       string[] = ['Time', 'Emblems'];
export const emblemTableTimeColumn:    string[] = ['Early', 'Mid', 'Late'];
export const exclusiveTableColumns:    string[] = ['Signet', 'Priority'];
export const signetTableColumns:       string[] = ['Owner', 'Signet'];
// emblems
export const becauseOfYou:         NameAcr = { name: 'Because of You',              acr: 'boy' };
export const boundlessLogos:       NameAcr = { name: 'Boundless Logos',             acr: 'bl' };
export const burden:               NameAcr = { name: 'Burden',                      acr: 'b' };
export const dreamfulGold:         NameAcr = { name: 'Dreamful Gold',               acr: 'dg' };
export const emptyLikeShala:       NameAcr = { name: 'Empty Like Shala',            acr: 'els' };
export const fallingInPastLight:   NameAcr = { name: 'Falling in Past Light',       acr: 'fipl' };
export const forbiddenSeed:        NameAcr = { name: 'Forbidden Seed',              acr: 'fs' };
export const forgetMeNot:          NameAcr = { name: 'Forget-Me-Not',               acr: 'fmt' };
export const goldGoblet:           NameAcr = { name: 'Gold Goblet',                 acr: 'gg' };
export const goodOldDays:          NameAcr = { name: 'Good Old Days',               acr: 'god' };
export const greyScaleRainbow:     NameAcr = { name: 'Grey-scale Rainbow',          acr: 'gsr' };
export const heavyAsAMillionLives: NameAcr = { name: 'Heavy as a Million Lives',    acr: 'haaml' };
export const homeLost:             NameAcr = { name: 'Home Lost',                   acr: 'hl' };
export const homeTown:             NameAcr = { name: 'Hometown',                    acr: 'h' };
export const itWillBeWritten:      NameAcr = { name: 'It Will Be Written',          acr: 'iwbw' };
export const keyToTheDeep:         NameAcr = { name: 'Key to the Deep',             acr: 'kttd' };
export const lightAsABodhiLeaf:    NameAcr = { name: 'Light as a Bodhi Leaf',       acr: 'laabl' };
export const madKingsMask:         NameAcr = { name: 'Mad King\'s Mask',            acr: 'mkm' };
export const memory:               NameAcr = { name: 'Memory',                      acr: 'm' };
export const outOfReach:           NameAcr = { name: 'Out of Reach',                acr: 'oor' };
export const psuedoMiracle:        NameAcr = { name: 'Psuedo Miracle',              acr: 'pm' };
export const rainbowOfAbsence:     NameAcr = { name: 'Rainbow of Absence',          acr: 'roa' };
export const resolve:              NameAcr = { name: 'Resolve',                     acr: 'r' };
export const stainedSakura:        NameAcr = { name: 'Stained Sakura',              acr: 'sts' };
export const theFirstScale:        NameAcr = { name: 'The First Scale',             acr: 'tfs' };
export const theLonelyMoon:        NameAcr = { name: 'The Lonely Moon',             acr: 'tlm' };
export const thornyCrown:          NameAcr = { name: 'Thorny Crown',                acr: 'tc' };
export const tsukimiHimiko:        NameAcr = { name: 'Tsukimi Himiko',              acr: 'th' };
// support valks
export const ae:  NameAcr = { name: 'Azure Empyrea',                acr: 'ae' };
export const bke: NameAcr = { name: 'Bright Knight: Excelsis',      acr: 'bke' };
export const br:  NameAcr = { name: 'Blood Rose',                   acr: 'br' };
export const dp:  NameAcr = { name: 'Divine Prayer',                acr: 'dp' };
export const hb:  NameAcr = { name: 'Haxxor Bunny',                 acr: 'hb' };
export const le:  NameAcr = { name: 'Lightning Empress',            acr: 'le' };
export const ma:  NameAcr = { name: 'Midnight Absinthe',            acr: 'ma' };
export const rc:  NameAcr = { name: 'Reverist Calico',              acr: 'rc' };
export const sa:  NameAcr = { name: 'Starlit Astrologos',           acr: 'sa' };
export const ss:  NameAcr = { name: 'Snowy Sniper',                 acr: 'ss' };
export const vc:  NameAcr = { name: 'Valkyrie Chariot',             acr: 'vc'};
export const vke: NameAcr = { name: 'Vermillion Knight: Eclipse',   acr: 'vke' };
// signets
export const aponia: Signets = {
    name: 'Aponia',
    signet: 'Discipline',
    regular: {
        1: 'First, No Betrayal',
        2: 'Second, No Deception',
        3: 'Third, No Brutality',
        4: 'Fourth, No Insolence',
        5: 'Fifth, No Falsehood',
        6: 'Sixth, No Decadence'
    },
    nexus1: {
        name: 'You Shall Be Subject to Numerous Disciplines (Nexus)',
        1: 'You Shall Be Bound by Thy Body',
        2: 'You Shall Be Committed to Thy Life',
        3: 'You Shall Be Witnessed by Thy Heart'
    }
}
export const eden: Signets = {
    name: 'Eden',
    signet: 'Gold',
    regular: {
        1: 'Recitatif of Birds',
        2: 'Recitatif of Creeks',
        3: 'Recitatif of Eden',
        4: 'Recitatif of Fine Jade',
        5: 'Recitatif of Fruit Trees',
        6: 'Recitatif of Good Wine'
    },
    nexus1: {
        name: 'Aria of Gold (Nexus)',
        1: 'Aria of Dawn',
        2: 'Aria of Life',
        3: 'Aria of Soil'
    },
    nexus2: {
        name: 'Echo of Gold (Nexus)',
        1: 'Echo of Shrill Wind',
        2: 'Echo of Silent Night',
        3: 'Echo of Withered Soil'
    }
}
export const griseo: Signets = {
    name: 'Griseo',
    signet: 'Stars',
    regular: {
        1: 'Black & Dark',
        2: 'Blue & Cold',
        3: 'Grey & Empty',
        4: 'Red & Hot',
        5: 'White & Bright',
        6: 'Yellow & Warm'
    },
    nexus1: {
        name: 'Shining Like Stars (Nexus)',
        1: 'Blooming Like Flowers',
        2: 'Burning Like Flames',
        3: 'Stretching Like Leaves'
    }
}
export const hua: Signets = {
    name: 'Hua',
    signet: 'Vicissitude',
    regular: {
        1: 'Dark Garb No More',
        2: 'Days Gone',
        3: 'Long trip',
        4: 'Lost and Found',
        5: 'No One to Share',
        6: 'Old Dreams Again'
    },
    nexus1: {
        name: 'Vivid Vicissitude (Nexus)',
        1: 'Fallen Flowers',
        2: 'Fleeting Fantasy',
        3: 'Forgotten and Forsaken'
    },
    nexus2: {
        name: 'Suffering Mass (Nexus)',
        1: 'Broken Dream',
        2: 'Go with the Flow',
        3: 'Worldy Troubles'
    }
}
export const kalpas: Signets = {
    name: 'Kalpas',
    signet: 'Decimation',
    regular: {
        1: 'Blade, Grave, and Scar',
        2: 'Bone, Blood, and Ribbon',
        3: 'Desireless, Mindless, and Homeless',
        4: 'God, Me, and the Only',
        5: 'Letter, Maniac, and Ravings',
        6: 'Path, Misfortune, and Written Fate'
    },
    nexus1: {
        name: 'Fight, Struggle, and Decimation (Nexus)',
        1: 'Burden, Difficulty, and Calamity',
        2: 'Inhuman, Unevil, and Ungodly',
        3: 'Man, Mask, and Contract'
    },
    nexus2: {
        name: 'Soldiers, Scissors, Spoils, and Slaughter (Nexus)',
        1: 'Body, Bones, Heart , and Soul',
        2: 'Death, Life, Oblivion, and Existence',
        3: 'Homeland and Friends'
    }
}
export const kevin: Signets = {
    name: 'Kevin',
    signet: 'Deliverance',
    regular: {
        1: 'Artifact of the Inhibitor',
        2: 'Brand of the Undead',
        3: 'Goblet of the Giver',
        4: 'Mask of the Predator',
        5: 'Pendant of the Watcher',
        6: 'Rochet of the Pilgrim'
    },
    nexus1: {
        name: 'Blade of the Deliverer (Nexus)',
        1: 'Crusade of the Deliverer',
        2: 'Echo of the Deliverer',
        3: 'Flock of the Deliverer'
    },
    nexus2: {
        name: 'Shadow of the Deliverer (Nexus)',
        1: 'Dream of the Deliverer',
        2: 'Resolve of the Deliverer',
        3: 'Triumph of the Deliverer'
    }
}
export const kosma: Signets = {
    name: 'Kosma',
    signet: 'Daybreak',
    regular: {
        1: 'Breath that Slanders Sulphur',
        2: 'Eyes that Overlook the Vicious Abyss',
        3: 'Heart that Committed Seven Crimes',
        4: 'Horns that Rip the Bleak Sky',
        5: 'Talons that Desecrate the Santuary',
        6: 'Wings that Mask the Sanguine Moon'
    },
    nexus1: {
        name: 'Daybreak, an Undying Light (Nexus)',
        1: 'Unbending Hero',
        2: 'Undetermined Judgement',
        3: 'Unwavering Promies'
    }
}
export const mobius: Signets = {
    name: 'Mobius',
    signet: 'Infinity',
    regular: {
        1: 'Dark Pupil',
        2: 'Entwined [P]',
        3: 'Lip Poison [E]',
        4: 'Lodging [C]',
        5: 'Rodent [V]',
        6: 'Silent [B]'
    },
    nexus1: {
        name: 'Infinite [X] (Nexus)',
        1: 'Dead [X]',
        2: 'Newborn [X]',
        3: 'Unknown [X]'
    },
    nexus2: {
        name: 'Infinite [M] (Nexus)',
        1: 'Collapsed [M]',
        2: 'Immortal [M]',
        3: 'Sacrificial [M]'
    }
}
export const pardofelis: Signets = {
    name: 'Pardofelis',
    signet: 'Reverie',
    regular: {
        1: 'Back-Curled Tail',
        2: 'Flexible P&C',
        3: 'Merchant\'s Philosophy',
        4: 'Motto of Meow',
        5: 'Neighborhood Chatters',
        6: 'Shiny & Valuable'
    },
    nexus1: {
        name: 'Empty Dreams, Self, Set, and Joy (Nexus)',
        1: 'Improvised Drama',
        2: 'Setsuna Paw',
        3: 'This Is Now Where We Die'
    }
}
export const sakura: Signets = {
    name: 'Sakura',
    signet: 'Setsuna',
    regular: {
        1: 'Bountiful Blossom: Ayame',
        2: 'Bountiful Blossom: Botan',
        3: 'Bountiful Blossom: Fuji',
        4: 'Bountiful Blossom: Kiku',
        5: 'Bountiful Blossom: Koyo',
        6: 'Bountiful Blossom: Ume'
    },
    nexus1: {
        name: 'Setsuna Blade: Sakura ni Maku (Nexus)',
        1: 'Setsuna Blade: Ame-Shiko',
        2: 'Setsuna Blade: Ino-Shika-Cho',
        3: 'Setsuna Blade: Tsukimi-de Ippai'
    },
    nexus2: {
        name: 'Setsuna Blade: Yasha (Nexus)',
        1: 'Setsuna Blade: Mugenjigoku',
        2: 'Setsuna Blade: Mumyo',
        3: 'Setsuna Blade: Shinra Bansho'
    }
}
export const su: Signets = {
    name: 'Su',
    signet: 'Bodhi',
    regular: {
        1: 'Motto of Asavakkhaya',
        2: 'Motto of Ceto-Pariya-Nana',
        3: 'Motto of Dibba-Cakkhu',
        4: 'Motto of Dibba-Sota',
        5: 'Motto of Iddhi-Vidha',
        6: 'Motto of Pubbe-Nivasanussati'
    },
    nexus1: {
        name: 'Maxim of Bodhi (Nexus)',
        1: 'Maxim of Anatman',
        2: 'Maxim of Anitya',
        3: 'Maxim of Santam'
    },
    nexus2: {
        name: 'Dictum of Bodhi (Nexus)',
        1: 'Dictum of Anatman',
        2: 'Dictum of Anitya',
        3: 'Dictum of Santam'
    }
}
export const vv: Signets = {
    name: 'Vill-V',
    signet: 'Helix',
    regular: {
        1: 'Act I: Magic',
        2: 'Act II: Pendulum',
        3: 'Act III: Conflict',
        4: 'Act IV: Spoon',
        5: 'Act V: Spider Web',
        6: 'Act VI: Sneer'
    },
    nexus1: {
        name: 'Interlude: Reversed Spiral (Nexus)',
        1: 'Act VII: Half-Closed Door',
        2: 'Act VIII: Adorned Chamber',
        3: 'Finale: Broken Truth'
    }
}
// rough signet effect summaries
export const damageDealt: string[] = [aponia.regular[1], eden.regular[3], griseo.nexus1[1], hua.regular[3], hua.nexus2![3], kalpas.regular[1],
                                    kevin.regular[3], mobius.regular[5], mobius.nexus1[1], pardofelis.regular[4], sakura.regular[2],
                                    su.regular[6], vv.regular[3]];
export const damageTaken: string[] = [aponia.regular[2], eden.regular[1], hua.regular[4], kalpas.regular[5], mobius.regular[6], su.regular[4]];
export const physEleDamage: string[] = [eden.regular[2], griseo.regular[1], kalpas.regular[2], pardofelis.regular[1], vv.regular[4]];
export const physDamage: string[] = [hua.regular[2], kevin.regular[5]];
export const eleDamage: string[] = [hua.regular[1], kevin.regular[2]];
export const physEleBreach: string[] = [griseo.nexus1[2], kalpas.nexus2![3], pardofelis.nexus1[3], aponia.nexus1[1]];
export const physBreach: string[] = [hua.regular[5], kevin.regular[4], vv.nexus1[2]];
export const eleBreach: string[] = [hua.regular[6], kevin.regular[1]];
export const vurnerability: string[] = [aponia.regular[6], eden.nexus1[3], eden.nexus1[2], griseo.regular[4], griseo.regular[6], kalpas.regular[3],
                                      kevin.nexus2![3], mobius.regular[2], sakura.regular[5], su.regular[3], su.nexus2![1], vv.regular[2]];
export const spRecovery: string[] = [aponia.regular[3], eden.regular[5], eden.regular[6], eden.nexus1[2], eden.nexus2![3],
                                   griseo.regular[5], kalpas.regular[4], kevin.regular[6], sakura.regular[1], su.regular[2],
                                   kosma.regular[1]];
export const signetSummary: any = {
    0:  { summary: 'Total Damage Dealt', signets: damageDealt },
    1:  { summary: 'Total Damage Taken', signets: damageTaken },
    2:  { summary: 'Physical & Elemental Damage', signets: physEleDamage },
    3:  { summary: 'Physical Damage', signets: physDamage },
    4:  { summary: 'Elemental Damage', signets: eleDamage },
    5:  { summary: 'Physical & Elemental Breach', signets: physEleBreach },
    6:  { summary: 'Physical Breach', signets: physBreach },
    7:  { summary: 'Elemental Breach', signets: eleBreach },
    8:  { summary: 'Damage Taken By Enemies', signets: vurnerability },
    9:  { summary: 'SP Recovery', signets: spRecovery },
    10: { summary: 'Lightning Damage', signets: [eden.nexus1[1], eden.nexus2![2]] },
    11: { summary: 'Reduce Enemy Damage and Movement', signets: griseo.regular[2] },
    12: { summary: 'Longer Taint', signets: griseo.regular[3] },
    13: { summary: 'Bonnus Damage', signets: [griseo.nexus1[3], kalpas.nexus2![1], su.nexus2![2]] },
    14: { summary: 'Fire Damage', signets: kalpas.nexus1[1] },
    15: { summary: 'Additional Initial Stack of Soldier\'s Resolve', signets: hua.nexus1[2] },
    16: { summary: 'Bonus Resolve Stack per Second to Normal Signets', signets: hua.nexus1[1] },
    17: { summary: 'Increase Normal Signet Cap Increased', signets: [hua.nexus1[3], hua.nexus2![1]] },
    18: { summary: 'Extends Incincibility From Soldier\'s Remembrance', signets: hua.nexus2![2] },
    19: { summary: 'Max HP Increase', signets: kalpas.regular[6] },
    20: { summary: 'Recharges Blood Boil ', signets: kalpas.nexus1[2] },
    21: { summary: 'More Blood Boil Damage', signets: kalpas.nexus1[3] },
    22: { summary: 'Bloodboil Armor Absorb Damage', signets: kalpas.nexus2![2] },
    23: { summary: 'Total Damage Increase in Burst Mode', signets: kevin.nexus1[3] },
    24: { summary: 'Normal Signets Increased Buff', signets: [kevin.nexus1[1], kevin.nexus2![1]] },
    25: { summary: 'Final Battle and Normal Signet Duration Extended', signets: kevin.nexus1[2] },
    26: { summary: 'Total Damage Increase in Ultimate or Burst Mode Hit', signets: kevin.nexus2![2] },
    27: { summary: 'Entity Damage Dealt', signets: mobius.regular[3] },
    28: { summary: 'Elf Ultimate and Support Valk Support Skill Reduced CD', signets: [mobius.regular[4], mobius.nexus1[3]] },
    29: { summary: 'Elf SP Recovery', signets: mobius.regular[1] },
    30: { summary: 'Mind Sync Duration Extended', signets: mobius.nexus1[2] },
    31: { summary: 'HP and SP Cap', signets: pardofelis.regular[5] },
    32: { summary: 'HP and SP Recovery', signets: pardofelis.regular[2] },
    33: { summary: 'Shiny Silver Increase Each Floor', signets: pardofelis.regular[3] },
    34: { summary: 'Shiny Silver Each Kill ', signets: pardofelis.regular[6] },
    35: { summary: 'Ultimate Evasion Trigger Bonus Damage', signets: [kosma.regular[6], pardofelis.nexus1[1]] },
    36: { summary: 'Ultimate Trigger Bonus Damage', signets: [kosma.regular[4], pardofelis.nexus1[2]] },
    37: { summary: 'Attack Speed & Move Speed', signets: sakura.regular[6] },
    38: { summary: 'Ultimate Evasion Reset CD', signets: sakura.regular[4] },
    39: { summary: 'Ultimate Evasion 1 More Charge and Reduced CD', signets: sakura.regular[3] },
    40: { summary: 'Sakura Screen Resets Ultimate and Weapon CD', signets: sakura.nexus1[1] },
    41: { summary: 'Ice Damage', signets: [sakura.nexus1[3], sakura.nexus2![3], sakura.nexus2![2]] },
    42: { summary: 'Sakura Screen Pause Duration', signets: sakura.nexus1[2] },
    43: { summary: 'Reduce Ultimate Evasion Remaining CD', signets: sakura.nexus2![1] },
    44: { summary: 'Combo Increased to 60 When Below 60', signets: su.regular[5] },
    45: { summary: '25 Bonus Combo', signets: su.regular[1] },
    46: { summary: 'Enemy Disable Shield Recovery', signets: su.nexus1[2] },
    47: { summary: 'Reduce Enemy Damage', signets: su.nexus1[1] },
    48: { summary: 'Bonus Damage to Shields', signets: [su.nexus1[3], kosma.regular[2], vv.nexus1[3]] },
    49: { summary: '3 Random Debuffs on Hit', signets: su.nexus2![3] },
    50: { summary: 'Initial and SP Cap Increased', signets: eden.regular[4] },
    51: { summary: 'Increase Ultimate Physical & Elemental Damage', signets: aponia.regular[4] },
    52: { summary: 'Start With More Exhortation', signets: aponia.regular[5] },
    53: { summary: 'Basic/Combo/Charged Attacks Trigger Bonus Damage', signets: kosma.regular[5] },
    54: { summary: 'Longer Rend', signets: kosma.regular[3] },
    55: { summary: 'Weapon Bonus Damage', signets: vv.regular[1] },
    56: { summary: 'Ranged Total Damage', signets: vv.regular[5] },
    57: { summary: 'SP Recovery and Reduce Weapon CD', signets: vv.regular[6] },
    58: { summary: 'Marvelous Magic Deals Bonus ATK', signets: vv.nexus1[1] },
    59: { summary: 'Fixed Exhortation Value', signets: aponia.nexus1[2] },
    60: { summary: 'Increase Ultimate Total Damage', signets: aponia.nexus1[3] }
}
// difficulties
const abstinence = 'Abstinence';
const corruption = 'Corruption';
const inferno = 'Inferno';
// emblems
const becauseOfYou = { name: 'Because of You', acr: 'boy' };
const boundlessLogos = {name: 'Boundless Logos', acr: 'bl' };
const burden = { name: 'Burden', acr: 'b' };
const dreamfulGold = { name: 'Dreamful Gold', acr: 'dg' };
const emptyLikeShala = { name: 'Empty Like Shala', acr: 'els' };
const fallingInPastLight = { name: 'Falling in Past Light', acr: 'fipl' };
const forbiddenSeed = { name: 'Forbidden Seed', acr: 'fs' };
const forgetMeNot = { name: 'Forget-Me-Not', acr: 'fmt' };
const goldGoblet = { name: 'Gold Goblet', acr: 'gg' };
const goodOldDays = { name: 'Good Old Days', acr: 'god' };
const greyScaleRainbow = { name: 'Grey-scale Rainbow', acr: 'gsr' };
const homeLost = { name: 'Home Lost', acr: 'hl' };
const homeTown = { name: 'Hometown', acr: 'h' };
const itWillBeWritten = { name: 'It Will Be Written', acr: 'iwbw' };
const lightAsABodhiLeaf = { name: 'Light as a Bodhi Leaf', acr: 'laabl' };
const madKingsMask = { name: 'Mad King\'s Mask', acr: 'mkm' };
const memory = { name: 'Memory', acr: 'm' };
const outOfReach = { name: 'Out of Reach', acr: 'oor' };
const psuedoMiracle = { name: 'Psuedo Miracle', acr: 'pm' };
const rainbowOfAbsence = { name: 'Rainbow of Absence', acr: 'roa' };
const resolve = { name: 'Resolve', acr: 'r' };
const stainedSakura = { name: 'Stained Sakura', acr: 'sts' };
const theFirstScale = { name: 'The First Scale', acr: 'tfs' };
const theLonelyMoon = { name: 'The Lonely Moon', acr: 'tlm' };
const thornyCrown = { name: 'Thorny Crown', acr: 'tc' };
const tsukimiHimiko = { name: 'Tsukimi Himiko', acr: 'th' };
// priority terms
const start = 'Start';
const first = '1st';
const second = '2nd';
const filler = 'Filler';
const reinforcement = 'Reinforcement';
const no = 'No';
// table headers
const supportTableHeaders = ['Type', 'Supports'];
const supportTableTypeColumn = ['Utility', 'Damage'];
const emblemTableHeaders = ['Time', 'Emblem'];
const emblemTableTimeColumn = ['Early', 'Mid', 'Late'];
const exclusiveTableColumns = ['Signet', 'Priority'];
const signetTableColumns = ['Owner', 'Signet'];
// support valks
const ae = { name: 'Azure Empyrea', acr: 'ae' }
const bke = { name: 'Bright Knight: Excelsis', acr: 'bke' }
const br = { name: 'Blood Rose', acr: 'br' }
const dp = { name: 'Divine Prayer', acr: 'dp' }
const hb = { name: 'Haxxor Bunny', acr: 'hb' }
const le = { name: 'Lightning Empress', acr: 'le' }
const ma = { name: 'Midnight Absinthe', acr: 'ma' }
const rc = { name: 'Reverist Calico', acr: 'rc' }
const ss = { name: 'Snowy Sniper', acr: 'ss' }
const vc = { name: 'Valkyrie Chariot', acr: 'vc'}
const vke = { name: 'Vermillion Knight: Eclipse', acr: 'vke' }
// signets
const aponia = {
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
const eden = {
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
const griseo = {
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
const hua = {
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
const kalpas = {
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
const kevin = {
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
const kosma = {
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
const mobius = {
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
const pardofelis = {
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
const sakura = {
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
const su = {
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
const vv = {
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
const damageDealt = [aponia.regular[1], eden.regular[3], griseo.nexus1[1], hua.regular[3], hua.nexus2[3], kalpas.regular[1],
                     kevin.regular[3], mobius.regular[5], mobius.nexus1[1], pardofelis.regular[4], sakura.regular[2],
                     su.regular[6]];
const damageTaken = [aponia.regular[2], eden.regular[1], hua.regular[4], kalpas.regular[5], mobius.regular[6], su.regular[4]];
const physEleDamage = [eden.regular[2], griseo.regular[1], kalpas.regular[2], pardofelis.regular[1]];
const physDamage = [hua.regular[2], kevin.regular[5]];
const eleDamage = [hua.regular[1], kevin.regular[2]];
const physEleBreach = [griseo.nexus1[2], kalpas.nexus2[3], pardofelis.nexus1[3]];
const physBreach = [hua.regular[5], kevin.regular[4]];
const eleBreach = [hua.regular[6], kevin.regular[1]];
const vurnerability = [aponia.regular[6], eden.nexus1[3], eden.nexus1[2], griseo.regular[4], griseo.regular[6], kalpas.regular[3],
                       kevin.nexus2[3], mobius.regular[2], sakura.regular[5], su.regular[3], su.nexus2[1]];
const spRecovery = [aponia.regular[3], eden.regular[5], eden.regular[6], eden.nexus1[2], eden.nexus2[3],
                    griseo.regular[5], kalpas.regular[4], kevin.regular[6], sakura.regular[1], su.regular[2]];
const signetSummary = {
    0: { summary: 'Total Damage Dealt', signets: damageDealt },
    1: { summary: 'Total Damage Taken', signets: damageTaken },
    2: { summary: 'Physical & Elemental Damage', signets: physEleDamage },
    3: { summary: 'Physical Damage', signets: physDamage },
    4: { summary: 'Elemental Damage', signets: eleDamage },
    5: { summary: 'Physical & Elemental Breach', signets: physEleBreach },
    6: { summary: 'Physical Breach', signets: physBreach },
    7: { summary: 'Elemental Breach', signets: eleBreach },
    8: { summary: 'Damage Taken By Enemies', signets: vurnerability },
    9: { summary: 'SP Recovery', signets: spRecovery },
    10: { summary: 'Lightning Damage', signets: [eden.nexus1[1], eden.nexus2[2]] },
    11: { summary: 'Reduce Enemy Damage and Movement', signets: griseo.regular[2] },
    12: { summary: 'Longer Taint', signets: griseo.regular[3] },
    13: { summary: 'Bonnus Damage', signets: [griseo.nexus1[3], kalpas.nexus2[1], su.nexus2[2]] },
    14: { summary: 'Fire Damage', signets: kalpas.nexus1[1] },
    15: { summary: 'Additional Initial Stack of Soldier\'s Resolve', signets: hua.nexus1[2] },
    16: { summary: 'Bonus Resolve Stack per Second to Normal Signets', signets: hua.nexus1[1] },
    17: { summary: 'Increase Normal Signet Cap Increased', signets: [hua.nexus1[3], hua.nexus2[1]] },
    18: { summary: 'Extends Incincibility From Soldier\'s Remembrance', signets: hua.nexus2[2] },
    19: { summary: 'Max HP Increase', signets: kalpas.regular[6] },
    20: { summary: 'Recharges Blood Boil ', signets: kalpas.nexus1[2] },
    21: { summary: 'More Blood Boil Damage', signets: kalpas.nexus1[3] },
    22: { summary: 'Bloodboil Armor Absorb Damage', signets: kalpas.nexus2[2] },
    23: { summary: 'Total Damage Increase in Burst Mode', signets: kevin.nexus1[3] },
    24: { summary: 'Normal Signets Increased Buff', signets: [kevin.nexus1[1], kevin.nexus2[1]] },
    25: { summary: 'Final Battle and Normal Signet Duration Extended', signets: kevin.nexus1[2] },
    26: { summary: 'Total Damage Increase in Ultimate or Burst Mode Hit', signets: kevin.nexus2[2] },
    27: { summary: 'Entity Damage Dealt', signets: mobius.regular[3] },
    28: { summary: 'Elf Ultimate and Support Valk Support Skill Reduced CD', signets: [mobius.regular[4], mobius.nexus1[3]] },
    29: { summary: 'Elf SP Recovery', signets: mobius.regular[1] },
    30: { summary: 'Mind Sync Duration Extended', signets: mobius.nexus1[2] },
    31: { summary: 'HP and SP Cap', signets: pardofelis.regular[5] },
    32: { summary: 'HP and SP Recovery', signets: pardofelis.regular[2] },
    33: { summary: 'Shiny Silver Increase Each Floor', signets: pardofelis.regular[3] },
    34: { summary: 'Shiny Silver Each Kill ', signets: pardofelis.regular[6] },
    35: { summary: 'Ultimate Evasion Trigger Bonus Damage', signets: pardofelis.nexus1[1] },
    36: { summary: 'Ultimate Trigger Bonus Damage', signets: pardofelis.nexus1[2] },
    37: { summary: 'Attack Speed & Move Speed', signets: sakura.regular[6] },
    38: { summary: 'Ultimate Evasion Reset CD', signets: sakura.regular[4] },
    39: { summary: 'Ultimate Evasion 1 More Charge and Reduced CD', signets: sakura.regular[3] },
    40: { summary: 'Sakura Screen Resets Ultimate and Weapon CD', signets: sakura.nexus1[1] },
    41: { summary: 'Ice Damage', signets: [sakura.nexus1[3], sakura.nexus2[3], sakura.nexus2[2]] },
    42: { summary: 'Sakura Screen Pause Duration', signets: sakura.nexus1[2] },
    43: { summary: 'Reduce Ultimate Evasion Remaining CD', signets: sakura.nexus2[1] },
    44: { summary: 'Combo Increased to 60 When Below 60', signets: su.regular[5] },
    45: { summary: '25 Bonus Combo', signets: su.regular[1] },
    46: { summary: 'Enemy Disable Shield Recovery', signets: su.nexus1[2] },
    47: { summary: 'Reduce Enemy Damage', signets: su.nexus1[1] },
    48: { summary: 'Bonus Damage to Shields', signets: su.nexus1[3] },
    49: { summary: '3 Random Debuffs on Hit', signets: su.nexus2[3] },
    50: { summary: 'Initial and SP Cap Increased', signets: eden.regular[4] },
    51: { summary: 'Increase Ultimate Physical & Elemental Damage', signets: aponia.regular[4] },
    52: { summary: 'Start With More Exhortation', signets: aponia.regular[5] }
}
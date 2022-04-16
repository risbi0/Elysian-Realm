// difficulties
const abstinence = 'Abstinence';
const corruption = 'Corruption';
const inferno = 'Inferno';
// emblems
const becauseOfYou = 'Because of You';
const boundlessLogos = 'Boundless Logos';
const burden = 'Burden';
const dreamfulGold = 'Dreamful Gold';
const emptyLikeShala = 'Empty Like Shala';
const fallingInPastLight = 'Falling in Past Light';
const forbiddenSeed = 'Forbidden Seed';
const forgetMeNot = 'Forget-Me-Not';
const greyScaleRainbow = 'Grey-scale Rainbow';
const goldGoblet = 'Gold Goblet';
const heavyAsAMillionLives = 'Heavy as a Million Lives';
const homeLost = 'Home Lost';
const itWillBeWritten = 'It Will Be Written';
const lightAsABodhiLeaf = 'Light as a Bodhi Leaf';
const madKingsMask = 'Mad King\'s Mask';
const memory = 'Memory';
const resolve = 'Resolve';
const shatteredShackles = 'Shattered Shackles';
const stainedSakura = 'Stained Sakura';
const theFirstScale = 'The First Scale';
const thornyCrown = 'Thorny Crown'
// priority terms
const start = 'Start';
const first = '1st';
const second = '2nd';
const filler = 'Filler';
const no = 'No';
// table headers
const supportTableHeaders = ['Type', 'Support 1', 'Support 2'];
const supportTableTypeColumn = ['Utility', 'Damage'];
const emblemTableHeaders = ['Time', 'Emblem'];
const emblemTableTimeColumn = ['Early', 'Mid', 'Late'];
const signetTableColumns = ['Signet', 'Priority'];
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
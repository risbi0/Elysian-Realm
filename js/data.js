// emblems
const burden = 'Burden';
const forbiddenSeed = 'Forbidden Seed';
const forgetMeNot = 'Forget-Me-Not';
const goldGoblet = 'Gold Goblet';
const heavyAsAMillionLives = 'Heavy as a Million Lives';
const homeLost = 'Home Lost';
const lightAsABodhiLeaf = 'Light as a Bodhi Leaf';
const madKingsMask = 'Mad King\'s Mask';
const memory = 'Memory';
const resolve = 'Resolve';
const shatteredShackles = 'Shattered Shackles';
const stainedSakura = 'Stained Sakura';
// priority terms
const start = 'Start';
const first = '1st';
const second = '2nd';
const filler = 'Filler';
const no = 'No';
// table headers
const compTableHeaders = ['Time', 'Emblem', 'Support'];
const compTableTimeColumn = ['Early', 'Mid', 'Late'];
const signetTableColumns = ['Signet', 'Priority'];
const elysiaSignetName = '⬛⬛⬛';
// support valks
const ae = { name: 'Azure Empyrea', acr: 'ae' }
const bke = { name: 'Bright Knight: Excelsis', acr: 'bke' }
const br = { name: 'Blood Rose', acr: 'br' }
const dp = { name: 'Divine Prayer', acr: 'dp' }
const le = { name: 'Lightning Empress', acr: 'le' }
const ss = { name: 'Snowy Sniper', acr: 'ss' }
const vc = { name: 'Valkyrie Chariot', acr: 'vc'}
// signets
const eden = {
    name: 'eden',
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
        name: 'Aria of Gold',
        1: 'Aria of Dawn',
        2: 'Aria of Life',
        3: 'Aria of Soil'
    },
    nexus2: {
        name: 'Echo of Gold',
        1: 'Echo of Shrill Wind',
        2: 'Echo of Silent Night',
        3: 'Echo of Withered Soil'
    }
}
const kalpas = {
    name: 'kalpas',
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
        name: 'Fight, Struggle, and Decimation',
        1: 'Burden, Difficulty, and Calamity',
        2: 'Inhuman, Unevil, and Ungodly',
        3: 'Man, Mask, and Contract'
    },
    nexus2: {
        name: 'Soldiers, Scissors, Spoils, and Slaughter',
        1: 'Body, Bones, Heart , and Soul',
        2: 'Death, Life, Oblivion, and Existence',
        3: 'Hometown, Homeland, Friends, and Acquaintances'
    }
}
const kevin = {
    name: 'kevin',
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
        name: 'Blade of the Deliverer',
        1: 'Crusade of the Deliverer',
        2: 'Echo of the Deliverer',
        3: 'Flock of the Deliverer'
    },
    nexus2: {
        name: 'Shadow of the Deliverer',
        1: 'Dream of the Deliverer',
        2: 'Resolve of the Deliverer',
        3: 'Triumph of the Deliverer'
    }
}
const hua = {
    name: 'hua',
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
        name: 'Vivid Vicissitude',
        1: 'Fallen Flowers',
        2: 'Fleeting Fantasy',
        3: 'Forgotten and Forsaken'
    },
    nexus2: {
        name: 'Suffering Mass',
        1: 'Broken Dream',
        2: 'Go with the Flow',
        3: 'Worldy Troubles'
    }
}
const mobius = {
    name: 'mobius',
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
        name: 'Infinite [X]',
        1: 'Dead [X]',
        2: 'Newborn [X]',
        3: 'Unknown [X]'
    }
}
const sakura = {
    name: 'sakura',
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
        name: 'Setsuna Blade: Sakura ni Maku',
        1: 'Setsuna Blade: Ame-Shiko',
        2: 'Setsuna Blade: Ino-Shika-Cho',
        3: 'Setsuna Blade: Tsukimi-de Ippai'
    }
}
const su = {
    name: 'su',
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
        name: 'Maxim of Bodhi',
        1: 'Maxim of Anatman',
        2: 'Maxim of Anitya',
        3: 'Maxim of Santam'
    },
    nexus2: {
        name: 'Dictum of Bodhi',
        1: 'Dictum of Anatman',
        2: 'Dictum of Anitya',
        3: 'Dictum of Santam'
    }
}
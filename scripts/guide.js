import * as data from './data.js';
export const valks = (function () {
    const aka = {
        name: 'Argent Knight: Artemis',
        acr: 'aka',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.griseo, '1']],
                    [[data.aponia, '2'], [data.mobius, '1']],
                    [[data.eden, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.rainbowOfAbsence, data.becauseOfYou],
                    [data.veilOfTears, data.boundlessLogos],
                    [data.keyToTheDeep, data.boundlessLogos]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.hb]]
                ],
                gear: [
                    [data.bast, data.basm, data.basb],
                    [data.anat, data.anam, data.anab],
                    [data.robt, data.robm, data.robb],
                    [data.welt, data.welm, data.welb],
                    [data.allt, data.dirm, data.allb]
                ],
                signetTable: [
                    [
                        ['Frost Scythe', data.start],
                        ['Stellar Trials', data.first, '2'],
                        ['Winter Harvest'],
                        ['Cold Moon', data.second],
                        ['Uranian Mirror', data.reinforcement]
                    ],
                    [
                        [data.griseo.name, '5', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.griseo.nexus1[2]]
                    ],
                    [
                        [data.aponia.name, '3', data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.mobius.name, '5', data.mobius.regular[2]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.mobius.nexus1[1]],
                        [data.mobius.nexus1[3]],
                    ],
                    [
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3]]
                    ]
                ],
                notes: `<p>${data.griseo.nexus1[2]}, ${data.pardofelis.nexus1[3]}</p>If breach doesn't reach 60%.<br><br>
                        <p>Aponia</p>Don't pick <span>${data.aponia.regular[4]}</span>.`
            }
        }
    };
    const bkek = {
        name: 'Bright Knight: Excelsis',
        acr: 'bke',
        rate: data.abstinence,
        builds: {
            0: {
                signet: [
                    [[data.sakura, '1'], [data.griseo, '2']],
                    [[data.aponia, '2'], [data.eden, '2'], [data.kalpas, '2']]
                ],
                emblem: [
                    [data.forgetMeNot, data.tsukimiHimiko],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [[data.sa], [data.le]],
                    [[data.sa], [data.ss]]
                ],
                gear: [
                    [data.dant, data.danm, data.danb],
                    [data.dirt, data.dirm, data.dirb]
                ],
                signetTable: [
                    [
                        ['Gambit', data.start],
                        ['Glory', data.first],
                        ['Paragon', data.second],
                        ['Formation', data.no, '2'],
                        ['Holy Lance']
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.griseo.name, '10', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[5]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.aponia.name, '6', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.kalpas.nexus2[3], '']
                    ]
                ],
                notes: `<p>${data.aponia.nexus2[2]}, ${data.kalpas.nexus2[3]}</p>If lacking impair.`
            }
        }
    };
    const da = {
        name: 'Dea Anchora',
        acr: 'da',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.kevin, '1'], [data.aponia, '2']],
                    [[data.eden, '2'], [data.griseo, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.burden, data.theLonelyMoon],
                    [data.veilOfTears, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.vc]],
                    [[data.ae], [data.br, data.ma]]
                ],
                gear: [
                    [data.shat, data.sham, data.shab],
                    [data.aslt, data.tham, data.aslb],
                    [data.leet, data.tham, data.leeb]
                ],
                signetTable: [
                    [
                        ['Stars', data.start],
                        ['Sheen', data.first],
                        ['Halo', data.second, '2'],
                        ['Gale'],
                        ['Brilliance', data.no]
                    ],
                    [
                        [data.kevin.name, '4', data.kevin.regular[1]],
                        [data.kevin.regular[6], ''],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]],
                        [data.aponia.name, '3', data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2], '']
                    ],
                    [
                        [data.eden.name, '4', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.eden.nexus2[3]],
                        [data.griseo.name, '6', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[5]],
                        [data.griseo.regular[6]],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[6]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Kevin</p>Don't pick <span>${data.kevin.nexus1[2]}</span>.<br><br>
                        <p>${data.kevin.regular[6]}</p>Pick before 4F.<br><br>
                        <p>${data.aponia.nexus2[2]}</p>If unable to pick Kevin's enhanced signets.`
            }
        }
    };
    const dpe = {
        name: 'Disciplinary Perdition',
        acr: 'dip',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.aponia, '2'], [data.griseo, '1']],
                    [[data.kalpas, '2'], [data.pardofelis, '1'], [data.mobius, '1']]
                ],
                emblem: [
                    [data.veilOfTears, data.becauseOfYou],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.br]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.zent, data.zenm, data.zenb],
                    [data.lint, data.linm, data.linb],
                    [data.hant, data.hanm, data.hanb]
                ],
                signetTable: [
                    [
                        ['Admonition', data.start, '2'],
                        ['Shelter'],
                        ['Inclusiveness', data.first],
                        ['Atonement', data.no, '2'],
                        ['Rescue']
                    ],
                    [
                        [data.aponia.name, '6', data.aponia.regular[1]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[6]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1], ''],
                        [data.aponia.nexus2[2]],
                        [data.griseo.name, '4', data.griseo.regular[2]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.mobius.name, '2', data.mobius.regular[2]],
                        [data.mobius.nexus1.name]
                    ]
                ],
                notes: `<p>${data.aponia.nexus2[1]}</p>If having trouble surviving.`
            }
        }
    };
    const fr = {
        name: 'Fallen Rosemary',
        acr: 'fr',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.kevin, '1']],
                    [[data.eden, '2'], [data.griseo, '2'], [data.pardofelis, '1'], [data.kalpas, '2']]
                ],
                emblem: [
                    [data.burden, data.becauseOfYou],
                    [data.goldGoblet, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.hant, data.hanm, data.hanb],
                    [data.iret, data.irem, data.ireb]
                ],
                signetTable: [
                    [
                        ['Valfreyja', data.start],
                        ['Nocturne', data.first],
                        ['Soul Siphon', data.second],
                        ['God Eater', data.reinforcement, '2'],
                        ['Spirit Servants']
                    ],
                    [
                        [data.kevin.name, '4', data.kevin.regular[1]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[2]]
                    ],
                    [
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.griseo.name, '4', data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[6]],
                        [data.pardofelis.nexus1.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name, ''],
                    ]
                ],
                notes: `<p>${data.kalpas.nexus2.name}</p>Can use BR to reduce HP, also removing the need for nexus signet.`
            }
        }
    };
    const gd = {
        name: 'Golden Diva',
        acr: 'ede',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.aponia, '2']],
                    [[data.eden, '2'], [data.griseo, '2'], [data.pardofelis, '1'], [data.kalpas, '2']]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.goldGoblet, data.theLonelyMoon],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.hant, data.hanm, data.hanb],
                    [data.zent, data.linm, data.zenb]
                ],
                signetTable: [
                    [
                        ['Arioso', data.start, '2'],
                        ['Symphony'],
                        ['Fugue', data.first],
                        ['Cadenza', data.second],
                        ['Conerto', data.reinforcement]
                    ],
                    [
                        [data.aponia.name, '4', data.aponia.regular[6]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.eden.name, '5', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.eden.nexus2[2]],
                        [data.eden.nexus2[3]],
                        [data.griseo.name, '5', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.griseo.nexus1[2], ''],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3], ''],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Domain of Incandescence > Echo of Paradise<br><br>
                        <p>${data.griseo.nexus1[2]}, ${data.pardofelis.nexus1[3]}</p>If lacking breach.`
            }
        }
    };
    const hofs = {
        name: 'Herrscher of Flamescion',
        acr: 'hofs',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.kalpas, '2'], [data.hua, '2']],
                    [[data.sakura, '1'], [data.pardofelis, '1'], [data.griseo, '2']]
                ],
                emblem: [
                    [data.madKingsMask, data.theLonelyMoon],
                    [data.memory, data.becauseOfYou],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [[data.ae], [data.br]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.murt, data.murm, data.murb],
                    [data.leet, data.tham, data.leeb]
                ],
                signetTable: [
                    [
                        ['Heatflow', data.start],
                        ['Starfire', data.first],
                        ['Reburn', data.second, '2'],
                        ['Tempered Warrior'],
                        ['Flamescion', data.reinforcement]
                    ],
                    [
                        [data.kalpas.name, '5', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.kalpas.nexus2[1]],
                        [data.kalpas.nexus2[3]],
                        [data.hua.name, '3', data.hua.regular[6], ''],
                        [data.hua.nexus2.name],
                        [data.hua.nexus2[1], '']
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.pardofelis.name, '5', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3], ''],
                        [data.griseo.name, '3', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]]
                    ]
                ],
                notes: `<p>Kalpas</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>${data.hua.regular[6]}, ${data.hua.nexus2[2]}</p>Either pick <span>${data.hua.nexus2[2]}</span> or enhance <span>${data.hua.regular[6]}</span><br><br>
                        <p>${data.pardofelis.nexus1[3]}</p>If lacking breach.<br><br>
                        <p>Griseo</p>Buy signets from shop if possible.`
            }
        }
    };
    const hor = {
        name: 'Herrscher of Reason',
        acr: 'hor',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.hua, '2'], [data.griseo, '2'], [data.sakura, '2']],
                    [[data.eden, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.memory, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.becauseOfYou],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.hb, data.br]]
                ],
                gear: [
                    [data.welt, data.basm, data.basb],
                    [data.welt, data.welm, data.welb],
                    [data.anat, data.anam, data.anab]
                ],
                signetTable: [
                    [
                        ['Wisdom', data.start],
                        ['Truth', data.first],
                        ['Inspiration', data.second, '2'],
                        ['Reason'],
                        ['Creation', data.filler]
                    ],
                    [
                        [data.hua.name, '4', data.hua.regular[1]],
                        [data.hua.regular[3]],
                        [data.hua.regular[6]],
                        [data.hua.nexus2.name],
                        [data.griseo.name, '7', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]],
                        [data.sakura.name, '4', data.sakura.regular[2]],
                        [data.sakura.regular[4]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name]
                    ],
                    [
                        [data.eden.name, '2', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.pardofelis.name, '5', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3], '']
                    ]
                ],
                notes: `<p>Hua</p>If unable to get double signets on 4F, start with double Ego, <span>${data.sakura.nexus1.name}</span>, and <span>${data.tsukimiHimiko.name}</span>.<br><br>
                        <p>${data.pardofelis.nexus1[3]}</p>If breach doesn't reach 60%.`
            }
        }
    };
    const hos = {
        name: 'Herrscher of Sentience',
        acr: 'hos',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.aponia, '2']],
                    [[data.griseo, '2']],
                    [[data.kalpas, '2'], [data.pardofelis, '1'], [data.eden, '2']]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.le], [data.sa]],
                    [[data.br], [data.ss]]
                ],
                gear: [
                    [data.dirt, data.dirm, data.rebb],
                    [data.shst, data.shsm, data.shsb]
                ],
                signetTable: [
                    [
                        ['Victory', data.start],
                        ['Dark Plumes', data.first],
                        ['Supremacy', data.second],
                        ['Legion', data.reinforcement],
                        ['Ego', data.no]
                    ],
                    [
                        [data.aponia.name, '4', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.griseo.name, '8', data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[3], ''],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name]
                    ]
                ],
                notes: `<p>${data.pardofelis.regular[3]}</p>Take early.`
            }
        }
    };
    const hot = {
        name: 'Herrscher of Thunder',
        acr: 'hot',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.eden, '1']],
                    [[data.hua, '2'], [data.pardofelis, '1']],
                    [[data.kalpas, '1'], [data.su, '2']]
                ],
                emblem: [
                    [data.goldGoblet, data.outOfReach],
                    [data.memory, data.outOfReach],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.br]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.want, data.linm, data.wanb],
                    [data.bent, data.benm, data.benb]
                ],
                signetTable: [
                    [
                        ['Hazy Moon', data.start],
                        ['Tsukuyomi', data.first],
                        ['Divine Penalty', data.no, '3'],
                        ['Mitama'],
                        ['Narukami']
                    ],
                    [
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus1.name]
                    ],
                    [
                        [data.hua.name, '3', data.hua.regular[6]],
                        [data.hua.nexus2.name],
                        [data.hua.nexus2[1], ''],
                        [data.pardofelis.name, '6', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[3], ''],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3]]
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus1.name],
                        [data.su.name, '4', data.su.regular[1]],
                        [data.su.regular[3]],
                        [data.su.regular[5]],
                        [data.su.nexus2.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Build Benares: Awakening M as alternative.<br><br>
                        <p>Eden</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>${data.hua.regular[6]}</p>Must upgrade.<br><br>
                        <p>${data.pardofelis.regular[3]}</p>Take early.<br><br>
                        <p>Kalpas</p>When picked they must be paired with Hua's nexus.`
            },
            1: {
                signet: [
                    [[data.aponia, '2']],
                    [[data.sakura, '1'], [data.griseo, '2'], [data.su, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.forgetMeNot, data.dreamfulGold],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.hant, data.hanm, data.hanb],
                    [data.bent, data.benm, data.benb],
                    [data.lint, data.linm, data.linb]
                ],
                signetTable: [
                    [
                        ['Divine Penalty', data.start],
                        ['Mitama', data.first],
                        ['Narukami', data.second],
                        ['Hazy Moon', data.no, '2'],
                        ['Tsukuyomi']
                    ],
                    [
                        [data.aponia.name, '4', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.sakura.name, '2', data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.griseo.name, '3', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.su.name, '4', data.su.regular[1]],
                        [data.su.regular[3]],
                        [data.su.regular[5]],
                        [data.su.nexus2.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Griseo</p>Buy signets in shop if possible.`
            },
            2: {
                signet: [
                    [[data.kevin, '1'], [data.sakura, '1']],
                    [[data.griseo, '2'], [data.vv, '1'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.burden, data.itWillBeWritten],
                    [data.forgetMeNot, data.itWillBeWritten],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.hant, data.hanm, data.hanb],
                    [data.bent, data.benm, data.benb],
                    [data.lint, data.linm, data.linb]
                ],
                signetTable: [
                    [
                        ['Narukami', data.start],
                        ['Tsukuyomi', data.reinforcement],
                        ['Divine Penalty', data.no, '3'],
                        ['Hazy Moon'],
                        ['Mitama']
                    ],
                    [
                        [data.kevin.name, '5', data.kevin.regular[1]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]],
                        [data.kevin.nexus1[2]],
                        [data.sakura.name, '4', data.sakura.regular[3], ''],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.sakura.nexus1[1], '']
                    ],
                    [
                        [data.griseo.name, '6', data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]],
                        [data.vv.name, '2', data.vv.regular[2]],
                        [data.vv.nexus1.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[2], ''],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Kevin</p>Don't pick <span>${data.kevin.nexus1[3]}</span>.<br><br>
                        <p>${data.sakura.nexus1[1]}</p>Pay attention to the proper rotation if picked. Pick <span>${data.sakura.regular[3]}</span> to go with it.<br><br>
                        <p>${data.pardofelis.regular[2]}</p>If lacking SP.`
            }
        }
    };
    const mobi = {
        name: 'Infinite Ouroboros',
        acr: 'mobius',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.mobius, '1'], [data.hua, '2'], [data.griseo, '2'],],
                    [[data.sakura, '1'], [data.kalpas, '1']]
                ],
                emblem: [
                    [data.forbiddenSeed, data.boundlessLogos],
                    [data.memory, data.boundlessLogos],
                    [data.stainedSakura, data.boundlessLogos]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.lint, data.linm, data.linb],
                    [data.zent, data.zenm, data.zenb],
                    [data.hant, data.hanm, data.hanb]
                ],
                signetTable: [
                    [
                        ['Ascension', data.start, '2'],
                        ['Ill Fortune'],
                        ['Dark Assault', data.first],
                        ['Ravenousness', data.second],
                        ['Mirage', data.no]
                    ],
                    [
                        [data.mobius.name, '3', data.mobius.regular[2]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.hua.name, '3', data.hua.regular[1]],
                        [data.hua.regular[6], ''],
                        [data.hua.nexus2.name],
                        [data.griseo.name, '8', data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[1]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.kalpas.name, '2', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]]
                    ]
                ],
                notes: `<p>Mobius</p>Don't pick <span>${data.mobius.nexus1[2]}</span>. Buy other enhanced signets in shop if possible.<br><br>
                        <p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>Kalpas</p>Use BR to decrease HP. Can pick Eden (with 2nd Nexus series) signets as reinforcement. Pick according to what's in the store.`
            }
        }
    };
    const lk = {
        name: 'Luna Kindred',
        acr: 'lk',
        rate: data.inferno,
        builds: {
            0: {
                signet: [
                    [[data.kalpas, '2'], [data.aponia, '2']],
                    [[data.griseo, '2'], [data.pardofelis, '1'], [data.mobius, '1']]
                ],
                emblem: [
                    [data.madKingsMask, data.theLonelyMoon],
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.tinFlask, data.dreamfulGold]
                ],
                support: [
                    [[data.sa], [data.le]],
                    [[data.dp], [data.le]]
                ],
                gear: [
                    [data.drat, data.dram, data.drab],
                    [data.elyt, data.murm, data.elyb]
                ],
                signetTable: [
                    [
                        ['Penumbra', data.start],
                        ['Blood Feast', data.first],
                        ['Imprint', data.second],
                        ['Immortality', data.no, '2'],
                        ['Thirst']
                    ],
                    [
                        [data.kalpas.name, '6', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[3]],
                        [data.kalpas.regular[6], ''],
                        [data.kalpas.nexus2.name],
                        [data.kalpas.nexus2[3]],
                        [data.aponia.name, '6', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name, ''],
                        [data.pardofelis.name, '3', data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name],
                        [data.mobius.name, '2', data.mobius.regular[2], ''],
                        [data.mobius.regular[5], '']
                    ]
                ],
                notes: `If equipped with Hekate's Sombre, can buy Su signets.<br><br>
                        <p>Recommended Gear</p>Hekate's Sombre > Elysian Astra: Heart's Color > Others<br>Build Start with Kalpas signets.<br><br>
                        <p>${data.kalpas.regular[6]}, ${data.aponia.nexus2[2]}</p>Recommended to upgrade.<br><br>
                        <p>${data.mobius.regular[2]}, ${data.mobius.regular[5]}</p>If using dracula set.`
            }
        }
    };
    const raven = {
        name: 'Midnight Absinthe',
        acr: 'raven',
        rate: data.abstinence,
        builds: {
            0: {
                signet: [
                    [[data.kevin, '1']],
                    [[data.aponia, '2'], [data.griseo, '2'], [data.eden, '2'], [data.vv, '1']]
                ],
                emblem: [
                    [data.burden, data.theLonelyMoon],
                    [data.veilOfTears, data.homeTown],
                    [data.goodOldDays, data.homeTown]
                ],
                support: [
                    [[data.ae], [data.vc]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.aslt, data.aslm, data.aslb],
                    [data.leet, data.tham, data.leeb]
                ],
                signetTable: [
                    [
                        ['Ominous Mist', data.start],
                        ['Arrowhead', data.first],
                        ['Raven Plume', data.no, '3'],
                        ['Suppression'],
                        ['Wild Hunt']
                    ],
                    [
                        [data.kevin.name, '3', data.kevin.regular[1]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]]
                    ],
                    [
                        [data.aponia.name, '7', data.aponia.regular[2]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]],
                        [data.griseo.name, '3', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.vv.name, '3', data.vv.regular[2]],
                        [data.vv.regular[5]],
                        [data.vv.nexus1.name]
                    ]
                ],
                notes: `<p>Kevin</p>If unable to ge double signets, start with double Ego.<br><br>
                        <p>${data.aponia.nexus2[2]}</p>If lacking breach.<br><br>
                        <p>Griseo</p>Buy signets in shop if possible.`
            }
        }
    };
    const elysia = {
        name: 'Miss Pink Elf',
        acr: 'elysia',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.griseo, '2']],
                    [[data.aponia, '2']],
                    [[data.vv, '1'], [data.su, '2'], [data.eden, '2']]
                ],
                emblem: [
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.veilOfTears, data.fallingInPastLight],
                    [data.farawayShip, data.fallingInPastLight]
                ],
                support: [
                    [[data.vc], [data.le]],
                    [[data.vc], [data.br]]
                ],
                gear: [
                    [data.elyt, data.elym, data.elyb],
                    [data.kaft, data.kafm, data.elyb],
                    [data.mict, data.danm, data.micb],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['Purity', data.start, '2'],
                        ['Zenith'],
                        ['Beauty', data.first],
                        ['Benevolence', data.reinforcement, '2'],
                        ['Love']
                    ],
                    [
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]]
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.vv.name, '3', data.vv.regular[2]],
                        [data.vv.regular[5]],
                        [data.vv.nexus1.name],
                        [data.su.name, '3', data.su.regular[3]],
                        [data.su.regular[6]],
                        [data.su.nexus2.name],
                        [data.eden.name, '4', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.regular[4]],
                        [data.eden.nexus2.name]
                    ]
                ],
                notes: `If there's no Normal Signet of Stars +2 stage effect, start with Aponia signets instead of Griseo signets.<br><br>
                        <p>Recommended Gear</p>Build Marco Polo M as alternative.<br><br>
                        <p>Aponia</p>Aponia's signet <span>${data.aponia.regular[4]}</span> is not recommended.<br><br>
                        <p>Eden</p>Start choosing her signets early only after obtaining Su's signet <span>${data.su.regular[2]}</span>`
            }
        }
    };
    const ft = {
        name: 'Molotov Cherry',
        acr: 'ft',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.kevin, '1'], [data.aponia, '2']],
                    [[data.pardofelis, '1'], [data.griseo, '2'], [data.vv, '2']]
                ],
                emblem: [
                    [data.burden, data.fallingInPastLight],
                    [data.veilOfTears, data.becauseOfYou],
                    [data.farawayShip, data.fallingInPastLight]
                ],
                support: [
                    [[data.le], [data.sa]],
                    [[data.br], [data.sa, data.ss]]
                ],
                gear: [
                    [data.mict, data.danm, data.micb],
                    [data.elyt, data.danm, data.elyb],
                    [data.biat, data.biam, data.biab],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['Silence', data.start],
                        ['Mixing', data.first],
                        ['Fervor', data.second],
                        ['Solitude', data.reinforcement],
                        ['Thorns', data.no]
                    ],
                    [
                        [data.kevin.name, '6', data.kevin.regular[4]],
                        [data.kevin.regular[5]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]],
                        [data.kevin.nexus1[2]],
                        [data.aponia.name, '4', data.aponia.regular[1]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2], '']
                    ],
                    [
                        [data.pardofelis.name, '2', data.pardofelis.regular[1]],
                        [data.pardofelis.nexus1.name],
                        [data.griseo.name, '4', data.griseo.regular[5]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.vv.name, '3', data.vv.regular[2]],
                        [data.vv.regular[6]],
                        [data.vv.nexus1.name]
                    ]
                ],
                notes: `If there's no Normal Signet of Deliverance +2 stage effect, start with Aponia signets.<br><br>
                        <p>Recommended Gear</p>Don't craft Michelangelo just for ER.<br><br>
                        <p>${data.aponia.nexus2[2]}</p>If starting with Aponia.<br><br>
                        <p>Griseo</p>If starting with Aponia, select enhanced signets and use Griseo's nexus <span>${data.griseo.nexus2.name}</span> as the 2nd nexus signet instead of Kevin's nexus.`
            }
        }
    };
    const pe = {
        name: 'Palatinus Equinox',
        acr: 'pe',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.kalpas, '2'], [data.aponia, '2']],
                    [[data.sakura, '1'], [data.griseo, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.madKingsMask, data.outOfReach],
                    [data.veilOfTears, data.tsukimiHimiko],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [[data.vc, data.sa], [data.br]],
                    [[data.ss], [data.br]]
                ],
                gear: [
                    [data.biat, data.biam, data.biab],
                    [data.mict, data.danm, data.micb],
                    [data.elyt, data.danm, data.elyb],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['Gallop', data.start],
                        ['Abyssal Chant', data.first],
                        ['Equinox', data.second, '2'],
                        ['Commitment'],
                        ['Exodus', data.no]
                    ],
                    [
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.kalpas.nexus2[3]],
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.sakura.name, '5', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.sakura.nexus1[1]],
                        [data.griseo.name, '7', data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[3]],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Build 2 & Marco Polo M as alternative.<br><br>
                        <p>Kalpas</p>If unable to get double signets, start with double Ego.`
            }
        }
    };
    const fischl = {
        name: 'Prinzessin der Verurteilung',
        acr: 'fischl',
        rate: data.abstinence,
        builds: {
            0: {
                signet: [
                    [[data.griseo, '1']],
                    [[data.hua, '2']],
                    [[data.mobius, '1'], [data.vv, '1'], [data.kalpas, '2']]
                ],
                emblem: [
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.memory, data.fallingInPastLight],
                    [data.resolve, data.homeTown]
                ],
                support: [
                    [[data.ae], [data.vc]],
                    [[data.ae], [data.vc]]
                ],
                gear: [
                    [data.want, data.wanm, data.wanb],
                    [data.hant, data.hanm, data.hanb],
                    [data.lint, data.linm, data.linb]
                ],
                signetTable: [
                    [
                        ['Retrtibution', data.start],
                        ['Midnight', data.first],
                        ['Fate', data.second],
                        ['Dark Wings', data.no, '2'],
                        ['Nightfall']
                    ],
                    [
                        [data.griseo.name, '5', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.griseo.nexus1[2], '']
                    ],
                    [
                        [data.hua.name, '3', data.hua.regular[6]],
                        [data.hua.nexus2.name],
                        [data.hua.nexus2[1], '']
                    ],
                    [
                        [data.mobius.name, '3', data.mobius.regular[2]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.vv.name, '2', data.vv.regular[2]],
                        [data.vv.nexus1.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Whisper of the Past: Sonnet > Mitternachts Waltz > Others<br><br>
                        <p>${data.griseo.nexus1[2]}, ${data.hua.nexus2[1]}</p>If lacking breach.<br><br>
                        <p>Kalpas</p>Buy signets from shop. Can also buy Su signets.`
            }
        }
    };
    const rvc = {
        name: 'Reverist Calico',
        acr: 'rc',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.aponia, '2'], [data.pardofelis, '1']],
                    [[data.griseo, '2'], [data.eden, '2'], [data.kalpas, '2']]
                ],
                emblem: [
                    [data.veilOfTears, data.fallingInPastLight],
                    [data.feastOfEmptiness, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.hb]],
                    [[data.ae], [data.hb]]
                ],
                gear: [
                    [data.brot, data.welm, data.brob],
                    [data.bast, data.basm, data.basb],
                    [data.anat, data.anam, data.anab]
                ],
                signetTable: [
                    [
                        ['Cat\'s Eyes', data.start, '2'],
                        ['Hidden Claws'],
                        ['Nighteye', data.no, '3'],
                        ['Phantasma'],
                        ['the Tailpiece']
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[6]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.pardofelis.name, '7', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[3], ''],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[6], ''],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[2]],
                        [data.pardofelis.nexus1[3]]
                    ],
                    [
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ]
                ],
                notes: `<p>${data.pardofelis.regular[3]}, ${data.pardofelis.regular[4]}</p>Early only.`
            }
        }
    };
    const ri = {
        name: 'Ritual Imayoh',
        acr: 'ri',
        rate: data.inferno,
        builds: {
            0: {
                signet: [
                    [[data.griseo, '1']],
                    [[data.kevin, '1'], [data.aponia, '2']],
                    [[data.mobius, '1'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.burden, data.homeTown],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [[data.vc], [data.le]],
                    [[data.vc], [data.br]]
                ],
                gear: [
                    [data.elyt, data.elym, data.elyb],
                    [data.mict, data.danm, data.micb],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['Prosperity', data.start],
                        ['Dawn', data.first],
                        ['Blossom', data.second],
                        ['Fertility', data.no, '2'],
                        ['Torch']
                    ],
                    [
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name]
                    ],
                    [
                        [data.kevin.name, '2', data.kevin.regular[4]],
                        [data.kevin.nexus1.name],
                        [data.aponia.name, '4', data.aponia.regular[1]],
                        [data.aponia.regular[2], ''],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.mobius.name, '3', data.mobius.regular[3]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[2], ''],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Positron Blasters > Domain of the Void > Others<br>Build Marco Polo M as alternative.<br><br>
                        <p>${data.aponia.regular[2]}, ${data.pardofelis.regular[2]}</p>If needed.`
            }
        }
    };
    const sw = {
        name: 'Silverwing N-EX',
        acr: 'sw',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.aponia, '2'], [data.su, '2']],
                    [[data.eden, '2'], [data.pardofelis, '1'], [data.griseo, '1']]
                ],
                emblem: [
                    [data.veilOfTears, data.becauseOfYou],
                    [data.lightAsABodhiLeaf, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.vc]],
                    [[data.ae], [data.hb]]
                ],
                gear: [
                    [data.brot, data.brom, data.brob],
                    [data.anat, data.anam, data.anab]
                ],
                signetTable: [
                    [
                        ['Phantom Plumes', data.start],
                        ['Grey Falcon', data.first],
                        ['Pale Feathers', data.second],
                        ['Silver Eagle', data.reinforcement],
                        ['Sharp Eyes', data.no]
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[6]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.su.name, '3', data.su.regular[2]],
                        [data.su.regular[3]],
                        [data.su.nexus2.name]
                    ],
                    [
                        [data.eden.name, '4', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.eden.nexus2[3]],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[6]],
                        [data.pardofelis.nexus1.name],
                        [data.griseo.name, '3', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]]
                    ]
                ]
            }
        }
    };
    const spa = {
        name: 'Spina Astera',
        acr: 'spa',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.aponia, '2']],
                    [[data.eden, '2'], [data.kalpas, '2'], [data.griseo, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.veilOfTears, data.becauseOfYou],
                    [data.goldGoblet, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.vc]],
                    [[data.ae], [data.br]]
                ],
                gear: [
                    [data.ragt, data.ragm, data.ragb],
                    [data.ragt, data.tham, data.ragb],
                    [data.leet, data.tham, data.leeb]
                ],
                signetTable: [
                    [
                        ['Wild Flare', data.start],
                        ['Alrescha', data.first],
                        ['Star Quillon', data.second, '2'],
                        ['Radiant Formation'],
                        ['Holy Flame', data.reinforcement]
                    ],
                    [
                        [data.aponia.name, '6', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1], ''],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.pardofelis.name, '5', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3]]
                    ]
                ],
                notes: `<p>${data.aponia.nexus2[1]}</p>If having trouble surviving.`
            }
        }
    };
    const si = {
        name: 'Starry Impression',
        acr: 'si',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.hua, '2'], [data.griseo, '2']],
                    [[data.pardofelis, '1'], [data.sakura, '1'], [data.kalpas, '2']]
                ],
                emblem: [
                    [data.memory, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [[data.sa], [data.br]],
                    [[data.ss], [data.br]]
                ],
                gear: [
                    [data.cezt, data.cezm, data.cezb],
                    [data.elyt, data.danm, data.elyb],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['River Forest', data.start, '2'],
                        ['Starry Night'],
                        ['Cloud Valley', data.first],
                        ['Feathers', data.reinforcement],
                        ['Azure Wind', data.no]
                    ],
                    [
                        [data.hua.name, '2', data.hua.regular[5]],
                        [data.hua.nexus2.name],
                        [data.griseo.name, '8', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.pardofelis.name, '5', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[3], ''],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[3]],
                        [data.sakura.name, '2', data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.kalpas.name, '2', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Build Marco Polo M as alternative.<br><br>
                        <p>${data.pardofelis.regular[3]}</p>Take early.<br><br>
                        <p>Kalpas</p>Don't need nexus if using BR.`
            }
        }
    };
    const nyx = {
        name: 'Starchasm Nyx',
        acr: 'nyx',
        rate: data.corruption,
        builds: {
            0: {
                signet: [
                    [[data.kevin, '1'], [data.griseo, '2']],
                    [[data.sakura, '1'], [data.eden, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.burden, data.tsukimiHimiko],
                    [data.rainbowOfAbsence, data.itWillBeWritten],
                    [data.goodOldDays, data.dreamfulGold]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.hb]]
                ],
                gear: [
                    [data.vert, data.verm, data.verb],
                    [data.anat, data.anam, data.anab]
                ],
                signetTable: [
                    [
                        ['Frigidity', data.start],
                        ['Abyssal Gaze', data.first],
                        ['Nightmare', data.second, '2'],
                        ['Toxic Bath'],
                        ['Cocoon Break', data.no]
                    ],
                    [
                        [data.kevin.name, '5', data.kevin.regular[1]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]],
                        [data.kevin.nexus1[2]],
                        [data.griseo.name, '8', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]],
                    ],
                    [
                        [data.sakura.name, '2', data.sakura.regular[5]],
                        [data.sakura.regular[6]],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[6]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Kevin</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>Sakura</p>Buy signets from shop if possible.`
            }
        }
    };
    const sn = {
        name: 'Stygian Nymph',
        acr: 'sn',
        rate: data.inferno,
        builds: {
            0: {
                signet: [
                    [[data.sakura, '1'], [data.aponia, '2']],
                    [[data.kosma, '1'], [data.griseo, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.forgetMeNot, data.becauseOfYou],
                    [data.veilOfTears, data.tsukimiHimiko],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [[data.sa], [data.ss]],
                    [[data.ss], [data.br]]
                ],
                gear: [
                    [data.allt, data.allm, data.allb],
                    [data.biat, data.biam, data.biab]
                ],
                signetTable: [
                    [
                        ['Vurnerable Duality', data.start],
                        ['Union', data.first],
                        ['Intergrowth', data.second, '3'],
                        ['Kindred'],
                        ['Might of Duality']
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.aponia.name, '3', data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.kosma.name, '4', data.kosma.regular[4]],
                        [data.kosma.regular[5]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus1.name],
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Sakura</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>Aponia</p>Don't pick <span>${data.aponia.regular[1]}</span>.`
            }
        }
    };
    const carole = {
        name: 'Sweet \'n\' Spicy',
        acr: 'carole',
        rate: data.inferno,
        builds: {
            0: {
                signet: [
                    [[data.kevin, '1'], [data.aponia, '2']],
                    [[data.griseo, '1'], [data.kalpas, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.burden, data.theLonelyMoon],
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [[data.ss], [data.br]],
                    [[data.ss], [data.br]]
                ],
                gear: [
                    [data.pagt, data.pagm, data.pagb],
                    [data.biat, data.biam, data.biab],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['Revolution', data.start],
                        ['Skyfall', data.first],
                        ['Brake', data.no, '3'],
                        ['Impulse'],
                        ['Rupture']
                    ],
                    [
                        [data.kevin.name, '3', data.kevin.regular[3]],
                        [data.kevin.regular[5]],
                        [data.kevin.nexus1.name],
                        [data.aponia.name, '5', data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Oblivion Down > Miracle Kissy Pillow > Others<br><br>
                        <p>Kevin</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>${data.aponia.nexus2[2]}</p>Priority.`
            }
        }
    };
    const tp = {
        name: 'Twilight Paladin',
        acr: 'tp',
        rate: data.abstinence,
        builds: {
            0: {
                signet: [
                    [[data.su, '2'], [data.aponia, '2']],
                    [[data.griseo, '2'], [data.eden, '2'], [data.pardofelis, '1']]
                ],
                emblem: [
                    [data.lightAsABodhiLeaf, data.theLonelyMoon],
                    [data.veilOfTears, data.dreamfulGold],
                    [data.goodOldDays, data.dreamfulGold]
                ],
                support: [
                    [[data.sa], [data.ss]],
                    [[data.ss], [data.br]]
                ],
                gear: [
                    [data.kaft, data.kafm, data.kafb],
                    [data.elyt, data.siem, data.elyb]
                ],
                signetTable: [
                    [
                        ['Banishment', data.start],
                        ['Penalty', data.first],
                        ['Dusk', data.second,],
                        ['Radiance', data.reinforcement, '2'],
                        ['Sanction']
                    ],
                    [
                        [data.su.name, '4', data.su.regular[1]],
                        [data.su.regular[2], ''],
                        [data.su.regular[3]],
                        [data.su.regular[6]],
                        [data.aponia.name, '4', data.aponia.regular[1]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.griseo.name, '5', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1], ''],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Su</p>Don't pick enhanced signets.<br><br>
                        <p>${data.su.regular[2]}</p>Priority.<br><br>
                        <p>${data.griseo.nexus2[1]}</p>If lacking breach.`
            }
        }
    };
    const stfu = {
        name: 'Valkyrie Bladestrike',
        acr: 'stfu',
        rate: data.abstinence,
        builds: {
            0: {
                signet: [
                    [[data.su, '2']],
                    [[data.kevin, '1']],
                    [[data.griseo, '2'], [data.aponia, '2'], [data.eden, '1']]
                ],
                emblem: [
                    [data.lightAsABodhiLeaf, data.theLonelyMoon],
                    [data.burden, data.theLonelyMoon],
                    [data.heavyAsAMillionLives, data.dreamfulGold]
                ],
                support: [
                    [[data.vc], [data.le]],
                    [[data.vc], [data.ss]]
                ],
                gear: [
                    [data.dirt, data.dirm, data.dirb],
                    [data.elyt, data.dirm, data.elyb],
                    [data.rebt, data.marm, data.rebb]
                ],
                signetTable: [
                    [
                        ['Current', data.start],
                        ['Karma', data.first],
                        ['Idea', data.second, '2'],
                        ['Thunder'],
                        ['Zanshin', data.no]
                    ],
                    [
                        [data.su.name, '5', data.su.regular[1], ''],
                        [data.su.regular[2]],
                        [data.su.regular[5], ''],
                        [data.su.regular[6]],
                        [data.su.nexus2.name]
                    ],
                    [
                        [data.kevin.name, '5', data.kevin.regular[4]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]],
                        [data.kevin.nexus1[2]]
                    ],
                    [
                        [data.griseo.name, '5', data.griseo.regular[1]],
                        [data.griseo.regular[3], ''],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.aponia.name, '4', data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[3]],
                        [data.eden.name, '4', data.eden.regular[1], ''],
                        [data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name]
                    ],
                ],
                notes: `<p>Recommended Gear</p>Dawn Breaker: Talwar ≥ Domain of Sanction > 3rd Sacred Relic > Others<br>Build If not enough breach or impair, pick breach from signets.<br><br>
                        <p>${data.su.regular[1]}, ${data.su.regular[5]}</p>Buy from shop if possible.<br><br>
                        <p>${data.griseo.regular[3]}, ${data.eden.regular[1]}</p>If needed.`
            }
        }
    };
    const vg = {
        name: 'Valkyrie Gloria',
        acr: 'vg',
        rate: data.inferno,
        builds: {
            0: {
                signet: [
                    [[data.kalpas, '1'], [data.hua, '2']],
                    [[data.aponia, '2'], [data.griseo, '1'], [data.vv, '1']]
                ],
                emblem: [
                    [data.madKingsMask, data.fallingInPastLight],
                    [data.memory, data.fallingInPastLight],
                    [data.resolve, data.fallingInPastLight]
                ],
                support: [
                    [[data.ae], [data.le]],
                    [[data.ae], [data.br, data.ma]]
                ],
                gear: [
                    [data.leet, data.tham, data.leeb],
                    [data.ragt, data.tham, data.ireb]
                ],
                signetTable: [
                    [
                        ['Battle Song', data.start],
                        ['Gloria', data.first],
                        ['Impetus', data.no, '3'],
                        ['Sol'],
                        ['Triumph']
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus1.name],
                        [data.hua.name, '2', data.hua.regular[6]],
                        [data.hua.nexus2.name]
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.griseo.name, '6', data.griseo.regular[1]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.griseo.nexus1[2], ''],
                        [data.vv.name, '3', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.nexus1.name]
                    ]
                ],
                notes: `<p>Recommended Gear</p>Eos Gloria > Sagittarius Astra<br><br>
                        <p>${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    return [aka, bkek, da, dpe, fr, gd, hofs, hor, hos, hot,
        mobi, lk, raven, elysia, ft, pe, fischl, rvc, ri, sw,
        spa, si, nyx, sn, carole, tp, stfu, vg];
}());

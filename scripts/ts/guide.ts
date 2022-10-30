import * as data from './data.js';

type Signet = [data.Signets, '1' | '2']
type Gear = [data.NameAcr, data.NameAcr, data.NameAcr, data.NameAcr]
type Emblem = [data.NameAcr, data.NameAcr]
type Guide = {
    name: string;
    acr: string;
    rating: string;
    builds: {
        [key: number]: {
            signet: Array<Array<Signet>>
            emblem: Array<Emblem>
            support: Array<Array<Array<data.NameAcr>>>
            gear: Array<Gear>
            signetTable: Array<Array<Array<string>>>
            notes?: string;
        }
    }
}
export const valks: any = (function(): Guide[] {
    // Argent Knight: Artemis
    const aka: Guide = {
        name: 'Argent Knight: Artemis',
        acr: 'aka',
        rating: data.corruption,
        builds: {
            0: {
                signet: [ // transitional, main, secondary
                    [
                        [data.hua, '2'],
                        [data.mobius, '1'],
                        [data.vv, '2']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.aponia, '2']
                    ]
                ],
                emblem: [
                    [data.memory, data.becauseOfYou], // early
                    [data.forbiddenSeed, data.boundlessLogos], // mid
                    [data.ruinedLegacy, data.boundlessLogos] // late
                ],
                support: [
                    [ [data.ae], [data.le] ], // utility
                    [ [data.ae], [data.hb] ] // damage
                ],
                gear: [ // T, M, B
                    [data.skth, data.anat, data.anam, data.anab],
                    [data.hawp, data.bast, data.basm, data.basb]
                ],
                signetTable: [
                    // elysian signets, core signets, reinforcement signets, transitional signets
                    // respective order from signet Object
                    [
                        // rows[columns]
                        // whatever element that only has numbers - rowspan value for the preceding value
                        // succeeding rows covered by the rowspan value starts first regardless
                        ['Frost Scythe', data.start],
                        ['Stellar Trials', data.first, '2'],
                        ['Winter Harvest'],
                        ['Cold Moon', data.second],
                        ['Uranian Mirror', data.reinforcement]
                    ],
                    [
                        [data.hua.name, '2', data.hua.regular[6], ''],
                        [data.hua.nexus2.name],
                        [data.mobius.name, '5', data.mobius.regular[2]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.mobius.nexus1[1]],
                        [data.mobius.nexus1[3]],
                        [data.vv.name, '5', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.regular[6]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1]]
                    ],
                    [
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.aponia.name, '4', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name]
                    ]
                ],
                notes: `<p>${data.hua.regular[6]}</p>Recommended to upgrade.`
            }
        }
    }
    // Bright Knight: Excelsis
    const bkek: Guide = {
        name: 'Bright Knight: Excelsis',
        acr: 'bke',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.sakura, '1'],
                        [data.griseo, '2']
                    ],
                    [
                        [data.kalpas, '2'],
                        [data.kosma, '2'],
                        [data.aponia, '2']
                    ]
                ],
                emblem: [
                    [data.forgetMeNot, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [ [data.sn], [data.le] ],
                    [ [data.sa], [data.br] ]
                ],
                gear: [
                    [data.abfl, data.dant, data.danm, data.danb],
                    [data.hawp, data.dirt, data.dirm, data.dirb]
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
                        [data.sakura.name, '4', data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.sakura.nexus1[1], ''],
                        [data.griseo.name, '10', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[3], ''],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[5]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.kalpas.name, '5', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[3]],
                        [data.kalpas.nexus2.name],
                        [data.kalpas.nexus2[3], ''],
                        [data.kosma.name, '5', data.kosma.regular[3]],
                        [data.kosma.regular[4]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name],
                        [data.kosma.nexus2[2], ''],
                        [data.aponia.name, '5', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]]
                    ]
                ],
                notes: `<p>${data.sakura.nexus1[1]}</p>If don't have <span>Blessing of Paragon</span>.<br><br>
                        <p>${data.griseo.regular[3]}</p>Minimum of +2 upgrade.<br><br>
                        <p>${data.kalpas.nexus2[3]}, ${data.kosma.nexus2[2]}, ${data.aponia.nexus2[2]}</p>If lacking impair.`
            }
        }
    }
    // Dea Anchora
    const da: Guide = {
        name: 'Dea Anchora',
        acr: 'da',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2']
                    ],
                    [
                        [data.kevin, '1'],
                        [data.eden, '2'],
                        [data.griseo, '1'],
                        [data.su, '2']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.burden, data.itWillBeWritten],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.le] ],
                    [ [data.ae], [data.br, data.ma] ]
                ],
                gear: [
                    [data.saas, data.shat, data.sham, data.shab],
                    [data.hawp, data.leet, data.tham, data.leeb]
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
                        [data.aponia.name, '5', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.kevin.name, '4', data.kevin.regular[1]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.kevin.nexus1[1]],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name],
                        [data.griseo.name, '2', data.griseo.regular[1]],
                        [data.griseo.regular[6]],
                        [data.su.name, '4', data.su.regular[1]],
                        [data.su.regular[3]],
                        [data.su.regular[5]],
                        [data.su.nexus2.name]
                    ]
                ]
            }
        }
    }
    // Disciplinary Perdition
    const dpe: Guide = {
        name: 'Disciplinary Perdition',
        acr: 'dip',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.kalpas, '2'],
                        [data.griseo, '1']
                    ],
                    [
                        [data.pardofelis, '1'],
                        [data.kosma, '2']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.boundlessFeeling],
                    [data.madKingsMask, data.boundlessLogos],
                    [data.tinFlask, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.vc] ]
                ],
                gear: [
                    [data.loco, data.zent, data.zenm, data.zenb],
                    [data.hawp, data.hant, data.hanm, data.hanb]
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
                        [data.aponia.name, '7', data.aponia.regular[1]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[6]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3], ''],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '6', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name],
                        [data.griseo.nexus1[2]],
                        [data.griseo.nexus1[3]]
                    ],
                    [
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.kosma.name, '5', data.kosma.regular[3]],
                        [data.kosma.regular[4]],
                        [data.kosma.regular[5]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name]
                    ]
                ],
                notes: `<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
            }
        }
    }
    // Fallen Rosemary
    const fr: Guide = {
        name: 'Fallen Rosemary',
        acr: 'fr',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.hua, '2']
                    ],
                    [
                        [data.kalpas, '1'],
                        [data.sakura, '2'],
                        [data.griseo, '2']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.becauseOfYou],
                    [data.memory, data.itWillBeWritten],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.le] ],
                    [ [data.hb], [data.br] ]
                ],
                gear: [
                    [data.irhe, data.hant, data.hanm, data.hanb],
                    [data.hawp, data.iret, data.irem, data.ireb]
                ],
                signetTable: [
                    [
                        ['Soul Siphon', data.start],
                        ['Valfreyja', data.first],
                        ['God Eater', data.second, '2'],
                        ['Nocturne'],
                        ['Spirit Servants', data.reinforcement]
                    ],
                    [
                        [data.aponia.name, '6', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]],
                        [data.hua.name, '4', data.hua.regular[1]],
                        [data.hua.regular[3]],
                        [data.hua.regular[6]],
                        [data.hua.nexus2.name]
                    ],
                    [
                        [data.kalpas.name, '2', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.sakura.name, '4', data.sakura.regular[1]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name],
                        [data.griseo.name, '3', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]]
                    ]
                ]
            }
        }
    }
    // Golden Diva
    const gd: Guide = {
        name: 'Golden Diva',
        acr: 'ede',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                    ],
                    [   
                        [data.kalpas, '2'],
                        [data.griseo, '2'],
                        [data.sakura, '2'],
                        [data.kosma, '2'],
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.madKingsMask, data.theLonelyMoon],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.le] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.doin, data.hant, data.hanm, data.hanb],
                    [data.ecpa, data.zent, data.linm, data.zenb]
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
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[2]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]]
                    ],
                    [
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[3]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '3', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.sakura.name, '4', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name],
                        [data.kosma.name, '6', data.kosma.regular[3]],
                        [data.kosma.regular[4]],
                        [data.kosma.regular[5]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name],
                        [data.kosma.nexus2[2]]
                    ]
                ],
                notes: `Can buy Su signets from shop.`
            }
        }
    }
    // Goushinnso Memento
    const gm: Guide = {
        name: 'Goushinnso Memento',
        acr: 'gm',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.kosma, '2'],
                        [data.hua, '2']
                    ],
                    [
                        [data.kalpas, '2'],
                        [data.griseo, '2'],
                        [data.aponia, '2']
                    ]
                ],
                emblem: [
                    [data.fragileFriend, data.outOfReach],
                    [data.memory, data.homeTown],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [ [data.ae], [data.sn] ],
                    [ [data.ae], [data.hb] ]
                ],
                gear: [
                    [data.frna, data.anat, data.anam, data.anab],
                    [data.hawp, data.bast, data.basm, data.basb]
                ],
                signetTable: [
                    [
                        ['Flourish', data.start, '2'],
                        ['Whiteout'],
                        ['Frozen Cloud', data.no, '3'],
                        ['Haste'],
                        ['Icy Sakura']
                    ],
                    [
                        [data.kosma.name, '7', data.kosma.regular[3]],
                        [data.kosma.regular[4]],
                        [data.kosma.regular[5]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name],
                        [data.kosma.nexus2[1]],
                        [data.kosma.nexus2[2]],
                        [data.hua.name, '4', data.hua.regular[1]],
                        [data.hua.regular[3]],
                        [data.hua.regular[6]],
                        [data.hua.nexus2.name]
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.aponia.name, '3', data.aponia.regular[1]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name]
                    ]
                ]
            }
        }
    }
    // Helical Contraption
    const hc: Guide = {
        name: 'Helical Contraption',
        acr: 'hc',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.vv, '2'],
                        [data.griseo, '2']
                    ],
                    [
                        [data.mobius, '1'],
                        [data.pardofelis, '1'],
                        [data.su, '2']
                    ]
                ],
                emblem: [
                    [data.psuedoMiracle, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.tinFlask, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.ma] ]
                ],
                gear: [
                    [data.topa, data.cart, data.carm, data.carb],
                    [data.hawp, data.leet, data.tham, data.leeb]
                ],
                signetTable: [
                    [
                        ['Facade', data.start, '2'],
                        ['Sleight'],
                        ['Reversal', data.reinforcement],
                        ['Assemblage', data.no, '2'],
                        ['Transmission']
                    ],
                    [
                        [data.vv.name, '7', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.regular[5]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2]],
                        [data.vv.nexus2[3]],
                        [data.griseo.name, '9', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1], ''],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.mobius.name, '5', data.mobius.regular[2]],
                        [data.mobius.regular[3]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.mobius.nexus1[1]],
                        [data.pardofelis.name, '3', data.pardofelis.regular[3]],
                        [data.pardofelis.regular[6]],
                        [data.kevin.nexus1.name],
                        [data.su.name, '4', data.su.regular[3]],
                        [data.su.regular[5]],
                        [data.su.regular[6]],
                        [data.su.nexus2.name]
                    ]
                ],
                notes: `<p>${data.vv.nexus2[1]}</p>Max upgrade.<br><br>
                        <p>${data.griseo.nexus2[1]}</p>Priority.<br><br>
                        <p>Su</p>Can buy Sakura's signets as reinforcements.`
            }
        }
    }
    // Herrscher of Flamescion
    const hofs: Guide = {
        name: 'Herrscher of Flamescion',
        acr: 'hofs',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.kalpas, '2'],
                        [data.hua, '2'],
                        [data.sakura, '1']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.kosma, '2']
                    ]
                ],
                emblem: [
                    [data.madKingsMask, data.becauseOfYou],
                    [data.memory, data.itWillBeWritten],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [ [data.ae], [data.br] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.doin, data.murt, data.murm, data.murb],
                    [data.hawp, data.leet, data.tham, data.leeb]
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
                        [data.kalpas.regular[3]],
                        [data.kalpas.nexus2.name],
                        [data.kalpas.nexus2[3]],
                        [data.hua.name, '2', data.hua.regular[6]],
                        [data.hua.nexus2.name],
                        [data.sakura.name, '5', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[4]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name]
                    ],
                    [
                        [data.griseo.name, '7', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3], ''],
                        [data.kosma.name, '5', data.kosma.regular[3]],
                        [data.kosma.regular[4]],
                        [data.kosma.regular[5]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name]
                    ]
                ],
                notes: `<p>Sakura</p>Can pick 2nd nexus signets.,br><br>
                        <p>${data.griseo.nexus2[3]}</p>Priority.`
            }
        }
    }
    // Herrscher of Human: Ego
    const hoh: Guide = {
        name: 'Herrscher of Human: Ego',
        acr: 'hoh',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2']
                    ],
                    [
                        [data.kalpas, '2'],
                        [data.eden, '1'],
                        [data.hua, '2'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.boundlessFeeling],
                    [data.madKingsMask, data.boundlessFeeling],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.doeg, data.elpt, data.elpm, data.elpb],
                    [data.hawp, data.anat, data.anam, data.anab]
                ],
                signetTable: [
                    [
                        ['First Encounter', data.start, '2'],
                        ['First Yearning'],
                        ['First Bloom', data.reinforcement],
                        ['First Awakening', data.no, '2'],
                        ['First Journey']
                    ],
                    [
                        [data.aponia.name, '6', data.aponia.regular[1]],
                        [data.aponia.regular[2], ''],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[5], ''],
                        [data.kalpas.nexus2.name],
                        [data.eden.name, '6', data.eden.regular[1], ''],
                        [data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.regular[4]],
                        [data.eden.nexus2.name],
                        [data.eden.nexus2[2]],
                        [data.hua.name, '6', data.hua.regular[1]],
                        [data.hua.regular[3]],
                        [data.hua.regular[4]],
                        [data.hua.regular[6], ''],
                        [data.hua.nexus2.name],
                        [data.hua.nexus2[1]],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>${data.aponia.regular[2]}, ${data.kalpas.regular[5]}, ${data.eden.regular[1]}</p>Can pick ti synergize with Hua's enhanced signets.<br><br>
                        <p>${data.hua.regular[6]}</p>If missing Aponia's breach signet <span>${data.aponia.nexus2[2]}</span>`
            },
            1: {
                signet: [
                    [
                        [data.hua, '2'],
                        [data.vv, '2']
                    ],
                    [
                        [data.kalpas, '1'],
                        [data.sakura, '1'],
                        [data.griseo, '2']
                    ]
                ],
                emblem: [
                    [data.memory, data.fallingInPastLight],
                    [data.psuedoMiracle, data.fallingInPastLight],
                    [data.tinFlask, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.doeg, data.elpt, data.elpm, data.elpb],
                    [data.hawp, data.welt, data.welm, data.ireb]
                ],
                signetTable: [
                    [
                        ['First Awakening', data.start, '2'],
                        ['First Bloom'],
                        ['First Journey', data.first],
                        ['First Encounter', data.no, '2'],
                        ['First Yearning']
                    ],
                    [
                        [data.hua.name, '4', data.hua.regular[1]],
                        [data.hua.regular[3]],
                        [data.hua.regular[6]],
                        [data.hua.nexus2.name],
                        [data.vv.name, '5', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.regular[5]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[2]]
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus1.name],
                        [data.sakura.name, '4', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name]
                    ]
                ]
            }
        }
    }
    // Herrscher of Reason
    const hor: Guide = {
        name: 'Herrscher of Reason',
        acr: 'hor',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.vv, '2'],
                        [data.sakura, '2']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.kalpas, '2'],
                        [data.su, '2']
                    ]
                ],
                emblem: [
                    [data.psuedoMiracle, data.becauseOfYou],
                    [data.psuedoMiracle, data.theLonelyMoon],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.le] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.dore, data.vert, data.verm, data.ireb],
                    [data.hawp, data.welt, data.welm, data.welb]
                ],
                signetTable: [
                    [
                        ['Wisdom', data.start],
                        ['Reason', data.first],
                        ['Inspiration', data.second, '2'],
                        ['Truth'],
                        ['Creation', data.no]
                    ],
                    [
                        [data.vv.name, '6', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2]],
                        [data.vv.nexus2[3]],
                        [data.sakura.name, '5', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[4]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name]
                    ],
                    [
                        [data.griseo.name, '9', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.su.name, '4', data.su.regular[1]],
                        [data.su.regular[3]],
                        [data.su.regular[6]],
                        [data.su.nexus2.name]
                    ]
                ],
                notes: `<p>${data.vv.nexus2[1]}</p>Priority.`
            }
        }
    }
    // Herrscher of Sentience
    const hos: Guide = {
        name: 'Herrscher of Sentience',
        acr: 'hos',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.kalpas, '2']
                    ],
                    [
                        [data.griseo, '2']
                    ],
                    [
                        [data.pardofelis, '1'],
                        [data.kosma, '2']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.madKingsMask, data.itWillBeWritten],
                    [data.tinFlask, data.dreamfulGold]
                ],
                support: [
                    [ [data.vc], [data.ss] ],
                    [ [data.vc], [data.ss] ]
                ],
                gear: [
                    [data.dose, data.dirt, data.dirm, data.rebb],
                    [data.hawp, data.shst, data.shsm, data.shsb]
                ],
                signetTable: [
                    [
                        ['Victory', data.start],
                        ['Dark Plumes', data.first],
                        ['Supremacy', data.reinforcement],
                        ['Ego', data.no, '2'],
                        ['Legion']
                    ],
                    [
                        [data.aponia.name, '4', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[3]],
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[3]],
                        [data.kalpas.nexus2.name],
                    ],
                    [
                        [data.griseo.name, '8', data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1], ''],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.kosma.name, '5', data.kosma.regular[4]],
                        [data.kosma.regular[5]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name],
                        [data.kosma.nexus2[1]]
                    ]
                ],
                notes: `<p>${data.griseo.nexus2[1]}</p>Priority.`
            }
        }
    }
    // Herrscher of the Void
    const hov: Guide = {
        name: 'Herrscher of the Void',
        acr: 'hov',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.sakura, '1']
                    ],
                    [
                        [data.vv, '2'],
                        [data.hua, '2']
                    ],
                    [
                        [data.griseo, '1'],
                        [data.mobius, '1']
                    ]
                ],
                emblem: [
                    [data.forgetMeNot, data.theLonelyMoon],
                    [data.psuedoMiracle, data.boundlessLogos],
                    [data.stainedSakura, data.boundlessLogos]
                ],
                support: [
                    [ [data.ss], [data.vc] ],
                    [ [data.ss], [data.vc] ]
                ],
                gear: [
                    [data.dovo, data.sirt, data.sirm, data.sirb],
                    [data.kevo, data.elyt, data.elym, data.elyb]
                ],
                signetTable: [
                    [
                        ['Innateness', data.start],
                        ['Coleus', data.second],
                        ['Annihilation', data.reinforcement, '2'],
                        ['Virtuality'],
                        ['Law', data.no]
                    ],
                    [
                        [data.sakura.name, '4', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name]
                    ],
                    [
                        [data.vv.name, '7', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.regular[5]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2], ''],
                        [data.vv.nexus2[3]],
                        [data.hua.name, '3', data.hua.regular[3]],
                        [data.hua.regular[5]],
                        [data.hua.nexus2.name]
                    ],
                    [
                        [data.griseo.name, '2', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.mobius.name, '5', data.mobius.regular[2]],
                        [data.mobius.regular[3]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.mobius.nexus1[1]]
                    ]
                ],
                notes: `<p>${data.vv.nexus2[1]}, ${data.vv.nexus2[1]}</p>Priority.<br><br>
                        <p>Mobius</p>Can buy Su, Kalpas, and Eden signets from shop as further reinforcement.`
            }
        }
    }
    // Herrscher of Thunder
    const hot: Guide = {
        name: 'Herrscher of Thunder',
        acr: 'hot',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.griseo, '2'],
                        [data.kevin, '1']
                    ],
                    [
                        [data.pardofelis, '1'],
                        [data.mobius, '1'],
                        [data.kalpas, '2']
                    ]
                ],
                emblem: [
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.burden, data.itWillBeWritten],
                    [data.ruinedLegacy, data.dreamfulGold]
                ],
                support: [
                    [ [data.le], [data.vc] ],
                    [ [data.ae], [data.vc] ]
                ],
                gear: [
                    [data.sena, data.hant, data.hanm, data.hanb],
                    [data.seru, data.bent, data.benm, data.benb]
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
                        [data.griseo.name, '6', data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]],
                        [data.kevin.name, '4', data.kevin.regular[1]],
                        [data.kevin.regular[2]],
                        [data.kevin.regular[3]],
                        [data.kevin.nexus1.name]
                    ],
                    [
                        [data.pardofelis.name, '5', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[1]],
                        [data.pardofelis.nexus1[2]],
                        [data.mobius.name, '3', data.mobius.regular[3]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ]
                ],
                notes: `If not enough damage, start with double Ego.<br><br>
                        <p>Pardofelis</p>Can buy Sakura and Vill-V signets in shop as reinforcement.`
            },
            1: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.griseo, '2']
                    ],
                    [
                        [data.sakura, '1'],
                        [data.pardofelis, '1'],
                        [data.kalpas, '2']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.stainedSakura, data.dreamfulGold]
                ],
                support: [
                    [ [data.vc], [data.le] ],
                    [ [data.ae], [data.vc] ]
                ],
                gear: [
                    [data.dosa, data.hant, data.hanm, data.hanb],
                    [data.hawp, data.bent, data.benm, data.benb]
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
                        [data.aponia.nexus2[2]],
                        [data.griseo.name, '6', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]]
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ]
                ]
            }
        }
    }
    // Infinite Ouroboros
    const mobi: Guide = {
        name: 'Infinite Ouroboros',
        acr: 'mobius',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.mobius, '1'],
                        [data.aponia, '2'],
                        [data.griseo, '2']
                    ],
                    [
                        [data.sakura, '1'],
                        [data.kalpas, '2']
                    ]
                ],
                emblem: [
                    [data.forbiddenSeed, data.boundlessLogos],
                    [data.veilOfTears, data.boundlessLogos],
                    [data.ruinedLegacy, data.boundlessLogos]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.vc] ]
                ],
                gear: [
                    [data.baim, data.lint, data.linm, data.linb],
                    [data.hawp, data.hant, data.hanm, data.hanb]
                ],
                signetTable: [
                    [
                        ['Ascension', data.start, '2'],
                        ['Dark Assault'],
                        ['Ill Fortune', data.first],
                        ['Ravenousness', data.reinforcement],
                        ['Mirage', data.no]
                    ],
                    [
                        [data.mobius.name, '5', data.mobius.regular[2]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.mobius.nexus1[1]],
                        [data.mobius.nexus1[3]],
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
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
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ]
                ]
            }
        }
    }
    // Jade Knight
    const sus: Guide = {
        name: 'Jade Knight',
        acr: 'sus',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2']
                    ],
                    [
                        [data.su, '2'],
                        [data.eden, '2'],
                        [data.sakura, '2'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.lightAsABodhiLeaf, data.theLonelyMoon],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [ [data.br], [data.le, data.bke] ],
                    [ [data.br], [data.hb] ]
                ],
                gear: [
                    [data.nost, data.list, data.lism, data.lisb],
                    [data.codu, data.wilt, data.wilm, data.wilb]
                ],
                signetTable: [
                    [
                        ['Great Blade', data.start],
                        ['Cloudwalker', data.first],
                        ['Jade Moon', data.no, '2'],
                        ['Shaft'],
                        ['Smoky Waft']
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.su.name, '4', data.su.regular[1]],
                        [data.su.regular[2]],
                        [data.su.regular[3]],
                        [data.su.nexus2.name],
                        [data.eden.name, '4', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.regular[4]],
                        [data.eden.nexus2.name],
                        [data.sakura.name, '3', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus2.name]
                    ]
                ]
            }
        }
    }
    // Luna Kindred
    const lk: Guide = {
        name: 'Luna Kindred',
        acr: 'lk',
        rating: data.inferno,
        builds: {
            0: {
                signet: [
                    [
                        [data.kalpas, '2'],
                        [data.aponia, '2']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.pardofelis, '1'],
                        [data.mobius, '1']
                    ]
                ],
                emblem: [
                    [data.madKingsMask, data.theLonelyMoon],
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.tinFlask, data.dreamfulGold]
                ],
                support: [
                    [ [data.sn], [data.le] ],
                    [ [data.dp], [data.le] ]
                ],
                gear: [
                    [data.heso, data.drat, data.dram, data.drab],
                    [data.elas, data.elyt, data.murm, data.elyb]
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
                        [data.griseo.name, '3', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.pardofelis.name, '5', data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[1]],
                        [data.pardofelis.nexus1[2]],
                        [data.mobius.name, '2', data.mobius.regular[2], ''],
                        [data.mobius.regular[5], '']
                    ]
                ],
                notes: `If equipped with Hekate's Sombre, can buy Su signets.<br><br>
                        <p>${data.kalpas.regular[6]}, ${data.aponia.nexus2[2]}</p>Recommended to upgrade.<br><br>
                        <p>${data.mobius.regular[2]}, ${data.mobius.regular[5]}</p>If using dracula set.`
            }
        }
    }
    // Midnight Absinthe
    const raven: Guide = {
        name: 'Midnight Absinthe',
        acr: 'raven',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.vv, '2']
                    ],
                    [
                        [data.aponia, '2'],
                        [data.griseo, '1'],
                        [data.eden, '2'],
                        [data.sakura, '1']
                    ]
                ],
                emblem: [
                    [data.psuedoMiracle, data.fallingInPastLight],
                    [data.veilOfTears, data.fallingInPastLight],
                    [data.goodOldDays, data.fallingInPastLight] 
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.obwi, data.aslt, data.aslm, data.aslb],
                    [data.hawp, data.leet, data.tham, data.leeb]
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
                        [data.vv.name, '7', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.regular[5]],
                        [data.vv.nexus1.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2], ''],
                        [data.vv.nexus2[3]]
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
                        [data.sakura.name, '3', data.sakura.regular[2]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name]
                    ]
                ],
                notes: `<p>${data.vv.nexus2[1]}, ${data.vv.nexus2[2]}</p>Priority.<br><br>
                        <p>${data.aponia.nexus2[2]}</p>If lacking breach.<br><br>
                        <p>Griseo</p>Buy signets in shop if possible.`
            }
        }
    }
    // Miss Pink Elf
    const elysia: Guide = {
        name: 'Miss Pink Elf',
        acr: 'elysia',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.vv, '2'],
                        [data.aponia, '2']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.su, '2'],
                        [data.eden, '2']
                    ]
                ],
                emblem: [
                    [data.psuedoMiracle, data.fallingInPastLight],
                    [data.veilOfTears, data.itWillBeWritten],
                    [data.ruinedLegacy, data.fallingInPastLight]
                ],
                support: [
                    [ [data.vc], [data.le] ],
                    [ [data.vc], [data.br] ]
                ],
                gear: [
                    [data.whpa, data.elyt, data.elym, data.elyb],
                    [data.hawp, data.kaft, data.kafm, data.elyb]
                ],
                signetTable: [
                    [
                        ['Purity', data.start, '2'],
                        ['Zenith'],
                        ['Beauty', data.first],
                        ['Benevolence', data.no, '2'],
                        ['Love']
                    ],
                    [
                        [data.vv.name, '8', data.vv.regular[2]],
                        [data.vv.regular[4]],
                        [data.vv.regular[5]],
                        [data.vv.regular[6]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2]],
                        [data.vv.nexus2[3]],
                        [data.aponia.name, '7', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.griseo.name, '2', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.su.name, '3', data.su.regular[3]],
                        [data.su.regular[6]],
                        [data.su.nexus2.name],
                        [data.eden.name, '4', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.regular[4]],
                        [data.eden.nexus2.name]
                    ]
                ],
                notes: `<p>${data.vv.nexus2[1]}</p>Recommended to upgrade.<br><br>
                        <p>Aponia</p>Priority of enhanced signets: <span>${data.aponia.nexus2[2]}</span> > <span>${data.aponia.nexus2[3]}</span> > <span>${data.aponia.nexus2[1]}</span>.<br><br>
                        <p>Eden</p>Only after obtaining Su's signet <span>${data.su.regular[2]}</span>.`
            }
        }
    }
    // Molotov Cherry
    const ft: Guide = {
        name: 'Molotov Cherry',
        acr: 'ft',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.griseo, '2'],
                        [data.sakura, '2']
                    ],
                    [
                        [data.vv, '1'],
                        [data.kevin, '1']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.fallingInPastLight],
                    [data.rainbowOfAbsence, data.fallingInPastLight],
                    [data.farawayShip, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ss], [data.sn] ],
                    [ [data.ss], [data.br] ]
                ],
                gear: [
                    [data.sldr, data.mict, data.danm, data.micb],
                    [data.hawp, data.elyt, data.danm, data.elyb]
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
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[2]],
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.sakura.name, '4', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name]
                    ],
                    [
                        [data.vv.name, '3', data.vv.regular[2]],
                        [data.vv.regular[6]],
                        [data.vv.nexus1.name],
                        [data.kevin.name, '4', data.kevin.regular[4]],
                        [data.kevin.regular[5]],
                        [data.kevin.regular[6]],
                        [data.kevin.nexus1.name]
                    ]
                ]
            }
        }
    }
    // Palatinus Equinox
    const pe: Guide = {
        name: 'Palatinus Equinox',
        acr: 'pe',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.griseo, '2']
                    ],
                    [
                        [data.aponia, '2'],
                        [data.vv, '1'],
                        [data.kalpas, '2'],
                        [data.sakura, '1']
                    ]
                ],
                emblem: [
                    [data.rainbowOfAbsence, data.fallingInPastLight],
                    [data.veilOfTears, data.itWillBeWritten],
                    [data.farawayShip, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ss], [data.vc] ],
                    [ [data.ss], [data.vc] ]
                ],
                gear: [
                    [data.miat, data.biat, data.biam, data.biab],
                    [data.miec, data.mict, data.danm, data.micb]
                ],
                signetTable: [
                    [
                        ['Exodus', data.start],
                        ['Abyssal Chant', data.first],
                        ['Commitment', data.second, '2'],
                        ['Equinox'],
                        ['Gallop', data.no]
                    ],
                    [
                        [data.griseo.name, '9', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3], '']
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[1]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[3]],
                        [data.vv.name, '3', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.nexus1.name],
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[6]],
                        [data.kalpas.nexus2.name],
                        [data.sakura.name, '3', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]]
                    ]
                ],
                notes: `<p>${data.griseo.nexus2[3]}</p>Priority.`
            }
        }
    }
    // Prinzessin der Verurteilung
    const fischl: Guide = {
        name: 'Prinzessin der Verurteilung',
        acr: 'fischl',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.vv, '2']
                    ],
                    [
                        [data.mobius, '1'],
                        [data.aponia, '2'],
                        [data.griseo, '2'],
                        [data.sakura, '2']
                    ]
                ],
                emblem: [
                    [data.psuedoMiracle, data.theLonelyMoon],
                    [data.forbiddenSeed, data.fallingInPastLight],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [ [data.ae], [data.sn] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.whpa, data.want, data.wanm, data.wanb],
                    [data.miwa, data.hant, data.hanm, data.hanb]
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
                        [data.vv.name, '7', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.regular[6]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2], ''],
                        [data.vv.nexus2[3]]
                    ],
                    [
                        [data.mobius.name, '4', data.mobius.regular[2]],
                        [data.mobius.regular[3]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.aponia.name, '4', data.aponia.regular[6]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[3]],
                        [data.griseo.name, '3', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.sakura.name, '3', data.sakura.regular[2]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name]
                    ]
                ],
                notes: `<p>${data.vv.nexus2[1]}, ${data.vv.nexus2[2]}</p>Priority.`
            }
        }
    }
    // Reveris Calico
    const rvc: Guide = {
        name: 'Reverist Calico',
        acr: 'rc',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.vv, '2'],
                        [data.sakura, '2'],
                        [data.griseo, '2']
                    ],
                    [
                        [data.kalpas, '2'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.psuedoMiracle, data.fallingInPastLight],
                    [data.forgetMeNot, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.hb] ],
                    [ [data.ae], [data.hb] ]
                ],
                gear: [
                    [data.puph, data.brot, data.welm, data.brob],
                    [data.hawp, data.bast, data.basm, data.basb]
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
                        [data.vv.name, '5', data.vv.regular[1]],
                        [data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.sakura.name, '4', data.sakura.regular[2]],
                        [data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name],
                        [data.griseo.name, '7', data.griseo.regular[2]],
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
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Blessing of the Tailpiece</p>Pick only during 5.9 2nd half.<br><br>
                        <p>${data.vv.nexus2[1]}</p>Max upgrade.<br><br>
                        <p>Sakura</p>Buy 1-2 signets from early shop to get nexus earlier.<br><br>
                        <p>Griseo</p>Pick Sakura's nexus signet <span>${data.sakura.nexus2.name}</span> to synergize with <span>${data.griseo.regular[2]}</span>.`
            }
        }
    }
    // Ritual Imayoh
    const ri: Guide = {
        name: 'Ritual Imayoh',
        acr: 'ri',
        rating: data.inferno,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.kevin, '1']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.sakura, '2'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.burden, data.theLonelyMoon],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [ [data.sn], [data.le] ],
                    [ [data.vc], [data.br] ]
                ],
                gear: [
                    [data.pobl, data.elyt, data.elym, data.elyb],
                    [data.dovo, data.mict, data.danm, data.micb]
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
                        [data.aponia.name, '7', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]],
                        [data.kevin.name, '2', data.kevin.regular[4]],
                        [data.kevin.nexus1.name]
                    ],
                    [
                        [data.griseo.name, '3', data.griseo.regular[1]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.sakura.name, '3', data.sakura.regular[2]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name],
                        [data.pardofelis.name, '3', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>${data.aponia.nexus2[2]}</p>Priority.`
            }
        }
    }
    // Silverwing N-EX
    const sw: Guide = {
        name: 'Silverwing N-EX',
        acr: 'sw',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.aponia, '2'],
                        [data.hua, '2']
                    ],
                    [
                        [data.su, '2'],
                        [data.kalpas, '2'],
                        [data.griseo, '1']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.becauseOfYou],
                    [data.lightAsABodhiLeaf, data.dreamfulGold],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.hb, data.br] ]
                ],
                gear: [
                    [data.fafl, data.brot, data.brom, data.brob],
                    [data.hawp, data.elyt, data.elym, data.elyb]
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
                        [data.hua.name, '4', data.hua.regular[1]],
                        [data.hua.regular[3]],
                        [data.hua.regular[6]],
                        [data.hua.nexus2.name]
                    ],
                    [
                        [data.su.name, '4', data.su.regular[2]],
                        [data.su.regular[3]],
                        [data.su.regular[5]],
                        [data.su.nexus2.name],
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus1.name]
                    ]
                ]
            }
        }
    }
    // Spina Astera
    const spa: Guide = {
        name: 'Spina Astera',
        acr: 'spa',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.hua, '2'],
                        [data.aponia, '2']
                    ],
                    [
                        [data.kalpas, '2'],
                        [data.griseo, '2'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.memory, data.theLonelyMoon],
                    [data.veilOfTears, data.becauseOfYou],
                    [data.keyToTheDeep, data.dreamfulGold]
                ],
                support: [
                    [ [data.ae], [data.vc] ],
                    [ [data.ae], [data.br] ]
                ],
                gear: [
                    [data.asdi, data.ragt, data.ragm, data.ragb],
                    [data.hawp, data.leet, data.tham, data.leeb]
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
                        [data.hua.name, '2', data.hua.regular[6], ''],
                        [data.hua.nexus2.name],
                        [data.aponia.name, '6', data.aponia.regular[1]],
                        [data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '4', data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name]
                    ]
                ],
                notes: `<p>Hua</p>If too hard to use, drop picking her signets and start picking for Aponia (2nd nexus).<br><br>
                        <p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>Kalpas</p>If too hard use, drop picking her signets and start picking for Eden (2nd nexus).`
            }
        }
    }
    // Starry Impression
    const si: Guide = {
        name: 'Starry Impression',
        acr: 'si',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.kalpas, '2']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.mobius, '1']
                    ],
                    [
                        [data.sakura, '1'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.madKingsMask, data.theLonelyMoon],
                    [data.rainbowOfAbsence, data.theLonelyMoon],
                    [data.tinFlask, data.homeTown]
                ],
                support: [
                    [ [data.vc], [data.br] ],
                    [ [data.vc], [data.dp] ]
                ],
                gear: [
                    [data.elas, data.cezt, data.cezm, data.cezb],
                    [data.hawp, data.elyt, data.danm, data.elyb]
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
                        [data.kalpas.name, '3', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.nexus2.name]
                    ],
                    [
                        [data.griseo.name, '8', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2]],
                        [data.griseo.nexus2[3]],
                        [data.mobius.name, '5', data.mobius.regular[3]],
                        [data.mobius.regular[5]],
                        [data.mobius.nexus1.name],
                        [data.mobius.nexus1[1]],
                        [data.mobius.nexus1[3]]
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[3]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name],
                        [data.pardofelis.name, '4', data.pardofelis.regular[1]],
                        [data.pardofelis.regular[4]],
                        [data.pardofelis.regular[5]],
                        [data.pardofelis.nexus1.name]
                    ]
                ]
            }
        }
    }
    // Starchasm Nyx
    const nyx: Guide = {
        name: 'Starchasm Nyx',
        acr: 'nyx',
        rating: data.corruption,
        builds: {
            0: {
                signet: [
                    [
                        [data.hua, '2'],
                        [data.griseo, '2'],
                        [data.vv, '2']
                    ],
                    [
                        [data.sakura, '1'],
                        [data.eden, '2']
                    ]
                ],
                emblem: [
                    [data.memory, data.becauseOfYou],
                    [data.rainbowOfAbsence, data.fallingInPastLight],
                    [data.ruinedLegacy, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ae], [data.le] ],
                    [ [data.ae], [data.hb] ]
                ],
                gear: [
                    [data.saga, data.vert, data.verm, data.verb],
                    [data.hawp, data.anat, data.anam, data.anab]
                ],
                signetTable: [
                    [
                        ['Frigidity', data.start],
                        ['Toxic Bath', data.first],
                        ['Abyssal Gaze', data.second, '2'],
                        ['Cocoon Break'],
                        ['Nightmare', data.no]
                    ],
                    [
                        [data.hua.name, '2', data.hua.regular[6], ''],
                        [data.hua.nexus2.name],
                        [data.griseo.name, '8', data.griseo.regular[1]],
                        [data.griseo.regular[2]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.griseo.nexus2.name],
                        [data.griseo.nexus2[1]],
                        [data.griseo.nexus2[2], ''],
                        [data.griseo.nexus2[3], ''],
                        [data.vv.name, '4', data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[2]]
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[5]],
                        [data.sakura.regular[6]],
                        [data.sakura.nexus1.name],
                        [data.eden.name, '3', data.eden.regular[2]],
                        [data.eden.regular[3]],
                        [data.eden.nexus2.name]
                    ]
                ],
                notes: `<p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>${data.griseo.nexus2[2]}, ${data.griseo.nexus2[3]}</p>Priority.<br><br>
                        <p>Sakura</p>Buy signets from the shop if possible.`
            }
        }
    }
    // Stygian Nymph
    const sn: Guide = {
        name: 'Stygian Nymph',
        acr: 'sn',
        rating: data.inferno,
        builds: {
            0: {
                signet: [
                    [
                        [data.sakura, '1']
                    ],
                    [
                        [data.kosma, '2'],
                        [data.hua, '2']
                    ],
                    [
                        [data.kalpas, '2'],
                        [data.griseo, '2']
                    ]
                ],
                emblem: [
                    [data.forgetMeNot, data.theLonelyMoon],
                    [data.fragileFriend, data.itWillBeWritten],
                    [data.stainedSakura, data.tsukimiHimiko]
                ],
                support: [
                    [ [data.sa, data.vc], [data.ss] ],
                    [ [data.ss], [data.br] ]
                ],
                gear: [
                    [data.paac, data.biat, data.biam, data.biab],
                    [data.hawp, data.allt, data.allm, data.allb]
                ],
                signetTable: [
                    [
                        ['Vurnerable Duality', data.start],
                        ['Intergrowth', data.first],
                        ['Kindred', data.second, '3'],
                        ['Might of Duality'],
                        ['Union']
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[3], ''],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus1.name]
                    ],
                    [
                        [data.kosma.name, '7', data.kosma.regular[3]],
                        [data.kosma.regular[4]],
                        [data.kosma.regular[6]],
                        [data.kosma.nexus2.name],
                        [data.kosma.nexus2[1]],
                        [data.kosma.nexus2[2], ''],
                        [data.kosma.nexus2[3]],
                        [data.hua.name, '3', data.hua.regular[4], ''],
                        [data.hua.nexus2.name],
                        [data.hua.nexus2[2]]
                    ],
                    [
                        [data.kalpas.name, '4', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]],
                        [data.kalpas.regular[3]],
                        [data.kalpas.nexus2.name],
                        [data.griseo.name, '2', data.griseo.regular[1]],
                        [data.griseo.regular[6]]
                    ]
                ],
                notes: `<p>${data.sakura.regular[3]}</p>If not SS.<br><br>
                        <p>${data.kosma.nexus2[2]}</p>Priority.<br><br>
                        <p>${data.hua.regular[4]}</p>Recommended to upgrade.`
            }
        }
    }
    // Sweet 'n' Spicy
    const carole: Guide = {
        name: 'Sweet \'n\' Spicy',
        acr: 'carole',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.griseo, '1']
                    ],
                    [
                        [data.aponia, '2'],
                        [data.pardofelis, '1']
                    ],
                    [
                        [data.sakura, '2'],
                        [data.kalpas, '1']
                    ]
                ],
                emblem: [
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.feastOfEmptiness, data.theLonelyMoon],
                    [data.proofOfGoodAndEvil, data.homeTown]
                ],
                support: [
                    [ [data.ss], [data.sn] ],
                    [ [data.ss], [data.br] ]
                ],
                gear: [
                    [data.obdo, data.biat, data.biam, data.biab],
                    [data.miki, data.pagt, data.pagm, data.pagb]
                ],
                signetTable: [
                    [
                        ['Revolution', data.start],
                        ['Brake', data.no, '4'],
                        ['Impulse'],
                        ['Rupture'],
                        ['Skyfall']
                    ],
                    [
                        [data.griseo.name, '3', data.griseo.regular[1], ''],
                        [data.griseo.regular[4], ''],
                        [data.griseo.regular[6]]
                    ],
                    [
                        [data.aponia.name, '5', data.aponia.regular[4]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1]],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]],
                        [data.pardofelis.name, '5', data.pardofelis.regular[3]],
                        [data.pardofelis.regular[6]],
                        [data.pardofelis.nexus1.name],
                        [data.pardofelis.nexus1[2]],
                        [data.pardofelis.nexus1[3]]
                    ],
                    [
                        [data.sakura.name, '3', data.sakura.regular[2]],
                        [data.sakura.regular[5]],
                        [data.sakura.nexus2.name],
                        [data.kalpas.name, '2', data.kalpas.regular[1]],
                        [data.kalpas.regular[2]]
                    ]
                ],
                notes: `<p>${data.griseo.regular[1]}, ${data.griseo.regular[4]}</p>Buy from shop.<br><br>
                        <p>${data.aponia.nexus2[2]}</p>Priority.`
            }
        }
    }
    // Twilight Paladin
    const tp: Guide = {
        name: 'Twilight Paladin',
        acr: 'tp',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.su, '2'],
                        [data.aponia, '2']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.eden, '2'],
                        [data.pardofelis, '1']
                    ]
                ],
                emblem: [
                    [data.lightAsABodhiLeaf, data.theLonelyMoon],
                    [data.veilOfTears, data.dreamfulGold],
                    [data.goodOldDays, data.dreamfulGold]
                ],
                support: [
                    [ [data.sa], [data.sn] ],
                    [ [data.ss], [data.br] ]
                ],
                gear: [
                    [data.heso, data.kaft, data.kafm, data.kafb],
                    [data.hawp, data.elyt, data.siem, data.elyb]
                ],
                signetTable: [
                    [
                        ['Banishment', data.start],
                        ['Penalty', data.first],
                        ['Dusk', data.second, ],
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
                notes: `<p>Su</p>Don't pick enhanced signets. Double Ego start.<br><br>
                        <p>${data.su.regular[2]}</p>Priority.<br><br>
                        <p>${data.griseo.nexus2[1]}</p>If lacking breach.`
            }
        }
    }
    // Valkyrie Bladestrike
    const stfu: Guide = {
        name: 'Valkyrie Bladestrike',
        acr: 'stfu',
        rating: data.abstinence,
        builds: {
            0: {
                signet: [
                    [
                        [data.su, '2']
                    ],
                    [
                        [data.kevin, '1']
                    ],
                    [
                        [data.griseo, '2'],
                        [data.aponia, '2'],
                        [data.eden, '2']
                    ]
                ],
                emblem: [
                    [data.lightAsABodhiLeaf, data.theLonelyMoon],
                    [data.burden, data.theLonelyMoon],
                    [data.heavyAsAMillionLives, data.dreamfulGold]
                ],
                support: [
                    [ [data.le], [data.sn] ],
                    [ [data.vc], [data.ss] ]
                ],
                gear: [
                    [data.dabr, data.dirt, data.dirm, data.dirb],
                    [data.dosa, data.elyt, data.dirm, data.elyb],
                    [data.thsa, data.rebt, data.marm, data.rebb]
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
                notes: `<p>Recommended Gear</p>Build 2: If not enough breach or impair, pick breach from signets.<br><br>
                        <p>${data.su.regular[1]}, ${data.su.regular[5]}</p>Buy from shop if possible.<br><br>
                        <p>${data.griseo.regular[3]}, ${data.eden.regular[1]}</p>If needed.`
            }
        }
    }
    // Valkyrie Gloria
    const vg: Guide = {
        name: 'Valkyrie Gloria',
        acr: 'vg',
        rating: data.inferno,
        builds: {
            0: {
                signet: [
                    [
                        [data.kalpas, '1']
                    ],
                    [
                        [data.aponia, '2']
                    ],
                    [
                        [data.vv, '2'],
                        [data.griseo, '1'],
                        [data.hua, '2']
                    ]
                ],
                emblem: [
                    [data.madKingsMask, data.theLonelyMoon],
                    [data.veilOfTears, data.theLonelyMoon],
                    [data.proofOfGoodAndEvil, data.fallingInPastLight]
                ],
                support: [
                    [ [data.ae], [data.le] ],
                    [ [data.ae], [data.br, data.ma] ]
                ],
                gear: [
                    [data.eogl, data.leet, data.tham, data.leeb],
                    [data.saas, data.ragt, data.tham, data.ireb]
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
                        [data.kalpas.nexus1.name]
                    ],
                    [
                        [data.aponia.name, '7', data.aponia.regular[3]],
                        [data.aponia.regular[4]],
                        [data.aponia.regular[5]],
                        [data.aponia.nexus2.name],
                        [data.aponia.nexus2[1], ''],
                        [data.aponia.nexus2[2], ''],
                        [data.aponia.nexus2[3]]
                    ],
                    [
                        [data.vv.name, '6', data.vv.regular[1]],
                        [data.vv.regular[2]],
                        [data.vv.regular[3]],
                        [data.vv.nexus2.name],
                        [data.vv.nexus2[1], ''],
                        [data.vv.nexus2[2]],
                        [data.griseo.name, '4', data.griseo.regular[1]],
                        [data.griseo.regular[3]],
                        [data.griseo.regular[4]],
                        [data.griseo.regular[6]],
                        [data.hua.name, '2', data.hua.regular[6]],
                        [data.hua.nexus2.name]
                    ]
                ],
                notes: `<p>${data.aponia.nexus2[1]}, ${data.aponia.nexus2[2]}</p>Priority.<br><br>
                        <p>${data.vv.nexus2[1]}</p>If lacking breach.`
            }
        }
    }
    return [aka, bkek, da, dpe, fr, gd, gm, hc, hofs, hoh,
            hor, hos, hov, hot, mobi, sus, lk, raven, elysia, ft, pe,
            fischl, rvc, ri, sw, spa, si, nyx, sn, carole, tp, stfu, vg];
}());
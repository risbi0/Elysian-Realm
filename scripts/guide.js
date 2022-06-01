import * as data from './data.js';
export const valks = (function () {
    const aka = {
        name: 'Argent Knight: Artemis',
        acr: 'aka',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.mobius, 1: '1' }, 1: { 0: data.kevin, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.vv, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.forbiddenSeed, 2: data.becauseOfYou },
                    2: { 1: data.burden, 2: data.itWillBeWritten },
                    3: { 1: data.dreamfulGold, 2: data.goodOldDays }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.hb } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Frost Scythe', 1: data.start },
                        2: { 0: 'Stellar Trials', 1: data.first, 2: '2' },
                        3: { 0: 'Winter Harvest' },
                        4: { 0: 'Cold Moon', 1: data.second },
                        5: { 0: 'Uranian Mirror', 1: data.reinforcement }
                    },
                    1: {
                        1: { 0: data.mobius.name, 1: '5', 2: data.mobius.regular[2] },
                        2: { 0: data.mobius.regular[5] },
                        3: { 0: data.mobius.nexus1.name },
                        4: { 0: data.mobius.nexus1[1] },
                        5: { 0: data.mobius.nexus1[3] },
                        6: { 0: data.kevin.name, 1: '5', 2: data.kevin.regular[1] },
                        7: { 0: data.kevin.regular[2] },
                        8: { 0: data.kevin.regular[6] },
                        9: { 0: data.kevin.nexus2.name },
                        10: { 0: data.kevin.nexus2[1] }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[1] },
                        5: { 0: data.griseo.regular[4] },
                        6: { 0: data.griseo.regular[6] },
                        7: { 0: data.griseo.nexus1.name },
                        8: { 0: data.griseo.nexus1[2], 1: '' },
                        9: { 0: data.vv.name, 1: '2', 2: data.vv.regular[2] },
                        10: { 0: data.vv.regular[6] }
                    }
                },
                notes: `<p>Mobius</p>If unable to get double signets in 4F, start with double Ego.<br><br>
                        <p>${data.griseo.nexus1[2]}</p>If breach isn't 60%.`
            }
        }
    };
    const bkek = {
        name: 'Bright Knight: Excelsis',
        acr: 'bke',
        rate: data.abstinence,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.sakura, 1: '1' }, 1: { 0: data.eden, 1: '2' } },
                    2: { 0: { 0: data.kosma, 1: '1' }, 1: { 0: data.kalpas, 1: '2' }, 2: { 0: data.griseo, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.forgetMeNot, 2: data.tsukimiHimiko },
                    2: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    3: { 1: data.stainedSakura, 2: data.tsukimiHimiko }
                },
                support: {
                    1: { 1: { 1: data.sa, 2: data.dp }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ss }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Gambit', 1: data.start },
                        2: { 0: 'Glory', 1: data.first },
                        3: { 0: 'Paragon', 1: data.second },
                        4: { 0: 'Formation', 1: data.no, 2: '2' },
                        5: { 0: 'Holy Lance' }
                    },
                    1: {
                        1: { 0: data.sakura.name, 1: '3', 2: data.sakura.regular[5] },
                        2: { 0: data.sakura.regular[6] },
                        3: { 0: data.sakura.nexus1.name },
                        4: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        5: { 0: data.eden.regular[3] },
                        6: { 0: data.eden.nexus2.name }
                    },
                    2: {
                        1: { 0: data.kosma.name, 1: '2', 2: data.kosma.regular[4] },
                        2: { 0: data.kosma.regular[6] },
                        3: { 0: data.kalpas.name, 1: '4', 2: data.kalpas.regular[1] },
                        4: { 0: data.kalpas.regular[2] },
                        5: { 0: data.kalpas.nexus2.name },
                        6: { 0: data.kalpas.nexus2[3], 1: '' },
                        7: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[3] },
                        8: { 0: data.griseo.regular[4] },
                        9: { 0: data.griseo.regular[6] },
                        10: { 0: data.griseo.nexus1.name }
                    }
                },
                notes: `<p>${data.kalpas.nexus2[3]}</p>If lacking impair/breach.`
            }
        }
    };
    const da = {
        name: 'Dea Anchora',
        acr: 'da',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.kevin, 1: '1' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.su, 1: '2' }, 2: { 0: data.griseo, 1: '1' }, 3: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.burden, 2: data.theLonelyMoon },
                    2: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    3: { 1: data.goodOldDays, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br, 2: data.ma } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Star', 1: data.start },
                        2: { 0: 'Sheen', 1: data.first },
                        3: { 0: 'Halo', 1: data.second, 2: '2' },
                        4: { 0: 'Gale' },
                        5: { 0: 'Brilliance', 1: data.no }
                    },
                    1: {
                        1: { 0: data.kevin.name, 1: '4', 2: data.kevin.regular[1] },
                        2: { 0: data.kevin.regular[6] },
                        3: { 0: data.kevin.nexus1.name },
                        4: { 0: data.kevin.nexus1[1] }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '4', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.eden.nexus2[3] },
                        5: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        6: { 0: data.su.regular[3] },
                        7: { 0: data.su.regular[5] },
                        8: { 0: data.su.nexus2.name },
                        9: { 0: data.griseo.name, 1: '6', 2: data.griseo.regular[1] },
                        10: { 0: data.griseo.regular[2] },
                        11: { 0: data.griseo.regular[3] },
                        12: { 0: data.griseo.regular[4] },
                        13: { 0: data.griseo.regular[5] },
                        14: { 0: data.griseo.regular[6] },
                        15: { 0: data.aponia.name, 1: '2', 2: data.aponia.regular[4] },
                        16: { 0: data.aponia.nexus1.name }
                    }
                }
            }
        }
    };
    const dpe = {
        name: 'Disciplinary Perdition',
        acr: 'dip',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.griseo, 1: '1' } },
                    2: { 0: { 0: data.aponia, 1: '1' }, 1: { 0: data.kalpas, 1: '2' }, 2: { 0: data.su, 1: '2' } }
                },
                emblem: {
                    1: { 1: data.memory, 2: data.homeTown },
                    2: { 1: data.rainbowOfAbsence, 2: data.theLonelyMoon },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Admonition', 1: data.start, 2: '2' },
                        2: { 0: 'Shelter' },
                        3: { 0: 'Inclusiveness', 1: data.first },
                        4: { 0: 'Atonement', 1: data.reinforcement, 2: '2' },
                        5: { 0: 'Rescue' }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '2', 2: data.hua.regular[6], 3: '' },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.griseo.name, 1: '6', 2: data.griseo.regular[2] },
                        4: { 0: data.griseo.regular[3] },
                        5: { 0: data.griseo.regular[4] },
                        6: { 0: data.griseo.regular[6] },
                        7: { 0: data.griseo.nexus1.name },
                        8: { 0: data.griseo.nexus1[2], 1: '' }
                    },
                    2: {
                        1: { 0: data.aponia.name, 1: '4', 2: data.aponia.regular[1] },
                        2: { 0: data.aponia.regular[3] },
                        3: { 0: data.aponia.regular[4] },
                        4: { 0: data.aponia.nexus1.name },
                        5: { 0: data.kalpas.name, 1: '4', 2: data.kalpas.regular[2] },
                        6: { 0: data.kalpas.regular[5] },
                        7: { 0: data.kalpas.nexus2.name },
                        8: { 0: data.kalpas.nexus2[3], 1: '' },
                        9: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        10: { 0: data.su.regular[3] },
                        11: { 0: data.su.regular[5] },
                        12: { 0: data.su.nexus2.name }
                    }
                },
                notes: `<p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>${data.griseo.nexus1[2]}, ${data.kalpas.nexus2[3]}</p>If breach is not yet 60%`
            }
        }
    };
    const fr = {
        name: 'Fallen Rosemary',
        acr: 'fr',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.su, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.kalpas, 1: '1' }, 2: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.memory, 2: data.becauseOfYou },
                    2: { 1: data.lightAsABodhiLeaf, 2: data.emptyLikeShala },
                    3: { 1: data.goodOldDays, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'God Eater', 1: data.start },
                        2: { 0: 'Soul Siphon', 1: data.first },
                        3: { 0: 'Nocturne', 1: data.second, 2: '2' },
                        4: { 0: 'Valfreyja' },
                        5: { 0: 'Spirit Servants', 1: data.reinforcement }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '3', 2: data.hua.regular[6] },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.hua.nexus2[1], 1: '' },
                        4: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        5: { 0: data.su.regular[2] },
                        6: { 0: data.su.regular[3] },
                        7: { 0: data.su.regular[5] }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '5', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.eden.nexus2[2] },
                        5: { 0: data.eden.nexus2[3] },
                        6: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[1] },
                        7: { 0: data.kalpas.regular[2] },
                        8: { 0: data.kalpas.nexus1.name, 1: '' },
                        9: { 0: data.aponia.name, 1: '3', 2: data.aponia.regular[1] },
                        10: { 0: data.aponia.regular[4] },
                        11: { 0: data.aponia.nexus1.name }
                    }
                },
                notes: `<p>${data.hua.nexus2[1]}</p>Either pick this or upgrade <span>${data.hua.regular[6]}</span><br><br>
                        <p>${data.kalpas.nexus1.name}</p>Optional.<br><br>
                        <p>Kalpas</p>Bring BR to reduce HP. Pair with Hua's shield.<br><br>
                        <p>Aponia</p>Can pick Pardofelis's signet <span>${data.pardofelis.regular[5]}</span> for HP and SP cap.`
            }
        }
    };
    const gd = {
        name: 'Golden Diva',
        acr: 'ede',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.su, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.kalpas, 1: '2' } }
                },
                emblem: {
                    1: { 1: data.memory, 2: data.homeTown },
                    2: { 1: data.lightAsABodhiLeaf, 2: data.becauseOfYou },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Arioso', 1: data.start, 2: '2' },
                        2: { 0: 'Fugue' },
                        3: { 0: 'Symphony', 1: data.first },
                        4: { 0: 'Cadenza', 1: data.second },
                        5: { 0: 'Conerto', 1: data.reinforcement }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '2', 2: data.hua.regular[6], 3: '' },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        4: { 0: data.su.regular[3] },
                        5: { 0: data.su.regular[5] },
                        6: { 0: data.su.nexus2.name }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '5', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.eden.nexus2[2] },
                        5: { 0: data.eden.nexus2[3] },
                        6: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        7: { 0: data.griseo.regular[4] },
                        8: { 0: data.griseo.regular[6] },
                        9: { 0: data.griseo.nexus1.name },
                        10: { 0: data.griseo.nexus1[2], 1: '' },
                        11: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[2] },
                        12: { 0: data.kalpas.regular[5] },
                        13: { 0: data.kalpas.nexus2.name }
                    }
                },
                notes: `<p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>${data.griseo.nexus1[2]}</p>If breach is not yet 60%.<br><br>
                        <p>${data.kalpas.name}</p>Can pick Aponia signets. See what signets are in the shop to decide whether to select Kalpas or Aponia.`
            }
        }
    };
    const hofs = {
        name: 'Herrscher of Flamescion',
        acr: 'hofs',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.kalpas, 1: '2' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.sakura, 1: '1' }, 1: { 0: data.kosma, 1: '1' }, 2: { 0: data.griseo, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.madKingsMask, 2: data.becauseOfYou },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.stainedSakura, 2: data.tsukimiHimiko }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.br } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Heatflow', 1: data.start },
                        2: { 0: 'Reburn', 1: data.first, 2: '2' },
                        3: { 0: 'Starfire' },
                        4: { 0: 'Tempered Warrior', 1: data.second },
                        5: { 0: 'Flamescion', 1: data.filler }
                    },
                    1: {
                        1: { 0: data.kalpas.name, 1: '4', 2: data.kalpas.regular[1] },
                        2: { 0: data.kalpas.regular[2] },
                        3: { 0: data.kalpas.nexus2.name },
                        4: { 0: data.kalpas.nexus1.name, 1: '' },
                        5: { 0: data.hua.name, 1: '3', 2: data.hua.regular[6], 3: '' },
                        6: { 0: data.hua.nexus2.name },
                        7: { 0: data.hua.nexus2[1], 1: '' }
                    },
                    2: {
                        1: { 0: data.sakura.name, 1: '3', 2: data.sakura.regular[5] },
                        2: { 0: data.sakura.regular[6] },
                        3: { 0: data.sakura.nexus1.name },
                        4: { 0: data.kosma.name, 1: '3', 2: data.kosma.regular[4] },
                        5: { 0: data.kosma.regular[6] },
                        6: { 0: data.kosma.nexus1.name },
                        7: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        8: { 0: data.griseo.regular[4] },
                        9: { 0: data.griseo.regular[6] },
                        10: { 0: data.griseo.nexus1.name, 1: '' },
                        11: { 0: data.griseo.nexus1[2], 1: '' }
                    }
                },
                notes: `<p>Kalpas</p>If low gear level, pick more enhance signets.<br><br>
                        <p>${data.kalpas.nexus1.name}</p>If unable to get double signets in 7F.<br><br>
                        <p>${data.hua.regular[6]}, ${data.hua.nexus2[2]}</p>Either pick <span>${data.hua.nexus2[2]}</span> or enhance <span>${data.hua.regular[6]}</span><br><br>
                        <p>${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    const hor = {
        name: 'Herrscher of Reason',
        acr: 'hor',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.sakura, 1: '1' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.su, 1: '2' }, 2: { 0: data.griseo, 1: '1' } },
                },
                emblem: {
                    1: { 1: data.memory, 2: data.theLonelyMoon },
                    2: { 1: data.forgetMeNot, 2: data.becauseOfYou },
                    3: { 1: data.stainedSakura, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.hb, 2: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Wisdom', 1: data.start },
                        2: { 0: 'Truth', 1: data.first },
                        3: { 0: 'Inspiration', 1: data.second, 2: '2' },
                        4: { 0: 'Reason' },
                        5: { 0: 'Creation', 1: data.filler }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '4', 2: data.hua.regular[1] },
                        2: { 0: data.hua.regular[3] },
                        3: { 0: data.hua.regular[6] },
                        4: { 0: data.hua.nexus2.name },
                        5: { 0: data.sakura.name, 1: '4', 2: data.sakura.regular[5] },
                        6: { 0: data.sakura.regular[6] },
                        7: { 0: data.sakura.nexus1.name },
                        8: { 0: data.sakura.nexus2.name, 1: '' }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '4', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.regular[6] },
                        4: { 0: data.eden.nexus2.name },
                        5: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        6: { 0: data.su.regular[3] },
                        7: { 0: data.su.regular[5] },
                        8: { 0: data.su.nexus2.name },
                        9: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        10: { 0: data.griseo.regular[4] },
                        11: { 0: data.griseo.regular[6] },
                        12: { 0: data.griseo.nexus1.name, 1: '' },
                        13: { 0: data.griseo.nexus1[2], 1: '' }
                    }
                },
                notes: `<p>Hua</p>If unable to get double signets on 4F, start with double Ego, <span>${data.sakura.nexus1.name}</span>, and <span>${data.tsukimiHimiko.name}</span>.<br><br>
                        <p>${data.sakura.nexus2.name}</p>For SS and above rank users.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    const hos = {
        name: 'Herrscher of Sentience',
        acr: 'hos',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.eden, 1: '2' } },
                    2: { 0: { 0: data.su, 1: '2' } },
                    3: { 0: { 0: data.griseo, 1: '1' }, 1: { 0: data.aponia, 1: '1' }, 2: { 0: data.kalpas, 1: '2' } }
                },
                emblem: {
                    1: { 1: data.goldGoblet, 2: data.theLonelyMoon },
                    2: { 1: data.lightAsABodhiLeaf, 2: data.dreamfulGold },
                    3: { 1: data.goodOldDays, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.br }, 2: { 1: data.le } },
                    2: { 1: { 1: data.br }, 2: { 1: data.ss } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Victory', 1: data.start },
                        2: { 0: 'Dark Plumes', 1: data.first },
                        3: { 0: 'Supremacy', 1: data.second },
                        4: { 0: 'Legion', 1: data.reinforcement },
                        5: { 0: 'Ego', 1: data.no }
                    },
                    1: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name }
                    },
                    2: {
                        1: { 0: data.su.name, 1: '5', 2: data.su.regular[1] },
                        2: { 0: data.su.regular[2] },
                        3: { 0: data.su.regular[3] },
                        4: { 0: data.su.regular[5] },
                        5: { 0: data.su.nexus2.name }
                    },
                    3: {
                        1: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[3] },
                        2: { 0: data.griseo.regular[4] },
                        3: { 0: data.griseo.regular[6] },
                        4: { 0: data.griseo.nexus1.name, 1: '' },
                        5: { 0: data.aponia.name, 1: '2', 2: data.aponia.regular[4] },
                        6: { 0: data.aponia.nexus1.name },
                        7: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[1] },
                        8: { 0: data.kalpas.regular[2] },
                        9: { 0: data.kalpas.nexus2.name }
                    }
                },
                notes: `If there's no Normal Signet of Gold +2 stage effect, can pick Blessing of Victory, Blessing of Ego, and Infinity signet at start.<br><br>
                        <p>Blessing of Supremacy</p>Pick HoD.<br><br>
                        <p>${data.su.regular[1]}</p>Recommended to upgrade.<br><br>
                        <p>${data.griseo.nexus1.name}</p>If fighting agains 12F boss.<br><br>
                        <p>Aponia</p>Wait for shop to consider nexus.`
            }
        }
    };
    const hot = {
        name: 'Herrscher of Thunder',
        acr: 'hot',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.eden, 1: '1' } },
                    2: { 0: { 0: data.hua, 1: '2' } },
                    3: { 0: { 0: data.su, 1: '2' }, 1: { 0: data.kalpas, 1: '2' }, 2: { 0: data.pardofelis, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.keyToTheDeep, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.vc } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Tsukuyomi', 1: data.start },
                        2: { 0: 'Hazy Moon', 1: data.first },
                        3: { 0: 'Divine Penalty', 1: data.no, 2: '3' },
                        4: { 0: 'Mitama' },
                        5: { 0: 'Narukami' }
                    },
                    1: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus1.name }
                    },
                    2: {
                        1: { 0: data.hua.name, 1: '3', 2: data.hua.regular[6] },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.hua.nexus2[1], 1: '' }
                    },
                    3: {
                        1: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        2: { 0: data.su.regular[3] },
                        3: { 0: data.su.regular[5] },
                        4: { 0: data.su.nexus2.name },
                        5: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[1] },
                        6: { 0: data.kalpas.regular[2] },
                        7: { 0: data.kalpas.nexus2.name },
                        8: { 0: data.pardofelis.name, 1: '3', 2: data.pardofelis.regular[1] },
                        9: { 0: data.pardofelis.regular[4] },
                        10: { 0: data.pardofelis.regular[5] }
                    },
                },
                notes: `<p>${data.hua.nexus2[1]}</p>Either pick this or upgrade <span>${data.hua.regular[6]}</span><br><br>
                        <p>Pardofelis</p>After getting Kalpas and Eden signets, in late shop buy her signets listed above, and try to maintain 1k silver.`
            },
            1: {
                signet: {
                    1: { 0: { 0: data.kevin, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.sakura, 1: '1' }, 2: { 0: data.su, 1: '2' }, 3: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.burden, 2: data.tsukimiHimiko },
                    2: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    3: { 1: data.stainedSakura, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Divine Penalty', 1: data.start },
                        2: { 0: 'Mitama', 1: data.first },
                        3: { 0: 'Narukami', 1: data.second },
                        4: { 0: 'Hazy Moon', 1: data.no, 2: '2' },
                        5: { 0: 'Tsukuyomi' }
                    },
                    1: {
                        1: { 0: data.kevin.name, 1: '4', 2: data.kevin.regular[1] },
                        2: { 0: data.kevin.regular[6] },
                        3: { 0: data.kevin.nexus2.name },
                        4: { 0: data.kevin.nexus2[3] }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus1.name },
                        4: { 0: data.sakura.name, 1: '2', 2: data.sakura.regular[5] },
                        5: { 0: data.sakura.nexus1.name },
                        6: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        7: { 0: data.su.regular[3] },
                        8: { 0: data.su.regular[5] },
                        9: { 0: data.su.nexus2.name },
                        10: { 0: data.aponia.name, 1: '2', 2: data.aponia.regular[4] },
                        11: { 0: data.aponia.nexus1.name }
                    }
                },
                notes: `<p>Kevin</p>If stuck in 4F, start with double Ego.`
            }
        }
    };
    const mobi = {
        name: 'Infinite Ouroboros',
        acr: 'mobius',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.mobius, 1: '1' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.sakura, 1: '1' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.kalpas, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.forbiddenSeed, 2: data.boundlessLogos },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.stainedSakura, 2: data.boundlessLogos }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Ascension', 1: data.start, 2: '2' },
                        2: { 0: 'Ill Fortune' },
                        3: { 0: 'Dark Assault', 1: data.first },
                        4: { 0: 'Ravenousness', 1: data.second },
                        5: { 0: 'Mirage', 1: data.no }
                    },
                    1: {
                        1: { 0: data.mobius.name, 1: '2', 2: data.mobius.nexus1.name },
                        2: { 0: data.mobius.nexus1[1] },
                        3: { 0: data.hua.name, 1: '3', 2: data.hua.regular[6], 3: '' },
                        4: { 0: data.hua.nexus2.name },
                        5: { 0: data.hua.nexus2[1] }
                    },
                    2: {
                        1: { 0: data.sakura.name, 1: '3', 2: data.sakura.regular[1] },
                        2: { 0: data.sakura.regular[5] },
                        3: { 0: data.sakura.nexus1.name },
                        4: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        5: { 0: data.griseo.regular[4] },
                        6: { 0: data.griseo.regular[6] },
                        7: { 0: data.griseo.nexus1.name, 1: '' },
                        8: { 0: data.griseo.nexus1[2], 1: '' },
                        9: { 0: data.kalpas.name, 1: '2', 2: data.kalpas.regular[1] },
                        10: { 0: data.kalpas.regular[2] }
                    }
                },
                notes: `<p>Mobius</p>Don't pick <span>${data.mobius.nexus1[2]}</span>.<br><br>
                        <p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.<br><br>
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
                signet: {
                    1: { 0: { 0: data.kalpas, 1: '2' }, 1: { 0: data.mobius, 1: '1' } },
                    2: { 0: { 0: data.su, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.madKingsMask, 2: data.theLonelyMoon },
                    2: { 1: data.forbiddenSeed, 2: data.theLonelyMoon },
                    3: { 1: data.keyToTheDeep, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.sa }, 2: { 1: data.br } },
                    2: { 1: { 1: data.ss }, 2: { 1: data.dp } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Penumbra', 1: data.start },
                        2: { 0: 'Blood Feast', 1: data.first },
                        3: { 0: 'Imprint', 1: data.second },
                        4: { 0: 'Immortality', 1: data.no, 2: '2' },
                        5: { 0: 'Thirst' }
                    },
                    1: {
                        1: { 0: data.kalpas.name, 1: '6', 2: data.kalpas.regular[1] },
                        2: { 0: data.kalpas.regular[2] },
                        3: { 0: data.kalpas.regular[3] },
                        4: { 0: data.kalpas.regular[6], 1: '' },
                        5: { 0: data.kalpas.nexus2.name },
                        6: { 0: data.kalpas.nexus2[3] },
                        7: { 0: data.mobius.name, 1: '6', 2: data.mobius.regular[2] },
                        8: { 0: data.mobius.regular[5] },
                        9: { 0: data.mobius.nexus1.name },
                        10: { 0: data.mobius.nexus1[1] },
                        11: { 0: data.mobius.nexus1[2], 1: '' },
                        12: { 0: data.mobius.nexus1[3], 1: '' }
                    },
                    2: {
                        1: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        2: { 0: data.su.regular[3] },
                        3: { 0: data.su.regular[5] },
                        4: { 0: data.su.nexus2.name },
                        5: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        6: { 0: data.griseo.regular[4] },
                        7: { 0: data.griseo.regular[6] },
                        8: { 0: data.griseo.nexus1.name, 1: '' },
                        9: { 0: data.griseo.nexus1[2], 1: '' },
                        10: { 0: data.aponia.name, 1: '2', 2: data.aponia.regular[1] },
                        11: { 0: data.aponia.nexus1.name }
                    }
                },
                notes: `<p>${data.kalpas.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>${data.mobius.nexus1[2]}, ${data.mobius.nexus1[3]}</p>If using dracula full set.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    const raven = {
        name: 'Midnight Absinthe',
        acr: 'raven',
        rate: data.abstinence,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.kevin, 1: '1' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.su, 1: '2' }, 3: { 0: data.vv, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.burden, 2: data.theLonelyMoon },
                    2: { 1: data.goldGoblet, 2: data.homeTown },
                    3: { 1: data.goodOldDays, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Ominous Mist', 1: data.start },
                        2: { 0: 'Arrowhead', 1: data.first },
                        3: { 0: 'Wild Hunt', 1: data.second },
                        4: { 0: 'Suppression', 1: data.reinforcement },
                        5: { 0: 'Raven Plume', 1: data.no }
                    },
                    1: {
                        1: { 0: data.kevin.name, 1: '3', 2: data.kevin.regular[1] },
                        2: { 0: data.kevin.nexus1.name },
                        3: { 0: data.kevin.nexus1[1] }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '4', 2: data.eden.regular[1] },
                        2: { 0: data.eden.regular[2] },
                        3: { 0: data.eden.regular[3] },
                        4: { 0: data.eden.nexus2.name },
                        5: { 0: data.griseo.name, 1: '3', 2: data.griseo.regular[1] },
                        6: { 0: data.griseo.regular[4] },
                        7: { 0: data.griseo.regular[6] },
                        8: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        9: { 0: data.su.regular[3] },
                        10: { 0: data.su.regular[5] },
                        11: { 0: data.su.nexus2.name },
                        12: { 0: data.vv.name, 1: '2', 2: data.vv.regular[2] },
                        13: { 0: data.vv.regular[5] }
                    }
                },
                notes: `<p>Kevin</p>Start with double Ego.`
            }
        }
    };
    const elysia = {
        name: 'Miss Pink Elf',
        acr: 'elysia',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.vv, 1: '1' }, 1: { 0: data.su, 1: '2' }, 2: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.psuedoMiracle, 2: data.fallingInPastLight },
                    2: { 1: data.lightAsABodhiLeaf, 2: data.emptyLikeShala },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.vc }, 2: { 1: data.sa } },
                    2: { 1: { 1: data.vc }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Purity', 1: data.start, 2: '2' },
                        2: { 0: 'Zenith' },
                        3: { 0: 'Beauty', 1: data.first },
                        4: { 0: 'Love', 1: data.reinforcement, 2: '2' },
                        5: { 0: 'Benevolence' }
                    },
                    1: {
                        1: { 0: data.vv.name, 1: '6', 2: data.vv.regular[1] },
                        2: { 0: data.vv.regular[3] },
                        3: { 0: data.vv.regular[4] },
                        4: { 0: data.vv.regular[5] },
                        5: { 0: data.vv.nexus1.name },
                        6: { 0: data.vv.nexus1[2], 1: '' },
                        7: { 0: data.su.name, 1: '5', 2: data.su.regular[1] },
                        8: { 0: data.su.regular[2] },
                        9: { 0: data.su.regular[3] },
                        10: { 0: data.su.regular[5] },
                        11: { 0: data.su.regular[6] },
                        12: { 0: data.hua.name, 1: '2', 2: data.hua.regular[5], 3: '' },
                        13: { 0: data.hua.nexus2.name }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '4', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.regular[4] },
                        4: { 0: data.eden.nexus2.name },
                        5: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[1] },
                        6: { 0: data.griseo.regular[4] },
                        7: { 0: data.griseo.nexus1.name, 1: '' },
                        8: { 0: data.griseo.nexus1[2], 1: '' }
                    }
                },
                notes: `<p>${data.vv.nexus1[2]}</p>If Su's signet <span>${data.su.regular[2]}</span> is chosen.<br><br>
                        <p>${data.hua.regular[5]}</p>Either upgrade this or pick Kevin's signet <span>${data.kevin.regular[4]}.</span><br><br>
                        <p>Eden</p>Start choosing her signets early only after obtaining Su's signet <span>${data.su.regular[2]}</span><br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    const pe = {
        name: 'Palatinus Equinox',
        acr: 'pe',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.kalpas, 1: '2' }, 1: { 0: data.sakura, 1: '1' } },
                    2: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.kevin, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.madKingsMask, 2: data.tsukimiHimiko },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.stainedSakura, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.vc, 2: data.sa }, 2: { 1: data.br } },
                    2: { 1: { 1: data.ss }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Gallop', 1: data.start },
                        2: { 0: 'Abyssal Chant', 1: data.first },
                        3: { 0: 'Equinox', 1: data.second },
                        4: { 0: 'Commitment', 1: data.no, 2: '2' },
                        5: { 0: 'Exodus' }
                    },
                    1: {
                        1: { 0: data.kalpas.name, 1: '4', 2: data.kalpas.regular[1] },
                        2: { 0: data.kalpas.regular[2] },
                        3: { 0: data.kalpas.nexus2.name },
                        4: { 0: data.kalpas.nexus2[3] },
                        5: { 0: data.sakura.name, 1: '3', 2: data.sakura.regular[5] },
                        6: { 0: data.sakura.regular[6] },
                        7: { 0: data.sakura.nexus1.name }
                    },
                    2: {
                        1: { 0: data.hua.name, 1: '2', 2: data.hua.regular[5] },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.griseo.name, 1: '3', 2: data.griseo.regular[1] },
                        4: { 0: data.griseo.regular[4] },
                        5: { 0: data.griseo.nexus1.name },
                        6: { 0: data.kevin.name, 1: '1', 2: data.kevin.regular[4] }
                    }
                },
                notes: `<p>Kalpas</p>If can't get double signets, start with double Ego.`
            }
        }
    };
    const fischl = {
        name: 'Prinzessin der Verurteilung',
        acr: 'fischl',
        rate: data.abstinence,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.mobius, 1: '1' } },
                    2: { 0: { 0: data.griseo, 1: '1' }, 1: { 0: data.su, 1: '2' }, 2: { 0: data.kalpas, 1: '2' } }
                },
                emblem: {
                    1: { 1: data.memory, 2: data.theLonelyMoon },
                    2: { 1: data.forbiddenSeed, 2: data.fallingInPastLight },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.br } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Retrtibution', 1: data.start },
                        2: { 0: 'Midnight', 1: data.first },
                        3: { 0: 'Fate', 1: data.second },
                        4: { 0: 'Dark Wings', 1: data.no, 2: '2' },
                        5: { 0: 'Nightfall' }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '3', 2: data.hua.regular[6] },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.hua.nexus2[1] },
                        4: { 0: data.mobius.name, 1: '4', 2: data.mobius.regular[2] },
                        5: { 0: data.mobius.regular[5] },
                        6: { 0: data.mobius.nexus1.name, 1: '' },
                        7: { 0: data.mobius.nexus1[2], 1: '' }
                    },
                    2: {
                        1: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[1] },
                        2: { 0: data.griseo.regular[4] },
                        3: { 0: data.griseo.regular[6] },
                        4: { 0: data.griseo.nexus1.name, 1: '' },
                        5: { 0: data.griseo.nexus1[2], 1: '' },
                        6: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        7: { 0: data.su.regular[3] },
                        8: { 0: data.su.regular[5] },
                        9: { 0: data.su.nexus2.name },
                        10: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[1], 3: '' },
                        11: { 0: data.kalpas.regular[2], 1: '' },
                        12: { 0: data.kalpas.nexus2.name, 1: '' }
                    }
                },
                notes: `<p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.<br><br>
                        <p>Kalpas</p>Only pick his signets after 12F.`
            }
        }
    };
    const rvc = {
        name: 'Reverist Calico',
        acr: 'rc',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.griseo, 1: '1' }, 1: { 0: data.kalpas, 1: '2' }, 2: { 0: data.pardofelis, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    2: { 1: data.memory, 2: data.fallingInPastLight },
                    3: { 1: data.goodOldDays, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.hb } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.hb } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Cat\'s Eyes', 1: data.start, 2: '2' },
                        2: { 0: 'Hidden Claws' },
                        3: { 0: 'Nighteye', 1: data.first },
                        4: { 0: 'the Tailpiece', 1: data.second },
                        5: { 0: 'Phantasma', 1: data.reinforcement }
                    },
                    1: {
                        1: { 0: data.eden.name, 1: '5', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.eden.nexus2[2] },
                        5: { 0: data.eden.nexus2[3] },
                        6: { 0: data.hua.name, 1: '2', 2: data.hua.regular[6] },
                        7: { 0: data.hua.nexus2.name }
                    },
                    2: {
                        1: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[1] },
                        2: { 0: data.griseo.regular[4] },
                        3: { 0: data.griseo.regular[6] },
                        4: { 0: data.griseo.nexus1.name, 1: '' },
                        5: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[1] },
                        6: { 0: data.kalpas.regular[2] },
                        7: { 0: data.kalpas.nexus2.name },
                        8: { 0: data.pardofelis.name, 1: '5', 2: data.pardofelis.regular[1] },
                        9: { 0: data.pardofelis.regular[3], 1: '' },
                        10: { 0: data.pardofelis.regular[4] },
                        11: { 0: data.pardofelis.regular[6] },
                        12: { 0: data.pardofelis.nexus1.name }
                    }
                },
                notes: `Can pick Kevin's signet <span>${data.kevin.regular[1]}</span> to supplement breach.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.<br><br>
                        <p>${data.pardofelis.regular[3]}</p>Buy early in shop.`
            }
        }
    };
    const ri = {
        name: 'Ritual Imayoh',
        acr: 'ri',
        rate: data.inferno,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.mobius, 1: '1' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.su, 1: '2' }, 2: { 0: data.griseo, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.forbiddenSeed, 2: data.theLonelyMoon },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.vc }, 2: { 1: data.le } },
                    2: { 1: { 1: data.vc }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Prosperity', 1: data.start },
                        2: { 0: 'Dawn', 1: data.first },
                        3: { 0: 'Blossom', 1: data.second },
                        4: { 0: 'Fertility', 1: data.no, 2: '2' },
                        5: { 0: 'Torch' }
                    },
                    1: {
                        1: { 0: data.mobius.name, 1: '3', 2: data.mobius.regular[2] },
                        2: { 0: data.mobius.regular[5] },
                        3: { 0: data.mobius.nexus1.name },
                        4: { 0: data.hua.name, 1: '2', 2: data.hua.regular[5], 3: '' },
                        5: { 0: data.hua.nexus2.name }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        5: { 0: data.su.regular[3] },
                        6: { 0: data.su.regular[5] },
                        7: { 0: data.su.nexus2.name },
                        8: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[1] },
                        9: { 0: data.griseo.regular[4] },
                        10: { 0: data.griseo.regular[6] },
                        11: { 0: data.griseo.nexus1.name }
                    }
                },
                notes: `<p>${data.hua.regular[5]}</p>Recommended to upgrade.`
            }
        }
    };
    const sw = {
        name: 'Silverwing N-EX',
        acr: 'sw',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.su, 1: '2' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.lightAsABodhiLeaf, 2: data.outOfReach },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.goodOldDays, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.vc } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.hb } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Phantom Plumes', 1: data.start },
                        2: { 0: 'Grey Falcon', 1: data.first },
                        3: { 0: 'Pale Feathers', 1: data.second, 2: '2' },
                        4: { 0: 'Silver Eagle' },
                        5: { 0: 'Sharp Eyes', 1: data.no }
                    },
                    1: {
                        1: { 0: data.su.name, 1: '2', 2: data.su.regular[2] },
                        2: { 0: data.su.regular[3] },
                        3: { 0: data.hua.name, 1: '2', 2: data.hua.regular[6], 3: '' },
                        4: { 0: data.hua.nexus2.name }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '4', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.eden.nexus2[3] },
                        5: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        6: { 0: data.griseo.regular[4] },
                        7: { 0: data.griseo.regular[6] },
                        8: { 0: data.griseo.nexus1.name, 1: '' },
                        9: { 0: data.griseo.nexus1[2], 1: '' },
                        10: { 0: data.aponia.name, 1: '4', 2: data.aponia.regular[1] },
                        11: { 0: data.aponia.regular[6] },
                        12: { 0: data.aponia.nexus1.name },
                        13: { 0: data.aponia.nexus1[1], 1: '' }
                    }
                },
                notes: `<p>${data.hua.regular[6]}</p>Recommended to upgrade.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}, ${data.aponia.nexus1[1]}</p>If lacking breach.`
            }
        }
    };
    const spa = {
        name: 'Spina Astera',
        acr: 'spa',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.su, 1: '2' }, 2: { 0: data.griseo, 1: '1' }, 3: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.memory, 2: data.becauseOfYou },
                    2: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.ma } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Wild Flare', 1: data.start },
                        2: { 0: 'Star Quillon', 1: data.first },
                        3: { 0: 'Alrescha', 1: data.second, 2: '2' },
                        4: { 0: 'Radiant Formation' },
                        5: { 0: 'Holy Flame', 1: data.reinforcement }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '3', 2: data.hua.regular[6], 3: '' },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.hua.nexus2[1], 1: '' }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        5: { 0: data.su.regular[3] },
                        6: { 0: data.su.regular[5] },
                        7: { 0: data.su.nexus2.name },
                        8: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        9: { 0: data.griseo.regular[4] },
                        10: { 0: data.griseo.regular[6] },
                        11: { 0: data.griseo.nexus1.name, 1: '' },
                        12: { 0: data.griseo.nexus1[2], 1: '' },
                        13: { 0: data.aponia.name, 1: '3', 2: data.aponia.regular[1] },
                        14: { 0: data.aponia.regular[4] },
                        15: { 0: data.aponia.nexus1.name }
                    }
                },
                notes: `<p>Hua</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>${data.hua.regular[6]}, ${data.hua.nexus2[1]}</p>Either upgrade <span>${data.hua.regular[6]}</span> or pick <span>${data.hua.nexus2[1]}</span>.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.<br><br>
                        <p>Aponia</p>If the shop has Kalpas signets, can pick Kalpas's nexus ${data.kalpas.nexus2.name}.`
            }
        }
    };
    const nyx = {
        name: 'Starchasm Nyx',
        acr: 'nyx',
        rate: data.corruption,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.kevin, 1: '1' }, 1: { 0: data.sakura, 1: '1' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.su, 1: '2' } }
                },
                emblem: {
                    1: { 1: data.forgetMeNot, 2: data.tsukimiHimiko },
                    2: { 1: data.burden, 2: data.tsukimiHimiko },
                    3: { 1: data.stainedSakura, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.hb } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Frigidity', 1: data.start },
                        2: { 0: 'Abyssal Gaze', 1: data.first },
                        3: { 0: 'Nightmare', 1: data.second, 2: '2' },
                        4: { 0: 'Toxic Bath' },
                        5: { 0: 'Cocoon Break', 1: data.no }
                    },
                    1: {
                        1: { 0: data.kevin.name, 1: '5', 2: data.kevin.regular[1] },
                        2: { 0: data.kevin.regular[6] },
                        3: { 0: data.kevin.nexus1.name },
                        4: { 0: data.kevin.nexus1[1] },
                        5: { 0: data.kevin.nexus1[2] },
                        6: { 0: data.sakura.name, 1: '3', 2: data.sakura.regular[5] },
                        7: { 0: data.sakura.regular[6] },
                        8: { 0: data.sakura.nexus1.name }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[1] },
                        5: { 0: data.griseo.regular[4] },
                        6: { 0: data.griseo.regular[6] },
                        7: { 0: data.griseo.nexus1.name, 1: '' },
                        8: { 0: data.griseo.nexus1[2], 1: '' },
                        9: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        10: { 0: data.su.regular[3] },
                        11: { 0: data.su.regular[5] },
                        12: { 0: data.su.nexus2.name }
                    }
                },
                notes: `<p>Sakura</p>If unable to get double signets, start with double Ego.<br><br>
                        <p>${data.griseo.nexus1.name}</p>If picking HoD minion.<br><br>
                        <p>${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    const sn = {
        name: 'Stygian Nymph',
        acr: 'sn',
        rate: data.inferno,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.sakura, 1: '1' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.kosma, 1: '1' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.kalpas, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.forgetMeNot, 2: data.becauseOfYou },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.stainedSakura, 2: data.tsukimiHimiko }
                },
                support: {
                    1: { 1: { 1: data.sa }, 2: { 1: data.dp } },
                    2: { 1: { 1: data.ss }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Vurnerable Duality', 1: data.start },
                        2: { 0: 'Union', 1: data.first },
                        3: { 0: 'Intergrowth', 1: data.second, 2: '3' },
                        4: { 0: 'Kindred' },
                        5: { 0: 'Might of Duality' }
                    },
                    1: {
                        1: { 0: data.sakura.name, 1: '3', 2: data.sakura.regular[3] },
                        2: { 0: data.sakura.regular[5] },
                        3: { 0: data.sakura.nexus1.name },
                        4: { 0: data.hua.name, 1: '2', 2: data.hua.regular[5], 3: '' },
                        5: { 0: data.hua.nexus2.name }
                    },
                    2: {
                        1: { 0: data.kosma.name, 1: '4', 2: data.kosma.regular[4] },
                        2: { 0: data.kosma.regular[5] },
                        3: { 0: data.kosma.regular[6] },
                        4: { 0: data.kosma.nexus1.name },
                        5: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[1] },
                        6: { 0: data.griseo.regular[2] },
                        7: { 0: data.griseo.regular[6] },
                        8: { 0: data.griseo.nexus1.name },
                        9: { 0: data.kalpas.name, 1: '2', 2: data.kalpas.regular[1] },
                        10: { 0: data.kalpas.regular[2] }
                    }
                },
                notes: `Can pick Griseo's signet <span>${data.griseo.regular[6]}</span> for more damage.<br><br>
                        <p>Hua</p>Pick when there's not enough breach from Kevin signets.`
            }
        }
    };
    const carole = {
        name: 'Sweet \'n\' Spicy',
        acr: 'carole',
        rate: data.inferno,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.eden, 1: '2' } },
                    2: { 0: { 0: data.kalpas, 1: '2' } },
                    3: { 0: { 0: data.kevin, 1: '1' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.aponia, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    2: { 1: data.madKingsMask, 2: data.dreamfulGold },
                    3: { 1: data.keyToTheDeep, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.ss }, 2: { 1: data.br } },
                    2: { 1: { 1: data.ss }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Revolution', 1: data.start },
                        2: { 0: 'Skyfall', 1: data.first },
                        3: { 0: 'Brake', 1: data.no, 2: '3' },
                        4: { 0: 'Impulse' },
                        5: { 0: 'Rupture' }
                    },
                    1: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name }
                    },
                    2: {
                        1: { 0: data.kalpas.name, 1: '4', 2: data.kalpas.regular[1] },
                        2: { 0: data.kalpas.regular[2] },
                        3: { 0: data.kalpas.regular[5] },
                        4: { 0: data.kalpas.nexus2.name }
                    },
                    3: {
                        1: { 0: data.kevin.name, 1: '4', 2: data.kevin.regular[3] },
                        2: { 0: data.kevin.regular[4] },
                        3: { 0: data.kevin.regular[5] },
                        4: { 0: data.kevin.nexus1.name },
                        5: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[3] },
                        6: { 0: data.griseo.regular[4] },
                        7: { 0: data.griseo.regular[6] },
                        8: { 0: data.griseo.nexus1.name },
                        9: { 0: data.aponia.name, 1: '3', 2: data.aponia.regular[1] },
                        10: { 0: data.aponia.regular[4] },
                        11: { 0: data.aponia.nexus1.name }
                    },
                }
            }
        }
    };
    const tp = {
        name: 'Twilight Paladin',
        acr: 'tp',
        rate: data.abstinence,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.su, 1: '2' }, 1: { 0: data.hua, 1: '2' } },
                    2: { 0: { 0: data.eden, 1: '2' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.mobius, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.lightAsABodhiLeaf, 2: data.theLonelyMoon },
                    2: { 1: data.memory, 2: data.homeTown },
                    3: { 1: data.resolve, 2: data.homeTown }
                },
                support: {
                    1: { 1: { 1: data.sa }, 2: { 1: data.dp } },
                    2: { 1: { 1: data.sa }, 2: { 1: data.br } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Penalty', 1: data.start },
                        2: { 0: 'Dusk', 1: data.first },
                        3: { 0: 'Banishment', 1: data.second, },
                        4: { 0: 'Radiance', 1: data.no, 2: '2' },
                        5: { 0: 'Sanction' }
                    },
                    1: {
                        1: { 0: data.su.name, 1: '4', 2: data.su.regular[1] },
                        2: { 0: data.su.regular[2], 1: '' },
                        3: { 0: data.su.regular[3] },
                        4: { 0: data.su.regular[6] },
                        5: { 0: data.hua.name, 1: '2', 2: data.hua.regular[2] },
                        6: { 0: data.hua.regular[4] }
                    },
                    2: {
                        1: { 0: data.eden.name, 1: '3', 2: data.eden.regular[2] },
                        2: { 0: data.eden.regular[3] },
                        3: { 0: data.eden.nexus2.name },
                        4: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        5: { 0: data.griseo.regular[4] },
                        6: { 0: data.griseo.regular[6] },
                        7: { 0: data.griseo.nexus1.name, 1: '' },
                        8: { 0: data.griseo.nexus1[2], 1: '' },
                        9: { 0: data.mobius.name, 1: '3', 2: data.mobius.regular[3] },
                        10: { 0: data.mobius.regular[5] },
                        11: { 0: data.mobius.nexus1.name }
                    }
                },
                notes: `<p>${data.su.regular[2]}</p>Priority.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.<br><br>
                        <p>Mobius</p>Can equip Siegfried M to reduce cross cooldown.`
            }
        }
    };
    const stfu = {
        name: 'Valkyrie Bladestrike',
        acr: 'stfu',
        rate: data.abstinence,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.eden, 1: '2' } },
                    2: { 0: { 0: data.kevin, 1: '1' } },
                    3: { 0: { 0: data.su, 1: '2' }, 1: { 0: data.sakura, 1: '2' }, 2: { 0: data.griseo, 1: '1' } }
                },
                emblem: {
                    1: { 1: data.goldGoblet, 2: data.dreamfulGold },
                    2: { 1: data.burden, 2: data.homeTown },
                    3: { 1: data.heavyAsAMillionLives, 2: data.dreamfulGold }
                },
                support: {
                    1: { 1: { 1: data.vc }, 2: { 1: data.le } },
                    2: { 1: { 1: data.vc }, 2: { 1: data.ss } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Current', 1: data.start },
                        2: { 0: 'Karma', 1: data.first },
                        3: { 0: 'Idea', 1: data.second, 2: '2' },
                        4: { 0: 'Thunder' },
                        5: { 0: 'Zanshin', 1: data.no }
                    },
                    1: {
                        1: { 0: data.eden.name, 1: '5', 2: data.eden.regular[1] },
                        2: { 0: data.eden.regular[2] },
                        3: { 0: data.eden.regular[3] },
                        4: { 0: data.eden.regular[6] },
                        5: { 0: data.eden.nexus2.name }
                    },
                    2: {
                        1: { 0: data.kevin.name, 1: '4', 2: data.kevin.regular[4] },
                        2: { 0: data.kevin.regular[6] },
                        3: { 0: data.kevin.nexus1.name },
                        4: { 0: data.kevin.nexus1[1] }
                    },
                    3: {
                        1: { 0: data.su.name, 1: '3', 2: data.su.regular[1] },
                        2: { 0: data.su.regular[3] },
                        3: { 0: data.su.regular[5] },
                        4: { 0: data.sakura.name, 1: '2', 2: data.sakura.regular[5] },
                        5: { 0: data.sakura.nexus2.name },
                        6: { 0: data.griseo.name, 1: '5', 2: data.griseo.regular[3] },
                        7: { 0: data.griseo.regular[4] },
                        8: { 0: data.griseo.regular[6] },
                        9: { 0: data.griseo.nexus1.name, 1: '' },
                        10: { 0: data.griseo.nexus1[2], 1: '' }
                    },
                },
                notes: `If there's a Normal Signet of Deliverance +2 stage effect, start with Kevin sigents.<br><br>
                        <p>${data.griseo.nexus1.name}, ${data.griseo.nexus1[2]}</p>If lacking breach.`
            }
        }
    };
    const vg = {
        name: 'Valkyrie Gloria',
        acr: 'vg',
        rate: data.inferno,
        builds: {
            0: {
                signet: {
                    1: { 0: { 0: data.hua, 1: '2' }, 1: { 0: data.kalpas, 1: '1' } },
                    2: { 0: { 0: data.vv, 1: '1' }, 1: { 0: data.griseo, 1: '1' }, 2: { 0: data.eden, 1: '2' } }
                },
                emblem: {
                    1: { 1: data.memory, 2: data.theLonelyMoon },
                    2: { 1: data.madKingsMask, 2: data.becauseOfYou },
                    3: { 1: data.keyToTheDeep, 2: data.fallingInPastLight }
                },
                support: {
                    1: { 1: { 1: data.ae }, 2: { 1: data.le } },
                    2: { 1: { 1: data.ae }, 2: { 1: data.br, 2: data.ma } }
                },
                signetTable: {
                    0: {
                        1: { 0: 'Gloria', 1: data.start },
                        2: { 0: 'Battle Song', 1: data.first },
                        3: { 0: 'Triumph', 1: data.second },
                        4: { 0: 'Impetus', 1: data.no, 2: '2' },
                        5: { 0: 'Sol' }
                    },
                    1: {
                        1: { 0: data.hua.name, 1: '2', 2: data.hua.regular[6] },
                        2: { 0: data.hua.nexus2.name },
                        3: { 0: data.kalpas.name, 1: '3', 2: data.kalpas.regular[1] },
                        4: { 0: data.kalpas.regular[2] },
                        5: { 0: data.kalpas.nexus1.name }
                    },
                    2: {
                        1: { 0: data.vv.name, 1: '3', 2: data.vv.regular[2] },
                        2: { 0: data.vv.regular[6] },
                        3: { 0: data.vv.nexus1.name },
                        4: { 0: data.griseo.name, 1: '4', 2: data.griseo.regular[1] },
                        5: { 0: data.griseo.regular[4] },
                        6: { 0: data.griseo.regular[6] },
                        7: { 0: data.griseo.nexus1.name },
                        8: { 0: data.eden.name, 1: '4', 2: data.eden.regular[2] },
                        9: { 0: data.eden.regular[3] },
                        10: { 0: data.eden.regular[6] },
                        11: { 0: data.eden.nexus2.name }
                    }
                }
            }
        }
    };
    return [aka, bkek, da, dpe, fr, gd, hofs, hor, hos, hot,
        mobi, lk, raven, elysia, pe, fischl, rvc, ri, sw, spa,
        nyx, sn, carole, tp, stfu, vg];
}());

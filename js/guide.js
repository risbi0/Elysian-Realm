// Argent Knight: Artemis
const aka = {
    name: 'Argent Knight: Artemis',
    acr: 'aka',
    rate: corruption,
    builds: {
        0: {
            signet: { // 1 - main, 2 - secondary, 3 - transitional
                1: { 0: { 0: mobius, 1: '1' }, 1: { 0: kevin, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: vv, 1: '' } }
            },
            emblem: {
                1: { 1: forbiddenSeed, 2: becauseOfYou }, // early
                2: { 1: burden, 2: itWillBeWritten }, // mid
                3: { 1: dreamfulGold, 2: goodOldDays } // late
            },
            
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } }, // utility
                2: { 1: { 1: ae }, 2: { 1: hb } } // damage
            },
            signetTable: {
                // 0 - elysian signets, 1 - core signets, 2 - reinforcement signets, 3 - transitional signets
                // respective order from signet Object
                0: {
                    // 1, 2, 3... - rows
                    // 0, 1, 2 - columns
                    // whatever key that only has numbers - rowspan value for the preceding value
                    // succeeding rows covered by the rowspan value starts at 0 regardless
                    1: { 0: 'Frost Scythe', 1: start },
                    2: { 0: 'Stellar Trials', 1: first, 2: '2' },
                    3: { 0: 'Winter Harvest' },
                    4: { 0: 'Cold Moon', 1: second },
                    5: { 0: 'Uranian Mirror', 1: reinforcement }
                },
                1: {
                    1: { 0: mobius.name, 1: '5', 2: mobius.regular[2] },
                    2: { 0: mobius.regular[5] },
                    3: { 0: mobius.nexus1.name },
                    4: { 0: mobius.nexus1[1] },
                    5: { 0: mobius.nexus1[3] },
                    6: { 0: kevin.name, 1: '5', 2: kevin.regular[1] },
                    7: { 0: kevin.regular[2] },
                    8: { 0: kevin.regular[6] },
                    9: { 0: kevin.nexus2.name },
                    10: { 0: kevin.nexus2[1] }
                },
                2: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: griseo.name, 1: '5', 2: griseo.regular[1] },
                    5: { 0: griseo.regular[4] }, 
                    6: { 0: griseo.regular[6] }, 
                    7: { 0: griseo.nexus1.name },
                    8: { 0: griseo.nexus1[2], 1: '' },
                    9: { 0: vv.name, 1: '4', 2: vv.regular[2] },
                    10: { 0: vv.regular[6] }
                }
            },
            notes: `<p>Mobius</p>If unable to get double signets in 4F, start with double Ego.<br><br>
                    <p>${griseo.nexus1[2]}</p>If breach isn't 60%.`
        }
    }
}
// Bright Knight: Excelsis
const bkek = {
    name: 'Bright Knight: Excelsis',
    acr: 'bke',
    rate: abstinence,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: sakura, 1: '1' }, 1: { 0: eden, 1: '2' } },
                2: { 0: { 0: kosma, 1: '' }, 1: { 0: kalpas, 1: '2' }, 2: { 0: griseo, 1: '' } }
            },
            emblem: {
                1: { 1: forgetMeNot, 2: tsukimiHimiko },
                2: { 1: goldGoblet, 2: dreamfulGold },
                3: { 1: stainedSakura, 2: tsukimiHimiko }
            },
            support: {
                1: { 1: { 1: sa, 2: dp }, 2: { 1: le } },
                2: { 1: { 1: ss }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Gambit', 1: start },
                    2: { 0: 'Glory', 1: first },
                    3: { 0: 'Paragon', 1: second },
                    4: { 0: 'Formation', 1: no, 2: '2' },
                    5: { 0: 'Holy Lance' }
                },
                1: {
                    1: { 0: sakura.name, 1: '3', 2: sakura.regular[5] },
                    2: { 0: sakura.regular[6] },
                    3: { 0: sakura.nexus1.name },
                    4: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    5: { 0: eden.regular[3] },
                    6: { 0: eden.nexus2.name }
                },
                2: {
                    1: { 0: kosma.name, 1: '2', 2: kosma.regular[4] },
                    2: { 0: kosma.regular[6] },
                    3: { 0: kalpas.name, 1: '4', 2: kalpas.regular[1] },
                    4: { 0: kalpas.regular[2] },
                    5: { 0: kalpas.nexus2.name },
                    6: { 0: kalpas.nexus2[3], 1: '' },
                    7: { 0: griseo.name, 1: '4', 2: griseo.regular[3] },
                    8: { 0: griseo.regular[4] },
                    9: { 0: griseo.regular[6] },
                    10: { 0: griseo.nexus1.name }
                }
            },
            notes: `<p>${kalpas.nexus2[3]}</p>If lacking impair/breach.`
        }
    }
}
// Dea Anchora
const da = {
    name: 'Dea Anchora',
    acr: 'da',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: kevin, 1: '1' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: su, 1: '2' }, 2: { 0: griseo, 1: '' }, 3: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: burden, 2: theLonelyMoon },
                2: { 1: goldGoblet, 2: dreamfulGold },
                3: { 1: goodOldDays, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br, 2: ma } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Star', 1: start },
                    2: { 0: 'Sheen', 1: first },
                    3: { 0: 'Halo', 1: second, 2: '2' },
                    4: { 0: 'Gale' },
                    5: { 0: 'Brilliance', 1: no }
                },
                1: {
                    1: { 0: kevin.name, 1: '4', 2: kevin.regular[1] },
                    2: { 0: kevin.regular[6] },
                    3: { 0: kevin.nexus1.name },
                    4: { 0: kevin.nexus1[1] }
                },
                2: {
                    1: { 0: eden.name, 1: '4', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: eden.nexus2[3] },
                    5: { 0: su.name, 1: '4', 2: su.regular[1] },
                    6: { 0: su.regular[3] },
                    7: { 0: su.regular[5] },
                    8: { 0: su.nexus2.name },
                    9: { 0: griseo.name, 1: '6', 2: griseo.regular[1] },
                    10: { 0: griseo.regular[2] },
                    11: { 0: griseo.regular[3] },
                    12: { 0: griseo.regular[4] },
                    13: { 0: griseo.regular[5] },
                    14: { 0: griseo.regular[6] },
                    15: { 0: aponia.name, 1: '2', 2: aponia.regular[4] },
                    16: { 0: aponia.nexus1.name }
                }
            }
        }
    }
}
// Disciplinary Perdition
const dpe = {
    name: 'Disciplinary Perdition',
    acr: 'dip',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' }, 1: { 0: griseo, 1: '' } },
                2: { 0: { 0: aponia, 1: '' }, 1: { 0: kalpas, 1: '2' }, 2: { 0: su, 1: '2' } }
            },
            emblem: {
                1: { 1: memory, 2: homeTown },
                2: { 1: rainbowOfAbsence, 2: theLonelyMoon },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Admonition', 1: start, 2: '2' },
                    2: { 0: 'Shelter'},
                    3: { 0: 'Inclusiveness', 1: first },
                    4: { 0: 'Atonement', 1: reinforcement, 2: '2' },
                    5: { 0: 'Rescue' }
                },
                1: {
                    1: { 0: hua.name, 1: '2', 2: hua.regular[6], 3: '' },
                    2: { 0: hua.nexus2.name },
                    3: { 0: griseo.name, 1: '6', 2: griseo.regular[2] },
                    4: { 0: griseo.regular[3] },
                    5: { 0: griseo.regular[4] },
                    6: { 0: griseo.regular[6] },
                    7: { 0: griseo.nexus1.name },
                    8: { 0: griseo.nexus1[2], 1: '' }
                },
                2: {
                    1: { 0: aponia.name, 1: '4', 2: aponia.regular[1] },
                    2: { 0: aponia.regular[3] },
                    3: { 0: aponia.regular[4] },
                    4: { 0: aponia.nexus1.name },
                    5: { 0: kalpas.name, 1: '4', 2: kalpas.regular[2] },
                    6: { 0: kalpas.regular[5] },
                    7: { 0: kalpas.nexus2.name },
                    8: { 0: kalpas.nexus2[3], 1: '' },
                    9: { 0: su.name, 1: '4', 2: su.regular[1] },
                    10: { 0: su.regular[3] },
                    11: { 0: su.regular[5] },
                    12: { 0: su.nexus2.name },
                }
            },
            notes: `<p>${hua.regular[6]}</p>Recommended to upgrade.<br><br>
                    <p>${griseo.nexus1[2]}, ${kalpas.nexus2[3]}</p>If breach is not yet 60%`
        }
    }
}
// Fallen Rosemary
const fr = {
    name: 'Fallen Rosemary',
    acr: 'fr',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' }, 1: { 0: su, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: kalpas, 1: '1' }, 2: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: memory, 2: becauseOfYou },
                2: { 1: lightAsABodhiLeaf, 2: emptyLikeShala },
                3: { 1: goodOldDays, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'God Eater', 1: start },
                    2: { 0: 'Soul Siphon', 1: first },
                    3: { 0: 'Nocturne', 1: second, 2: '2' },
                    4: { 0: 'Valfreyja'  },
                    5: { 0: 'Spirit Servants', 1: reinforcement }
                },
                1: {
                    1: { 0: hua.name, 1: '3', 2: hua.regular[6] },
                    2: { 0: hua.nexus2.name },
                    3: { 0: hua.nexus2[1], 1: '' },
                    4: { 0: su.name, 1: '4', 2: su.regular[1] },
                    5: { 0: su.regular[2] },
                    6: { 0: su.regular[3] },
                    7: { 0: su.regular[5] }
                },
                2: {
                    1: { 0: eden.name, 1: '5', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: eden.nexus2[2] },
                    5: { 0: eden.nexus2[3] },
                    6: { 0: kalpas.name, 1: '3', 2: kalpas.regular[1] },
                    7: { 0: kalpas.regular[2] },
                    8: { 0: kalpas.nexus1.name, 1: '' },
                    9: { 0: aponia.name, 1: '3', 2: aponia.regular[1] },
                    10: { 0: aponia.regular[4] },
                    11: { 0: aponia.nexus1.name }
                }
            },
            notes: `<p>${hua.nexus2[1]}</p>Either pick this or upgrade <span>${hua.regular[6]}</span><br><br>
                    <p>${kalpas.nexus1.name}</p>Optional.<br><br>
                    <p>Kalpas</p>Bring BR to reduce HP. Pair with Hua's shield.<br><br>
                    <p>Aponia</p>Can pick Pardofelis's signet <span>${pardofelis.regular[5]}</span> for HP and SP cap.`
        }
    }
}
// Golden Diva
const gd = {
    name: 'Golden Diva',
    acr: 'ede',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' }, 1: { 0: su, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: kalpas, 1: '2' } }
            },
            emblem: {
                1: { 1: memory, 2: homeTown },
                2: { 1: lightAsABodhiLeaf, 2: becauseOfYou },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Arioso', 1: start, 2: '2' },
                    2: { 0: 'Fugue' },
                    3: { 0: 'Symphony', 1: first },
                    4: { 0: 'Cadenza', 1: second },
                    5: { 0: 'Conerto', 1: reinforcement }
                },
                1: {
                    1: { 0: hua.name, 1: '2', 2: hua.regular[6], 3: '' },
                    2: { 0: hua.nexus2.name },
                    3: { 0: su.name, 1: '4', 2: su.regular[1] },
                    4: { 0: su.regular[3] },
                    5: { 0: su.regular[5] },
                    6: { 0: su.nexus2.name },
                },
                2: {
                    1: { 0: eden.name, 1: '5', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: eden.nexus2[2] },
                    5: { 0: eden.nexus2[3] },
                    6: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    7: { 0: griseo.regular[4] },
                    8: { 0: griseo.regular[6] },
                    9: { 0: griseo.nexus1.name },
                    10: { 0: griseo.nexus1[2], 1: '' },
                    11: { 0: kalpas.name, 1: '3', 2: kalpas.regular[2] },
                    12: { 0: kalpas.regular[5] },
                    13: { 0: kalpas.nexus2.name }
                }
            },
            notes: `<p>${hua.regular[6]}</p>Recommended to upgrade.<br><br>
                    <p>${griseo.nexus1[2]}</p>If breach is not yet 60%.<br><br>
                    <p>${kalpas.name}</p>Can pick Aponia signets. See what signets are in the shop to decide whether to select Kalpas or Aponia.`
        }
    }
}
// Herrscher of Flamescion
const hofs = {
    name: 'Herrscher of Flamescion',
    acr: 'hofs',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: kalpas, 1: '2' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: sakura, 1: '1' }, 1: { 0: kosma, 1: '' }, 2: { 0: griseo, 1: '' } }
            },
            emblem: {
                1: { 1: madKingsMask, 2: becauseOfYou },
                2: { 1: memory, 2: homeTown },
                3: { 1: stainedSakura, 2: tsukimiHimiko }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: br } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Heatflow', 1: start },
                    2: { 0: 'Reburn', 1: first, 2: '2' },
                    3: { 0: 'Starfire' },
                    4: { 0: 'Tempered Warrior', 1: second },
                    5: { 0: 'Flamescion', 1: filler }
                },
                1: {
                    1: { 0: kalpas.name, 1: '4', 2: kalpas.regular[1] },
                    2: { 0: kalpas.regular[2] },
                    3: { 0: kalpas.nexus2.name },
                    4: { 0: kalpas.nexus1.name, 1: '' },
                    5: { 0: hua.name, 1: '3', 2: hua.regular[6], 3: '' },
                    6: { 0: hua.nexus2.name },
                    7: { 0: hua.nexus2[1], 1: '' }
                },
                2: {
                    1: { 0: sakura.name, 1: '3', 2: sakura.regular[5] },
                    2: { 0: sakura.regular[6] },
                    3: { 0: sakura.nexus1.name },
                    4: { 0: kosma.name, 1: '3', 2: kosma.regular[4] },
                    5: { 0: kosma.regular[6] },
                    6: { 0: kosma.nexus1.name },
                    7: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    8: { 0: griseo.regular[4] },
                    9: { 0: griseo.regular[6] },
                    10: { 0: griseo.nexus1.name, 1: '' },
                    11: { 0: griseo.nexus1[2], 1: '' }
                }
            },
            notes: `<p>Kalpas</p>If low gear level, pick more enhance signets.<br><br>
                    <p>${kalpas.nexus1.name}</p>If unable to get double signets in 7F.<br><br>
                    <p>${hua.regular[6]}, ${hua.nexus2[2]}</p>Either pick <span>${hua.nexus2[2]}</span> or enhance <span>${hua.regular[6]}</span><br><br>
                    <p>${griseo.nexus1[2]}</p>If lacking breach.`
        }
    }
}
// Herrscher of Reason
const hor = {
    name: 'Herrscher of Reason',
    acr: 'hor',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' } , 1: { 0: sakura, 1: '1' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: su, 1: '2' }, 2: { 0: griseo, 1: '' } },
            },
            emblem: {
                1: { 1: memory, 2: theLonelyMoon },
                2: { 1: forgetMeNot, 2: becauseOfYou },
                3: { 1: stainedSakura, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: hb, 2: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Wisdom', 1: start },
                    2: { 0: 'Truth', 1: first },
                    3: { 0: 'Inspiration', 1: second, 2: '2' },
                    4: { 0: 'Reason' },
                    5: { 0: 'Creation', 1: filler }
                },
                1: {
                    1: { 0: hua.name, 1: '4', 2: hua.regular[1] },
                    2: { 0: hua.regular[3] },
                    3: { 0: hua.regular[6] },
                    4: { 0: hua.nexus2.name },
                    5: { 0: sakura.name, 1: '4', 2: sakura.regular[5] },
                    6: { 0: sakura.regular[6] },
                    7: { 0: sakura.nexus1.name },
                    8: { 0: sakura.nexus2.name, 1: '' }
                },
                2: {
                    1: { 0: eden.name, 1: '4', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.regular[6] },
                    4: { 0: eden.nexus2.name },
                    5: { 0: su.name, 1: '4', 2: su.regular[1] },
                    6: { 0: su.regular[3] },
                    7: { 0: su.regular[5] },
                    8: { 0: su.nexus2.name },
                    9: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    10: { 0: griseo.regular[4] },
                    11: { 0: griseo.regular[6] },
                    12: { 0: griseo.nexus1.name, 1: '' },
                    13: { 0: griseo.nexus1[2], 1: '' }
                }
            },
            notes: `<p>Hua</p>If unable to get double signets on 4F, start with double Ego, <span>${sakura.nexus1.name}</span>, and <span>${tsukimiHimiko.name}</span>.<br><br>
                    <p>${sakura.nexus2.name}</p>For SS and above rank users.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.`
        }
    }
}
// Herrscher of Sentience
const hos = {
    name: 'Herrscher of Sentience',
    acr: 'hos',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: eden, 1: '2' } },
                2: { 0: { 0: su, 1: '2' } },
                3: { 0: { 0: griseo, 1: '' }, 1: { 0: aponia, 1: '' }, 2: { 0: kalpas, 1: '2' } }
            },
            emblem: {
                1: { 1: goldGoblet, 2: theLonelyMoon },
                2: { 1: lightAsABodhiLeaf, 2: dreamfulGold },
                3: { 1: goodOldDays, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: br }, 2: { 1: le } },
                2: { 1: { 1: br }, 2: { 1: ss } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Victory', 1: start },
                    2: { 0: 'Dark Plumes', 1: first },
                    3: { 0: 'Supremacy', 1: second },
                    4: { 0: 'Legion', 1: reinforcement },
                    5: { 0: 'Ego', 1: no }
                },
                1: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name }
                },
                2: {
                    1: { 0: su.name, 1: '5', 2: su.regular[1] },
                    2: { 0: su.regular[2] },
                    3: { 0: su.regular[3] },
                    4: { 0: su.regular[5] },
                    5: { 0: su.nexus2.name }
                },
                3: {
                    1: { 0: griseo.name, 1: '4', 2: griseo.regular[3] },
                    2: { 0: griseo.regular[4] },
                    3: { 0: griseo.regular[6] },
                    4: { 0: griseo.nexus1.name, 1: '' },
                    5: { 0: aponia.name, 1: '2', 2: aponia.regular[4] },
                    6: { 0: aponia.nexus1.name },
                    7: { 0: kalpas.name, 1: '4', 2: kalpas.regular[1] },
                    8: { 0: kalpas.regular[2] },
                    9: { 0: kalpas.nexus2.name },
                }
            },
            notes: `If there's no Normal Signet of Gold +2 stage effect,
                    can pick Blessing of Victory, Blessing of Ego, and Infinity signet at start.<br><br>
                    <p>Blessing of Supremacy</p>Pick HoD.<br><br>
                    <p>${su.regular[1]}</p>Recommended to upgrade.<br><br>
                    <p>${griseo.nexus1.name}</p>If fighting agains 12F boss.<br><br>
                    <p>Aponia</p>Wait for shop to consider nexus.`
        }
    }
}
// Herrscher of Thunder
const hot = {
    name: 'Herrscher of Thunder',
    acr: 'hot',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: eden, 1: '1' } },
                2: { 0: { 0: hua, 1: '2' } },
                3: { 0: { 0: su, 1: '2' }, 1: { 0: kalpas, 1: '2' }, 2: { 0: pardofelis, 1: '' } }
            },
            emblem: {
                1: { 1: goldGoblet, 2: dreamfulGold },
                2: { 1: memory, 2: homeTown },
                3: { 1: keyToTheDeep, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: vc } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Tsukuyomi', 1: start },
                    2: { 0: 'Hazy Moon', 1: first },
                    3: { 0: 'Divine Penalty', 1: no, 2: '3' },
                    4: { 0: 'Mitama' },
                    5: { 0: 'Narukami' }
                },
                1: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus1.name }
                },
                2: {
                    1: { 0: hua.name, 1: '3', 2: hua.regular[6] },
                    2: { 0: hua.nexus2.name },
                    3: { 0: hua.nexus2[1], 1: '' }
                },
                3: {
                    1: { 0: su.name, 1: '4', 2: su.regular[1] },
                    2: { 0: su.regular[3] },
                    3: { 0: su.regular[5] },
                    4: { 0: su.nexus2.name },
                    5: { 0: kalpas.name, 1: '3', 2: kalpas.regular[1] },
                    6: { 0: kalpas.regular[2] },
                    7: { 0: kalpas.nexus2.name },
                    8: { 0: pardofelis.name, 1: '3', 2: pardofelis.regular[1] },
                    9: { 0: pardofelis.regular[4] },
                    10: { 0: pardofelis.regular[5] }
                },
                
            },
            notes: `<p>${hua.nexus2[1]}</p>Either pick this or upgrade <span>${hua.regular[6]}</span><br><br>
                    <p>Pardofelis</p>After getting Kalpas and Eden signets, in late shop buy her signets listed above, and try to maintain 1k silver.`
        },
        1: {
            signet: {
                1: { 0: { 0: kevin, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: sakura, 1: '1' }, 2: { 0: su, 1: '2' }, 3: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: burden, 2: tsukimiHimiko },
                2: { 1: goldGoblet, 2: dreamfulGold },
                3: { 1: stainedSakura, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Divine Penalty', 1: start },
                    2: { 0: 'Mitama', 1: first },
                    3: { 0: 'Narukami', 1: second },
                    4: { 0: 'Hazy Moon', 1: no, 2: '2' },
                    5: { 0: 'Tsukuyomi' }
                },
                1: {
                    1: { 0: kevin.name, 1: '4', 2: kevin.regular[1] },
                    2: { 0: kevin.regular[6] },
                    3: { 0: kevin.nexus2.name },
                    4: { 0: kevin.nexus2[3] }
                },
                2: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus1.name },
                    4: { 0: sakura.name, 1: '2', 2: sakura.regular[5] },
                    5: { 0: sakura.nexus1.name },
                    6: { 0: su.name, 1: '4', 2: su.regular[1] },
                    7: { 0: su.regular[3] },
                    8: { 0: su.regular[5] },
                    9: { 0: su.nexus2.name },
                    10: { 0: aponia.name, 1: '2', 2: aponia.regular[4] },
                    11: { 0: aponia.nexus1.name }
                }
            },
            notes: `<p>Kevin</p>If stuck in 4F, start with double Ego.`
        }
    }
}
// Infinite Ouroboros
const mobi = {
    name: 'Infinite Ouroboros',
    acr: 'mobius',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: mobius, 1: '1' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: sakura, 1: '1' }, 1: { 0: griseo, 1: '' }, 2: { 0: kalpas, 1: '1' } }
            },
            emblem: {
                1: { 1: forbiddenSeed, 2: boundlessLogos },
                2: { 1: memory, 2: homeTown },
                3: { 1: stainedSakura, 2: boundlessLogos }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Ascension', 1: start, 2: '2' },
                    2: { 0: 'Ill Fortune' },
                    3: { 0: 'Dark Assault', 1: first },
                    4: { 0: 'Ravenousness', 1: second },
                    5: { 0: 'Mirage', 1: no }
                },
                1: {
                    1: { 0: mobius.name, 1: '2', 2: mobius.nexus1.name },
                    2: { 0: mobius.nexus1[1] },
                    3: { 0: hua.name, 1: '3', 2: hua.regular[6], 3: '' },
                    4: { 0: hua.nexus2.name },
                    5: { 0: hua.nexus2[1] }
                },
                2: {
                    1: { 0: sakura.name, 1: '3', 2: sakura.regular[1] },
                    2: { 0: sakura.regular[5] },
                    3: { 0: sakura.nexus1.name },
                    4: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    5: { 0: griseo.regular[4] },
                    6: { 0: griseo.regular[6] },
                    7: { 0: griseo.nexus1.name, 1: '' },
                    8: { 0: griseo.nexus1[2], 1: '' },
                    9: { 0: kalpas.name, 1: '3', 2: kalpas.regular[1] },
                    10: { 0: kalpas.regular[2] }
                }
            },
            notes: `<p>Mobius</p>Don't pick <span>${mobius.nexus1[2]}</span>.<br><br>
                    <p>${hua.regular[6]}</p>Recommended to upgrade.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.<br><br>
                    <p>Kalpas</p>Use BR to decrease HP. Can pick Eden (with 2nd Nexus series) signets as reinforcement. Pick according to what's in the store.`
        }
    }
}
// Luna Kindred
const lk = {
    name: 'Luna Kindred',
    acr: 'lk',
    rate: inferno,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: kalpas, 1: '2' }, 1: { 0: mobius, 1: '1' } },
                2: { 0: { 0: su, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: madKingsMask, 2: theLonelyMoon },
                2: { 1: forbiddenSeed, 2: theLonelyMoon },
                3: { 1: keyToTheDeep, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: sa }, 2: { 1: br } },
                2: { 1: { 1: ss }, 2: { 1: dp } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Penumbra', 1: start },
                    2: { 0: 'Blood Feast', 1: first },
                    3: { 0: 'Imprint', 1: second },
                    4: { 0: 'Immortality', 1: no, 2: '2' },
                    5: { 0: 'Thirst' }
                },
                1: {
                    1: { 0: kalpas.name, 1: '6', 2: kalpas.regular[1] },
                    2: { 0: kalpas.regular[2] },
                    3: { 0: kalpas.regular[3] },
                    4: { 0: kalpas.regular[6], 1: '' },
                    5: { 0: kalpas.nexus2.name },
                    6: { 0: kalpas.nexus2[3] },
                    7: { 0: mobius.name, 1: '6', 2: mobius.regular[2] },
                    8: { 0: mobius.regular[5] },
                    9: { 0: mobius.nexus1.name },
                    10: { 0: mobius.nexus1[1] },
                    11: { 0: mobius.nexus1[2], 1: '' },
                    12: { 0: mobius.nexus1[3], 1: '' },
                },
                2: {
                    1: { 0: su.name, 1: '4', 2: su.regular[1] },
                    2: { 0: su.regular[3] },
                    3: { 0: su.regular[5] },
                    4: { 0: su.nexus2.name },
                    5: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    6: { 0: griseo.regular[4] },
                    7: { 0: griseo.regular[6] },
                    8: { 0: griseo.nexus1.name, 1: '' },
                    9: { 0: griseo.nexus1[2], 1: '' },
                    10: { 0: aponia.name, 1: '2', 2:aponia.regular[1] },
                    11: { 0: aponia.nexus1.name }
                }
            },
            notes: `<p>${kalpas.regular[6]}</p>Recommended to upgrade.<br><br>
                    <p>${mobius.nexus1[2]}, ${mobius.nexus1[3]}</p>If using dracula full set.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.`
        }
    }
}
// Midnight Absinthe
const raven = {
    name: 'Midnight Absinthe',
    acr: 'raven',
    rate: abstinence,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: kevin, 1: '1' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: su, 1: '2' }, 3: { 0: vv, 1: '' } }
            },
            emblem: {
                1: { 1: burden, 2: theLonelyMoon },
                2: { 1: goldGoblet, 2: homeTown },
                3: { 1: goodOldDays, 2: homeTown } 
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Ominous Mist', 1: start },
                    2: { 0: 'Arrowhead', 1: first },
                    3: { 0: 'Wild Hunt', 1: second },
                    4: { 0: 'Suppression', 1: reinforcement },
                    5: { 0: 'Raven Plume', 1: no }
                },
                1: {
                    1: { 0: kevin.name, 1: '3', 2: kevin.regular[1] },
                    2: { 0: kevin.nexus1.name },
                    3: { 0: kevin.nexus1[1] },
                },
                2: {
                    1: { 0: eden.name, 1: '4', 2: eden.regular[1] },
                    2: { 0: eden.regular[2] },
                    3: { 0: eden.regular[3] },
                    4: { 0: eden.nexus2.name },
                    5: { 0: griseo.name, 1: '3', 2: griseo.regular[1] },
                    6: { 0: griseo.regular[4] },
                    7: { 0: griseo.regular[6] },
                    8: { 0: su.name, 1: '4', 2: su.regular[1] },
                    9: { 0: su.regular[3] },
                    10: { 0: su.regular[5] },
                    11: { 0: su.nexus2.name },
                    12: { 0: vv.name, 1: '2', 2: vv.regular[2] },
                    13: { 0: vv.regular[5] }
                }
            },
            notes: `<p>Kevin</p>Start with double Ego.`
        }
    }
}
// Miss Pink Elf
const elysia = {
    name: 'Miss Pink Elf',
    acr: 'elysia',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: vv, 1: '' }, 1: { 0: su, 1: '2' }, 2: { 0: hua, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: griseo, 1: '' } }
            },
            emblem: {
                1: { 1: psuedoMiracle, 2: fallingInPastLight },
                2: { 1: lightAsABodhiLeaf, 2: emptyLikeShala },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: vc }, 2: { 1: sa } },
                2: { 1: { 1: vc }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Purity', 1: start, 2: '2' },
                    2: { 0: 'Zenith' },
                    3: { 0: 'Beauty', 1: first },
                    4: { 0: 'Love', 1: reinforcement, 2: '2' },
                    5: { 0: 'Benevolence' }
                },
                1: {
                    1: { 0: vv.name, 1: '6', 2: vv.regular[1] },
                    2: { 0: vv.regular[3] },
                    3: { 0: vv.regular[4] },
                    4: { 0: vv.regular[5] },
                    5: { 0: vv.nexus1.name },
                    6: { 0: vv.nexus1[2], 1: '' },
                    7: { 0: su.name, 1: '5', 2: su.regular[1] },
                    8: { 0: su.regular[2] },
                    9: { 0: su.regular[3] },
                    10: { 0: su.regular[5] },
                    11: { 0: su.regular[6] },
                    12: { 0: hua.name, 1: '2', 2: hua.regular[5], 3: '' },
                    13: { 0: hua.nexus2.name }
                },
                2: {
                    1: { 0: eden.name, 1: '4', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.regular[4] },
                    4: { 0: eden.nexus2.name },
                    5: { 0: griseo.name, 1: '4', 2: griseo.regular[1] },
                    6: { 0: griseo.regular[4] },
                    6: { 0: griseo.nexus1.name, 1: '' },
                    7: { 0: griseo.nexus1[2], 1: '' },
                }
            },
            notes: `<p>${vv.nexus1[2]}</p>If Su's signet <span>${su.regular[2]}</span> is chosen.<br><br>
                    <p>${hua.regular[5]}</p>Either upgrade this or pick Kevin's signet <span>${kevin.regular[4]}.</span><br><br>
                    <p>Eden</p>Start choosing her signets early only after obtaining Su's signet <span>${su.regular[2]}</span><br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.`
        }
    }
}
// Palatinus Equinox
const pe = {
    name: 'Palatinus Equinox',
    acr: 'pe',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: kalpas, 1: '2' }, 1: { 0: sakura, 1: '1' } },
                2: { 0: { 0: hua, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: kevin, 1: '1' } }
            },
            emblem: {
                1: { 1: madKingsMask, 2: tsukimiHimiko },
                2: { 1: memory, 2: homeTown },
                3: { 1: stainedSakura, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: vc, 2: sa }, 2: { 1: br } },
                2: { 1: { 1: ss }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Gallop', 1: start },
                    2: { 0: 'Abyssal Chant', 1: first },
                    3: { 0: 'Equinox', 1: second },
                    4: { 0: 'Commitment', 1: no, 2: '2' },
                    5: { 0: 'Exodus' }
                },
                1: {
                    1: { 0: kalpas.name, 1: '4', 2: kalpas.regular[1] },
                    2: { 0: kalpas.regular[2] },
                    3: { 0: kalpas.nexus2.name },
                    4: { 0: kalpas.nexus2[3] },
                    5: { 0: sakura.name, 1: '3', 2: sakura.regular[5] },
                    6: { 0: sakura.regular[6] },
                    7: { 0: sakura.nexus1.name }
                },
                2: {
                    1: { 0: hua.name, 1: '2', 2: hua.regular[5] },
                    2: { 0: hua.nexus2.name },
                    3: { 0: griseo.name, 1: '3', 2: griseo.regular[1] },
                    4: { 0: griseo.regular[4] },
                    5: { 0: griseo.nexus1.name },
                    6: { 0: kevin.name, 1: '1', 2: kevin.regular[4] }
                }
            },
            notes: `<p>Kalpas</p>If can't get double signets, start with double Ego.`
        }
    }
}
// Prinzessin der Verurteilung
const fischl = {
    name: 'Prinzessin der Verurteilung',
    acr: 'fischl',
    rate: abstinence,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' }, 1: { 0: mobius, 1: '1' } },
                2: { 0: { 0: griseo, 1: '' }, 1: { 0: su, 1: '2' }, 2: { 0: kalpas, 1: '2' } }
            },
            emblem: {
                1: { 1: memory, 2: theLonelyMoon },
                2: { 1: forbiddenSeed, 2: fallingInPastLight },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: br } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Retrtibution', 1: start },
                    2: { 0: 'Midnight', 1: first },
                    3: { 0: 'Fate', 1: second },
                    4: { 0: 'Dark Wings', 1: no, 2: '2' },
                    5: { 0: 'Nightfall' }
                },
                1: {
                    1: { 0: hua.name, 1: '3', 2: hua.regular[6] },
                    2: { 0: hua.nexus2.name },
                    3: { 0: hua.nexus2[1] },
                    4: { 0: mobius.name, 1: '4', 2: mobius.regular[2] },
                    5: { 0: mobius.regular[5] },
                    6: { 0: mobius.nexus1.name, 1: '' },
                    7: { 0: mobius.nexus1[2], 1: '' }
                },
                2: {
                    1: { 0: griseo.name, 1: '5', 2: griseo.regular[1] },
                    2: { 0: griseo.regular[4] },
                    3: { 0: griseo.regular[6] },
                    4: { 0: griseo.nexus1.name, 1: '' },
                    5: { 0: griseo.nexus1[2], 1: '' },
                    6: { 0: su.name, 1: '4', 2: su.regular[1] },
                    7: { 0: su.regular[3] },
                    8: { 0: su.regular[5] },
                    9: { 0: su.nexus2.name },
                    10: { 0: kalpas.name, 1: '3', 2: kalpas.regular[1], 3: '' },
                    11: { 0: kalpas.regular[2], 1: '' },
                    12: { 0: kalpas.nexus2.name, 1: '' }
                }
            },
            notes: `<p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.<br><br>
                    <p>Kalpas</p>Only pick his signets after 12F.`
        }
    }
}
// Reveris Calico
const rvc = {
    name: 'Reverist Calico',
    acr: 'rc',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: eden, 1: '2' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: griseo, 1: '' }, 1: { 0: kalpas, 1: '2' }, 2: { 0: pardofelis, 1: '' } }
            },
            emblem: {
                1: { 1: goldGoblet, 2: dreamfulGold },
                2: { 1: memory, 2: fallingInPastLight },
                3: { 1: goodOldDays, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: hb} },
                2: { 1: { 1: ae }, 2: { 1: hb } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Cat\'s Eyes', 1: start, 2: '2' },
                    2: { 0: 'Hidden Claws' },
                    3: { 0: 'Nighteye', 1: first },
                    4: { 0: 'the Tailpiece', 1: second },
                    5: { 0: 'Phantasma', 1: reinforcement }
                },
                1: {
                    1: { 0: eden.name, 1: '5', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: eden.nexus2[2] },
                    5: { 0: eden.nexus2[3] },
                    6: { 0: hua.name, 1: '2', 2: hua.regular[6] },
                    7: { 0: hua.nexus2.name }
                },
                2: {
                    1: { 0: griseo.name, 1: '4', 2: griseo.regular[1] },
                    2: { 0: griseo.regular[4] },
                    3: { 0: griseo.regular[6] },
                    4: { 0: griseo.nexus1.name, 1: '' },
                    5: { 0: kalpas.name, 1: '3', 2: kalpas.regular[1] },
                    6: { 0: kalpas.regular[2] },
                    7: { 0: kalpas.nexus2.name },
                    8: { 0: pardofelis.name, 1: '5', 2: pardofelis.regular[1] },
                    9: { 0: pardofelis.regular[3], 1: '' },
                    10: { 0: pardofelis.regular[4] },
                    11: { 0: pardofelis.regular[6] },
                    12: { 0: pardofelis.nexus1.name }
                }
            },
            notes: `Can pick Kevin's signet <span>${kevin.regular[1]}</span> to supplement breach.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.<br><br>
                    <p>${pardofelis.regular[3]}</p>Buy early in shop.`
        }
    }
}
// Ritual Imayoh
const ri = {
    name: 'Ritual Imayoh',
    acr: 'ri',
    rate: inferno,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: mobius, 1: '1' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: su, 1: '2' }, 2: { 0: griseo, 1: '' } }
            },
            emblem: {
                1: { 1: forbiddenSeed, 2: theLonelyMoon },
                2: { 1: memory, 2: homeTown },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: vc }, 2: { 1: le } },
                2: { 1: { 1: vc }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Prosperity', 1: start },
                    2: { 0: 'Dawn', 1: first },
                    3: { 0: 'Blossom', 1: second },
                    4: { 0: 'Fertility', 1: no, 2: '2' },
                    5: { 0: 'Torch' }
                },
                1: {
                    1: { 0: mobius.name, 1: '3', 2: mobius.regular[2] },
                    2: { 0: mobius.regular[5] },
                    3: { 0: mobius.nexus1.name },
                    4: { 0: hua.name, 1: '2', 2: hua.regular[5], 3: '' },
                    5: { 0: hua.nexus2.name }
                },
                2: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: su.name, 1: '4', 2: su.regular[1] },
                    5: { 0: su.regular[3] },
                    6: { 0: su.regular[5] },
                    7: { 0: su.nexus2.name },
                    8: { 0: griseo.name, 1: '4', 2: griseo.regular[1] },
                    9: { 0: griseo.regular[4] },
                    10: { 0: griseo.regular[6] },
                    11: { 0: griseo.nexus1.name }
                }
            },
            notes: `<p>${hua.regular[5]}</p>Recommended to upgrade.`
        }
    }
}
// Silverwing N-EX
const sw = {
    name: 'Silverwing N-EX',
    acr: 'sw',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: su, 1: '2' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: lightAsABodhiLeaf, 2: outOfReach },
                2: { 1: memory, 2: homeTown },
                3: { 1: goodOldDays, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: vc } },
                2: { 1: { 1: ae }, 2: { 1: hb } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Phantom Plumes', 1: start },
                    2: { 0: 'Grey Falcon', 1: first },
                    3: { 0: 'Pale Feathers', 1: second, 2: '2' },
                    4: { 0: 'Silver Eagle' },
                    5: { 0: 'Sharp Eyes', 1: no }
                },
                1: {
                    1: { 0: su.name, 1: '2', 2: su.regular[2] },
                    2: { 0: su.regular[3] },
                    3: { 0: hua.name, 1: '2', 2: hua.regular[6], 3: '' },
                    4: { 0: hua.nexus2.name }
                },
                2: {
                    1: { 0: eden.name, 1: '4', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: eden.nexus2[3] },
                    5: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    6: { 0: griseo.regular[4] },
                    7: { 0: griseo.regular[6] },
                    8: { 0: griseo.nexus1.name, 1: '' },
                    9: { 0: griseo.nexus1[2], 1: '' },
                    10: { 0: aponia.name, 1: '4', 2: aponia.regular[1] },
                    11: { 0: aponia.regular[6] },
                    12: { 0: aponia.nexus1.name },
                    13: { 0: aponia.nexus1[1], 1: '' }
                }
            },
            notes: `<p>${hua.regular[6]}</p>Recommended to upgrade.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}, ${aponia.nexus1[1]}</p>If lacking breach.`
        }
    }
}
// Spina Astera
const spa = {
    name: 'Spina Astera',
    acr: 'spa',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' } },
                2: {  0: { 0: eden, 1: '2' }, 1: { 0: su, 1: '2' }, 2: { 0: griseo, 1: '' }, 3: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: memory, 2: becauseOfYou },
                2: { 1: goldGoblet, 2: dreamfulGold },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: ma } },
                2: { 1: { 1: ae }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Wild Flare', 1: start },
                    2: { 0: 'Star Quillon', 1: first },
                    3: { 0: 'Alrescha', 1: second, 2: '2' },
                    4: { 0: 'Radiant Formation' },
                    5: { 0: 'Holy Flame', 1: reinforcement }
                },
                1: {
                    1: { 0: hua.name, 1: '3', 2: hua.regular[6], 3: '' },
                    2: { 0: hua.nexus2.name },
                    3: { 0: hua.nexus2[1], 1: '' }
                },
                2: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: su.name, 1: '4', 2: su.regular[1] },
                    5: { 0: su.regular[3] },
                    6: { 0: su.regular[5] },
                    7: { 0: su.nexus2.name },
                    8: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    9: { 0: griseo.regular[4] },
                    10: { 0: griseo.regular[6] },
                    11: { 0: griseo.nexus1.name, 1: '' },
                    12: { 0: griseo.nexus1[2], 1: '' },
                    13: { 0: aponia.name, 1: '3', 2: aponia.regular[1] },
                    14: { 0: aponia.regular[4] },
                    15: { 0: aponia.nexus1.name }
                }
            },
            notes: `<p>Hua</p>If unable to get double signets, start with double Ego.<br><br>
                    <p>${hua.regular[6]}, ${hua.nexus2[1]}</p>Either upgrade <span>${hua.regular[6]}</span> or pick <span>${hua.nexus2[1]}</span>.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.<br><br>
                    <p>Aponia</p>If the shop has Kalpas signets, can pick Kalpas's nexus ${kalpas.nexus2.name}.`
        }
    }
}
// Starchasm Nyx
const nyx = {
    name: 'Starchasm Nyx',
    acr: 'nyx',
    rate: corruption,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: kevin, 1: '1' }, 1: { 0: sakura, 1: '1' } },
                2: { 0: { 0: eden, 1: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: su, 1: '2' } }
            },
            emblem: {
                1: { 1: forgetMeNot, 2: tsukimiHimiko },
                2: { 1: burden, 2: tsukimiHimiko },
                3: { 1: stainedSakura, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: hb } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Frigidity', 1: start },
                    2: { 0: 'Abyssal Gaze', 1: first },
                    3: { 0: 'Nightmare', 1: second, 2: '2' },
                    4: { 0: 'Toxic Bath' },
                    5: { 0: 'Cocoon Break', 1: no }
                },
                1: {
                    1: { 0: kevin.name, 1: '5', 2: kevin.regular[1] },
                    2: { 0: kevin.regular[6] },
                    3: { 0: kevin.nexus1.name },
                    4: { 0: kevin.nexus1[1] },
                    5: { 0: kevin.nexus1[2] },
                    6: { 0: sakura.name, 1: '3', 2: sakura.regular[5] },
                    7: { 0: sakura.regular[6] },
                    8: { 0: sakura.nexus1.name }
                },
                2: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: griseo.name, 1: '5', 2: griseo.regular[1] },
                    5: { 0: griseo.regular[4] },
                    6: { 0: griseo.regular[6] },
                    7: { 0: griseo.nexus1.name, 1: '' },
                    8: { 0: griseo.nexus1[2], 1: '' },
                    9: { 0: su.name, 1: '4', 2: su.regular[1] },
                    10: { 0: su.regular[3] },
                    11: { 0: su.regular[5] },
                    12: { 0: su.nexus2.name }
                }
            },
            notes: `<p>Sakura</p>If unable to get double signets, start with double Ego.<br><br
                    <p>${griseo.nexus1.name}</p>If picking HoD minion.<br><br>
                    <p>${griseo.nexus1[2]}</p>If lacking breach.`
        }
    }
}
// Stygian Nymph
const sn = {
    name: 'Stygian Nymph',
    acr: 'sn',
    rate: inferno,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: sakura, 1: '1' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: kosma, 1: '' }, 1: { 0: griseo, 1: '' }, 2: { 0: kalpas, 1: '1' } }
            },
            emblem: {
                1: { 1: forgetMeNot, 2: becauseOfYou },
                2: { 1: memory, 2: homeTown },
                3: { 1: stainedSakura, 2: tsukimiHimiko }
            },
            support: {
                1: { 1: { 1: sa }, 2: { 1: dp } },
                2: { 1: { 1: ss }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Vurnerable Duality', 1: start },
                    2: { 0: 'Union', 1: first },
                    3: { 0: 'Intergrowth', 1: second, 2: '3' },
                    4: { 0: 'Kindred' },
                    5: { 0: 'Might of Duality' }
                },
                1: {
                    1: { 0: sakura.name, 1: '3', 2: sakura.regular[3] },
                    2: { 0: sakura.regular[5] },
                    3: { 0: sakura.nexus1.name },
                    4: { 0: hua.name, 1: '2', 2: hua.regular[5], 3: '' },
                    5: { 0: hua.nexus2.name }
                },
                2: {
                    1: { 0: kosma.name, 1: '4', 2: kosma.regular[4] },
                    2: { 0: kosma.regular[5] },
                    3: { 0: kosma.regular[6] },
                    4: { 0: kosma.nexus1.name },
                    5: { 0: griseo.name, 1: '4', 2: griseo.regular[1] },
                    6: { 0: griseo.regular[2] },
                    7: { 0: griseo.regular[6] },
                    8: { 0: griseo.nexus1.name },
                    9: { 0: kalpas.name, 1: '2', 2: kalpas.regular[1] },
                    10: { 0: kalpas.regular[2] }
                }
            },
            notes: `Can pick Griseo's signet <span>${griseo.regular[6]}</span> for more damage.<br><br>
                    <p>Hua</p>Pick when there's not enough breach from Kevin signets.`
        }
    }
}
// Sweet 'n' Spicy
const carole = {
    name: 'Sweet \'n\' Spicy',
    acr: 'carole',
    rate: inferno,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: eden, 1: '2' } },
                2: { 0: { 0: kalpas, 1: '2' } },
                3: { 0: { 0: kevin, 1: '1' }, 1: { 0: griseo, 1: '' }, 2: { 0: aponia, 1: '' } }
            },
            emblem: {
                1: { 1: goldGoblet, 2: dreamfulGold },
                2: { 1: madKingsMask, 2: dreamfulGold },
                3: { 1: keyToTheDeep, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: ss }, 2: { 1: br } },
                2: { 1: { 1: ss }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Revolution', 1: start },
                    2: { 0: 'Skyfall', 1: first },
                    3: { 0: 'Brake', 1: no, 2: '3' },
                    4: { 0: 'Impulse' },
                    5: { 0: 'Rupture' }
                },
                1: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name }
                },
                2: {
                    1: { 0: kalpas.name, 1: '4', 2: kalpas.regular[1] },
                    2: { 0: kalpas.regular[2] },
                    3: { 0: kalpas.regular[5] },
                    4: { 0: kalpas.nexus2.name }
                },
                3: {
                    1: { 0: kevin.name, 1: '4', 2: kevin.regular[3] },
                    2: { 0: kevin.regular[4] },
                    3: { 0: kevin.regular[5] },
                    4: { 0: kevin.nexus1.name },
                    5: { 0: griseo.name, 1: '4', 2: griseo.regular[3] },
                    6: { 0: griseo.regular[4] },
                    7: { 0: griseo.regular[6] },
                    8: { 0: griseo.nexus1.name },
                    9: { 0: aponia.name, 1: '3', 2: aponia.regular[1] },
                    10: { 0: aponia.regular[4] },
                    11: { 0: aponia.nexus1.name }
                },
                
            }
        }
    }
}
// Twilight Paladin
const tp = {
    name: 'Twilight Paladin',
    acr: 'tp',
    rate: abstinence,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: su, 1: '2' }, 1: { 0: hua, 1: '2' } },
                2: { 0: { 0: eden, 2: '2' }, 1: { 0: griseo, 1: '' }, 2: { 0: mobius, 1: '1' } }
            },
            emblem: {
                1: { 1: lightAsABodhiLeaf, 2: theLonelyMoon },
                2: { 1: memory, 2: homeTown },
                3: { 1: resolve, 2: homeTown }
            },
            support: {
                1: { 1: { 1: sa }, 2: { 1: dp } },
                2: { 1: { 1: sa }, 2: { 1: br } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Penalty', 1: start },
                    2: { 0: 'Dusk', 1: first },
                    3: { 0: 'Banishment', 1: second, },
                    4: { 0: 'Radiance', 1: no, 2: '2' },
                    5: { 0: 'Sanction' }
                },
                1: {
                    1: { 0: su.name, 1: '4', 2: su.regular[1] },
                    2: { 0: su.regular[2], 1: '' },
                    3: { 0: su.regular[3] },
                    4: { 0: su.regular[6] },
                    5: { 0: hua.name, 1: '2', 2: hua.regular[2] },
                    6: { 0: hua.regular[4] }
                },
                2: {
                    1: { 0: eden.name, 1: '3', 2: eden.regular[2] },
                    2: { 0: eden.regular[3] },
                    3: { 0: eden.nexus2.name },
                    4: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    5: { 0: griseo.regular[4] },
                    6: { 0: griseo.regular[6] },
                    7: { 0: griseo.nexus1.name, 1: '' },
                    8: { 0: griseo.nexus1[2], 1: '' },
                    9: { 0: mobius.name, 1: '3', 2: mobius.regular[3] },
                    10: { 0: mobius.regular[5] },
                    11: { 0: mobius.nexus1.name }
                }
            },
            notes: `<p>${su.regular[2]}</p>Priority.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.<br><br>
                    <p>Mobius</p>Can equip Siegfried M to reduce cross cooldown.`
        }
    }
}
// Valkyrie Bladestrike
const stfu = {
    name: 'Valkyrie Bladestrike',
    acr: 'stfu',
    rate: abstinence,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: eden, 1: '2' } },
                2: { 0: { 0: kevin, 1: '1' } },
                3: { 0: { 0: su, 1: '2' }, 1: { 0: sakura, 1: '2' }, 2: { 0: griseo, 1: '' } }
            },
            emblem: {
                1: { 1: goldGoblet, 2: dreamfulGold },
                2: { 1: burden, 2: homeTown },
                3: { 1: heavyAsAMillionLives, 2: dreamfulGold }
            },
            support: {
                1: { 1: { 1: vc }, 2: { 1: le } },
                2: { 1: { 1: vc }, 2: { 1: ss } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Current', 1: start },
                    2: { 0: 'Karma', 1: first },
                    3: { 0: 'Idea', 1: second, 2: '2' },
                    4: { 0: 'Thunder' },
                    5: { 0: 'Zanshin', 1: no }
                },
                1: {
                    1: { 0: eden.name, 1: '5', 2: eden.regular[1] },
                    2: { 0: eden.regular[2] },
                    3: { 0: eden.regular[3] },
                    4: { 0: eden.regular[6] },
                    5: { 0: eden.nexus2.name }
                },
                2: {
                    1: { 0: kevin.name, 1: '4', 2: kevin.regular[4] },
                    2: { 0: kevin.regular[6] },
                    3: { 0: kevin.nexus1.name },
                    4: { 0: kevin.nexus1[1] }
                },
                3: {
                    1: { 0: su.name, 1: '3', 2: su.regular[1] },
                    2: { 0: su.regular[3] },
                    3: { 0: su.regular[5] },
                    4: { 0: sakura.name, 1: '2', 2: sakura.regular[5] },
                    5: { 0: sakura.nexus2.name },
                    6: { 0: griseo.name, 1: '5', 2: griseo.regular[3] },
                    7: { 0: griseo.regular[4] },
                    8: { 0: griseo.regular[6] },
                    9: { 0: griseo.nexus1.name, 1: '' },
                    10: { 0: griseo.nexus1[2], 1: '' }
                },
                
            },
            notes: `If there's a Normal Signet of Deliverance +2 stage effect, start with Kevin sigents.<br><br>
                    <p>${griseo.nexus1.name}, ${griseo.nexus1[2]}</p>If lacking breach.`
        }
    }
}
// Valkyrie Gloria
const vg = {
    name: 'Valkyrie Gloria',
    acr: 'vg',
    rate: inferno,
    builds: {
        0: {
            signet: {
                1: { 0: { 0: hua, 1: '2' }, 1: { 0: kalpas, 1: '1' } },
                2: { 0: { 0: vv, 1: '' }, 1: { 0: griseo, 1: '' }, 2: { 0: eden, 1: '2' } }
            },
            emblem: {
                1: { 1: memory, 2: theLonelyMoon },
                2: { 1: madKingsMask, 2: becauseOfYou },
                3: { 1: keyToTheDeep, 2: fallingInPastLight }
            },
            support: {
                1: { 1: { 1: ae }, 2: { 1: le } },
                2: { 1: { 1: ae }, 2: { 1: br, 2: ma } }
            },
            signetTable: {
                0: {
                    1: { 0: 'Gloria', 1: start },
                    2: { 0: 'Battle Song', 1: first },
                    3: { 0: 'Triumph', 1: second },
                    4: { 0: 'Impetus', 1: no, 2: '2' },
                    5: { 0: 'Sol' }
                },
                1: {
                    1: { 0: hua.name, 1: '2', 2: hua.regular[6] },
                    2: { 0: hua.nexus2.name },
                    3: { 0: kalpas.name, 1: '3', 2: kalpas.regular[1] },
                    4: { 0: kalpas.regular[2] },
                    5: { 0: kalpas.nexus1.name }
                },
                2: {
                    1: { 0: vv.name, 1: '3', 2: vv.regular[2] },
                    2: { 0: vv.regular[6] },
                    3: { 0: vv.nexus1.name },
                    4: { 0: griseo.name, 1: '4', 2: griseo.regular[1] },
                    5: { 0: griseo.regular[4] },
                    6: { 0: griseo.regular[6] },
                    7: { 0: griseo.nexus1.name },
                    8: { 0: eden.name, 1: '4', 2: eden.regular[2] },
                    9: { 0: eden.regular[3] },
                    10: { 0: eden.regular[6] },
                    11: { 0: eden.nexus2.name }
                }
            }
        }
    }
}
const valks = [aka, bkek, da, dpe, fr, gd, hofs, hor, hos, hot, mobi, lk,
               raven, elysia, pe, fischl, rvc, ri, sw, spa, nyx, sn,
               carole, tp, stfu, vg];
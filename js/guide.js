// Argent Knight: Artemis
const aka = {
    name: 'Argent Knight: Artemis',
    acr: 'aka',
    builds: {
        0: {
            signet: { 1: eden, 2: kevin, 3: mobius },
            signetPr: { 1: '2', 2: '2', 3: '1' },
            emblem: {
                1: forbiddenSeed, // early
                2: `${burden} / ${forbiddenSeed}`, // mid
                3: homeLost // late
            },
            // early | mid | late supports
            // 3 for 3rd column, support 1
            // 4 for 4th column, support 2
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: bke, 3: br },
            signetTable: {
                // 0 - elysian signets, 1-3 - regular signets
                // respective order from signet Object
                0: {
                    1: { name: 'Winter Harvest', pr: start },
                    2: { name: 'Stellar Trials', pr: first },
                    3: { name: 'Cold Moon', pr: second },
                    4: { name: 'Frost Scythe', pr: filler },
                    5: { name: 'Uranian Mirror', pr: filler }
                },
                1: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: second },
                    4: { name: eden.regular[6], pr: filler },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second },
                    9: { name: eden.nexus2[1], pr: filler, rowspan: '2' },
                    10: { name: eden.nexus2[3] }
                },
                2: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2'  },
                    4: { name: kevin.regular[6] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus2.name },
                    8: { name: kevin.nexus2[3], pr: first },
                    9: { name: kevin.nexus2[1], pr: second, rowspan: '2' },
                    10: { name: kevin.nexus2[2] }
                },
                3: {
                    1: { name: mobius.regular[4] , pr: first },
                    2: { name: mobius.regular[2], pr: second, rowspan: '2' },
                    3: { name: mobius.regular[3] },
                    4: { name: mobius.regular[1], pr: filler, rowspan: '3' },
                    5: { name: mobius.regular[5]},
                    6: { name: mobius.regular[6] },
                    7: { name: mobius.nexus1.name },
                    8: { name: mobius.nexus1[1], pr: first },
                    9: { name: mobius.nexus1[3], pr: second },
                    10: { name: mobius.nexus1[2], pr: no }
                }
            }
        }
    }
}
// Bright Knight: Excelsis
const bkek = {
    name: 'Bright Knight: Excelsis',
    acr: 'bke',
    builds: {
        0: {
            signet: { 1: sakura , 2: su , 3: eden },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: forgetMeNot,
                2: `${forgetMeNot} / ${lightAsABodhiLeaf}`,
                3: stainedSakura
            },
            3: { 1: le, 2: le, 3: br },
            4: { 1: vc, 2: vc, 3: ss },
            signetTable: {
                0: {
                    1: { name: 'Gambit', pr: start },
                    2: { name: 'Glory', pr: first },
                    3: { name: 'Paragon', pr: second },
                    4: { name: 'Formation', pr: no, rowspan: '2' },
                    5: { name: 'Holy Lance' }
                },
                1: {
                    1: { name: sakura.regular[1], pr: first, rowspan: '2' },
                    2: { name: sakura.regular[3] },
                    3: { name: sakura.regular[2], pr: second, rowspan: '2'  },
                    4: { name: sakura.regular[5] },
                    5: { name: sakura.regular[4], pr: no, rowspan: '2' },
                    6: { name: sakura.regular[6] },
                    7: { name: sakura.nexus1.name },
                    8: { name: sakura.nexus1[1], pr: filler },
                    9: { name: sakura.nexus1[3], pr: no, rowspan: '2' },
                    10: { name: sakura.nexus1[2] }
                },
                2: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler },
                    6: { name: su.regular[4], pr: no },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: su.nexus1[2] }
                },
                3: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: second },
                    4: { name: eden.regular[6], pr: filler },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name, pr: second, rowspan: '2' },
                    8: { name: eden.nexus2[2] },
                    9: { name: eden.nexus2[1], pr: filler },
                    10: { name: eden.nexus2[3], pr: no }
                }
            }
        }
    }
}
// Dea Anchora
const da = {
    name: 'Dea Anchora',
    acr: 'da',
    builds: {
        0: {
            signet: { 1: kevin, 2: eden, 3: su },
            signetPr: { 1: '1', 2: '2', 3: '2' },
            emblem: {
                1: burden,
                2: `${burden} / ${goldGoblet}`,
                3: homeLost
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: bke, 3: br  },
            signetTable: {
                0: {
                    1: { name: 'Star', pr: start },
                    2: { name: 'Sheen', pr: first },
                    3: { name: 'Halo', pr: second },
                    4: { name: 'Brilliance', pr: filler, rowspan: '2' },
                    5: { name: 'Gale' }
                },
                1: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[6] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2'  },
                    4: { name: kevin.regular[3] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus2.name },
                    8: { name: kevin.nexus2[1], pr: first },
                    9: { name: kevin.nexus2[2], pr: no, rowspan: '2' },
                    10: { name: kevin.nexus2[3] }
				},
                2: {
                    1: { name: eden.regular[2], pr: first },
                    2: { name: eden.regular[3], pr: second, rowspan: '2' },
                    3: { name: eden.regular[6] },
                    4: { name: eden.regular[4], pr: filler, rowspan: '2' },
                    5: { name: eden.regular[5] },
                    6: { name: eden.regular[1], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second, rowspan: '2' },
                    9: { name: eden.nexus2[3] },
                    10: { name: eden.nexus2[1], pr: filler }
                },
                3: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: no, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus2.name },
                    8: { name: su.nexus2[1], pr: first, rowspan: '2' },
                    9: { name: su.nexus2[3] },
                    10: { name: su.nexus2[2], pr: filler }
                }
            }
        }
    }
}
// Herrscher of Flamescion
const hofs = {
    name: 'Herrscher of Flamescion',
    acr: 'hofs',
    builds: {
        0: {
            signet: { 1: kalpas, 2: hua, 3: sakura },
            signetPr: { 1: '1', 2: '1', 3: '1' },
            emblem: {
                1: madKingsMask,
                2: `${forgetMeNot} / ${madKingsMask}`,
                3: resolve
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: br, 2: bke, 3: br },
            signetTable: {
                0: {
                    1: { name: 'Heatflow', pr: start },
                    2: { name: 'Abyssal Reburn', pr: first },
                    3: { name: 'Tempered Warrior', pr: second },
                    4: { name: 'Flamescion', pr: filler, rowspan: '2' },
                    5: { name: 'Starfire' }
                },
                1: {
                    1: { name: kalpas.regular[1], pr: first, rowspan: '2' },
                    2: { name: kalpas.regular[2] },
                    3: { name: kalpas.regular[3], pr: second, rowspan: '2' },
                    4: { name: kalpas.regular[6] },
                    5: { name: kalpas.regular[4], pr: filler },
                    6: { name: kalpas.regular[5], pr: no },
                    7: { name: kalpas.nexus1.name },
                    8: { name: kalpas.nexus1[2], pr: first },
                    9: { name: kalpas.nexus1[3], pr: second },
                    10: { name: kalpas.nexus1[1], pr: filler }
				},
                2: {
                    1: { name: hua.regular[6], pr: first },
                    2: { name: hua.regular[1], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[4], pr: filler },
                    5: { name: hua.regular[2], pr: no, rowspan: '2' },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus1.name },
                    8: { name: hua.nexus1[3], pr: first },
                    9: { name: hua.nexus1[1], pr: filler },
                    10: { name: hua.nexus1[2], pr: no }
                },
                3: {
                    1: { name: sakura.regular[5], pr: first, rowspan: '2' },
                    2: { name: sakura.regular[4] },
                    3: { name: sakura.regular[2], pr: second },
                    4: { name: sakura.regular[3], pr: filler },
                    5: { name: sakura.regular[1], pr: no, rowspan: '2' },
                    6: { name: sakura.regular[6] },
                    7: { name: sakura.nexus1.name },
                    8: { name: sakura.nexus1[2], pr: second },
                    9: { name: sakura.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: sakura.nexus1[3] }
                }
            }
        }
    }
}
// Herrscher of Reason
const hor = {
    name: 'Herrscher of Reason',
    acr: 'hor',
    builds: {
        0: {
            signet: { 1: sakura, 2: kevin, 3: hua },
            signetPr: { 1: '1', 2: '2', 3: '2' },
            emblem: {
                1: burden,
                2: `${forgetMeNot} / ${memory}`,
                3: homeLost
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: le, 3: le },
            signetTable: {
                0: {
                    1: { name: 'Wisdom', pr: start },
                    2: { name: 'Truth', pr: first },
                    3: { name: 'Inspiration', pr: second, rowspan: '2' },
                    4: { name: 'Reason' },
                    5: { name: 'Creation', pr: filler }
                },
                1: {
                    1: { name: sakura.regular[3], pr: first, rowspan: '2' },
                    2: { name: sakura.regular[5] },
                    3: { name: sakura.regular[2], pr: second, rowspan: '2' },
                    4: { name: sakura.regular[4] },
                    5: { name: sakura.regular[1], pr: filler },
                    6: { name: sakura.regular[6], pr: no },
                    7: { name: sakura.nexus1.name },
                    8: { name: sakura.nexus1[2], pr: second },
                    9: { name: sakura.nexus1[1], pr: filler },
                    10: { name: sakura.nexus1[3], pr: no }
				},
                2: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2'  },
                    4: { name: kevin.regular[6] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus2.name },
                    8: { name: kevin.nexus2[3], pr: first },
                    9: { name: kevin.nexus2[1], pr: second, rowspan: '2' },
                    10: { name: kevin.nexus2[2] }
                },
                3: {
                    1: { name: hua.regular[3], pr: first, rowspan: '2' },
                    2: { name: hua.regular[6] },
                    3: { name: hua.regular[1], pr: second },
                    4: { name: hua.regular[2], pr: no, rowspan: '3' },
                    5: { name: hua.regular[4] },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus2.name },
                    8: { name: hua.nexus2[1], pr: first },
                    9: { name: hua.nexus2[2], pr: no, rowspan: '2' },
                    10: { name: hua.nexus2[3] }
                }
            }
        }
    }
}
// Herrscher of Sentience
const hos = {
    name: 'Herrscher of Sentience',
    acr: 'hos',
    builds: {
        0: {
            signet: { 1: su, 2: kevin, 3: eden },
            signetPr: { 1: '1', 2: '2', 3: '2' },
            emblem: {
                1: lightAsABodhiLeaf,
                2: burden,
                3: homeLost
            },
            3: { 1: br, 2: bke, 3: br },
            4: { 1: le, 2: br, 3: ss },
            signetTable: {
                0: {
                    1: { name: 'Victory', pr: start },
                    2: { name: 'Supremacy', pr: first },
                    3: { name: 'Dark Plumes', pr: second },
                    4: { name: 'Ego', pr: filler, rowspan: '2' },
                    5: { name: 'Legion' }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler },
                    6: { name: su.regular[4], pr: no },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: su.nexus1[2] }
				},
                2: {
                    1: { name: kevin.regular[5], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[4], pr: second },
                    4: { name: kevin.regular[6], pr: filler},
                    5: { name: kevin.regular[1], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[2] },
                    7: { name: kevin.nexus2.name },
                    8: { name: kevin.nexus2[3], pr: first },
                    9: { name: kevin.nexus2[1], pr: second, rowspan: '2' },
                    10: { name: kevin.nexus2[2] }
                },
                3: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: second },
                    4: { name: eden.regular[6], pr: filler },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: filler, rowspan: '2'  },
                    9: { name: eden.nexus2[3] },
                    10: { name: eden.nexus2[1], pr: no }
                }
            }
        }
    }
}
// Herrscher of Thunder
const hot = {
    name: 'Herrscher of Thunder',
    acr: 'hot',
    builds: {
        0: {
            signet: { 1: hua, 2: eden, 3: su },
            signetPr: { 1: '1', 2: '1', 3: '1' },
            emblem: {
                1: `${goldGoblet} / ${memory}`,
                2: `${lightAsABodhiLeaf} / ${memory}`,
                3: resolve
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: br, 2: bke, 3: br },
            signetTable: {
                0: {
                    1: { name: 'Tsukuyomi', pr: start },
                    2: { name: 'Hazy Moon', pr: first },
                    3: { name: 'Divine Penalty', pr: filler, rowspan: '3' },
                    4: { name: 'Mitama' },
                    5: { name: 'Narukami' }
                },
                1: {
                    1: { name: hua.regular[3], pr: first, rowspan: '2' },
                    2: { name: hua.regular[6] },
                    3: { name: hua.regular[1], pr: second },
                    4: { name: hua.regular[4], pr: no, rowspan: '3' },
                    5: { name: hua.regular[2] },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus1.name },
                    8: { name: hua.nexus1[1], pr: first, pr: '2' },
                    9: { name: hua.nexus1[3] },
                    10: { name: hua.nexus1[2], pr: second }
				},
                2: {
                    1: { name: eden.regular[3], pr: first },
                    2: { name: eden.regular[2], pr: second },
                    3: { name: eden.regular[5], pr: filler, rowspan: '2' },
                    4: { name: eden.regular[6] },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[4] },
                    7: { name: eden.nexus1.name },
                    8: { name: eden.nexus1[1], pr: filler, rowspan: '3' },
                    9: { name: eden.nexus1[2] },
                    10: { name: eden.nexus1[3] }
                },
                3: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler },
                    6: { name: su.regular[4], pr: no },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: filler, rowspan: '2' },
                    10: { name: su.nexus1[2] }
                }
            }
        }
    }
}
// Infinite Ouroboros
const mobi = {
    name: 'Infinite Ouroboros',
    acr: 'mobius',
    builds: {
        0: {
            signet: { 1: mobius, 2: kevin, 3: eden },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: forbiddenSeed,
                2: burden,
                3: homeLost
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: bke, 3: le },
            signetTable: {
                0: {
                    1: { name: 'Ascension', pr: start, rowspan: '2' },
                    2: { name: 'Ill Fortune' },
                    3: { name: 'Dark Assault', pr: first },
                    4: { name: 'Ravenousness', pr: filler },
                    5: { name: 'Mirage', pr: no }
                },
                1: {
                    1: { name: mobius.regular[4], pr: first },
                    2: { name: mobius.regular[1], pr: second, rowspan: '2' },
                    3: { name: mobius.regular[3] },
                    4: { name: mobius.regular[5], pr: filler, rowspan: '2' },
                    5: { name: mobius.regular[2] },
                    6: { name: mobius.regular[6], pr: no },
                    7: { name: mobius.nexus1.name },
                    8: { name: mobius.nexus1[1], pr: first, rowspan: '2' },
                    9: { name: mobius.nexus1[3] },
                    10: { name: mobius.nexus1[2], pr: no }
				},
                2: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '3' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[6]  },
                    4: { name: kevin.regular[2], pr: second },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[2], pr: first },
                    9: { name: kevin.nexus1[1], pr: second },
                    10: { name: kevin.nexus1[3], pr: no }
                },
                3: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: filler, rowspan: '2' },
                    4: { name: eden.regular[6] },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: first },
                    9: { name: eden.nexus2[1], pr: filler, rowspan: '2' },
                    10: { name: eden.nexus2[3] }
                }
            }
        }
    }
}
// Luna Kindred
const lk = {
    name: 'Luna Kindred',
    acr: 'lk',
    builds: {
        0: {
            signet: { 1: su, 2: kalpas, 3: mobius },
            signetPr: { 1: '2', 2: '1', 3: '1' },
            emblem: {
                1: madKingsMask,
                2: `${madKingsMask} / ${lightAsABodhiLeaf}`,
                3: heavyAsAMillionLives
            },
            3: { 1: br, 2: br, 3: br },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Penumbra', pr: start },
                    2: { name: 'Imprint', pr: first },
                    3: { name: 'Blood Feast', pr: second },
                    4: { name: 'Immortality', pr: filler, rowspan: '2' },
                    5: { name: 'Thirst' }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler },
                    6: { name: su.regular[4], pr: no },
                    7: { name: su.nexus2.name },
                    8: { name: su.nexus2[1], pr: first, rowspan: '2' },
                    9: { name: su.nexus2[3] },
                    10: { name: su.nexus2[2], pr: second }
				},
                2: {
                    1: { name: kalpas.regular[1], pr: first, rowspan: '2' },
                    2: { name: kalpas.regular[3] },
                    3: { name: kalpas.regular[3], pr: second, rowspan: '2' },
                    4: { name: kalpas.regular[6] },
                    5: { name: kalpas.regular[5], pr: filler },
                    6: { name: kalpas.regular[4], pr: no },
                    7: { name: kalpas.nexus1.name },
                    8: { name: kalpas.nexus1[2], pr: first },
                    9: { name: kalpas.nexus1[3], pr: second },
                    10: { name: kalpas.nexus1[1], pr: no }
                },
                3: {
                    1: { name: mobius.regular[4], pr: first, rowspan: '2' },
                    2: { name: mobius.regular[5] },
                    3: { name: mobius.regular[2], pr: second },
                    4: { name: mobius.regular[1], pr: filler, rowspan: '3' },
                    5: { name: mobius.regular[3] },
                    6: { name: mobius.regular[6] },
                    7: { name: mobius.nexus1.name },
                    8: { name: mobius.nexus1[1], pr: first },
                    9: { name: mobius.nexus1[3], pr: second },
                    10: { name: mobius.nexus1[2], pr: filler }
                }
            }
        }
    }
}
// Midnight Absinthe
const raven = {
    name: 'Midnight Absinthe',
    acr: 'raven',
    builds: {
        0: {
            signet: { 1: kevin, 2: hua, 3: eden },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: burden,
                2: `${burden} / ${memory}`,
                3: resolve
            },
            3: { 1: le, 2: bke, 3: ae },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Ominous Mist', pr: start },
                    2: { name: 'Arrowhead', pr: first },
                    3: { name: 'Wild Hunt', pr: second },
                    4: { name: 'Raven Plume', pr: filler, rowspan: '2' },
                    5: { name: 'Suppression' }
                },
                1: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2'  },
                    4: { name: kevin.regular[6] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[3], pr: first },
                    9: { name: kevin.nexus1[1], pr: second, rowspan: '2' },
                    10: { name: kevin.nexus1[2] }
				},
                2: {
                    1: { name: hua.regular[6], pr: first },
                    2: { name: hua.regular[1], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[4], pr: filler },
                    5: { name: hua.regular[2], pr: no, rowspan: '2' },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus1.name },
                    8: { name: hua.nexus1[3], pr: first },
                    9: { name: hua.nexus1[1], pr: second },
                    10: { name: hua.nexus1[2], pr: filler }
                },
                3: {
                    1: { name: eden.regular[3], pr: first, rowspan: '2' },
                    2: { name: eden.regular[6] },
                    3: { name: eden.regular[2], pr: second, rowspan: '2' },
                    4: { name: eden.regular[4] },
                    5: { name: eden.regular[1], pr: filler, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second, rowspan: '2' },
                    9: { name: eden.nexus2[3] },
                    10: { name: eden.nexus2[1], pr: filler }
                }
            }
        }
    }
}
// Miss Pink Elf
const elysia = {
    name: 'Miss Pink Elf',
    acr: 'elysia',
    builds: {
        0: {
            signet: { 1: su, 2: eden, 3: kevin },
            signetPr: { 1: '2', 2: '2', 3: '2' },
            emblem: {
                1: lightAsABodhiLeaf,
                2: `${burden} / ${lightAsABodhiLeaf}`,
                3: homeLost
            },
            3: { 1: le, 2: bke, 3: ss },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Purity', pr: start, rowspan: '2' },
                    2: { name: 'Zenith' },
                    3: { name: 'Beauty', pr: second },
                    4: { name: 'Benevolence', pr: filler, rowspan: '2' },
                    5: { name: 'Love' }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[1], pr: first, rowspan: '2' },
                    9: { name: su.nexus1[3] },
                    10: { name: su.nexus1[2], pr: second }
				},
                2: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[1], pr: filler, rowspan: '2' },
                    4: { name: eden.regular[4] },
                    5: { name: eden.regular[5], pr: no, rowspan: '2' },
                    6: { name: eden.regular[6] },
                    7: { name: eden.nexus2.name, pr: no },
                    8: { name: eden.nexus2[3], pr: filler },
                    9: { name: eden.nexus2[2], pr: no, rowspan: '2' },
                    10: { name: eden.nexus2[1] }
                },
                3: {
                    1: { name: kevin.regular[4], pr: first },
                    2: { name: kevin.regular[3], pr: second, rowspan: '2' },
                    3: { name: kevin.regular[5] },
                    4: { name: kevin.regular[6], pr: filler },
                    5: { name: kevin.regular[1], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[2] },
                    7: { name: kevin.nexus2.name },
                    8: { name: kevin.nexus2[3], pr: first },
                    9: { name: kevin.nexus2[1], pr: second, rowspan: '2' },
                    10: { name: kevin.nexus2[2] }
                }
            }
        }
    }
}
// Palatinus Equinox
const pe = {
    name: 'Palatinus Equinox',
    acr: 'pe',
    builds: {
        0: {
            signet: { 1: su, 2: sakura, 3: kalpas },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: madKingsMask,
                2: `${forgetMeNot} / ${lightAsABodhiLeaf}`,
                3: `${homeLost} / ${stainedSakura}`,
            },
            3: { 1: br, 2: bke, 3: br },
            4: { 1: vc, 2: vc, 3: ss },
            signetTable: {
                0: {
                    1: { name: 'Gallop', pr: start },
                    2: { name: 'Abyssal Chant', pr: first },
                    3: { name: 'Equinox', pr: second },
                    4: { name: 'Commitment', pr: filler, rowspan: '2' },
                    5: { name: 'Exodus' }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: no, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: su.nexus1[2] }
				},
                2: {
                    1: { name: sakura.regular[3], pr: first, rowspan: '2' },
                    2: { name: sakura.regular[5] },
                    3: { name: sakura.regular[1], pr: second, rowspan: '2' },
                    4: { name: sakura.regular[2] },
                    5: { name: sakura.regular[4], pr: no, rowspan: '2' },
                    6: { name: sakura.regular[6] },
                    7: { name: sakura.nexus1.name },
                    8: { name: sakura.nexus1[1], pr: second },
                    9: { name: sakura.nexus1[2], pr: no, rowspan: '2' },
                    10: { name: sakura.nexus1[3] }
                },
                3: {
                    1: { name: kalpas.regular[1], pr: first, rowspan: '2' },
                    2: { name: kalpas.regular[2] },
                    3: { name: kalpas.regular[3], pr: second, rowspan: '2' },
                    4: { name: kalpas.regular[6] },
                    5: { name: kalpas.regular[4], pr: filler },
                    6: { name: kalpas.regular[5], pr: no },
                    7: { name: kalpas.nexus2.name },
                    8: { name: kalpas.nexus2[3], pr: first },
                    9: { name: kalpas.nexus2[1], pr: filler },
                    10: { name: kalpas.nexus2[2], pr: no }
                }
            }
        }
    }
}
// Prinzessin der Verurteilung
const fischl = {
    name: 'Prinzessin der Verurteilung',
    acr: 'fischl',
    builds: {
        0: {
            signet: { 1: su, 2: eden, 3: kevin },
            signetPr: { 1: '2', 2: '2', 3: '2' },
            emblem: {
                1: burden,
                2: lightAsABodhiLeaf,
                3: homeLost
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: bke, 3: le },
            signetTable: {
                0: {
                    1: { name: 'Retrtibution', pr: start },
                    2: { name: 'Midnight', pr: first },
                    3: { name: 'Fate', pr: second },
                    4: { name: 'Dark Wings', pr: filler, rowspan: '2' },
                    5: { name: 'Nightfall' }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus2.name },
                    8: { name: su.nexus2[1], pr: first, rowspan: '2' },
                    9: { name: su.nexus2[3] },
                    10: { name: su.nexus2[2], pr: second }
				},
                2: {
                    1: { name: eden.regular[2], pr: first },
                    2: { name: eden.regular[3], pr: second, rowspan: '2' },
                    3: { name: eden.regular[6] },
                    4: { name: eden.regular[4], pr: filler, rowspan: '2' },
                    5: { name: eden.regular[5] },
                    6: { name: eden.regular[1], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second },
                    9: { name: eden.nexus2[3], pr: filler },
                    10: { name: eden.nexus2[1], pr: no }
                },
                3: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2' },
                    4: { name: kevin.regular[6] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus2.name },
                    8: { name: kevin.nexus2[1], pr: first },
                    9: { name: kevin.nexus2[3], pr: second, rowspan: '2' },
                    10: { name: kevin.nexus2[2] }
                }
            }
        }
    }
}
// Ritual Imayoh
const ri = {
    name: 'Ritual Imayoh',
    acr: 'ri',
    builds: {
        0: {
            signet: { 1: eden, 2: kevin, 3: hua },
            signetPr: { 1: '2', 2: '1', 3: '2' },
            emblem: {
                1: `${memory} / ${burden}`,
                2: resolve,
                3: resolve
            },
            3: { 1: le, 2: bke, 3: le },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Prosperity', pr: start },
                    2: { name: 'Dawn', pr: first },
                    3: { name: 'Torch', pr: second },
                    4: { name: 'Blossom', pr: filler, rowspan: '2' },
                    5: { name: 'Fertility' }
                },
                1: {
                    1: { name: eden.regular[5], pr: first, rowspan: '2' },
                    2: { name: eden.regular[6] },
                    3: { name: eden.regular[2], pr: second, rowspan: '2' },
                    4: { name: eden.regular[3] },
                    5: { name: eden.regular[4], pr: filler },
                    6: { name: eden.regular[1], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second },
                    9: { name: eden.nexus2[3], pr: filler },
                    10: { name: eden.nexus2[1], pr: no }
				},
                2: {
                    1: { name: kevin.regular[4], pr: first },
                    2: { name: kevin.regular[3], pr: second, rowspan: '2' },
                    3: { name: kevin.regular[5] },
                    4: { name: kevin.regular[6], pr: filler },
                    5: { name: kevin.regular[1], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[2] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[3], pr: first },
                    9: { name: kevin.nexus1[1], pr: second },
                    10: { name: kevin.nexus1[2], pr: no }
                },
                3: {
                    1: { name: hua.regular[5], pr: first },
                    2: { name: hua.regular[2], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[4], pr: filler },
                    5: { name: hua.regular[1], pr: no, rowspan: '2' },
                    6: { name: hua.regular[6] },
                    7: { name: hua.nexus1.name },
                    8: { name: hua.nexus1[3], pr: first },
                    9: { name: hua.nexus1[1], pr: second },
                    10: { name: hua.nexus1[2], pr: filler }
                }
            }
        }
    }
}
// Silverwing N-EX
const sw = {
    name: 'Silverwing N-EX',
    acr: 'sw',
    builds: {
        0: {
            signet: { 1: su, 2: hua, 3: eden },
            signetPr: { 1: '2', 2: '2', 3: '2' },
            emblem: {
                1: lightAsABodhiLeaf,
                2: `${memory} / ${goldGoblet}`,
                3: `${heavyAsAMillionLives} / ${homeLost}`,
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: vc, 2: bke, 3: br },
            signetTable: {
                0: {
                    1: { name: 'Pale Feathers', pr: start },
                    2: { name: 'Grey Falcon', pr: first },
                    3: { name: 'Phantom Plumes', pr: second },
                    4: { name: 'Sharp Eyes', pr: filler },
                    5: { name: 'Silver Eagle', pr: no }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '3' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5] },
                    4: { name: su.regular[6], pr: second, rowspan: '2' },
                    5: { name: su.regular[2] },
                    6: { name: su.regular[4], pr: no },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: su.nexus1[2] }
				},
                2: {
                    1: { name: hua.regular[6], pr: first },
                    2: { name: hua.regular[1], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[4], pr: filler },
                    5: { name: hua.regular[2], pr: no, rowspan: '2' },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus2.name },
                    8: { name: hua.nexus2[1], pr: first },
                    9: { name: hua.nexus2[3], pr: filler },
                    10: { name: hua.nexus2[2], pr: no }
                },
                3: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: second, rowspan: '2' },
                    4: { name: eden.regular[6] },
                    5: { name: eden.regular[1], pr: filler },
                    6: { name: eden.regular[5], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[3], pr: first},
                    9: { name: eden.nexus2[2], pr: filler },
                    10: { name: eden.nexus2[1], pr: no }
                }
            }
        }
    }
}
// Spina Astera
const spa = {
    name: 'Spina Astera',
    acr: 'spa',
    builds: {
        0: {
            signet: { 1: su, 2: hua, 3: eden },
            signetPr: { 1: '2', 2: '2', 3: '2' },
            emblem: {
                1: memory,
                2: lightAsABodhiLeaf,
                3: `${goldGoblet} / ${homeLost}`,
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: vc, 2: bke, 3: br },
            signetTable: {
                0: {
                    1: { name: 'Wild Flare', pr: start },
                    2: { name: 'Radiant Formation', pr: first },
                    3: { name: 'Alrescha', pr: second, rowspan: '2' },
                    4: { name: 'Star Quillon' },
                    5: { name: 'Holy Flame', pr: filler }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[2], pr: second, rowspan: '3' },
                    4: { name: su.regular[5] },
                    5: { name: su.regular[6] },
                    6: { name: su.regular[4], pr: filler },
                    7: { name: su.nexus2.name },
                    8: { name: su.nexus2[3], pr: second, rowspan: '2' },
                    9: { name: su.nexus2[1] },
                    10: { name: su.nexus2[2], pr: filler }
				},
                2: {
                    1: { name: hua.regular[6], pr: first },
                    2: { name: hua.regular[1], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[4], pr: filler },
                    5: { name: hua.regular[2], pr: no, rowspan: '2' },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus2.name },
                    8: { name: hua.nexus2[1], pr: first },
                    9: { name: hua.nexus2[2], pr: filler, rowspan: '2' },
                    10: { name: hua.nexus2[3] }
                },
                3: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: second },
                    4: { name: eden.regular[6], pr: filler, rowspan: '2' },
                    5: { name: eden.regular[5] },
                    6: { name: eden.regular[1], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second, rowspan: '2' },
                    9: { name: eden.nexus2[3] },
                    10: { name: eden.nexus2[1], pr: filler }
                }
            }
        },
        1: {
            signet: { 1: kevin, 2: su, 3: eden, 4: kalpas },
            signetPr: { 1: '1', 2: '2', 3: '2', 4: '2' },
            emblem: {
                1: madKingsMask,
                2: burden,
                3: shatteredShackles
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: br, 2: bke, 3: br },
            signetTable: {
                0: {
                    1: { name: 'Wild Flare', pr: start },
                    2: { name: 'Radiant Formation', pr: first },
                    3: { name: 'Alrescha', pr: second, rowspan: '2' },
                    4: { name: 'Star Quillon' },
                    5: { name: 'Holy Flame', pr: filler }
                },
                1: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[6] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2' },
                    4: { name: kevin.regular[3] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[1], pr: first, rowspan:'2' },
                    9: { name: kevin.nexus1[2] },
                    10: { name: kevin.nexus1[3], pr: filler }
				},
                2: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[1], pr: first, rowspan: '2' },
                    9: { name: su.nexus1[3] },
                    10: { name: su.nexus1[2], pr: filler }
                },
                3: {
                    1: { name: eden.regular[3], pr: first, rowspan: '2' },
                    2: { name: eden.regular[2] },
                    3: { name: eden.regular[4], pr: filler, rowspan: '2' },
                    4: { name: eden.regular[6] },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[3], pr: first },
                    9: { name: eden.nexus2[1], pr: filler, rowspan: '2' },
                    10: { name: eden.nexus2[2] }
                },
                4: {
                    1: { name: kalpas.regular[1], pr: first, rowspan: '2' },
                    2: { name: kalpas.regular[2] },
                    3: { name: kalpas.regular[6], pr: second },
                    4: { name: kalpas.regular[3], pr: filler },
                    5: { name: kalpas.regular[4], pr: no, rowspan: '2' },
                    6: { name: kalpas.regular[5]},
                    7: { name: kalpas.nexus2.name, pr: no, rows: '4' },
                    8: { name: kalpas.nexus2[1] },
                    9: { name: kalpas.nexus2[2] },
                    10: { name: kalpas.nexus2[3] }
                }
            }
        }
    }
}
// Starchasm Nyx
const nyx = {
    name: 'Starchasm Nyx',
    acr: 'nyx',
    builds: {
        0: {
            signet: { 1: kevin, 2: sakura, 3: eden },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: burden,
                2: `${burden} / ${forgetMeNot}`,
                3: homeLost
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: bke, 3: br },
            signetTable: {
                0: {
                    1: { name: 'Frigidity', pr: start },
                    2: { name: 'Abyssal Gaze', pr: first },
                    3: { name: 'Toxic Bath', pr: second },
                    4: { name: 'Cocoon Break', pr: filler, rowspan: '2' },
                    5: { name: 'Nightmare' }
                },
                1: {
                    1: { name: kevin.regular[1], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3] },
                    3: { name: kevin.regular[2], pr: second, rowspan: '2' },
                    4: { name: kevin.regular[6] },
                    5: { name: kevin.regular[4], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[5] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[1], pr: first },
                    9: { name: kevin.nexus1[2], pr: second },
                    10: { name: kevin.nexus1[3], pr: no }
				},
                2: {
                    1: { name: sakura.regular[6], pr: first, rowspan: '2' },
                    2: { name: sakura.regular[5] },
                    3: { name: sakura.regular[2], pr: filler },
                    4: { name: sakura.regular[1], pr: no, rowspan: '3' },
                    5: { name: sakura.regular[3] },
                    6: { name: sakura.regular[4] },
                    7: { name: sakura.nexus1.name, pr: filler },
                    8: { name: sakura.nexus1[2], pr: second },
                    9: { name: sakura.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: sakura.nexus1[3] }
                },
                3: {
                    1: { name: eden.regular[3], pr: first },
                    2: { name: eden.regular[2], pr: second, rowspan: '2' },
                    3: { name: eden.regular[6] },
                    4: { name: eden.regular[4], pr: filler, rowspan: '2' },
                    5: { name: eden.regular[5] },
                    6: { name: eden.regular[1], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second, rowspan: '2' },
                    9: { name: eden.nexus2[3] },
                    10: { name: eden.nexus2[1], pr: filler }
                }
            }
        }
    }
}
// Striker Fulminata
const stfu = {
    name: 'Striker Fulminata',
    acr: 'stfu',
    builds: {
        0: {
            signet: { 1: su, 2: kevin, 3: eden },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: burden,
                2: lightAsABodhiLeaf,
                3: homeLost
            },
            3: { 1: le, 2: bke, 3: ss },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Current', pr: start },
                    2: { name: 'Karma', pr: first },
                    3: { name: 'Idea', pr: second },
                    4: { name: 'Thunder', pr: filler, rowspan: '2' },
                    5: { name: 'Zanshin' }
                },
                1: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: no, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: no, rowspan: '2' },
                    10: { name: su.nexus1[2] }
				},
                2: {
                    1: { name: kevin.regular[4], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[3], pr: second, rowspan: '3' },
                    3: { name: kevin.regular[5] },
                    4: { name: kevin.regular[6] },
                    5: { name: kevin.regular[1], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[2] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[2], pr: first },
                    9: { name: kevin.nexus1[1], pr: second },
                    10: { name: kevin.nexus1[3], pr: filler }
                },
                3: {
                    1: { name: eden.regular[3], pr: first },
                    2: { name: eden.regular[2], pr: second, rowspan: '2' },
                    3: { name: eden.regular[6] },
                    4: { name: eden.regular[4], pr: filler, rowspan: '2'  },
                    5: { name: eden.regular[5] },
                    6: { name: eden.regular[1], pr: no },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second },
                    9: { name: eden.nexus2[3], pr: filler },
                    10: { name: eden.nexus2[1], pr: no }
                }
            }
        }
    }
}
// Stygian Nymph
const sn = {
    name: 'Stygian Nymph',
    acr: 'sn',
    builds: {
        0: {
            signet: { 1: kevin, 2: sakura, 3: hua },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: burden,
                2: `${forgetMeNot} / ${stainedSakura}`,
                3: stainedSakura
            },
            3: { 1: dp, 2: dp, 3: dp },
            4: { 1: vc, 2: vc, 3: ss },
            signetTable: {
                0: {
                    1: { name: 'Vurnerable Duality', pr: start },
                    2: { name: 'Intergrowth', pr: first },
                    3: { name: 'Kindred', pr: second, rowspan: '2' },
                    4: { name: 'Union' },
                    5: { name: 'Might of Duality', pr: filler }
                },
                1: {
                    1: { name: kevin.regular[4], pr: first },
                    2: { name: kevin.regular[3], pr: second, rowspan: '2' },
                    3: { name: kevin.regular[5] },
                    4: { name: kevin.regular[6], pr: filler },
                    5: { name: kevin.regular[1], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[2] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[1], pr: first },
                    9: { name: kevin.nexus1[2], pr: second },
                    10: { name: kevin.nexus1[3], pr: no }
				},
                2: {
                    1: { name: sakura.regular[3], pr: first },
                    2: { name: sakura.regular[2], pr: second, rowspan: '2' },
                    3: { name: sakura.regular[5] },
                    4: { name: sakura.regular[1], pr: no, rowspan: '3' },
                    5: { name: sakura.regular[4] },
                    6: { name: sakura.regular[6] },
                    7: { name: sakura.nexus1.name },
                    8: { name: sakura.nexus1[1], pr: no, rowspan: '3' },
                    9: { name: sakura.nexus1[2] },
                    10: { name: sakura.nexus1[3] }
                },
                3: {
                    1: { name: hua.regular[5], pr: first },
                    2: { name: hua.regular[2], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[1], pr: no, rowspan: '3' },
                    5: { name: hua.regular[4] },
                    6: { name: hua.regular[6] },
                    7: { name: hua.nexus2.name, pr: second },
                    8: { name: hua.nexus2[1], pr: first },
                    9: { name: hua.nexus2[3], pr: no, rowspan: '2' },
                    10: { name: hua.nexus2[2] }
                }
            }
        }
    }
}
// Sweet 'n' Spicy
const carole = {
    name: 'Sweet \'n\' Spicy',
    acr: 'carole',
    builds: {
        0: {
            signet: { 1: eden, 2: su, 3: kalpas },
            signetPr: { 1: '1', 2: '1', 3: '2' },
            emblem: {
                1: madKingsMask,
                2: `${forgetMeNot} / ${lightAsABodhiLeaf}`,
                3: `${homeLost} / ${stainedSakura}`,
            },
            3: { 1: br, 2: bke, 3: ss },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Revolution', pr: start },
                    2: { name: 'Skyfall', pr: first },
                    3: { name: 'Brake', pr: second, rowspan: '2' },
                    4: { name: 'Impulse' },
                    5: { name: 'Rupture', pr: filler }
                },
                1: {
                    1: { name: eden.regular[3], pr: first },
                    2: { name: eden.regular[2], pr: second, rowspan: '2' },
                    3: { name: eden.regular[6] },
                    4: { name: eden.regular[1], pr: filler },
                    5: { name: eden.regular[4], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus1.name, pr: filler, rowspan: '4' },
                    8: { name: eden.nexus1[1] },
                    9: { name: eden.nexus1[2] },
                    10: { name: eden.nexus1[3] }
				},
                2: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler },
                    6: { name: su.regular[4], pr: no },
                    7: { name: su.nexus1.name },
                    8: { name: su.nexus1[3], pr: first },
                    9: { name: su.nexus1[1], pr: second },
                    10: { name: su.nexus1[2], pr: no }
                },
                3: {
                    1: { name: kalpas.regular[1], pr: first, rowspan: '2' },
                    2: { name: kalpas.regular[2] },
                    3: { name: kalpas.regular[3], pr: second, rowspan: '2' },
                    4: { name: kalpas.regular[6] },
                    5: { name: kalpas.regular[4], pr: filler, rowspan: '2' },
                    6: { name: kalpas.regular[5]},
                    7: { name: kalpas.nexus2.name },
                    8: { name: kalpas.nexus2[3], pr: first },
                    9: { name: kalpas.nexus2[1], pr: second },
                    10: { name: kalpas.nexus2[2], pr: filler }
                }
            }
        }
    }
}
// Twilight Paladin
const tp = {
    name: 'Twilight Paladin',
    acr: 'tp',
    builds: {
        0: {
            signet: { 1: kevin, 2: su, 3: eden },
            signetPr: { 1: '1', 2: '2', 3: '2' },
            emblem: {
                1: burden,
                2: `${burden} / ${lightAsABodhiLeaf}`,
                3: heavyAsAMillionLives
            },
            3: { 1: le, 2: bkek, 3: le },
            4: { 1: vc, 2: vc, 3: vc },
            signetTable: {
                0: {
                    1: { name: 'Banishmen', pr: start },
                    2: { name: 'Penalty', pr: first },
                    3: { name: 'Dusk<', pr: second },
                    4: { name: 'Radiance', pr: filler, rowspan: '2' },
                    5: { name: 'Sanction' }
                },
                1: {
                    1: { name: kevin.regular[4], pr: first, rowspan: '2' },
                    2: { name: kevin.regular[6] },
                    3: { name: kevin.regular[3], pr: second, rowspan: '2' },
                    4: { name: kevin.regular[5] },
                    5: { name: kevin.regular[1], pr: no, rowspan: '2' },
                    6: { name: kevin.regular[2] },
                    7: { name: kevin.nexus1.name },
                    8: { name: kevin.nexus1[1], pr: first },
                    9: { name: kevin.nexus1[2], pr: second },
                    10: { name: kevin.nexus1[3], pr: no }
				},
                2: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[2], pr: second, rowspan: '3' },
                    4: { name: su.regular[5] },
                    5: { name: su.regular[6] },
                    6: { name: su.regular[4], pr: filler },
                    7: { name: su.nexus2.name },
                    8: { name: su.nexus2[3], pr: first },
                    9: { name: su.nexus2[1] },
                    10: { name: su.nexus2[2], pr: filler }
                },
                3: {
                    1: { name: eden.regular[2], pr: first, rowspan: '2' },
                    2: { name: eden.regular[3] },
                    3: { name: eden.regular[4], pr: second },
                    4: { name: eden.regular[6], pr: filler },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name, pr: second, rowspan: '2' },
                    8: { name: eden.nexus2[2] },
                    9: { name: eden.nexus2[3], pr: filler },
                    10: { name: eden.nexus2[1], pr: no }
                }
            }
        }
    }
}
// Valkyrie Gloria
const vg = {
    name: 'Valkyrie Gloria',
    acr: 'vg',
    builds: {
        0: {
            signet: { 1: eden, 2: hua, 3: su },
            signetPr: { 1: '2', 2: '2', 3: '2' },
            emblem: {
                1: memory,
                2: burden,
                3: homeLost
            },
            3: { 1: ae, 2: ae, 3: ae },
            4: { 1: le, 2: le, 3: le },
            signetTable: {
                0: {
                    1: { name: 'Battle Song', pr: start },
                    2: { name: 'Gloria', pr: first },
                    3: { name: 'Triumph', pr: second },
                    4: { name: 'Impetus', pr: filler, rowspan: '2' },
                    5: { name: 'Sol' }
                },
                1: {
                    1: { name: eden.regular[3], pr: first },
                    2: { name: eden.regular[2], pr: second, rowspan: '2' },
                    3: { name: eden.regular[6] },
                    4: { name: eden.regular[4], pr: filler },
                    5: { name: eden.regular[1], pr: no, rowspan: '2' },
                    6: { name: eden.regular[5] },
                    7: { name: eden.nexus2.name },
                    8: { name: eden.nexus2[2], pr: second },
                    9: { name: eden.nexus2[3], pr: filler },
                    10: { name: eden.nexus2[1], pr: no }
				},
                2: {
                    1: { name: hua.regular[6], pr: first },
                    2: { name: hua.regular[1], pr: second, rowspan: '2' },
                    3: { name: hua.regular[3] },
                    4: { name: hua.regular[4], pr: filler },
                    5: { name: hua.regular[2], pr: no, rowspan: '2' },
                    6: { name: hua.regular[5] },
                    7: { name: hua.nexus2.name, pr: second },
                    8: { name: hua.nexus2[1], pr: first },
                    9: { name: hua.nexus2[3], pr: filler },
                    10: { name: hua.nexus2[2], pr: no }
                },
                3: {
                    1: { name: su.regular[1], pr: first, rowspan: '2' },
                    2: { name: su.regular[3] },
                    3: { name: su.regular[5], pr: second, rowspan: '2' },
                    4: { name: su.regular[6] },
                    5: { name: su.regular[2], pr: filler, rowspan: '2' },
                    6: { name: su.regular[4] },
                    7: { name: su.nexus2.name },
                    8: { name: su.nexus2[1], pr: first, rowspan: '2' },
                    9: { name: su.nexus2[3] },
                    10: { name: su.nexus2[2], pr: filler }
                }
            }
        }
    }
}
const valks = [aka, bkek, da, hofs, hor, hos, hot, mobi, lk, raven,
               elysia, pe, fischl, ri, sw, spa, nyx, stfu, sn, carole,
               tp, vg];
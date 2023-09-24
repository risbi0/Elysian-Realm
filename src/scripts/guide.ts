import * as data from './data';

type Gear = [data.NameAcr, data.NameAcr, data.NameAcr, data.NameAcr];
type Emblem = [data.NameAcr, data.NameAcr];
type Anchor = [data.Signet, '1' | '2'];
type SignetType = 'transitional' | 'main' | 'secondary' | 'optional';
type Priority = 'Start' | '1st' | '2nd' | 'Reinforcement' | 'Optional' | 'No';
type Guide = {
	name: string;
	acr: string;
	version: string;
	builds: {
		name?: string;
		buff?: any;
		signet: {
			[key in SignetType]?: Array<Anchor>;
		}
		emblem: Array<Emblem>;
		support: Array<Array<Array<data.NameAcr>>>;
		gear?: Array<Gear>;
		signetTable: {
			exclusive: {
				[key in Priority]?: string[];
			}
			transitional?: {
				[key: string]: string[];
			}
			main: {
				[key: string]: string[];
			}
			secondary: {
				[key: string]: string[];
			}
			optional?: {
				[key: string]: string[];
			}
		}
		notes?: string;
	}[]
};
// Argent Knight: Artemis
const aka: Guide = {
	name: 'Argent Knight: Artemis',
	acr: 'aka',
	version: '6.1',
	builds: [
		{
			signet: {
				main: [
					[data.hua, '2'],
					[data.mobius, '1'],
					[data.vv, '2']
				],
				secondary: [
					[data.griseo, '1'],
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.memory, data.becauseOfYou], // early
				[data.forbiddenSeed, data.boundlessLogos], // mid
				[data.ruinedLegacy, data.boundlessLogos] // late
			],
			support: [
				[ [data.ae], [data.le, data.bke] ], // utility
				[ [data.ae], [data.hb] ] // damage
			],
			gear: [ // weapon, T, M, B
				[data.skth, data.wilt, data.wilm, data.wilb],
				[data.hawp, data.anat, data.anam, data.anab]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Frost Scythe'
					],
					[data.first]: [
						'Stellar Trials',
						'Winter Harvest'
					],
					[data.second]: [
						'Cold Moon'
					],
					[data.reinforcement]: [
						'Uranian Mirror'
					]
				},
				main: {
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.reduce
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name,
						data.griseo.nexus1.orange
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			}
		}
	]
};
// Disciplinary Perdition
const aponia: Guide = {
	name: 'Disciplinary Perdition',
	acr: 'aponia',
	version: '6.5',
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][6],
				data.buffs[2][7],
				data.buffs[3][4]
			],
			signet: {
				main: [
					[data.aponia, '2'],
					[data.griseo, '2'],
					[data.kalpas, '2']
				],
				secondary: [
					[data.pardofelis, '1']
				],
				optional: [
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.br], [data.hb, data.sn] ]
			],
			gear: [
				[data.loco, data.zent, data.zenm, data.zenb],
				[data.hawp, data.hant, data.hanm, data.hanb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Admonition',
						'Shelter'
					],
					[data.first]: [
						'Inclusiveness'
					],
					[data.no]: [
						'Atonement',
						'Rescue'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.blue,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				},
				secondary: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln
					]
				}
			},
			notes: `Can pick Eden's signet <span>${data.eden.regular.spCapInitial}</span> to speed up rotations.`
		}
	]
};
// Bright Knight: Excelsis
const bke: Guide = {
	name: 'Bright Knight: Excelsis',
	acr: 'bke',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.sakura, '1'],
					[data.griseo, '2']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.kosma, '2'],
					[data.aponia, '2']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Gambit'
					],
					[data.first]: [
						'Glory'
					],
					[data.second]: [
						'Paragon'
					],
					[data.no]: [
						'Formation',
						'Holy Lance'
					]
				},
				main: {
					[data.sakura.name]: [
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.nexus1.name,
						data.sakura.nexus1.cd
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.blue,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.white,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					],
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name,
						data.kosma.nexus2.breachPhysEle
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				}
			},
			notes: `<p>${data.sakura.nexus1.cd}</p>If don't have <span>Blessing of Paragon</span>.<br><br>
					<p>${data.griseo.regular.grey}</p>Minimum of +2 upgrade.<br><br>
					<p>${data.kalpas.nexus2.breachPhysEle}, ${data.kosma.nexus2.breachPhysEle}, ${data.aponia.nexus2.breachPhysEle}</p>If lacking impair.`
		}
	]
};
// Sweet 'n' Spicy
const carole: Guide = {
	name: 'Sweet \'n\' Spicy',
	acr: 'carole',
	version: '6.6',
	builds: [
		{
			buff: [
				data.buffs[0][3],
				data.buffs[3][6],
				data.buffs[3][7]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.kevin, '1'],
					[data.sakura, '2'],
					[data.kosma, '2'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.itWillBeWritten],
				[data.burden, data.homeTown],
				[data.tinFlask, data.homeTown]
			],
			support: [
				[ [data.br], [data.sa] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.obdo, data.biat, data.biam, data.biab],
				[data.miki, data.pagt, data.pagm, data.pagb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Revolution'
					],
					[data.no]: [
						'Brake',
						'Impulse',
						'Rupture',
						'Skyfall'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.breachPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus2.name
					],
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.regular.ult,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, <span>${data.griseo.regular.yellow}</span>, and <span>${data.griseo.regular.grey}</span> as reinforcement.`
		}
	]
};
// Chrono Navi
const cn: Guide = {
	name: 'Chrono Navi',
	acr: 'cn',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[0][6],
				data.buffs[3][6],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.vv, '2']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.eden, '2']
				],
				optional: [
					[data.kosma, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.becauseOfYou],
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.vke], [data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.rudr, data.chrt, data.chrm, data.chrb],
				[data.hawp, data.ragt, data.tham, data.ragb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Succession'
					],
					[data.first]: [
						'Time Crystal'
					],
					[data.second]: [
						'Bladepiece',
						'Constant'
					],
					[data.optional]: [
						'Final Dream'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.vuln,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spRestoreAtk,
						data.eden.nexus2.name
					]
				},
				optional: {
					[data.kosma.name]: [
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.dmgShield,
						data.kosma.nexus1.name
					]
				}
			},
			notes: `Switch sigils on 6F if you managed to get Vill-V breach on 5F.<br><br>
					<p>1st Shop Emblem</p>Pseudo Miracle or Light as a Bodhi Leaf.<br><br>
					<p>${data.vv.nexus2.gravField}</p>Don't pick.<br><br>
					<p>${data.griseo.regular.red}</p>Buy in shop.`
		}
	]
};
// Dea Anchora
const da: Guide = {
	name: 'Dea Anchora',
	acr: 'da',
	version: '6.4',
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: {
				main: [
					[data.kevin, '1'],
					[data.aponia, '2']
				],
				secondary: [
					[data.eden, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.burden, data.theLonelyMoon],
				[data.veilOfTears, data.becauseOfYou],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br, data.ma] ]
			],
			gear: [
				[data.saas, data.shat, data.sham, data.shab],
				[data.hawp, data.aslt, data.aslm, data.aslb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Stars'
					],
					[data.first]: [
						'Sheen'
					],
					[data.second]: [
						'Halo'
					],
					[data.no]: [
						'Brilliance',
						'Gale'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.breachEle,
						data.kevin.regular.dmgEle,
						data.kevin.regular.dmgTotal,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name
					],
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus2.name,
						data.eden.nexus2.spCapRestore
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.yellow
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signet <span>${data.kalpas.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Dreamweaver
const dw: Guide = {
	name: 'Dreamweaver',
	acr: 'dw',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][10],
				data.buffs[2][7],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.pardofelis, '1'],
					[data.mobius, '2']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.rainbowOfAbsence, data.fallingInPastLight],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.vc], [data.bke] ],
				[ [data.vc], [data.ss] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Thousand Thoughts',
						'Oneiromancy'
					],
					[data.optional]: [
						'Forms'
					],
					[data.no]: [
						'Absoluteness',
						'Legacy'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name,
						data.vv.nexus1.blades,
						data.vv.nexus1.breachPhys
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name
					],
					[data.mobius.name]: [
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.regular.vuln,
						data.mobius.nexus2.name,
						data.mobius.nexus2.vuln,
						data.mobius.nexus2.dmgPhysEle
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigils on 6F, roll Vill-V on 7F to get breach from enhanced.<br><br>l
					Can pick Kevin's signets <span>${data.kevin.regular.dmgTotal}</span>, and <span>${data.kevin.regular.dmgPhys}</span> as reinforcement.`
		}
	]
};
// Golden Diva
const eden: Guide = {
	name: 'Golden Diva',
	acr: 'eden',
	version: '6.6',
	builds: [
		{
			buff: [
				data.buffs[0][3],
				data.buffs[3][6],
				data.buffs[3][8]
			],
			signet: {
				main: [
					[data.eden, '1'],
					[data.kosma, '1']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.pardofelis, '1'],
					[data.griseo, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.fragileFriend, data.outOfReach],
				[data.keyToTheDeep, data.outOfReach]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.le], [data.br, data.rc] ]
			],
			gear: [
				[data.doin, data.hant, data.hanm, data.hanb],
				[data.ecpa, data.zent, data.linm, data.zenb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Arioso',
						'Symphony'
					],
					[data.no]: [
						'Cadenza',
						'Conerto',
						'Fugue'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spRestore,
						data.eden.nexus1.name,
						data.eden.nexus1.spRestore,
						data.eden.nexus1.vuln
					],
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.dmgShield,
						data.kosma.regular.spRestore,
						data.kosma.nexus1.name,
						data.kosma.nexus1.breachPhysEle,
						data.kosma.nexus1.dmgPhysEle
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					]
				}
			},
			notes: `Can pick Aponias's nexus <span>${data.aponia.nexus2.name}</span> as reinforcement.`
		}
	]
};
// Miss Pink Elf
const elysia: Guide = {
	name: 'Miss Pink Elf♪',
	acr: 'elysia',
	version: '6.3',
	builds: [
		{
			buff: [
				data.buffs[1][0],
				data.buffs[2][0],
				data.buffs[3][0]
			],
			signet: {
				main: [
					[data.vv, '2'],
					[data.aponia, '2']
				],
				secondary: [
					[data.griseo, '2']
				],
				optional: [
					[data.su, '2'],
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.theLonelyMoon],
				[data.veilOfTears, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.vc], [data.le, data.bke] ],
				[ [data.vc], [data.br, data.ss] ]
			],
			gear: [
				[data.whpa, data.elyt, data.elym, data.elyb],
				[data.hawp, data.biat, data.biam, data.biab]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Purity',
						'Zenith'
					],
					[data.optional]: [
						'Beauty'
					],
					[data.no]: [
						'Benevolence',
						'Love'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgPhysEle,
						data.vv.regular.dmgRanged,
						data.vv.regular.spRestore,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln,
						data.vv.nexus2.gravField
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.dmgReduc,
						data.aponia.regular.spRestore,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red
					]
				},
				optional: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln
					]
				}
			},
			notes: `Can pick Eden's signets <span>${data.eden.regular.dmgPhysEle}</span> and <span>${data.eden.regular.dmgTotal}</span> as reinforcment, but should als pick Su's signet <span>${data.su.regular.spRestore}</span> as well.<br><br>
					<p>${data.vv.nexus2.breachPhysEle}</p>Fully upgrade.<br><br>
					<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Prinzessin der Verurteilung
const fischl: Guide = {
	name: 'Prinzessin der Verurteilung',
	acr: 'fischl',
	version: '6.5',
	builds: [
		{
			buff: [
				data.buffs[1][5],
				data.buffs[1][6],
				data.buffs[2][6],
				data.buffs[2][7]
			],
			signet: {
				main: [
					[data.aponia, '2']
				],
				secondary: [
					[data.hua, '2'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.mobius, '1']

				]
			},
			emblem: [
				[data.veilOfTears, data.outOfReach],
				[data.memory, data.outOfReach],
				[data.ruinedLegacy, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.whpa, data.want, data.wanm, data.wanb],
				[data.miwa, data.hant, data.hanm, data.hanb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Midnight'
					],
					[data.first]: [
						'Retrtibution'
					],
					[data.optional]: [
						'Fate'
					],
					[data.no]: [
						'Dark Wings',
						'Nightfall'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus2.name
					]
				},
				optional: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, and <span>${data.kalpas.regular.dmgPhysEle}</span>, and Su signets as reinforcement.<br><br>
					<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Fallen Rosemary
const fr: Guide = {
	name: 'Fallen Rosemary',
	acr: 'fr',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[1][4],
				data.buffs[2][9],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.kevin, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.bke] ],
				[ [data.ae, data.le], [data.br] ]
			],
			gear: [
				[data.irhe, data.hant, data.hanm, data.hanb],
				[data.irhe, data.iret, data.irem, data.ireb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Valfreyja'
					],
					[data.first]: [
						'Nocturne'
					],
					[data.second]: [
						'God Eater'
					],
					[data.optional]: [
						'Soul Siphon',
						'Spirit Servants'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.regular.spRestore,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.spRestore,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.kevin.name]: [
						data.kevin.regular.breachEle,
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgEle,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Aponia's signets <span>${data.aponia.regular.basicAtk}</span>, <span>${data.aponia.regular.spRestore}</span>, <span>${data.aponia.regular.dmgPhysEle}</span>, and <span>${data.aponia.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Fervent Tempo
const mc: Guide = {
	name: 'Fervent Tempo',
	acr: 'mc',
	version: '6.2',
	builds: [
		{
			signet: {
				main: [
					[data.griseo, '2']
				],
				secondary: [
					[data.aponia, '2']
				],
				optional: [
					[data.kevin, '1'],
					[data.vv, '1'],
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.veilOfTears, data.theLonelyMoon],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.ss], [data.dp, data.bke] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.sldr, data.mict, data.danm, data.micb],
				[data.hawp, data.elyt, data.danm, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Silence'
					],
					[data.first]: [
						'Mixing'
					],
					[data.second]: [
						'Fervor'
					],
					[data.reinforcement]: [
						'Solitude'
					],
					[data.no]: [
						'Thorns'
					]
				},
				main: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.white,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				optional: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.breachPhys,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name
					],
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Su/Sakura signets as reinforcement.<br><br>
					<p>${data.kevin.regular.breachPhys}</p>Upgrade twice.`
		}
	]
};
// Goushinnso Memento
const gm: Guide = {
	name: 'Goushinnso Memento',
	acr: 'gm',
	version: '6.0',
	builds: [
		{
			signet: {
				main: [
					[data.kosma, '2'],
					[data.hua, '2']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.griseo, '2'],
					[data.aponia, '2']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Flourish',
						'Whiteout'
					],
					[data.no]: [
						'Frozen Cloud',
						'Haste',
						'Icy Sakura'
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.atk,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name,
						data.kosma.nexus2.hpRestore,
						data.kosma.nexus2.breachPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			}
		}
	]
};
// Starry Impression
const griseo: Guide = {
	name: 'Starry Impression',
	acr: 'griseo',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[1][10],
				data.buffs[2][7],
				data.buffs[2][13]
			],
			signet: {
				main: [
					[data.kosma, '1']
				],
				secondary: [
					[data.mobius, '1'],
					[data.griseo, '1'],
					[data.kalpas, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.fragileFriend, data.outOfReach],
				[data.forbiddenSeed, data.outOfReach],
				[data.tinFlask, data.outOfReach]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.br], [data.sa, data.ss] ]
			],
			gear: [
				[data.elas, data.lint, data.cezm, data.cezb],
				[data.hawp, data.elyt, data.danm, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'River Forest',
						'Starry Night'
					],
					[data.optional]: [
						'Cloud Valley'
					],
					[data.no]: [
						'Azure Wind',
						'Feathers'
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.nexus1.name,
						data.kosma.nexus1.breachPhysEle,
						data.kosma.nexus1.dmgPhysEle,
						data.kosma.nexus1.vuln
					]
				},
				secondary: {
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: 'Recommended to swap sigils on 6F shop, roll Kosma on 7F to get enhanced; mid to low level setups are not recommended to pick up Kalpas both damage boosts or Burden before 12F.'
		}
	]
};
// Herrscher of Finality
const hofi: Guide = {
	name: 'Herrscher of Finality',
	acr: 'hofi',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[3][6],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.kevin, '1']
				],
				secondary: [
					[data.aponia, '2'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.burden, data.itWillBeWritten],
				[data.veilOfTears, data.dreamfulGold],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.bke], [data.vke] ],
				[ [data.br], [data.ma, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Finale Moon',
						'Rift'
					],
					[data.second]: [
						'Clarity'
					],
					[data.no]: [
						'Condescension',
						'High Flames'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgEle,
						data.kevin.regular.breachEle,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: `Unlock all nexus for recommended signets; bring Kevin's sigils to start, can use against the 4F wave 3 enemy.<br><br>
					Can pick Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span>, or Eden's signet <span>${data.eden.regular.spCapInitial}</span> as reinforcement.<br><br>
					<p>${data.griseo.regular.red}</p>Buy from shop.`
		}
	]
};
// Herrscher of Flamescion
const hofs: Guide = {
	name: 'Herrscher of Flamescion',
	acr: 'hofs',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[3][4],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.pardofelis, '1'],
					[data.sakura, '2']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.lightAsABodhiLeaf, data.becauseOfYou],
				[data.tinFlask, data.anOldPalsLegacy]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.doin, data.murt, data.murm, data.murb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Heatflow'
					],
					[data.second]: [
						'Tempered Warrior',
						'Reburn',
						'Starfire'
					],
					[data.optional]: [
						'Flamescion'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus2.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red
					]
				}
			},
			notes: `Can pick Eden's signets <span>${data.eden.regular.dmgTotal}</span>, <span>${data.eden.regular.dmgPhysEle}</span>, and <span>${data.eden.regular.spCapInitial}</span>, and <span>${data.eden.regular.spRestore}</span> as reinforcement.`
		}
	]
};
// Herrscher of Human: Ego
const hoh: Guide = {
	name: 'Herrscher of Human: Ego',
	acr: 'hoh',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.pardofelis, '1'],
					[data.griseo, '1'],
					[data.kalpas, '1']
				],
				optional: [
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.theLonelyMoon],
				[data.feastOfEmptiness, data.theLonelyMoon],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.doeg, data.elpt, data.elpm, data.elpb],
				[data.hawp, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'First Bloom',
						'First Journey'
					],
					[data.first]: [
						'First Awakening'
					],
					[data.no]: [
						'First Encounter',
						'First Yearning'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name,
						data.pardofelis.nexus1.breachPhysEle,
						data.pardofelis.nexus1.ult
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln
					]
				}
			},
			notes: `Recommended to swap sigils on 5F, try to buy 1 Pardofelis signet, unlock nexus on 7F then pick up enhanced; Kalpas both damage boosts can also be bought for more damage, but needs to reduce HP in shop with BR.<br><br>
					Can pick Eden's signet <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.physEleDamage}</span>, or Kevin's signets <span>${data.kevin.regular.dmgTotal}</span>, and <span>${data.kevin.regular.dmgEle}</span> as reinforcement.<br><br>
					<p>${data.griseo.regular.red}</p>Buy from shop.`
		}
	]
};
// Herrscher of Origin
const hoo: Guide = {
	name: 'Herrscher of Origin',
	acr: 'hoo',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[2][13]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.kalpas, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.lightAsABodhiLeaf, data.fallingInPastLight],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.bke], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Expungement',
						'Lethal Smite'
					],
					[data.first]: [
						'Nature'
					],
					[data.optional]: [
						'Ultra'
					],
					[data.no]: [
						'Inscription'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgPhysEle,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name,
						data.pardofelis.nexus1.breachPhysEle
					]
				}
			},
			notes: `Recommended to reset for Nature on 2F; swap sigils on 5F, try to buy 1 Su signet, unlock nexus on 7F then pick up enhanced; if not good at dodging not recommended to pick Kalpas before 12F.<br><br>
					Can pick Sakura's signets <span>${data.sakura.regular.evasionReset}</span>, and <span>${data.sakura.regular.evasionAdd}</span>, <span>${data.sakura.regular.dmgTotal}</span>, and <span>${data.sakura.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Herrscher of Reason
const hor: Guide = {
	name: 'Herrscher of Reason',
	acr: 'hor',
	version: '6.7',
	builds: [
		{
			buff: [
				data.buffs[0][4],
				data.buffs[1][7],
				data.buffs[1][9],
				data.buffs[2][7],
				data.buffs[2][11]
			],
			signet: {
				main: [
					[data.kevin, '2']
				],
				secondary: [
					[data.sakura, '2'],
					[data.su, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.burden, data.itWillBeWritten],
				[data.forgetMeNot, data.becauseOfYou],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.sted, data.wilt, data.wilm, data.wilb],
				[data.dore, data.welt, data.welm, data.welb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Wisdon'
					],
					[data.first]: [
						'Truth'
					],
					[data.second]: [
						'Inspiration'
					],
					[data.no]: [
						'Creation',
						'Reason'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.dmgEle,
						data.kevin.regular.dmgTotal,
						data.kevin.regular.breachEle,
						data.kevin.regular.spRestore,
						data.kevin.nexus2.name,
						data.kevin.nexus2.effect
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.evasionReset,
						data.sakura.regular.vuln,
						data.sakura.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signets, <span>${data.kalpas.regular.dmgTotal}</span>, <span>${data.kalpas.regular.dmgPhysEle}</span>, and <span>${data.kalpas.regular.hp}</span>, or Eden's signets <span>${data.eden.regular.dmgTotal}</span>, <span>${data.eden.regular.dmgPhysEle}</span>, and <span>${data.eden.regular.spCapInitial}</span> as reinforcement.<br><br>
					<p>1st Shop Emblem</p>Forget-Me-Not or Light as a Bodhi Leaf.<br><br>
					<p>${data.griseo.regular.red}</p>Buy if in shop.`
		}
	]
};
// Herrscher of Rebirth
const horb: Guide = {
	name: 'Herrscher of Rebirth',
	acr: 'horb',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][10],
				data.buffs[2][7],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.mobius, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.kalpas, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.vc], [data.bke] ],
				[ [data.br], [data.vc, data.ss] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Spirits',
						'Rising Sun'
					],
					[data.no]: [
						'Decay',
						'Shared Destiny',
						'Soothingness'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				}
			},
			notes: 'Recommended to swap sigils on 5F, try to buy 1 Su signet, unlock nexus on 7F then pick enhanced.'
		}
	]
};
// Herrscher of Sentience
const hos: Guide = {
	name: 'Herrscher of Sentience',
	acr: 'hos',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[2][13]
			],
			signet: {
				main: [
					[data.kevin, '2']
				],
				secondary: [
					[data.kosma, '2'],
					[data.su, '1'],
					[data.pardofelis, '1'],
					[data.eden, '2']
				]
			},
			emblem: [
				[data.burden, data.itWillBeWritten],
				[data.fragileFriend, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.le, data.bke] ],
				[ [data.br], [data.sa, data.ss] ]
			],
			gear: [
				[data.dose, data.dirt, data.dirm, data.rebb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Legion',
						'Victory'
					],
					[data.optional]: [
						'Dark Plumes',
						'Ego',
						'Supremacy'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.breachPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus2.name,
						data.kevin.nexus2.effect
					]
				},
				secondary: {
					[data.kosma.name]: [
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.regular.dmgShield,
						data.kosma.regular.extend,
						data.kosma.regular.atk,
						data.kosma.nexus2.name,
						data.kosma.nexus2.breachPhysEle,
						data.kosma.nexus2.dmgPhysEle
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.spRestore,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					],
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus2.name
					]
				}
			},
			notes: `Recommended to swap sigils on 5F, try to buy 1 Kosma signet, unlock nexus on 7F then pick up enhanced; recommended to bring LE at start, pick either breach from Su / Kosma.<br><br>
					Can pick Kalpas's signet <span>${data.kalpas.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Herrscher of the Void
const hov: Guide = {
	name: 'Herrscher of the Void',
	acr: 'hov',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[0][5],
				data.buffs[1][4],
				data.buffs[2][9],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.mobius, '1'],
					[data.sakura, '1']
				],
				secondary: [
					[data.vv, '1'],
					[data.eden, '1']
				],
				optional:  [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.fallingInPastLight],
				[data.forgetMeNot, data.boundlessLogos],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.ss], [data.bke] ],
				[ [data.ss], [data.vc] ]
			],
			gear: [
				[data.dovo, data.sirt, data.sirm, data.sirb],
				[data.kevo, data.elyt, data.elym, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Innateness'
					],
					[data.first]: [
						'Coleus'
					],
					[data.no]: [
						'Annihilation',
						'Law',
						'Virtuality'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					],
					[data.sakura.name]: [
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.regular.spRestore,
						data.sakura.nexus1.name
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					],
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name,
						data.eden.nexus1.vuln
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Griseo's signets <span>${data.griseo.regular.red}</span> (buy from shop), and <span>${data.griseo.regular.black}</span> as reinforcement.<br><br>
					<p>${data.mobius.nexus1.breachPhysEle}</p>Priority.`
		}
	]
};
// Herrscher of Thunder
const hot: Guide = {
	name: 'Herrscher of Thunder',
	acr: 'hot',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[1][4],
				data.buffs[2][11],
				data.buffs[3][10]
			],
			signet: {
				main: [
					[data.griseo, '1']
				],
				secondary: [
					[data.kevin, '2'],
					[data.su, '1'],
					[data.mobius, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.burden, data.theLonelyMoon],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.sena, data.hant, data.hanm, data.hanb],
				[data.seru, data.bent, data.benm, data.benb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Narukami'
					],
					[data.optional]: [
						'Tsukuyomi'
					],
					[data.no]: [
						'Divine Penalty',
						'Hazy Moon',
						'Mitama'
					]
				},
				main: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.blue,
						data.griseo.regular.black,
						data.griseo.nexus1.name,
						data.griseo.nexus1.purple,
						data.griseo.nexus1.orange,
						data.griseo.nexus1.green
					]
				},
				secondary: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgEle,
						data.kevin.regular.breachEle,
						data.kevin.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln
					],
					[data.mobius.name]: [
						data.mobius.regular.dmgTotal,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.vuln,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, <span>${data.kalpas.regular.dmgPhysEle}</span>, and <span>${data.kalpas.regular.hp}</span>, Sakura's signet <span>${data.sakura.regular.vuln}</span>, Vill-V 2 as reinforcement.`
		}
	]
};
// Herrscher of Truth
const hotr: Guide = {
	name: 'Herrscher of Truth',
	acr: 'hotr',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[1][10],
				data.buffs[2][7],
				data.buffs[2][13]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.sakura, '2']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.boundlessLogos],
				[data.lightAsABodhiLeaf, data.boundlessLogos],
				[data.keyToTheDeep, data.boundlessLogos]
			],
			support: [
				[ [data.vke], [data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Continuation',
						'Konstruktion'
					],
					[data.optional]: [
						'Vector'
					],
					[data.no]: [
						'Genuine Solution',
						'Intellect Core'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus2.name
					]
				}
			},
			notes: `Recommended to swap sigils on 6F after rolling Mobius for 7F to get enhanced; 2F and 3F recommended to pick Mobius Rodent and vulnerability.<br><br>
					Can pick Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span> as reinforcement.<br><br>
					<p>${data.mobius.nexus1.breachPhysEle}</p>Priority.`
		}
	]
};
// Sugary Starburst
const kira: Guide = {
	name: 'Sugary Starburst',
	acr: 'kira',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.aponia, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.keyToTheDeep, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Astral Path',
						'Roller Dance'
					],
					[data.no]: [
						'Acoustic Spectrum',
						'Rhythm',
						'Salute'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					],
					[data.aponia.name]: [
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.black
					]
				}
			},
			notes: `Recommended to switch sigil on 5F shop, try to buy 1 Kalpas signet, unlock nexus on 7F then get enhanced.<br><br>
					Can pick Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span> as reinforcement.`
		}
	]
};
// Luna Kindred
const lk: Guide = {
	name: 'Luna Kindred',
	acr: 'lk',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.kalpas, '2'],
					[data.aponia, '2']
				],
				secondary: [
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.mobius, '1']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Penumbra'
					],
					[data.first]: [
						'Blood Feast'
					],
					[data.second]: [
						'Imprint'
					],
					[data.no]: [
						'Immortality',
						'Thirst'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name,
						data.pardofelis.nexus1.evasion,
						data.pardofelis.nexus1.ult
					],
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgTotal
					]
				}
			},
			notes: `If equipped with Hekate's Sombre, can buy Su signets.<br><br>
					<p>${data.kalpas.regular.hp}, ${data.aponia.nexus2.breachPhysEle}</p>Recommended to upgrade.<br><br>
					<p>${data.mobius.regular.vuln}, ${data.mobius.regular.dmgTotal}</p>If using dracula set.`
		}
	]
};
// Miracle ☆ Magical Girl
const sirin: Guide = {
	name: 'Miracle ☆ Magical Girl',
	acr: 'sirin',
	version: '6.9',
	builds: [
		{
			name: 'basic',
			buff: [
				data.buffs[0][6],
				data.buffs[3][6],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.sakura, '1'],
					[data.griseo, '1'],
					[data.kalpas, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.forgetMeNot, data.tsukimiHimiko],
				[data.keyToTheDeep, data.fallingInPastLight]
			],
			support: [
				[ [data.bke], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Dreamstitch',
						'Tailor'
					],
					[data.no]: [
						'Inner Blaze',
						'Resplendence',
						'Stellar Breach'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.vuln,
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus1.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.black,
						data.griseo.regular.white,
						data.griseo.nexus1.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Unlock all recommended nexus signets; recommended to try this only with signature gear, otherwise pick the charged ATK route instead.<br><br>
					Can pick Vill-V's signets <span>${data.vv.regular.vuln}</span>, and <span>${data.vv.regular.dmgTotal}</span> as reinforcement.`
		},
		{
			name: 'charged',
			buff: [
				data.buffs[0][6],
				data.buffs[3][6],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.kalpas, '2']
				],
				secondary: [
					[data.vv, '1'],
					[data.sakura, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.psuedoMiracle, data.anOldPalsLegacy],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Inner Blaze',
						'Resplendence'
					],
					[data.optional]: [
						'Stellar Breach'
					],
					[data.no]: [
						'Dreamstitch',
						'Tailor'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus2.name,
						data.kalpas.nexus2.breachPhysEle
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus1.name,
						data.vv.nexus1.blades,
						data.vv.nexus1.breachPhys
					],
					[data.sakura.name]: [
						data.sakura.regular.vuln,
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]

				}
			},
			notes: `Recommended to swap sigils at 6F after getting Kalpas on 7F to pick up breach.<br><br>
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, and <span>${data.griseo.regular.black}</span> as reinforcement.`
		}
	]
};
// Infinite Ouroboros
const mobius: Guide = {
	name: 'Infinite Ouroboros',
	acr: 'mobius',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][9],
				data.buffs[3][4]
			],
			signet: {
				main: [
					[data.mobius, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.sakura, '1'],
					[data.kalpas, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.forbiddenSeed, data.boundlessLogos],
				[data.rainbowOfAbsence, data.boundlessLogos],
				[data.ruinedLegacy, data.boundlessLogos]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.baim, data.lint, data.linm, data.linb],
				[data.hawp, data.hant, data.hanm, data.hanb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Ascension',
						'Dark Assault'
					],
					[data.second]: [
						'Ill Fortune'
					],
					[data.optional]: [
						'Mirage',
						'Ravenousness'
					]
				},
				main: {
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle,
						data.mobius.nexus1.reduce
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.sakura.name]: [
						data.sakura.regular.vuln,
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.spRestore,
						data.sakura.nexus1.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.regular.hp,
						data.kalpas.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Eden's signet <span>${data.eden.regular.spCapInitial}</span> to speed up rotations.`
		}
	]
};
// Starchasm Nyx
const nyx: Guide = {
	name: 'Starchasm Nyx',
	acr: 'nyx',
	version: '6.1',
	builds: [
		{
			signet: {
				transitional: [
					[data.hua, '2']
				],
				main: [
					[data.vv, '2']
				],
				secondary: [
					[data.kosma, '2'],
					[data.kalpas, '2'],
					[data.griseo, '2']
				]
			},
			emblem: [
				[data.memory, data.fallingInPastLight],
				[data.psuedoMiracle, data.becauseOfYou],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.ae], [data.hb] ]
			],
			gear: [
				[data.saun, data.vert, data.verm, data.verb],
				[data.saga, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Frigidity'
					],
					[data.first]: [
						'Toxic Bath'
					],
					[data.second]: [
						'Abyssal Gaze',
						'Cocoon Break'
					],
					[data.no]: [
						'Nightmare'
					]
				},
				transitional: {
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachPhys,
						data.hua.nexus2.name
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln
					]
				},
				secondary: {
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					]
				}
			},
			notes: `Can pick Sakura's signets <span>${data.sakura.regular.vuln}</span> and <span>${data.sakura.regular.speed}</span> as reinforcement.`
		}
	]
};
// Reveris Calico
const pardo: Guide = {
	name: 'Reverist Calico',
	acr: 'pardo',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][13],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.aponia, '1'],
					[data.su, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.vv, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.lightAsABodhiLeaf, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.bke], [data.vke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.puph, data.brot, data.wilm, data.brob],
				[data.hawp, data.bast, data.basm, data.basb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Cat\'s Eyes',
						'Hidden Claws'
					],
					[data.no]: [
						'the Tailpiece',
						'Nighteye',
						'Phantasma'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.regular.spRestore,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.vuln,
						data.su.nexus1.breachPhysEle
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.regular.curr,
						data.pardofelis.regular.currKill,
						data.pardofelis.nexus1.name,
						data.pardofelis.nexus1.breachPhysEle
					]
				},
				optional: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus1.name
					]
				}
			},
			notes: `Recommended to adapt to what is in the shop to unlock more nexus, other than Su that needs enhanced, others only need to unlock nexus; if unlocking Kalpas nexus, lower HP on shop floor with BR.<br><br>
					Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, <span>${data.kalpas.regular.dmgPhysEle}</span>, and <span>${data.kalpas.regular.hp}</span>, or Griseo's signets <span>${data.griseo.regular.red}</span> (buy from shop), <span>${data.griseo.regular.black}</span>, and <span>${data.griseo.regular.yellow}</span> as reinforcements.`
		}
	]
};
// Palatinus Equinox
const pe: Guide = {
	name: 'Palatinus Equinox',
	acr: 'pe',
	version: '6.1',
	builds: [
		{
			signet: {
				transitional: [
					[data.vv, '1']
				],
				main: [
					[data.griseo, '2']
				],
				secondary: [
					[data.aponia, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.farawayShip, data.fallingInPastLight]
			],
			support: [
				[ [data.ss], [data.bke] ],
				[ [data.ss], [data.br] ]
			],
			gear: [
				[data.miat, data.biat, data.biam, data.biab],
				[data.miec, data.mict, data.danm, data.micb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Exodus'
					],
					[data.first]: [
						'Abyssal Chant'
					],
					[data.second]: [
						'Commitment',
						'Equinox'
					],
					[data.no]: [
						'Gallop'
					]
				},
				transitional: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.nexus1.name
					]
				},
				main: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.blue,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange,
						data.griseo.nexus2.green,
						data.griseo.nexus2.purple
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln
					]
				}
			},
			notes: `<p>${data.griseo.nexus2.purple}</p>Priority.`
		}
	]
};
// Midnight Absinthe
const raven: Guide = {
	name: 'Midnight Absinthe',
	acr: 'raven',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.vv, '2']
				],
				secondary: [
					[data.aponia, '2'],
					[data.griseo, '1'],
					[data.eden, '2'],
					[data.sakura, '2']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Ominous Mist'
					],
					[data.first]: [
						'Arrowhead'
					],
					[data.no]: [
						'Raven Plume',
						'Suppression',
						'Wild Hunt'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln,
						data.vv.nexus2.gravField
					]
				},
				secondary: {
					[data.aponia.name]: [
						data.aponia.regular.dmgReduc,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.nexus2.name
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.nexus2.name
					]
				}
			},
			notes: `<p>${data.vv.nexus2.breachPhysEle}, ${data.vv.nexus2.vuln}</p>Priority.<br><br>
					<p>${data.aponia.nexus2.breachPhysEle}</p>If lacking breach.<br><br>
					<p>Griseo</p>Buy signets in shop if possible.`
		}
	]
};
// Ritual Imayoh
const ri: Guide = {
	name: 'Ritual Imayoh',
	acr: 'ri',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.aponia, '2'],
					[data.kevin, '1']
				],
				secondary: [
					[data.griseo, '2'],
					[data.sakura, '2'],
					[data.pardofelis, '1']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Prosperity'
					],
					[data.first]: [
						'Dawn'
					],
					[data.second]: [
						'Blossom'
					],
					[data.no]: [
						'Fertility',
						'Torch'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.kevin.name]: [
						data.kevin.regular.breachPhys,
						data.kevin.nexus1.name
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.vuln,
						data.sakura.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Stygian Nymph
const sn: Guide = {
	name: 'Stygian Nymph',
	acr: 'sn',
	version: '5.9',
	builds: [
		{
			signet: {
				transitional: [
					[data.sakura, '1']
				],
				main: [
					[data.kosma, '2'],
					[data.hua, '2']
				],
				secondary: [
					[data.kalpas, '2'],
					[data.griseo, '2']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Vurnerable Duality'
					],
					[data.first]: [
						'Intergrowth'
					],
					[data.second]: [
						'Kindred',
						'Might of Duality',
						'Union'
					]
				},
				transitional: {
					[data.sakura.name]: [
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.nexus1.name
					]
				},
				main: {
					[data.kosma.name]: [
						data.kosma.regular.extend,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus2.name,
						data.kosma.nexus2.hpRestore,
						data.kosma.nexus2.breachPhysEle,
						data.kosma.nexus2.dmgPhysEle
					],
					[data.hua.name]: [
						data.hua.regular.dmgReduc,
						data.hua.nexus2.name,
						data.hua.nexus2.extend
					]
				},
				secondary: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.yellow
					]
				}
			},
			notes: `<p>${data.sakura.regular.evasionAdd}</p>If not SS.<br><br>
					<p>${data.kosma.nexus2.breachPhysEle}</p>Priority.<br><br>
					<p>${data.hua.regular.dmgReduc}</p>Recommended to upgrade.`
		}
	]
};
// Spina Astera
const spa: Guide = {
	name: 'Spina Astera',
	acr: 'spa',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[0][6],
				data.buffs[3][6],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.griseo, '1'],
					[data.kevin, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.becauseOfYou],
				[data.lightAsABodhiLeaf, data.theLonelyMoon],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.vke], [data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.asdi, data.ragt, data.ragm, data.ragb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Alrescha',
						'Wild Flare'
					],
					[data.second]: [
						'Star Quillon',
						'Radiant Formation'
					],
					[data.optional]: [
						'Holy Flame'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name,
						data.eden.nexus1.spRestore
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.nexus1.name
					],
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgEle,
						data.kevin.regular.breachEle,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `If using Fire G4 T, can use Kalpas1 nexus as reinforcement (prone to random death); During mid-late, use ulti whenever possible; use VKE+BKE support before 12F.<br><br>
					Can pick Kalpas's signet <span>${data.pardofelis.regular.vuln}</span> as reinforcement.`
		}
	]
};
// Sixth Serenade
const ss: Guide = {
	name: 'Sixth Serenade',
	acr: 'ss',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][13],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.sakura, '2'],
					[data.su, '1'],
					[data.pardofelis, '1'],
					[data.aponia, '2']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.forgetMeNot, data.dreamfulGold],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br, data.rc] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Nocturnal Tides',
						'Finale'
					],
					[data.first]: [
						'Tragedy'
					],
					[data.optional]: [
						'Expiation',
						'Raven Eye'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.sakura.name]: [
						data.sakura.regular.dmgTotal,
						data.sakura.regular.evasionAdd,
						data.sakura.regular.vuln,
						data.sakura.regular.evasionReset,
						data.sakura.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name
					]
				}
			},
			notes: `Recommended to reset for 2F Tragedy; Eden SP recovery can improve rotations, recommended to buy from shop.<br><br>
					Can pick Griseo's signets <span>${data.griseo.regular.red}</span>, <span>${data.griseo.regular.yellow}</span>, and <span>${data.griseo.regular.grey}</span> as reinforcement.`
		}
	]
};
// Jade Knight
const sus: Guide = {
	name: 'Jade Knight',
	acr: 'sus',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[2][13]
			],
			signet: {
				main: [
					[data.eden, '2']
				],
				secondary: [
					[data.su, '2'],
					[data.griseo, '1'],
					[data.hua, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.rainbowOfAbsence, data.outOfReach],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.vke] ],
				[ [data.le], [data.br, data.rc] ]
			],
			gear: [
				[data.nost, data.list, data.lism, data.lisb],
				[data.codu, data.wilt, data.wilm, data.wilb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Cloudwalker',
						'Great Blade'
					],
					[data.no]: [
						'Jade Moon',
						'Shaft',
						'Smoky Waft'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus2.name
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.dmgTotal,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.grey,
						data.griseo.regular.blue,
						data.griseo.nexus1.name,
						data.griseo.nexus1.purple,
						data.griseo.nexus1.orange
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Use LE immediately after 4F starts then cast ultimate, free SP; recommended to swap sigils on 5F, try to buy 1 Griseo signet, unlock nexus on 7F then grab enhanced.<br><br>
					Can pick Kalpas's signets <span>${data.kalpas.regular.dmgTotal}</span>, and <span>${data.kalpas.regular.dmgPhysEle}</span> as reinforcement.`
		}
	]
};
// Shadow Knight
const sk: Guide = {
	name: 'Shadow Knight',
	acr: 'sk',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[3][4],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.kalpas, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.hua, '2'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.sakura, '1']
				]
			},
			emblem: [
				[data.madKingsMask, data.anOldPalsLegacy],
				[data.lightAsABodhiLeaf, data.anOldPalsLegacy],
				[data.heavyAsAMillionLives, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.bke] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.nure, data.zent, data.zenm, data.zenb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Forces',
						'Lunar Eclipse'
					],
					[data.optional]: [
						'Mindfulness'
					],
					[data.no]: [
						'Form & Spirit',
						'Six Fists'
					]
				},
				main: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.hp,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire,
						data.kalpas.nexus1.dmgBonus
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.spRestore,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.hua.name]: [
						data.hua.regular.dmgTotal,
						data.hua.regular.dmgEle,
						data.hua.regular.breachEle,
						data.hua.nexus2.name,
						data.hua.nexus2.stackCap
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.sakura.name]: [
						data.sakura.regular.vuln,
						data.sakura.regular.dmgTotal
					]
				}
			},
			notes: `Can pick Aponia's signets <span>${data.aponia.regular.spRestore}</span>, <span>${data.aponia.regular.dmgPhysEle}</span>, and <span>${data.aponia.regular.vuln}</span>, or Eden's signets <span>${data.eden.regular.dmgTotal}</span>, and <span>${data.eden.regular.dmgPhysEle}</span> (must have Su's signet <span>${data.su.regular.spRestore}</span>) as reinforcement.`
		}
	]
};
// Silverwing N-EX
const sw: Guide = {
	name: 'Silverwing N-EX',
	acr: 'sw',
	version: '6.4',
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][4],
				data.buffs[2][4],
				data.buffs[3][3]
			],
			signet: {
				main: [
					[data.aponia, '2']
				],
				secondary: [
					[data.hua, '2'],
					[data.su, '2'],
					[data.griseo, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.veilOfTears, data.outOfReach],
				[data.memory, data.outOfReach],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vc, data.br] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.fafl, data.brot, data.brom, data.brob],
				[data.hawp, data.elyt, data.elym, data.elyb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Phantom Plumes'
					],
					[data.first]: [
						'Grey Falcon'
					],
					[data.second]: [
						'Silver Eagle'
					],
					[data.no]: [
						'Pale Feathers',
						'Sharp Eyes'
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgTotal,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.hua.name]: [
						data.hua.regular.dmgEle,
						data.hua.regular.dmgTotal,
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					],
					[data.su.name]: [
						data.su.regular.spRestore,
						data.su.regular.vuln,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can pick Kalpas and Eden signets as reinforcement.<br><br>
					<p>${data.aponia.nexus2.breachPhysEle}</p>Priority.`
		}
	]
};
// Terminal Aide 0017
const ta: Guide = {
	name: 'Terminal Aide 0017',
	acr: 'ta',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[2][13]
			],
			signet: {
				main: [
					[data.vv, '1']
				],
				secondary: [
					[data.kevin, '1'],
					[data.griseo, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.eden, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.burden, data.fallingInPastLight],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.ss], [data.sa] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Guilding',
						'Recursion'
					],
					[data.optional]: [
						'Restructuring'
					],
					[data.no]: [
						'Override',
						'Stimulus'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus1.name,
						data.vv.nexus1.breachPhys
					]
				},
				secondary: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgPhys,
						data.kevin.regular.breachPhys,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect
					],
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.regular.black,
						data.griseo.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigils on 6F, roll Vill-V on 7F to pick up enhanced; don't take BR to reduce HP.<br><br>
					Can pick Su's signets <span>${data.su.regular.vuln}</span>, <span>${data.su.regular.combo25}</span>, and <span>${data.su.regular.combo60}</span> as reinforcement.`
		}
	]
};
// Striker Fulminata
const vb: Guide = {
	name: 'Striker Fulminata',
	acr: 'vb',
	version: '5.9',
	builds: [
		{
			signet: {
				transitional: [
					[data.su, '2']
				],
				main: [
					[data.kevin, '1']
				],
				secondary: [
					[data.griseo, '2'],
					[data.aponia, '2'],
					[data.eden, '2']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Current'
					],
					[data.first]: [
						'Karma'
					],
					[data.second]: [
						'Idea',
						'Thunder'
					],
					[data.no]: [
						'Zanshin'
					]
				},
				transitional: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.spRestore,
						data.su.regular.combo60,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.breachPhys,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect,
						data.kevin.nexus1.dur
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name
					],
					[data.aponia.name]: [
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.vuln
					],
					[data.eden.name]: [
						data.eden.regular.dmgReduc,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.nexus2.name
					]
				}
			},
			notes: `<p>Recommended Gear</p>Build 2: If not enough breach or impair, pick breach from signets.<br><br>
					<p>${data.su.regular.combo25}, ${data.su.regular.combo60}</p>Buy from shop if possible.<br><br>
					<p>${data.griseo.regular.grey}, ${data.eden.regular.dmgReduc}</p>If needed.`
		}
	]
};
// Twilight Paladin
const ve: Guide = {
	name: 'Twilight Paladin',
	acr: 've',
	version: '5.9',
	builds: [
		{
			signet: {
				main: [
					[data.su, '2'],
					[data.aponia, '2']
				],
				secondary: [
					[data.griseo, '2'],
					[data.eden, '2'],
					[data.pardofelis, '1']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Banishment'
					],
					[data.first]: [
						'Penalty'
					],
					[data.second]: [
						'Dusk'
					],
					[data.reinforcement]: [
						'Radiance',
						'Sanction'
					]
				},
				main: {
					[data.su.name]: [
						data.su.regular.combo25,
						data.su.regular.spRestore,
						data.su.regular.vuln,
						data.su.regular.dmgTotal
					],
					[data.aponia.name]: [
						data.aponia.regular.basicAtk,
						data.aponia.regular.dmgPhysEle,
						data.aponia.nexus2.name,
						data.aponia.nexus2.breachPhysEle
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus2.name,
						data.griseo.nexus2.orange
					],
					[data.eden.name]: [
						data.eden.regular.dmgPhysEle,
						data.eden.regular.dmgTotal,
						data.eden.nexus2.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `<p>Su</p>Don't pick enhanced signets. Double Ego start.<br><br>
					<p>${data.su.regular.spRestore}</p>Priority.<br><br>
					<p>${data.griseo.nexus2.orange}</p>If lacking breach.`
		}
	]
};
// Valkyrie Gloria
const vg: Guide = {
	name: 'Valkyrie Gloria',
	acr: 'vg',
	version: '5.9',
	builds: [
		{
			signet: {
				transitional: [
					[data.kalpas, '1']
				],
				main: [
					[data.aponia, '2']
				],
				secondary: [
					[data.vv, '2'],
					[data.griseo, '1'],
					[data.hua, '2']
				]
			},
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
			signetTable: {
				exclusive: {
					[data.start]: [
						'Battle Song'
					],
					[data.first]: [
						'Gloria'
					],
					[data.no]: [
						'Impetus',
						'Sol',
						'Triumph'
					]
				},
				transitional: {
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.nexus1.name
					]
				},
				main: {
					[data.aponia.name]: [
						data.aponia.regular.spRestore,
						data.aponia.regular.dmgPhysEle,
						data.aponia.regular.vuln,
						data.aponia.nexus2.name,
						data.aponia.nexus2.dmgPhysEle,
						data.aponia.nexus2.breachPhysEle,
						data.aponia.nexus2.vuln
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln
					],
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow
					],
					[data.hua.name]: [
						data.hua.regular.breachEle,
						data.hua.nexus2.name
					]
				}
			},
			notes: `<p>${data.aponia.nexus2.dmgPhysEle}, ${data.aponia.nexus2.breachPhysEle}</p>Priority.<br><br>
					<p>${data.vv.nexus2.breachPhysEle}</p>If lacking breach.`
		}
	]
};
// Helical Contraption
const villv: Guide = {
	name: 'Helical Contraption',
	acr: 'villv',
	version: '6.8',
	builds: [
		{
			buff: [
				data.buffs[1][4],
				data.buffs[1][7],
				data.buffs[3][10]
			],
			signet: {
				main: [
					[data.vv, '2'],
					[data.mobius, '1']
				],
				secondary: [
					[data.griseo, '1'],
					[data.su, '2']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.forbiddenSeed, data.fallingInPastLight],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.vc, data.vke] ],
				[ [data.ma], [data.ae, data.rc] ]
			],
			gear: [
				[data.topa, data.cart, data.carm, data.carb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Facade',
						'Sleight'
					],
					[data.optional]: [
						'Reversal'
					],
					[data.no]: [
						'Assemblage',
						'Transmission'
					]
				},
				main: {
					[data.vv.name]: [
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.dmgRanged,
						data.vv.nexus2.name,
						data.vv.nexus2.breachPhysEle,
						data.vv.nexus2.vuln,
						data.vv.nexus2.gravField
					],
					[data.mobius.name]: [
						data.mobius.regular.vuln,
						data.mobius.regular.dmgEntity,
						data.mobius.regular.dmgTotal,
						data.mobius.nexus1.name,
						data.mobius.nexus1.dmgTotal,
						data.mobius.nexus1.breachPhysEle
					]
				},
				secondary: {
					[data.griseo.name]: [
						data.griseo.regular.black,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					],
					[data.su.name]: [
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.dmgTotal,
						data.su.nexus2.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Can buy Sakura's signet <span>${data.sakura.regular.dmgTotal}</span>, or Eden's signets <span>${data.eden.regular.dmgPhysEle}</span>, and <span>${data.eden.regular.dmgTotal}</span> as reinforcement.`
		}
	]
};
// Valkyrie Quicksand
const vq: Guide = {
	name: 'Valkyrie Quicksand',
	acr: 'vq',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[3][6]
			],
			signet: {
				main: [
					[data.eden, '1']
				],
				secondary: [
					[data.vv, '1'],
					[data.kosma, '1'],
					[data.pardofelis, '1']
				],
				optional: [
					[data.griseo, '1']
				]
			},
			emblem: [
				[data.goldGoblet, data.dreamfulGold],
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.farawayShip, data.dreamfulGold]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.ss], [data.br, data.sa] ]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Dappled Shade',
						'Luster'
					],
					[data.optional]: [
						'Rarities'
					],
					[data.no]: [
						'Tambourine',
						'Whimsy'
					]
				},
				main: {
					[data.eden.name]: [
						data.eden.regular.dmgTotal,
						data.eden.regular.dmgPhysEle,
						data.eden.regular.spCapInitial,
						data.eden.nexus1.name
					]
				},
				secondary: {
					[data.vv.name]: [
						data.vv.regular.dmgWeap,
						data.vv.regular.vuln,
						data.vv.regular.dmgTotal,
						data.vv.regular.spRestore,
						data.vv.nexus1.name,
						data.vv.nexus1.blades,
						data.vv.nexus1.breachPhys
					],
					[data.kosma.name]: [
						data.kosma.regular.atk,
						data.kosma.regular.ult,
						data.kosma.regular.evasion,
						data.kosma.nexus1.name
					],
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				},
				optional: {
					[data.griseo.name]: [
						data.griseo.regular.red,
						data.griseo.regular.black
					]
				}
			},
			notes: `Recommended to swap sigils on 5F, try to buy 1 Vill-V signet, unlock Vill-V nexus on 7F then grab enhanced.<br><br>
					Can pick Kalpas's signet <span>${data.kalpas.regular.vuln}</span> as reinforcement.<br><br>
					<p>${data.vv.nexus1.breachPhys}</p>Priority.<br><br>
					<p>${data.griseo.regular.red}</p>Buy from shop.`
		}
	]
};
// Vermilion Knight: Eclipse
const vkek: Guide = {
	name: 'Vermilion Knight: Eclipse',
	acr: 'vke',
	version: '6.9',
	builds: [
		{
			buff: [
				data.buffs[0][6],
				data.buffs[1][7],
				data.buffs[2][7],
				data.buffs[3][11]
			],
			signet: {
				main: [
					[data.kevin, '1']
				],
				secondary: [
					[data.su, '1'],
					[data.kalpas, '1'],
					[data.griseo, '1']
				],
				optional: [
					[data.pardofelis, '1']
				]
			},
			emblem: [
				[data.burden, data.itWillBeWritten],
				[data.lightAsABodhiLeaf, data.anOldPalsLegacy],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.br], [data.ae, data.rc] ]
			],
			gear: [
				[data.shur, data.ragt, data.brdm, data.ragb],
				[data.sumu, data.aslt, data.aslm, data.aslb]
			],
			signetTable: {
				exclusive: {
					[data.start]: [
						'Blaze',
						'Sharp Flames'
					],
					[data.second]: [
						'Wild Flare'
					],
					[data.no]: [
						'Burning Flow',
						'Fiery Mind'
					]
				},
				main: {
					[data.kevin.name]: [
						data.kevin.regular.dmgTotal,
						data.kevin.regular.dmgEle,
						data.kevin.regular.breachEle,
						data.kevin.regular.spRestore,
						data.kevin.nexus1.name,
						data.kevin.nexus1.effect
					]
				},
				secondary: {
					[data.su.name]: [
						data.su.regular.dmgTotal,
						data.su.regular.vuln,
						data.su.regular.combo25,
						data.su.regular.combo60,
						data.su.nexus1.name,
						data.su.nexus1.breachPhysEle,
						data.su.nexus1.vuln
					],
					[data.kalpas.name]: [
						data.kalpas.regular.dmgTotal,
						data.kalpas.regular.dmgPhysEle,
						data.kalpas.regular.vuln,
						data.kalpas.nexus1.name,
						data.kalpas.nexus1.fire
					],
					[data.griseo.name]: [
						data.griseo.regular.grey,
						data.griseo.regular.red,
						data.griseo.regular.yellow,
						data.griseo.nexus1.name
					]
				},
				optional: {
					[data.pardofelis.name]: [
						data.pardofelis.regular.dmgTotal,
						data.pardofelis.regular.dmgPhysEle,
						data.pardofelis.regular.spHpCap,
						data.pardofelis.nexus1.name
					]
				}
			},
			notes: `Recommended to swap sigils on 5F shop, try to buy 1 Su signet, unlock nexus on 7F then pick enhanced, bring Kevin's support sigil at tthe start to deal with the 4F wave 3 mob.<br><br>
					Can pick Eden's signets <span>${data.eden.regular.dmgPhysEle}</span> and <span>${data.eden.regular.dmgTotal}</span> as reinforcement.`
		}
	]
};
export const valks: any[] = [
	aka,	bke,	cn,		da,		aponia,	dw,		fr,		mc,		eden,	gm,
	villv,	hofi, 	hofs,	hoh,	hoo,	hor,	horb,	hos,	hov,	hot,
	hotr,	mobius,	sus, 	lk, 	raven,	sirin, 	elysia,	pe,		fischl,	pardo,
	ri,		sk,		sw,		ss,		spa,	griseo,	nyx,	sn,		vb,		kira,
	carole,	ta,		ve,		vg,		vq,		vkek
];
export const valksLength: number = valks.length;
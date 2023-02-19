import * as data from './data';

type Signet = [data.Signets, '1' | '2']
type Gear = [data.NameAcr, data.NameAcr, data.NameAcr, data.NameAcr]
type Emblem = [data.NameAcr, data.NameAcr]
type Guide = {
	name: string;
	acr: string;
	rating: string;
	builds:
		{
			name?: string
			buff?: any
			signet: Array<Array<Signet>>
			emblem: Array<Emblem>
			support: Array<Array<Array<data.NameAcr>>>
			gear?: Array<Gear>
			signetTable: Array<Array<Array<string>>>
			notes?: string;
		}[]
}
// Argent Knight: Artemis
const aka: Guide = {
	name: 'Argent Knight: Artemis',
	acr: 'aka',
	rating: data.corruption,
	builds: [
		{
			signet: [ // transitional (optional), main, secondary
				[
					[data.hua, '2'],
					[data.mobius, '1'],
					[data.vv, '2']
				],
				[
					[data.griseo, '1'],
					[data.aponia, '2']
				]
			],
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
					[data.hua.name, '4', data.hua.regular[1]],
					[data.hua.regular[3]],
					[data.hua.regular[6]],
					[data.hua.nexus2.name],
					[data.mobius.name, '6', data.mobius.regular[2]],
					[data.mobius.regular[3]],
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
					[data.griseo.name, '5', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus1.name],
					[data.griseo.nexus1[2]],
					[data.aponia.name, '4', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name]
				]
			]
		}
	]
};
// Disciplinary Perdition
const aponia: Guide = {
	name: 'Disciplinary Perdition',
	acr: 'aponia',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[3][0],
				data.buffs[3][1]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.kalpas, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
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
					[data.aponia.name, '8', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.regular[6]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3], ''],
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
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.sakura.name, '2', data.sakura.regular[2]],
					[data.sakura.regular[5]]
				]
			],
			notes: `Sakura signets are optional.<br><br>
					<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}, ${data.griseo.nexus2[1]}</p>Priority.`
		}
	]
};
// Bright Knight: Excelsis
const bke: Guide = {
	name: 'Bright Knight: Excelsis',
	acr: 'bke',
	rating: data.abstinence,
	builds: [
		{
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
	]
};
// Sweet 'n' Spicy
const carole: Guide = {
	name: 'Sweet \'n\' Spicy',
	acr: 'carole',
	rating: data.abstinence,
	builds: [
		{
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
	]
};
// Chrono Navi
const cn: Guide = {
	name: 'Chrono Navi',
	acr: 'cn',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.vv, '1'],
					[data.griseo, '2'],
					[data.kalpas, '2'],
					[data.su, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.veilOfTears, data.fallingInPastLight],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.rudr, data.chrt, data.chrm, data.chrb],
				[data.hawp, data.ragt, data.tham, data.ragb]
			],
			signetTable: [
				[
					['Succession', data.start],
					['Time Crystal', data.first],
					['Bladepiece', data.second, '2'],
					['Constant'],
					['Final Dream', data.optional]
				],
				[
					[data.aponia.name, '6', data.aponia.regular[2]],
					[data.aponia.regular[4]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.vv.name, '6', data.vv.regular[1]],
					[data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[4]],
					[data.vv.regular[5]],
					[data.vv.nexus1.name],
					[data.griseo.name, '4', data.griseo.regular[1]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.kalpas.name, '5', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.su.name, '5', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name]
				]
			],
			notes: `Su signets are optional.<br><br>
					Can pick Eden's signets <span>${data.eden.regular[2]}</span> and <span>${data.eden.regular[3]}</span> as reinforcements.<br><br>
					<p>1st Shop Emblem</p>Can also pick Pseudo Miracle.<br><br>`
		}
	]
};
// Dea Anchora
const da: Guide = {
	name: 'Dea Anchora',
	acr: 'da',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.kevin, '1'],
					[data.aponia, '2']
				],
				[
					[data.eden, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			],
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
			signetTable: [
				[
					['Stars', data.start],
					['Sheen', data.first],
					['Halo', data.second],
					['Brilliance', data.no, '2'],
					['Gale']
				],
				[
					[data.kevin.name, '5', data.kevin.regular[1]],
					[data.kevin.regular[2]],
					[data.kevin.regular[3]],
					[data.kevin.regular[6]],
					[data.kevin.nexus1.name],
					[data.aponia.name, '5', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.eden.name, '5', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus2.name],
					[data.eden.nexus2[3]],
					[data.griseo.name, '2', data.griseo.regular[1]],
					[data.griseo.regular[6]],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `Can pick Kalpas's signet <span>${data.kalpas.regular[3]}</span> as reinforcement.`
		}
	]
};
// Golden Diva
const eden: Guide = {
	name: 'Golden Diva',
	acr: 'eden',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.kalpas, '2'],
					[data.kosma, '2'],
					[data.pardofelis, '1'],
					[data.griseo, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.madKingsMask, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
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
					['Fugue', data.optional],
					['Cadenza', data.no, '2'],
					['Conerto']
				],
				[
					[data.aponia.name, '7', data.aponia.regular[1]],
					[data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3]]
				],
				[
					[data.kalpas.name, '5', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name],
					[data.kalpas.nexus2[3]],
					[data.kosma.name, '4', data.kosma.regular[3]],
					[data.kosma.regular[4]],
					[data.kosma.regular[5]],
					[data.kosma.nexus2.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.griseo.name, '3', data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]]
				]
			],
			notes: `<p>${data.aponia.nexus2[2]}</p>Priority.`
		}
	]
};
// Miss Pink Elf
const elysia: Guide = {
	name: 'Miss Pink Elf♪',
	acr: 'elysia',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[1][0],
				data.buffs[2][0],
				data.buffs[3][0]
			],
			signet: [
				[
					[data.vv, '2'],
					[data.aponia, '2']
				],
				[
					[data.griseo, '2'],
					[data.su, '2'],
					[data.kalpas, '2']
				]
			],
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
			signetTable: [
				[
					['Purity', data.start, '2'],
					['Zenith'],
					['Beauty', data.optional],
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
					[data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3]]
				],
				[
					[data.griseo.name, '2', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.su.name, '3', data.su.regular[3]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.kalpas.name, '3', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]]
				]
			],
			notes: `Kalpas Signets are optional.<br><br>
					Can pick Eden's signets <span>${data.eden.regular[2]}</span> and <span>${data.eden.regular[3]}</span> as reinforcment, but should als pick Su's signet <span>${data.su.regular[2]}</span> as well.<br><br>
					<p>${data.vv.nexus2[1]}</p>Fully upgrade.<br><br>
					<p>${data.aponia.nexus2[2]}</p>Priority.`
		}
	]
};
// Prinzessin der Verurteilung
const fischl: Guide = {
	name: 'Prinzessin der Verurteilung',
	acr: 'fischl',
	rating: data.abstinence,
	builds: [
		{
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
	]
};
// Fallen Rosemary
const fr: Guide = {
	name: 'Fallen Rosemary',
	acr: 'fr',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][2],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.kevin, '1']
				],
				[
					[data.griseo, '1'],
					[data.eden, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.burden, data.dreamfulGold],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.irhe, data.hant, data.hanm, data.hanb],
				[data.irhe, data.iret, data.irem, data.ireb]
			],
			signetTable: [
				[
					['Valfreyja', data.start],
					['Nocturne', data.first],
					['God Eater', data.second],
					['Soul Siphon', data.optional, '2'],
					['Spirit Servants']
				],
				[
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.kevin.name, '4', data.kevin.regular[2]],
					[data.kevin.regular[3]],
					[data.kevin.regular[6]],
					[data.kevin.nexus1.name]
				],
				[
					[data.griseo.name, '4', data.griseo.regular[1]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.eden.name, '4', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus2.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[2]],
					[data.pardofelis.regular[4]]
				]
			],
			// eslint-disable-next-line
			notes: `Pardofelis signets are optional.`
		}
	]
};
// Fervent Tempo
const mc: Guide = {
	name: 'Fervent Tempo',
	acr: 'mc',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.griseo, '2']
				],
				[
					[data.aponia, '2'],
					[data.kevin, '1'],
					[data.vv, '1'],
					[data.pardofelis, '1']
				]
			],
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
			signetTable: [
				[
					['Silence', data.start],
					['Mixing', data.first],
					['Fervor', data.second],
					['Solitude', data.reinforcement],
					['Thorns', data.no]
				],
				[
					[data.griseo.name, '8', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.griseo.regular[5]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]]
				],
				[
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.kevin.name, '5', data.kevin.regular[3]],
					[data.kevin.regular[4], ''],
					[data.kevin.regular[5]],
					[data.kevin.regular[6]],
					[data.kevin.nexus1.name],
					[data.vv.name, '3', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.nexus1.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `Kevin, Vill-V, and Pardofelis signets are optional.<br><br>
					Can pick Su/Sakura signets as reinforcement.<br><br>
					<p>${data.kevin.regular[4]}</p>Upgrade twice.`
		}
	]
};
// Goushinnso Memento
const gm: Guide = {
	name: 'Goushinnso Memento',
	acr: 'gm',
	rating: data.corruption,
	builds: [
		{
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
	]
};
// Starry Impression
const griseo: Guide = {
	name: 'Starry Impression',
	acr: 'griseo',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.griseo, '2']
				],
				[
					[data.mobius, '1'],
					[data.su, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '1']
				]
			],
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.forbiddenSeed, data.itWillBeWritten],
				[data.theFirstScale, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.bke] ],
				[ [data.br], [data.dp, data.ss] ]
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
					['Azure Wind', data.no, '2'],
					['Feathers']
				],
				[
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
					[data.mobius.name, '8', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[4]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.mobius.nexus1[1], ''],
					[data.mobius.nexus1[2], ''],
					[data.mobius.nexus1[3]],
					[data.su.name, '5', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.sakura.name, '3', data.sakura.regular[2]],
					[data.sakura.regular[5]],
					[data.sakura.nexus1.name]
				]
			],
			notes: `Can pick Kalpas signets as reinforcement.<br><br>
					<p>${data.griseo.nexus2[1]}, ${data.mobius.nexus1[1]}, ${data.mobius.nexus1[2]}</p>Priority.`
		}
	]
};
// Herrscher of Finality
const hofi: Guide = {
	name: 'Herrscher of Finality',
	acr: 'hofi',
	rating: data.corruption,
	builds: [
		{
			name: 'Ult',
			buff: [
				data.buffs[0][0],
				data.buffs[3][0],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.kevin, '1'],
					[data.pardofelis, '1'],
					[data.kalpas, '1'],
					[data.griseo, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.burden, data.theLonelyMoon],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.br] ],
				[ [data.ae], [data.br] ]
			],
			signetTable: [
				[
					['Finale Moon', data.start],
					['Rift', data.first],
					['Clarity', data.no, '3'],
					['Condescension'],
					['High Flames']
				],
				[
					[data.aponia.name, '6', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.regular[5]],
					[data.aponia.regular[6]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[3]]
				],
				[
					[data.kevin.name, '5', data.kevin.regular[1]],
					[data.kevin.regular[2]],
					[data.kevin.regular[3]],
					[data.kevin.regular[6]],
					[data.kevin.nexus1.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.kalpas.name, '5', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus1.name],
					[data.griseo.name, '3', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]]
				]
			],
			notes: `Griseo signets are optional.<br><br>
					Can pick Eden and Vill-V signets as reinforcement.`
		},
		{
			name: 'Combo',
			buff: [
				data.buffs[0][0],
				data.buffs[3][0],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.vv, '2'],
					[data.pardofelis, '1'],
					[data.eden, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.thornyCrown, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vke] ],
				[ [data.ae], [data.br] ]
			],
			signetTable: [
				[
					['Condescension', data.start],
					['Clarity', data.first, '2'],
					['High Flames'],
					['Finale Moon', data.second],
					['Rift', data.no]
				],
				[
					[data.aponia.name, '5', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[3]],
					[data.griseo.name, '8', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3], '']
				],
				[
					[data.vv.name, '7', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[4]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1], ''],
					[data.vv.nexus2[2]],
					[data.vv.nexus2[3]],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.eden.name, '4', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus2.name]
				]
			],
			notes: `Eden signets are optional.<br><br>
					Can pick Sakura signets as reinforcement.<br><br>
					Thorny Crown or Key to the Deep in 16F emblem.<br><br>
					<p>${data.griseo.nexus2[3]}</p>Priority.<br><br>
					<p>${data.vv.nexus2[1]}</p>If breach is not 63%.`
		}
	]
};
const hofs: Guide = {
	name: 'Herrscher of Flamescion',
	acr: 'hofs',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[3][1],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.kalpas, '2']
				],
				[
					[data.aponia, '2'],
					[data.griseo, '2'],
					[data.sakura, '1'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.madKingsMask, data.theLonelyMoon],
				[data.veilOfTears, data.becauseOfYou],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vke] ],
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
					['Tempered Warrior', data.first, '2'],
					['Reburn'],
					['Flamescion', data.optional]
				],
				[
					[data.kalpas.name, '5', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name]
				],
				[
					[data.aponia.name, '7', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.griseo.name, '9', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
					[data.sakura.name, '2', data.sakura.regular[2]],
					[data.sakura.regular[5]],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			]
		}
	]
};
// Herrscher of Human: Ego
const hoh: Guide = {
	name: 'Herrscher of Human: Ego',
	acr: 'hoh',
	rating: data.corruption,
	builds: [
		{
			name: 'Ult',
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][2],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.griseo, '2'],
					[data.vv, '2']
				],
				[
					[data.sakura, '1'],
					[data.pardofelis, '1'],
					[data.kalpas, '2']
				]
			],
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.hb], [data.bke] ],
				[ [data.hb], [data.ae, data.br] ]
			],
			gear: [
				[data.doeg, data.elpt, data.elpm, data.elpb],
				[data.hawp, data.wilt, data.wilm, data.wilb]
			],
			signetTable: [
				[
					['First Bloom', data.start, '2'],
					['First Journey'],
					['First Awakening', data.first],
					['First Encounter', data.no, '2'],
					['First Yearning']
				],
				[
					[data.griseo.name, '7', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
					[data.vv.name, '6', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[5]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1]],
					[data.vv.nexus2[2]]
				],
				[
					[data.sakura.name, '3', data.sakura.regular[2]],
					[data.sakura.regular[5]],
					[data.sakura.nexus1.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.kalpas.name, '2', data.kalpas.regular[1]],
					[data.kalpas.regular[2]]
				]
			],
			notes: 'Kalpas signets are optional.'
		},
		{
			name: 'Charge',
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][2],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.eden, '1'],
					[data.su, '2'],
					[data.kalpas, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.goldGoblet, data.theLonelyMoon],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.bke] ],
				[ [data.ae], [data.hb, data.br] ]
			],
			gear: [
				[data.doeg, data.elpt, data.elpm, data.elpb],
				[data.hawp, data.anat, data.anam, data.anab]
			],
			signetTable: [
				[
					['First Encounter', data.start, '2'],
					['First Yearning'],
					['First Bloom', data.optional],
					['First Awakening', data.no, '2'],
					['First Journey']
				],
				[
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3], '']
				],
				[
					[data.eden.name, '4', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus1.name],
					[data.su.name, '5', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
		}
	]
};
// Herrscher of Origin
const hoo: Guide = {
	name: 'Herrscher of Origin',
	acr: 'hoo',
	rating: data.corruption,
	builds: [
		{
			name: 'Ult',
			buff: [
				data.buffs[0][1],
				data.buffs[1][2],
				data.buffs[1][3],
				data.buffs[3][1]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.pardofelis, '1'],
					[data.kevin, '1'],
					[data.sakura, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
			],
			signetTable: [
				[
					['Ultra', data.start],
					['Inscription', data.first],
					['Expungement', data.no, '3'],
					['Lethal Smite'],
					['Nature']
				],
				[
					[data.aponia.name, '7', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3], ''],
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
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.kevin.name, '3', data.kevin.regular[1]],
					[data.kevin.regular[2]],
					[data.kevin.nexus1.name],
					[data.sakura.name, '2', data.sakura.regular[2]],
					[data.sakura.regular[5]]
				]
			],
			notes: `Sakura signets are optional.<br><br>
					Can pick Kalpas's signets <span>${data.kalpas.regular[1]}</span>, <span>${data.kalpas.regular[2]}</span>, and <span>${data.kalpas.regular[3]}</span> as reinforcements.<br><br>
					<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
		},
		{
			name: 'Combo',
			buff: [
				data.buffs[0][1],
				data.buffs[1][2],
				data.buffs[1][3],
				data.buffs[3][1]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.kalpas, '1'],
					[data.vv, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.rainbowOfAbsence, data.becauseOfYou],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
			],
			signetTable: [
				[
					['Nature', data.start],
					['Lethal Smite', data.first],
					['Expungement', data.second],
					['Inscription', data.no, '2'],
					['Ultra']
				],
				[
					[data.aponia.name, '7', data.aponia.regular[1]],
					[data.aponia.regular[2]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3], '']
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
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.kalpas.name, '3', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.vv.name, '2', data.vv.regular[2]],
					[data.vv.regular[4]]
				]
			],
			notes: `Kalpas and Vill-V signets are optional.<br><br>
					Can pick Eden's signets <span>${data.eden.regular[2]}</span>, and <span>${data.eden.regular[3]}</span>, and Sakura's signet <span>${data.sakura.regular[5]}</span> as reinforcements.<br><br>
					<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
		}
	]
};
// Herrscher of Reason
const hor: Guide = {
	name: 'Herrscher of Reason',
	acr: 'hor',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][2],
				data.buffs[2][2],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.hua, '2'],
					[data.sakura, '2']
				],
				[
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.su, '2']
				]
			],
			emblem: [
				[data.memory, data.becauseOfYou],
				[data.forgetMeNot, data.theLonelyMoon],
				[data.stainedSakura, data.dreamfulGold]
			],
			support: [
				[ [data.le], [data.ae, bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.sted, data.wilt, data.wilm, data.wilb],
				[data.dore, data.welt, data.welm, data.welb]
			],
			signetTable: [
				[
					['Wisdon', data.start],
					['Inspiration', data.first, '2'],
					['Truth'],
					['Creation', data.no, '2'],
					['Reason']
				],
				[
					[data.hua.name, '5', data.hua.regular[1]],
					[data.hua.regular[3]],
					[data.hua.regular[6]],
					[data.hua.nexus2.name],
					[data.hua.nexus2[1]],
					[data.sakura.name, '4', data.sakura.regular[3]],
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
					[data.griseo.nexus2[1], ''],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.su.name, '5', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name]
				]
			],
			notes: `Su signets are optional.<br><br>
					Can pick Eden's signet <span>${data.eden.regular[4]} to speed up rotations.<br><br>
					<p>${data.griseo.nexus2[1]}</p>Priority.`
		}
	]
};
// Herrscher of Sentience
const hos: Guide = {
	name: 'Herrscher of Sentience',
	acr: 'hos',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[3][0],
				data.buffs[3][1]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.kalpas, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.kosma, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.madKingsMask, data.theLonelyMoon],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.le, data.bke] ],
				[ [data.br], [data.ss] ]
			],
			gear: [
				[data.dose, data.dirt, data.dirm, data.rebb],
				[data.hawp, data.shst, data.shsm, data.shsb]
			],
			signetTable: [
				[
					['Dark Plumes', data.start, '2'],
					['Victory'],
					['Supremacy', data.first],
					['Legion', data.optional],
					['Ego', data.no]
				],
				[
					[data.aponia.name, '5', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[3]]
				],
				[
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name],
					[data.griseo.name, '8', data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1], ''],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
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
			notes: `Kosma signets are optional.<br><br>
					<p>${data.griseo.nexus2[1]}</p>Priority.`
		}
	]
};
// Herrscher of the Void
const hov: Guide = {
	name: 'Herrscher of the Void',
	acr: 'hov',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.vv, '2'],
					[data.sakura, '1'],
					[data.hua, '2']
				],
				[
					[data.griseo, '1'],
					[data.mobius, '1']
				]
			],
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.forgetMeNot, data.boundlessLogos],
				[data.stainedSakura, data.boundlessLogos]
			],
			support: [
				[ [data.ss], [data.bke] ],
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
					[data.vv.name, '7', data.vv.regular[1]],
					[data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1], ''],
					[data.vv.nexus2[2], ''],
					[data.vv.nexus2[3]],
					[data.sakura.name, '3', data.sakura.regular[3]],
					[data.sakura.regular[5]],
					[data.sakura.nexus1.name],
					[data.hua.name, '4', data.hua.regular[2]],
					[data.hua.regular[3]],
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
			notes: `<p>${data.vv.nexus2[1]}, ${data.vv.nexus2[2]}</p>Priority.<br><br>
					<p>Griseo</p>Can buy her signets in shop.<br><br>
					<p>Mobius</p>Can buy Su, Kalpas, and Eden signets from shop as further reinforcement.`
		}
	]
};
// Herrscher of Thunder
const hot: Guide = {
	name: 'Herrscher of Thunder',
	acr: 'hot',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[3][0],
				data.buffs[3][1]
			],
			signet: [
				[
					[data.griseo, '2']
				],
				[
					[data.kevin, '1'],
					[data.pardofelis, '1'],
					[data.vv, '1'],
					[data.sakura, '1']
				]
			],
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.burden, data.theLonelyMoon],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.sena, data.hant, data.hanm, data.hanb],
				[data.seru, data.bent, data.benm, data.benb]
			],
			signetTable: [
				[
					['Narukami', data.start],
					['Tsukuyomi', data.optional],
					['Divine Penalty', data.no, '3'],
					['Hazy Moon'],
					['Mitama']
				],
				[
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
					[data.kevin.name, '5', data.kevin.regular[1]],
					[data.kevin.regular[2]],
					[data.kevin.regular[3]],
					[data.kevin.regular[6]],
					[data.kevin.nexus1.name],
					[data.pardofelis.name, '6', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.pardofelis.nexus1[1]],
					[data.pardofelis.nexus1[2]],
					[data.vv.name, '4', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[5]],
					[data.vv.nexus1.name],
					[data.sakura.name, '2', data.sakura.regular[2]],
					[data.sakura.regular[5]]
				]
			],
			notes: `Sakura signets are optional.<br><br>
					Just pick one SP signet.`
		}
	]
};
// Herrscher of Truth
const hotr: Guide = {
	name: 'Herrscher of Truth',
	acr: 'hotr',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[3][1],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.mobius, '1'],
					[data.kevin, '1'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.boundlessLogos]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.hb], [data.ae, data.br] ]
			],
			signetTable: [
				[
					['Intellect Core', data.start],
					['Genuine Solution', data.first],
					['Vector', data.optional],
					['Continuation', data.no, '2'],
					['Konstruktion']
				],
				[
					[data.aponia.name, '7', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3], ''],
					[data.griseo.name, '9', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[4]],
					[data.griseo.regular[5]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]]
				],
				[
					[data.mobius.name, '4', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.kevin.name, '4', data.kevin.regular[2]],
					[data.kevin.regular[3]],
					[data.kevin.regular[5]],
					[data.kevin.nexus1.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `Pardofelis signets are optional.<br><br>
					Can pick Sakura's signets <span>${data.sakura.regular[1]}</span>, <span>${data.sakura.regular[2]}</span>, and <span>${data.sakura.regular[5]}</span> as reinforcement.<br><br>
					<p>Aponia</p>Don't pick <span>${data.aponia.regular[1]}</span> and <span>${data.aponia.regular[2]}</span>.<br><br>
					<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
		}
	]
};
// Luna Kindred
const lk: Guide = {
	name: 'Luna Kindred',
	acr: 'lk',
	rating: data.inferno,
	builds: [
		{
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
	]
};
// Infinite Ouroboros
const mobius: Guide = {
	name: 'Infinite Ouroboros',
	acr: 'mobius',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][2],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.mobius, '1'],
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.kalpas, '2'],
					[data.sakura, '1']
				]
			],
			emblem: [
				[data.forbiddenSeed, data.theLonelyMoon],
				[data.veilOfTears, data.boundlessLogos],
				[data.ruinedLegacy, data.boundlessLogos]
			],
			support: [
				[ [data.le], [data.ae, data.bke] ],
				[ [data.ae], [data.br] ]
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
					['Ravenousness', data.optional],
					['Mirage', data.no]
				],
				[
					[data.mobius.name, '4', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.griseo.name, '9', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]]
				],
				[
					[data.kalpas.name, '2', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.sakura.name, '3', data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[5]]
				]
			],
			notes: `Sakura signets are optional.<br><br>
					Can pick Eden's signet <span>${data.eden.regular[4]}</span> to speed up rotations.`
		}
	]
};
// Starchasm Nyx
const nyx: Guide = {
	name: 'Starchasm Nyx',
	acr: 'nyx',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.hua, '2']
				],
				[
					[data.vv, '2']
				],
				[
					[data.kosma, '2'],
					[data.kalpas, '2'],
					[data.griseo, '2']
				]
			],
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
			signetTable: [
				[
					['Frigidity', data.start],
					['Toxic Bath', data.first],
					['Abyssal Gaze', data.second, '2'],
					['Cocoon Break'],
					['Nightmare', data.no]
				],
				[
					[data.hua.name, '4', data.hua.regular[1]],
					[data.hua.regular[3]],
					[data.hua.regular[5]],
					[data.hua.nexus2.name]
				],
				[
					[data.vv.name, '5', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1]],
					[data.vv.nexus2[2]]
				],
				[
					[data.kosma.name, '4', data.kosma.regular[3]],
					[data.kosma.regular[4]],
					[data.kosma.regular[6]],
					[data.kosma.nexus2.name],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name],
					[data.griseo.name, '4', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name]
				]
			],
			notes: `Other secondary signets include Sakura's signets <span>${data.sakura.regular[5]}</span> and <span>${data.sakura.regular[6]}</span>.`
		}
	]
};
// Reveris Calico
const pardo: Guide = {
	name: 'Reverist Calico',
	acr: 'pardo',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][2],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.vv, '2'],
					[data.aponia, '2']
				],
				[
					[data.griseo, '2'],
					[data.kalpas, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.psuedoMiracle, data.theLonelyMoon],
				[data.veilOfTears, data.theLonelyMoon],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.bke] ],
				[ [data.hb], [data.ae, data.br] ]
			],
			gear: [
				[data.puph, data.brot, data.welm, data.brob],
				[data.hawp, data.bast, data.basm, data.basb]
			],
			signetTable: [
				[
					['Cat\'s Eyes', data.start, '2'],
					['Hidden Claws'],
					['Nighteye', data.optional, '2'],
					['Phantasma'],
					['the Tailpiece', data.no]
				],
				[
					[data.vv.name, '5', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1]],
					[data.vv.nexus2[2]],
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[6]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.griseo.name, '4', data.griseo.regular[1]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `Can pick Eden's signets <span>${data.eden.regular[2]}</span> and <span>${data.eden.regular[3]}</span> or Su's signets <span>${data.su.regular[1]}</span>, <span>${data.su.regular[3]}</span>, <span>${data.su.regular[5]}</span>, and <span>${data.su.regular[6]}</span> as reinforcements.<br><br>
					<p>Blessing of the Tailpiece</p>1st if Infinity signets +2.`
		}
	]
};
// Palatinus Equinox
const pe: Guide = {
	name: 'Palatinus Equinox',
	acr: 'pe',
	rating: data.abstinence,
	builds: [
		{
			signet: [
				[
					[data.vv, '1']
				],
				[
					[data.griseo, '2']
				],
				[
					[data.aponia, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '1']
				]
			],
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
			signetTable: [
				[
					['Exodus', data.start],
					['Abyssal Chant', data.first],
					['Commitment', data.second, '2'],
					['Equinox'],
					['Gallop', data.no]
				],
				[
					[data.vv.name, '2', data.vv.regular[2]],
					[data.vv.nexus1.name]
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
					[data.aponia.name, '4', data.aponia.regular[1]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[3]],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.sakura.name, '3', data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[5]]
				]
			],
			notes: `<p>${data.griseo.nexus2[3]}</p>Priority.`
		}
	]
};
// Midnight Absinthe
const raven: Guide = {
	name: 'Midnight Absinthe',
	acr: 'raven',
	rating: data.abstinence,
	builds: [
		{
			signet: [
				[
					[data.vv, '2']
				],
				[
					[data.aponia, '2'],
					[data.griseo, '1'],
					[data.eden, '2'],
					[data.sakura, '2']
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
					[data.vv.nexus2.name],
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
	]
};
// Ritual Imayoh
const ri: Guide = {
	name: 'Ritual Imayoh',
	acr: 'ri',
	rating: data.inferno,
	builds: [
		{
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
	]
};
// Stygian Nymph
const sn: Guide = {
	name: 'Stygian Nymph',
	acr: 'sn',
	rating: data.inferno,
	builds: [
		{
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
	]
};
// Spina Astera
const spa: Guide = {
	name: 'Spina Astera',
	acr: 'spa',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.kalpas, '2']
				],
				[
					[data.griseo, '1'],
					[data.pardofelis, '1'],
					[data.eden, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.madKingsMask, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vc, data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.asdi, data.ragt, data.ragm, data.ragb],
				[data.hawp, data.leet, data.tham, data.leeb]
			],
			signetTable: [
				[
					['Wild Flare', data.start],
					['Star Quillon', data.first],
					['Alrescha', data.second, '2'],
					['Holy Flame'],
					['Radiant Formation', data.optional]
				],
				[
					[data.aponia.name, '7', data.aponia.regular[1]],
					[data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2], ''],
					[data.aponia.nexus2[3], ''],
					[data.kalpas.name, '5', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name]
				],
				[
					[data.griseo.name, '3', data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.eden.name, '2', data.eden.regular[2]],
					[data.eden.regular[3]]
				]
			],
			notes: `<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
		}
	]
};
// Sixth Serenade
const ss: Guide = {
	name: 'Sixth Serenade',
	acr: 'ss',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][0],
				data.buffs[1][0],
				data.buffs[2][0],
				data.buffs[3][0]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.sakura, '2'],
					[data.griseo, '2'],
					[data.eden, '2'],
					[data.kalpas, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.forgetMeNot, data.theLonelyMoon],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br] ]
			],
			signetTable: [
				[
					['Nocturnal Tides', data.start, '2'],
					['Tragedy'],
					['Finale', data.first],
					['Expiation', data.optional, '2'],
					['Raven Eye']
				],
				[
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.sakura.name, '4', data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[5]],
					[data.sakura.nexus2.name],
					[data.griseo.name, '9', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
					[data.eden.name, '4', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus2.name],
					[data.kalpas.name, '3', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]]
				]
			]
		}
	]
};
// Jade Knight
const sus: Guide = {
	name: 'Jade Knight',
	acr: 'sus',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][2],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.su, '2'],
					[data.pardofelis, '1'],
					[data.sakura, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
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
					['Jade Moon', data.no, '3'],
					['Shaft'],
					['Smoky Waft']
				],
				[
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.griseo.name, '8', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]]
				],
				[
					[data.su.name, '4', data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.sakura.name, '2', data.sakura.regular[2]],
					[data.sakura.regular[5]]
				]
			],
			notes: `Sakura signets are optional.<br><br>
					Can pick Kalpas's signets <span>${data.kalpas.regular[1]}</span>, <span>${data.kalpas.regular[2]}</span>, and <span>${data.kalpas.regular[3]}</span>, and Eden's signets <span>${data.eden.regular[2]}</span> and <span>${data.eden.regular[3]}</span> as reinforcement.`
		}
	]
};
// Silverwing N-EX
const sw: Guide = {
	name: 'Silverwing N-EX',
	acr: 'sw',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.aponia, '2'],
					[data.hua, '2']
				],
				[
					[data.su, '2'],
					[data.kalpas, '2'],
					[data.griseo, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.memory, data.outOfReach],
				[data.goodOldDays, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vc, data.bke] ],
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
					[data.griseo.name, '3', data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]]
				]
			]
		}
	]
};
// Striker Fulminata
const vb: Guide = {
	name: 'Striker Fulminata',
	acr: 'vb',
	rating: data.abstinence,
	builds: [
		{
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
				]
			],
			notes: `<p>Recommended Gear</p>Build 2: If not enough breach or impair, pick breach from signets.<br><br>
					<p>${data.su.regular[1]}, ${data.su.regular[5]}</p>Buy from shop if possible.<br><br>
					<p>${data.griseo.regular[3]}, ${data.eden.regular[1]}</p>If needed.`
		}
	]
};
// Twilight Paladin
const ve: Guide = {
	name: 'Twilight Paladin',
	acr: 've',
	rating: data.abstinence,
	builds: [
		{
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
					['Dusk', data.second],
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
	]
};
// Valkyrie Gloria
const vg: Guide = {
	name: 'Valkyrie Gloria',
	acr: 'vg',
	rating: data.inferno,
	builds: [
		{
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
	]
};
// Helical Contraption
const villv: Guide = {
	name: 'Helical Contraption',
	acr: 'villv',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.vv, '2']
				],
				[
					[data.griseo, '2'],
					[data.su, '2'],
					[data.mobius, '1'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.lightAsABodhiLeaf, data.fallingInPastLight],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.br, data.vc] ],
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
					[data.vv.nexus2[1]],
					[data.vv.nexus2[2]],
					[data.vv.nexus2[3]]
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
					[data.su.name, '4', data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.mobius.name, '4', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `Mobius and Pardofelis signets are optional.<br><br>
					Can buy Sakura's signets as reinforcement.`
		}
	]
};
// Vermilion Knight: Eclipse
const vkek: Guide = {
	name: 'Vermilion Knight: Eclipse',
	acr: 'vke',
	rating: data.corruption,
	builds: [
		{
			buff: [
				data.buffs[0][1],
				data.buffs[1][3],
				data.buffs[2][3],
				data.buffs[3][2]
			],
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.kalpas, '2'],
					[data.su, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.madKingsMask, data.theLonelyMoon],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.vc] ],
				[ [data.ae], [data.br, data.ma] ]
			],
			gear: [
				[data.shur, data.ragt, data.ragm, data.ragb],
				[data.sumu, data.aslt, data.aslm, data.aslb]
			],
			signetTable: [
				[
					['Blaze', data.start, '2'],
					['Sharp Flames'],
					['Wild Flare', data.first],
					['Fiery Mind', data.second],
					['Burning Flow', data.no]
				],
				[
					[data.aponia.name, '5', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name, ''],
					[data.su.name, '4', data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.griseo.name, '4', data.griseo.regular[1]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `If Su's signet <span>${data.su.regular[2]}</span> is taken, can pick Eden's signets <span>${data.eden.regular[2]}</span> and <span>${data.eden.regular[3]}</span> as reinforcement.<br><br>
					<p>${data.kalpas.nexus2.name}</p>If using Surtr Muspellsverd, pick <span>${data.kalpas.nexus1.name}</span> instead.`
		}
	]
};
export const valks: Guide[] = [
	aka, bke, cn, da, aponia, fr, mc, eden, gm, villv,
	hofi, hofs, hoh, hoo, hor, hos, hov, hot, hotr, mobius,
	sus, lk, raven, elysia, pe, fischl, pardo, ri, sw, ss,
	spa, griseo, nyx, sn, vb, carole, ve, vg, vkek
];
export const valksLength: number = valks.length;
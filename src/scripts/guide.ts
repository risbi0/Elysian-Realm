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
			signet: Array<Array<Signet>>
			emblem: Array<Emblem>
			support: Array<Array<Array<data.NameAcr>>>
			gear: Array<Gear>
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
			signet: [
				[
					[data.aponia, '2'],
					[data.kalpas, '2'],
					[data.griseo, '2']
				],
				[
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
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
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
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.sakura.name, '2', data.sakura.regular[2]],
					[data.sakura.regular[5]]
				]
			],
			notes: `<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.`
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
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.vv, '1'],
					[data.kalpas, '2'],
					[data.su, '2'],
					[data.eden, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.tinFlask, data.fallingInPastLight]
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
					['Final Dream', data.reinforcement]
				],
				[
					[data.aponia.name, '7', data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.regular[5]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.vv.name, '5', data.vv.regular[1]],
					[data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[5]],
					[data.vv.nexus1.name],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name],
					[data.su.name, '5', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.eden.name, '4', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus2.name]
				]
			],
			notes: `<p>Aponia</p>Must pick at least 3 signets that recover Exhortation.<br><br>
					<p>Su, Eden</p>Optional. Can pick Griseo's signet <span>${data.griseo.regular[4]}</span> as reinforcement.`
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
			signet: [
				[
					[data.aponia, '2']
				],
				[
					[data.kalpas, '1'],
					[data.eden, '2'],
					[data.kevin, '1'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.madKingsMask, data.itWillBeWritten],
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
					['Halo', data.second, '2'],
					['Gale'],
					['Brilliance', data.no]
				],
				[
					[data.aponia.name, '6', data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2]]
				],
				[
					[data.kalpas.name, '2', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.eden.name, '3', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.nexus2.name],
					[data.kevin.name, '4', data.kevin.regular[2]],
					[data.kevin.regular[3]],
					[data.kevin.regular[6]],
					[data.kevin.nexus1.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: '<p>Kalpas</p>Pair with BR to reduce HP.'
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
			signet: [
				[
					[data.aponia, '2'],
					[data.kosma, '2']
				],
				[
					[data.kalpas, '2'],
					[data.su, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.fragileFriend, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
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
					['Fugue', data.reinforcement],
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
					[data.aponia.nexus2[3], ''],
					[data.kosma.name, '6', data.kosma.regular[3]],
					[data.kosma.regular[4]],
					[data.kosma.regular[6]],
					[data.kosma.nexus2.name],
					[data.kosma.nexus2[1], ''],
					[data.kosma.nexus2[2], '']
				],
				[
					[data.kalpas.name, '5', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.su.name, '4', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.nexus2.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}, ${data.kosma.nexus2[1]}, ${data.kosma.nexus2[2]}</p>Priority.`
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
			signet: [
				[
					[data.vv, '2'],
					[data.aponia, '2']
				],
				[
					[data.griseo, '2'],
					[data.su, '2'],
					[data.kalpas, '1']
				]
			],
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.veilOfTears, data.fallingInPastLight],
				[data.ruinedLegacy, data.fallingInPastLight]
			],
			support: [
				[ [data.sa], [data.bke] ],
				[ [data.sa], [data.br] ]
			],
			gear: [
				[data.whpa, data.elyt, data.elym, data.elyb],
				[data.hawp, data.biat, data.biam, data.biab]
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
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.griseo.name, '2', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.su.name, '3', data.su.regular[3]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus1.name]
				]
			],
			notes: `<p>${data.vv.nexus2[1]}</p>Upgrade once.`
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
			signet: [
				[
					[data.aponia, '2'],
					[data.hua, '2']
				],
				[
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.kalpas, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.becauseOfYou],
				[data.veilOfTears, data.theLonelyMoon],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.hb], [data.br] ]
			],
			gear: [
				[data.irhe, data.hant, data.hanm, data.hanb],
				[data.irhe, data.iret, data.irem, data.ireb]
			],
			signetTable: [
				[
					['Valfreyja', data.start],
					['Soul Siphon', data.first],
					['Nocturne', data.second],
					['God Eater', data.reinforcement, '2'],
					['Spirit Servants']
				],
				[
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.hua.name, '3', data.hua.regular[1]],
					[data.hua.regular[3]],
					[data.hua.nexus2.name]
				],
				[
					[data.griseo.name, '3', data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.regular[6]]
				]
			],
			notes: 'Can pick Kevin\'s signets as reinforcement.'
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
					[data.griseo, '2'],
					[data.aponia, '2']
				],
				[
					[data.eden, '2'],
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
				[ [data.ss], [data.bke] ],
				[ [data.ss], [data.dp, data.br] ]
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
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.griseo.name, '6', data.griseo.regular[1]],
					[data.griseo.regular[4]],
					[data.griseo.regular[5]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]]
				],
				[
					[data.eden.name, '5', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[6]],
					[data.eden.nexus2.name],
					[data.eden.nexus2[2]],
					[data.vv.name, '4', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[6]],
					[data.vv.nexus1.name],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name]
				]
			]
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
					[data.hua, '2']
				],
				[
					[data.griseo, '2'],
					[data.mobius, '1']
				],
				[
					[data.kalpas, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.memory, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.vc, data.bke] ],
				[ [data.br], [data.dp] ]
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
					[data.hua.name, '4', data.hua.regular[2]],
					[data.hua.regular[3]],
					[data.hua.regular[5]],
					[data.hua.nexus2.name]
				],
				[
					[data.griseo.name, '5', data.griseo.regular[2]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.mobius.name, '7', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[4]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.mobius.nexus1[1]],
					[data.mobius.nexus1[2]]
				],
				[
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			]
		}
	]
};
// Herrscher of Flamescion
const hofs: Guide = {
	name: 'Herrscher of Flamescion',
	acr: 'hofs',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.kalpas, '2'],
					[data.hua, '2'],
					[data.sakura, '1']
				],
				[
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.madKingsMask, data.becauseOfYou],
				[data.memory, data.itWillBeWritten],
				[data.ruinedLegacy, data.tsukimiHimiko]
			],
			support: [
				[ [data.ae], [data.br, data.bke] ],
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
					[data.hua.name, '4', data.hua.regular[1]],
					[data.hua.regular[3]],
					[data.hua.regular[6]],
					[data.hua.nexus2.name],
					[data.sakura.name, '6', data.sakura.regular[1]],
					[data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[4]],
					[data.sakura.regular[5]],
					[data.sakura.nexus1.name, '']
				],
				[
					[data.griseo.name, '8', data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3], ''],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `<p>${data.sakura.nexus1.name}</p>Can also pick <span>${data.sakura.nexus2.name}</p><br><br>
					<p>${data.griseo.nexus2[3]}</p>Priority.`
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
			name: 'Charge',
			signet: [
				[
					[data.kalpas, '2']
				],
				[
					[data.aponia, '2'],
					[data.su, '2'],
					[data.pardofelis, '1'],
					[data.eden, '1']
				]
			],
			emblem: [
				[data.madKingsMask, data.outOfReach],
				[data.veilOfTears, data.outOfReach],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.sa] ],
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
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name]
				],
				[
					[data.aponia.name, '5', data.aponia.regular[1]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[1]],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]],
					[data.su.name, '5', data.su.regular[1]],
					[data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name],
					[data.pardofelis.name, '4', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.regular[5]],
					[data.pardofelis.nexus1.name],
					[data.eden.name, '4', data.eden.regular[2]],
					[data.eden.regular[3]],
					[data.eden.regular[4]],
					[data.eden.nexus1.name]
				]
			],
			notes: `Su, Pardofelis, and Eden signets are optional.<br><br>
					<p>Kalpas</p>Pair with BR to reduce HP.<br><br>
					<p>${data.aponia.nexus2[2]}, ${data.aponia.nexus2[3]}</p>Priority.<br><br>
					<p>${data.pardofelis.nexus1.name}</p>If there are 2 or more shops left, pick all enhanced, otherwise pick <span>${data.pardofelis.nexus2.name}</span>.`
		},
		{
			name: 'Ult',
			signet: [
				[
					[data.kalpas, '2'],
					[data.vv, '2']
				],
				[
					[data.griseo, '2'],
					[data.sakura, '1'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.madKingsMask, data.fallingInPastLight],
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.doeg, data.elpt, data.elpm, data.elpb],
				[data.hawp, data.wilt, data.wilm, data.wilb]
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
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
					[data.vv.name, '6', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[5]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1]],
					[data.vv.nexus2[2]]
				],
				[
					[data.griseo.name, '8', data.griseo.regular[1]],
					[data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[5]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
					[data.sakura.name, '3', data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[5]],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name]
				]
			]
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
			signet: [
				[
					[data.hua, '2']
				],
				[
					[data.kalpas, '2'],
					[data.sakura, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.memory, data.theLonelyMoon],
				[data.madKingsMask, data.theLonelyMoon],
				[data.stainedSakura, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.sted, data.wilt, data.wilm, data.wilb],
				[data.dore, data.welt, data.welm, data.welb]
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
					[data.hua.name, '4', data.hua.regular[1]],
					[data.hua.regular[3]],
					[data.hua.regular[6]],
					[data.hua.nexus2.name]
				],
				[
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name],
					[data.sakura.name, '4', data.sakura.regular[3]],
					[data.sakura.regular[4]],
					[data.sakura.regular[5]],
					[data.sakura.nexus2.name],
					[data.griseo.name, '8', data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2]],
					[data.griseo.nexus2[3]],
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name]
				]
			],
			notes: `<p>Early Emblem</p>The Lonely Moon or Because of You. Take Inspiration and Truth at 7F.<br><br>
					<p>Blessing of Reason</p>Only if using DoR.`
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
			signet: [
				[
					[data.aponia, '2'],
					[data.kalpas, '2']
				],
				[
					[data.griseo, '2'],
					[data.pardofelis, '1'],
					[data.kosma, '2']
				]
			],
			emblem: [
				[data.veilOfTears, data.theLonelyMoon],
				[data.madKingsMask, data.itWillBeWritten],
				[data.ruinedLegacy, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.le, data.bke] ],
				[ [data.br], [data.sa] ]
			],
			gear: [
				[data.dose, data.dirt, data.dirm, data.rebb],
				[data.hawp, data.shst, data.shsm, data.shsb]
			],
			signetTable: [
				[
					['Victory', data.start],
					['Dark Plumes', data.first],
					['Legion', data.reinforcement, '2'],
					['Supremacy'],
					['Ego', data.no]
				],
				[
					[data.aponia.name, '4', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[3]],
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name]
				],
				[
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
			notes: `Pardofelis and Kosma signets are optional.<br><br>
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
			signet: [
				[
					[data.griseo, '2']
				],
				[
					[data.kalpas, '2'],
					[data.pardofelis, '1'],
					[data.mobius, '1'],
					[data.vv, '1']
				]
			],
			emblem: [
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.madKingsMask, data.itWillBeWritten],
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
					['Tsukuyomi', data.reinforcement],
					['Divine Penalty', data.no, '3'],
					['Hazy Moon'],
					['Mitama']
				],
				[
					[data.griseo.name, '8', data.griseo.regular[2]],
					[data.griseo.regular[4]],
					[data.griseo.regular[5]],
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
					[data.pardofelis.name, '6', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.pardofelis.nexus1[1]],
					[data.pardofelis.nexus1[2]],
					[data.pardofelis.nexus1[3]],
					[data.mobius.name, '4', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.vv.name, '3', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.regular[5]]
				]
			],
			notes: `If can't get double signets in 4F, start with double Ego.<br><br>
					Can pick Sakura signets in shop as reinforcement.`
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
				[ [data.ae], [data.le, data.bke] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.baim, data.lint, data.linm, data.linb],
				[data.hawp, data.hant, data.hanm, data.hanb]
			],
			signetTable: [
				[
					['Ill Fortune', data.start, '2'],
					['Dark Assault'],
					['Ascension', data.first],
					['Ravenousness', data.reinforcement],
					['Mirage', data.no]
				],
				[
					[data.mobius.name, '4', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
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
					[data.sakura.name, '3', data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[5]],
					[data.kalpas.name, '2', data.kalpas.regular[1]],
					[data.kalpas.regular[2]]
				]
			],
			notes: `Can pick Eden's signet <span>${data.eden.regular[4]}</span> to speed up rotations.<br><br>
					<p>Kalpas</p>Use BR to reduce HP.`
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
			signet: [
				[
					[data.vv, '2'],
					[data.aponia, '2']
				],
				[
					[data.kalpas, '2'],
					[data.griseo, '2'],
					[data.pardofelis, '1']
				]
			],
			emblem: [
				[data.psuedoMiracle, data.fallingInPastLight],
				[data.veilOfTears, data.itWillBeWritten],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.bke] ],
				[ [data.ae], [data.br] ]
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
					[data.vv.name, '5', data.vv.regular[2]],
					[data.vv.regular[3]],
					[data.vv.nexus2.name],
					[data.vv.nexus2[1]],
					[data.vv.nexus2[2]],
					[data.aponia.name, '6', data.aponia.regular[1]],
					[data.aponia.regular[4]],
					[data.aponia.regular[6]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[6]],
					[data.kalpas.nexus2.name],
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
			notes: `Can pick Eden's signets <span>${data.eden.regular[2]}</span> and <span>${data.eden.regular[3]}</span> as reinforcement.<br><br>
					<p>Blessing of the Tailpiece</p>Start if Infinity signets +2.<br><br>`
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
				[data.veilOfTears, data.theLonelyMoon],
				[data.veilOfTears, data.becauseOfYou],
				[data.keyToTheDeep, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.sa, data.bke] ],
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
					['Radiant Formation'],
					['Holy Flame', data.reinforcement]
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
// Jade Knight
const sus: Guide = {
	name: 'Jade Knight',
	acr: 'sus',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.aponia, '2'],
					[data.griseo, '2']
				],
				[
					[data.kalpas, '2'],
					[data.pardofelis, '1'],
					[data.su, '2']
				]
			],
			emblem: [
				[data.memory, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.dreamfulGold]
			],
			support: [
				[ [data.br], [data.le] ],
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
					[data.aponia.name, '5', data.aponia.regular[1]],
					[data.aponia.regular[2]],
					[data.aponia.regular[3]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.griseo.name, '8', data.griseo.regular[2]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.griseo.nexus2.name],
					[data.griseo.nexus2[1]],
					[data.griseo.nexus2[2], ''],
					[data.griseo.nexus2[3], '']
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
					[data.su.name, '4', data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name]
				]
			],
			notes: `<p>${data.griseo.nexus2[2]}, ${data.griseo.nexus2[3]}</p>Priority.`
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
					[data.vv, '2'],
					[data.griseo, '2']
				],
				[
					[data.pardofelis, '1'],
					[data.mobius, '1'],
					[data.su, '2']
				]
			],
			emblem: [
				[data.psuedoMiracle, data.theLonelyMoon],
				[data.rainbowOfAbsence, data.theLonelyMoon],
				[data.tinFlask, data.fallingInPastLight]
			],
			support: [
				[ [data.ae], [data.br, data.sa] ],
				[ [data.ma], [data.br, data.ae] ]
			],
			gear: [
				[data.elas, data.cart, data.carm, data.carb],
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
					[data.pardofelis.name, '3', data.pardofelis.regular[1]],
					[data.pardofelis.regular[4]],
					[data.pardofelis.nexus1.name],
					[data.mobius.name, '5', data.mobius.regular[2]],
					[data.mobius.regular[3]],
					[data.mobius.regular[5]],
					[data.mobius.nexus1.name],
					[data.mobius.nexus1[1]],
					[data.su.name, '4', data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name]
				]
			],
			notes: `Can buy Sakura's signets as reinforcement.<br><br>
					<p>${data.griseo.nexus2[1]}</p>Priority.`
		}
	]
};
// Vermillion Knight: Eclipse
const vkek: Guide = {
	name: 'Vermillion Knight: Eclipse',
	acr: 'vke',
	rating: data.corruption,
	builds: [
		{
			signet: [
				[
					[data.kalpas, '2'],
					[data.aponia, '2']
				],
				[
					[data.griseo, '2'],
					[data.sakura, '2'],
					[data.su, '2']
				]
			],
			emblem: [
				[data.madKingsMask, data.becauseOfYou],
				[data.veilOfTears, data.outOfReach],
				[data.stainedSakura, data.dreamfulGold]
			],
			support: [
				[ [data.ae], [data.le] ],
				[ [data.ae], [data.br] ]
			],
			gear: [
				[data.shur, data.aslt, data.aslm, data.aslb],
				[data.blda, data.ragt, data.tham, data.ragb]
			],
			signetTable: [
				[
					['Fiery Mind', data.start],
					['Burning Flow', data.second, '2'],
					['Wild Flare'],
					['Sharp Flames', data.reinforcement],
					['Blaze', data.no]
				],
				[
					[data.kalpas.name, '4', data.kalpas.regular[1]],
					[data.kalpas.regular[2]],
					[data.kalpas.regular[3]],
					[data.kalpas.nexus2.name],
					[data.aponia.name, '5', data.aponia.regular[3]],
					[data.aponia.regular[4]],
					[data.aponia.nexus2.name],
					[data.aponia.nexus2[2]],
					[data.aponia.nexus2[3]]
				],
				[
					[data.griseo.name, '4', data.griseo.regular[1]],
					[data.griseo.regular[3]],
					[data.griseo.regular[4]],
					[data.griseo.regular[6]],
					[data.sakura.name, '4', data.sakura.regular[2]],
					[data.sakura.regular[3]],
					[data.sakura.regular[5]],
					[data.sakura.nexus2.name],
					[data.su.name, '4', data.su.regular[3]],
					[data.su.regular[5]],
					[data.su.regular[6]],
					[data.su.nexus2.name]
				]
			],
			notes: `If can't get double signets in 4F, start with double Ego.<br><br>
					<p>Griseo</p>Can buy from shop.<br><br>
					<p>Su</p>Optional. Can also pick Kevin's signets <span>${data.kevin.regular[2]}</span> and <span>${data.kevin.regular[3]}</span>.`
		}
	]
};
export const valks: Guide[] = [
	aka, bke, cn, da, aponia, fr, mc, eden, gm, villv,
	hofs, hoh, hor, hos, hov, hot, mobius, sus, lk, raven,
	elysia, pe, fischl, pardo, ri, sw, spa, griseo, nyx, sn,
	vb, carole, ve, vg, vkek
];
export const valksLength: number = valks.length;
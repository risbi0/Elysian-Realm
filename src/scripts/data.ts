export type NameAcr = {
	name: string;
	acr: string;
}
type Nexus = {
	name: string;
	1: string;
	2: string;
	3: string;
}
export type Signets = {
	name: string;
	signet: string;
	regular: {
		1: string;
		2: string;
		3: string;
		4: string;
		5: string;
		6: string;
	}
	nexus1: Nexus;
	nexus2: Nexus;
}
export const isMobile = /Mobi/i.test(window.navigator.userAgent);
// difficulties
export const abstinence = 'Abstinence';
export const corruption = 'Corruption';
export const inferno = 'Inferno';
// priority terms
export const start = 'Start';
export const first = '1st';
export const second = '2nd';
export const filler = 'Filler';
export const reinforcement = 'Reinforcement';
export const optional = 'Optional';
export const no = 'No';
// table column values & headers
export const supportTableHeaders: string[] = ['Type', 'Supp1', 'Supp2'];
export const supportTableTypeColumn: string[] = ['Utility', 'Damage'];
export const emblemTableHeaders: string[] = ['Time', 'Emblems'];
export const emblemTableTimeColumn:	string[] = ['Start', 'Shop 1', '16F'];
export const exclusiveTableHeaders:	string[] = ['Signet', 'Priority'];
export const signetTableHeaders: string[] = ['Owner', 'Signet'];
export const buffTableHeaders: string[] = ['Cost', 'Effect'];
// emblems
export const becauseOfYou:			NameAcr = { name: 'Because of You',				acr: 'boy' };
export const boundlessFeeling:		NameAcr = { name: 'Boundless Feeling',			acr: 'bf' };
export const boundlessLogos:		NameAcr = { name: 'Boundless Logos',			acr: 'bl' };
export const burden:				NameAcr = { name: 'Burden',						acr: 'b' };
export const dreamfulGold:			NameAcr = { name: 'Dreamful Gold',				acr: 'dg' };
export const emptyLikeShala:		NameAcr = { name: 'Empty Like Shala',			acr: 'els' };
export const fallingInPastLight:	NameAcr = { name: 'Falling in Past Light',		acr: 'fipl' };
export const farawayShip:			NameAcr = { name: 'Faraway Ship',				acr: 'fas' };
export const feastOfEmptiness:		NameAcr = { name: 'Feast of Emptiness',			acr: 'foe' };
export const forbiddenSeed:			NameAcr = { name: 'Forbidden Seed',				acr: 'fos' };
export const fragileFriend:			NameAcr = { name: 'Fragile Friend',				acr: 'ff' };
export const forgetMeNot:			NameAcr = { name: 'Forget-Me-Not',				acr: 'fmt' };
export const goldGoblet:			NameAcr = { name: 'Gold Goblet',				acr: 'gg' };
export const goodOldDays:			NameAcr = { name: 'Good Old Days',			   	acr: 'god' };
export const greyScaleRainbow:		NameAcr = { name: 'Grey-scale Rainbow',		  	acr: 'gsr' };
export const heavyAsAMillionLives:	NameAcr = { name: 'Heavy as a Million Lives',	acr: 'haaml' };
export const homeLost:				NameAcr = { name: 'Home Lost',					acr: 'hl' };
export const homeTown:				NameAcr = { name: 'Hometown',					acr: 'h' };
export const itWillBeWritten:		NameAcr = { name: 'It Will Be Written',			acr: 'iwbw' };
export const keyToTheDeep:			NameAcr = { name: 'Key to the Deep',			acr: 'kttd' };
export const lightAsABodhiLeaf:		NameAcr = { name: 'Light as a Bodhi Leaf',		acr: 'laabl' };
export const madKingsMask:			NameAcr = { name: 'Mad King\'s Mask',			acr: 'mkm' };
export const memory:				NameAcr = { name: 'Memory',						acr: 'm' };
export const outOfReach:			NameAcr = { name: 'Out of Reach',				acr: 'oor' };
export const proofOfGoodAndEvil:	NameAcr = { name: 'Proof of Good and Evil',		acr: 'pogae' };
export const psuedoMiracle:			NameAcr = { name: 'Psuedo Miracle',				acr: 'pm' };
export const rainbowOfAbsence:		NameAcr = { name: 'Rainbow of Absence',			acr: 'roa' };
export const resolve:				NameAcr = { name: 'Resolve',					acr: 'r' };
export const ruinedLegacy:			NameAcr = { name: 'Ruined Legacy',				acr: 'rl' };
export const stainedSakura:			NameAcr = { name: 'Stained Sakura',				acr: 'sts' };
export const theFirstScale:			NameAcr = { name: 'The First Scale',			acr: 'tfs' };
export const theLonelyMoon:			NameAcr = { name: 'The Lonely Moon',			acr: 'tlm' };
export const tinFlask:				NameAcr = { name: 'Tin Flask',					acr: 'tf' };
export const thornyCrown:			NameAcr = { name: 'Thorny Crown',				acr: 'tc' };
export const tsukimiHimiko:			NameAcr = { name: 'Tsukimi Himiko',				acr: 'th' };
export const veilOfTears:			NameAcr = { name: 'Veil of Tears',				acr: 'vot' };
// support valks
export const ae:  NameAcr = { name: 'Azure Empyrea',				acr: 'ae' };
export const bke: NameAcr = { name: 'Bright Knight: Excelsis',		acr: 'bke' };
export const br:  NameAcr = { name: 'Blood Rose',					acr: 'br' };
export const dp:  NameAcr = { name: 'Divine Prayer',				acr: 'dp' };
export const hb:  NameAcr = { name: 'Haxxor Bunny',					acr: 'hb' };
export const le:  NameAcr = { name: 'Lightning Empress',			acr: 'le' };
export const ma:  NameAcr = { name: 'Midnight Absinthe',			acr: 'ma' };
export const rc:  NameAcr = { name: 'Reverist Calico',				acr: 'rc' };
export const sa:  NameAcr = { name: 'Starlit Astrologos',			acr: 'sa' };
export const sn:  NameAcr = { name: 'Stygian Nymph',				acr: 'sn' };
export const ss:  NameAcr = { name: 'Snowy Sniper',					acr: 'ss' };
export const vc:  NameAcr = { name: 'Valkyrie Chariot',				acr: 'vc' };
export const vke: NameAcr = { name: 'Vermilion Knight: Eclipse',	acr: 'vke' };
// stigmatas
export const allt: NameAcr = { name: 'Allan Poe T', acr: 'allt' };
export const allm: NameAcr = { name: 'Allan Poe M', acr: 'allm' };
export const allb: NameAcr = { name: 'Allan Poe B', acr: 'allb' };
export const anat: NameAcr = { name: 'Ana Schariac T', acr: 'anat' };
export const anam: NameAcr = { name: 'Ana Schariac M', acr: 'anam' };
export const anab: NameAcr = { name: 'Ana Schariac B', acr: 'anab' };
export const aslt: NameAcr = { name: 'Aslaug T', acr: 'aslt' };
export const aslm: NameAcr = { name: 'Aslaug M', acr: 'aslm' };
export const aslb: NameAcr = { name: 'Aslaug B', acr: 'aslb' };
export const bast: NameAcr = { name: 'Bastet T', acr: 'bast' };
export const basm: NameAcr = { name: 'Bastet M', acr: 'basm' };
export const basb: NameAcr = { name: 'Bastet B', acr: 'basb' };
export const bent: NameAcr = { name: 'Benares: Awakening T', acr: 'bent' };
export const benm: NameAcr = { name: 'Benares: Awakening M', acr: 'benm' };
export const benb: NameAcr = { name: 'Benares: Awakening B', acr: 'benb' };
export const biat: NameAcr = { name: 'Bianka: Theatre T', acr: 'biat' };
export const biam: NameAcr = { name: 'Bianka: Theatre M', acr: 'biam' };
export const biab: NameAcr = { name: 'Bianka: Theatre B', acr: 'biab' };
export const brot: NameAcr = { name: 'Bronya: N-EX T', acr: 'brot' };
export const brom: NameAcr = { name: 'Bronya: N-EX M', acr: 'brom' };
export const brob: NameAcr = { name: 'Bronya: N-EX B', acr: 'brob' };
export const cart: NameAcr = { name: 'Carlo Collodi T', acr: 'cart' };
export const carm: NameAcr = { name: 'Carlo Collodi M', acr: 'carm' };
export const carb: NameAcr = { name: 'Carlo Collodi B', acr: 'carb' };
export const cezt: NameAcr = { name: 'Cezanne T', acr: 'cezt' };
export const cezm: NameAcr = { name: 'Cezanne M', acr: 'cezm' };
export const cezb: NameAcr = { name: 'Cezanne B', acr: 'cezb' };
export const chrt: NameAcr = { name: 'Idol Transformation T', acr: 'chrt' };
export const chrm: NameAcr = { name: 'Idol Transformation M', acr: 'chrm' };
export const chrb: NameAcr = { name: 'Idol Transformation B', acr: 'chrb' };
export const dant: NameAcr = { name: 'Dante T', acr: 'dant' };
export const danm: NameAcr = { name: 'Dante M', acr: 'danm' };
export const danb: NameAcr = { name: 'Dante B', acr: 'danb' };
export const dirt: NameAcr = { name: 'Dirac T', acr: 'dirt' };
export const dirm: NameAcr = { name: 'Dirac M', acr: 'dirm' };
export const dirb: NameAcr = { name: 'Dirac B', acr: 'dirb' };
export const drat: NameAcr = { name: 'Dracula T', acr: 'drat' };
export const dram: NameAcr = { name: 'Dracula M', acr: 'dram' };
export const drab: NameAcr = { name: 'Dracula B', acr: 'drab' };
export const elpt: NameAcr = { name: 'Elysia: Pristine T', acr: 'elpt' };
export const elpm: NameAcr = { name: 'Elysia: Pristine M', acr: 'elpm' };
export const elpb: NameAcr = { name: 'Elysia: Pristine B', acr: 'elpb' };
export const elyt: NameAcr = { name: 'Elysia T', acr: 'elyt' };
export const elym: NameAcr = { name: 'Elysia M', acr: 'elym' };
export const elyb: NameAcr = { name: 'Elysia B', acr: 'elyb' };
export const hant: NameAcr = { name: 'Handel T', acr: 'hant' };
export const hanm: NameAcr = { name: 'Handel M', acr: 'hanm' };
export const hanb: NameAcr = { name: 'Handel B', acr: 'hanb' };
export const iret: NameAcr = { name: 'Irene Adler T', acr: 'iret' };
export const irem: NameAcr = { name: 'Irene Adler M', acr: 'irem' };
export const ireb: NameAcr = { name: 'Irene Adler B', acr: 'ireb' };
export const kaft: NameAcr = { name: 'Kafka T', acr: 'kaft' };
export const kafm: NameAcr = { name: 'Kafka M', acr: 'kafm' };
export const kafb: NameAcr = { name: 'Kafka B', acr: 'kafb' };
export const leet: NameAcr = { name: 'Leeuwenhoek T', acr: 'leet' };
export const leeb: NameAcr = { name: 'Leeuwenhoek B', acr: 'leeb' };
export const lint: NameAcr = { name: 'Linnaeus T', acr: 'lint' };
export const linm: NameAcr = { name: 'Linnaeus M', acr: 'linm' };
export const linb: NameAcr = { name: 'Linnaeus B', acr: 'linb' };
export const list: NameAcr = { name: 'Li Sushang: Shenzhou Reminiscence T', acr: 'list' };
export const lism: NameAcr = { name: 'Li Sushang: Shenzhou Reminiscence M', acr: 'lism' };
export const lisb: NameAcr = { name: 'Li Sushang: Shenzhou Reminiscence B', acr: 'lisb' };
export const marm: NameAcr = { name: 'Marco Polo M', acr: 'marm' };
export const mict: NameAcr = { name: 'Michealangelo T', acr: 'mict' };
export const micb: NameAcr = { name: 'Michealangelo B', acr: 'micb' };
export const murt: NameAcr = { name: 'Murata Himeko T', acr: 'murt' };
export const murm: NameAcr = { name: 'Murata Himeko M', acr: 'murm' };
export const murb: NameAcr = { name: 'Murata Himeko B', acr: 'murb' };
export const pagt: NameAcr = { name: 'Paganini T', acr: 'pagt' };
export const pagm: NameAcr = { name: 'Paganini M', acr: 'pagm' };
export const pagb: NameAcr = { name: 'Paganini B', acr: 'pagb' };
export const ragt: NameAcr = { name: 'Ragna T', acr: 'ragt' };
export const ragm: NameAcr = { name: 'Ragna M', acr: 'ragm' };
export const ragb: NameAcr = { name: 'Ragna B', acr: 'ragb' };
export const rebt: NameAcr = { name: 'Mei Spectramancer T', acr: 'rebt' };
export const rebb: NameAcr = { name: 'Fu Hua - Onyx Simurgh B', acr: 'rebb' };
export const robt: NameAcr = { name: 'Robert Peary T', acr: 'robt' };
export const robm: NameAcr = { name: 'Robert Peary M', acr: 'robm' };
export const robb: NameAcr = { name: 'Robert Peary B', acr: 'robb' };
export const shat: NameAcr = { name: 'Shakespeare: Adrift T', acr: 'shat' };
export const sham: NameAcr = { name: 'Shakespeare: Adrift M', acr: 'sham' };
export const shab: NameAcr = { name: 'Shakespeare: Adrift B', acr: 'shab' };
export const shst: NameAcr = { name: 'Raksha T', acr: 'shst' };
export const shsm: NameAcr = { name: 'Sushang M', acr: 'shsm' };
export const shsb: NameAcr = { name: 'Empyrea: Phoenix B', acr: 'shsb' };
export const siem: NameAcr = { name: 'Siegfried Kaslana M', acr: 'siem' };
export const sirt: NameAcr = { name: 'Sirin: Ascendant T', acr: 'sirt' };
export const sirm: NameAcr = { name: 'Sirin: Ascendant M', acr: 'sirm' };
export const sirb: NameAcr = { name: 'Sirin: Ascendant B', acr: 'sirb' };
export const tham: NameAcr = { name: 'Thales M', acr: 'tham' };
export const vert: NameAcr = { name: 'Verne T', acr: 'vert' };
export const verm: NameAcr = { name: 'Verne M', acr: 'verm' };
export const verb: NameAcr = { name: 'Verne B', acr: 'verb' };
export const want: NameAcr = { name: 'Wang Zhenyi T', acr: 'want' };
export const wanm: NameAcr = { name: 'Wang Zhenyi M', acr: 'wanm' };
export const wanb: NameAcr = { name: 'Wang Zhenyi B', acr: 'wanb' };
export const welt: NameAcr = { name: 'Welt Yang T', acr: 'welt' };
export const welm: NameAcr = { name: 'Welt Yang M', acr: 'welm' };
export const welb: NameAcr = { name: 'Welt Yang B', acr: 'welb' };
export const wilt: NameAcr = { name: 'Willows T', acr: 'wilt' };
export const wilm: NameAcr = { name: 'Willows M', acr: 'wilm' };
export const wilb: NameAcr = { name: 'Willows B', acr: 'wilb' };
export const zent: NameAcr = { name: 'Zeno T', acr: 'zent' };
export const zenm: NameAcr = { name: 'Zeno M', acr: 'zenm' };
export const zenb: NameAcr = { name: 'Zeno B', acr: 'zenb' };
// weapons
export const hawp: NameAcr = { name: '', acr: 'hawp' };
export const abfl: NameAcr = { name: 'Abyss Flower: Liminal Spiral', acr: 'abfl' };
export const asdi: NameAcr = { name: 'Astral Divide: Pisces', acr: 'asdi' };
export const baim: NameAcr = { name: 'Basilik\'s Image: Deathshroud', acr: 'baim' };
export const blda: NameAcr = { name: 'Blood Dance', acr: 'blda' };
export const codu: NameAcr = { name: 'Cosmic Duality', acr: 'codu' };
export const dabr: NameAcr = { name: 'Dawn Breaker: Talwar', acr: 'dabr' };
export const doeg: NameAcr = { name: 'Domain of Ego: Flawless Return', acr: 'doeg' };
export const doin: NameAcr = { name: 'Domain of Incandescence', acr: 'doin' };
export const dore: NameAcr = { name: 'Domain of Revelation', acr: 'dore' };
export const dosa: NameAcr = { name: 'Domain of Sanction', acr: 'dosa' };
export const dose: NameAcr = { name: 'Domain of Sentience', acr: 'dose' };
export const dovo: NameAcr = { name: 'Domain of the Void', acr: 'dovo' };
export const ecpa: NameAcr = { name: 'Echo of Paradise', acr: 'ecpa' };
export const elas: NameAcr = { name: 'Elysian Astra: Heart\'s Color', acr: 'elas' };
export const eogl: NameAcr = { name: 'Eos Gloria', acr: 'eogl' };
export const fafl: NameAcr = { name: 'Falcon Flare: FINAL', acr: 'fafl' };
export const frna: NameAcr = { name: 'Frozen Naraka', acr: 'frna' };
export const heso: NameAcr = { name: 'Hekate\'s Sombre', acr: 'heso' };
export const irhe: NameAcr = { name: 'Iris of Helheim', acr: 'irhe' };
export const kevo: NameAcr = { name: 'Keys of the Void', acr: 'kevo' };
export const loco: NameAcr = { name: 'Lost Conviction: Damnation', acr: 'loco' };
export const miat: NameAcr = { name: 'Midnight Ataegina', acr: 'miat' };
export const miec: NameAcr = { name: 'Midnight Eclipse', acr: 'miec' };
export const miki: NameAcr = { name: 'Miracle Kissy Pillow', acr: 'miki' };
export const miwa: NameAcr = { name: 'Mitternachts Waltz', acr: 'miwa' };
export const mubl: NameAcr = { name: 'Muramasa Bloodlust', acr: 'mubl' };
export const nost: NameAcr = { name: 'Nocturnal Stealth: Beam', acr: 'nost' };
export const obdo: NameAcr = { name: 'Oblivion Down', acr: 'obdo' };
export const obwi: NameAcr = { name: 'Obscuring Wing', acr: 'obwi' };
export const paac: NameAcr = { name: 'Path to Acheron: Kindred', acr: 'paac' };
export const pobl: NameAcr = { name: 'Positron Blasters', acr: 'pobl' };
export const puph: NameAcr = { name: 'Purana Phantasma', acr: 'puph' };
export const rudr: NameAcr = { name: 'Rudder in Dream Λ-I', acr: 'rudr' };
export const saas: NameAcr = { name: 'Sagittarius Astra', acr: 'saas' };
export const saga: NameAcr = { name: 'Sanguine Gaze', acr: 'saga' };
export const saun: NameAcr = { name: 'Sanguine Gaze: Union', acr: 'saun' };
export const sena: NameAcr = { name: '7ToR Narukami', acr: 'sena' };
export const seru: NameAcr = { name: '7ToR Rumble', acr: 'seru' };
export const shur: NameAcr = { name: 'Shuhadaku of Uriel', acr: 'shur' };
export const skth: NameAcr = { name: 'Skadi of Thrymheim', acr: 'skth' };
export const sldr: NameAcr = { name: 'Sleeper\'s Dream', acr: 'sldr' };
export const sted: NameAcr = { name: 'Star of Eden: World', acr: 'sted' };
export const sumu: NameAcr = { name: 'Surtr Muspellsverd', acr: 'sumu' };
export const thsa: NameAcr = { name: '3rd Sacred Relic', acr: 'thsa' };
export const topa: NameAcr = { name: 'Tower of the Past: Silk Ladder', acr: 'topa' };
export const whpa: NameAcr = { name: 'Whisper of the Past: Sonnet', acr: 'whpa' };
// buffs
export const buffs = [
	// 0
	[
		'RPC-6626 weak to Ice',
		'RPC-6626 weak to Elements'
	],
	// 5
	[
		'Same type support damage bonus',
		'At max HP gain 1 SP/s',
		'Ultimate Evasion recovers 10 SP',
		'Valk type matching enemy +TDM'
	],
	// 10
	[
		'Enemy affected by status gives TDM',
		'TDM+15% until damage taken'
	],
	// 15
	[
		'SP usage vulnerability',
		'Weapon type TDM bonus',
		'Same type support valk + breach'
	]
];
// signets
export const aponia: Signets = {
	name: 'Aponia',
	signet: 'Discipline',
	regular: {
		1: 'First, No Betrayal', // evasion, basic atk
		2: 'Second, No Deception', // dmg reduc, entity
		3: 'Third, No Brutality', // combo hit, sp regen
		4: 'Fourth, No Insolence', // weap skill, ult phys & elem dmg
		5: 'Fifth, No Falsehood', // vuln, exhortation red
		6: 'Sixth, No Decadence' // total dmg, qte
	},
	nexus1: {
		name: 'You Shall Be Subject to Numerous Disciplines (Nexus)',
		1: 'You Shall Be Bound by Thy Body', // phys ele breach
		2: 'You Shall Be Committed to Thy Life', // exhortation limit
		3: 'You Shall Be Witnessed by Thy Heart' // more ult dmg less phy ele basic atk
	},
	nexus2: {
		name: 'You Shall Receive Disciplines\' Blessing (Nexus)',
		1: 'You Shall Answer Prayers', // phys ele dmg
		2: 'You Shall Follow Good', // phys ele breach
		3: 'You Shall Punish Evil' // vuln
	}
};
export const eden: Signets = {
	name: 'Eden',
	signet: 'Gold',
	regular: {
		1: 'Recitatif of Birds', // dmg reduc
		2: 'Recitatif of Creeks', // phys ele dmg
		3: 'Recitatif of Eden', // total dmg
		4: 'Recitatif of Fine Jade', // max & initial sp
		5: 'Recitatif of Fruit Trees', // sp restore from atk
		6: 'Recitatif of Good Wine' // sp restore
	},
	nexus1: {
		name: 'Aria of Gold (Nexus)',
		1: 'Aria of Dawn', // lightning
		2: 'Aria of Life', // sp restore
		3: 'Aria of Soil' // vuln
	},
	nexus2: {
		name: 'Echo of Gold (Nexus)',
		1: 'Echo of Shrill Wind', // lightning
		2: 'Echo of Silent Night', // reduce enemy resist
		3: 'Echo of Withered Soil' // sp cap, restore sp
	}
};
export const griseo: Signets = {
	name: 'Griseo',
	signet: 'Stars',
	regular: {
		1: 'Black & Dark', // phys ele dmg
		2: 'Blue & Cold', // reduce enemy dmg & move speed
		3: 'Grey & Empty', // taint extension
		4: 'Red & Hot', // phys ele dmg
		5: 'White & Bright', // sp restore
		6: 'Yellow & Warm' // vuln
	},
	nexus1: {
		name: 'Shining Like Stars (Nexus)',
		1: 'Blooming Like Flowers', // purple
		2: 'Burning Like Flames', // orange
		3: 'Stretching Like Leaves' // green
	},
	nexus2: {
		name: 'Faded Stars (Nexus)',
		1: 'A Flame Extinguished', // orange
		2: 'Fallen Leaves', // green
		3: 'Petals in the Wind' // purple
	}
};
export const hua: Signets = {
	name: 'Hua',
	signet: 'Vicissitude',
	regular: {
		1: 'Dark Garb No More', // ele dmg
		2: 'Days Gone', // phys dmg
		3: 'Long trip', // total dmg
		4: 'Lost and Found', // dmg reduc
		5: 'No One to Share', // phys breach
		6: 'Old Dreams Again' // ele breach
	},
	nexus1: {
		name: 'Vivid Vicissitude (Nexus)',
		1: 'Fallen Flowers', // stack per sec
		2: 'Fleeting Fantasy', // initial stack
		3: 'Forgotten and Forsaken' // increase normal signet stack
	},
	nexus2: {
		name: 'Suffering Mass (Nexus)',
		1: 'Broken Dream', //  increase normal signet stack
		2: 'Go with the Flow', // absorb more dmg, extend invincibility
		3: 'Worldy Troubles' // total dmg
	}
};
export const kalpas: Signets = {
	name: 'Kalpas',
	signet: 'Decimation',
	regular: {
		1: 'Blade, Grave, and Scar', // total dmg
		2: 'Bone, Blood, and Ribbon', // phys ele dmg
		3: 'Desireless, Mindless, and Homeless', // vuln
		4: 'God, Me, and the Only', // sp restore
		5: 'Letter, Maniac, and Ravings', // dmg reduc
		6: 'Path, Misfortune, and Written Fate' // hp
	},
	nexus1: {
		name: 'Fight, Struggle, and Decimation (Nexus)',
		1: 'Burden, Difficulty, and Calamity', // fire dmg
		2: 'Inhuman, Unevil, and Ungodly', // lose hp recharge blood boil
		3: 'Man, Mask, and Contract' // more dmg to higher hp%
	},
	nexus2: {
		name: 'Soldiers, Scissors, Spoils, and Slaughter (Nexus)',
		1: 'Body, Bones, Heart , and Soul', // bonus dmg on cap threshold
		2: 'Death, Life, Oblivion, and Existence', // absorb dmg equal to % of charges
		3: 'Homeland and Friends' // phys ele breach
	}
};
export const kevin: Signets = {
	name: 'Kevin',
	signet: 'Deliverance',
	regular: {
		1: 'Artifact of the Inhibitor', // ele breach
		2: 'Brand of the Undead', // ele dmg
		3: 'Goblet of the Giver', // total dmg
		4: 'Mask of the Predator', // phys breach
		5: 'Pendant of the Watcher', // phys dmg
		6: 'Rochet of the Pilgrim' // sp restore
	},
	nexus1: {
		name: 'Blade of the Deliverer (Nexus)',
		1: 'Crusade of the Deliverer', // increase normal signet buff
		2: 'Echo of the Deliverer', // increase normal signet dur
		3: 'Flock of the Deliverer' // burst mode
	},
	nexus2: {
		name: 'Shadow of the Deliverer (Nexus)',
		1: 'Dream of the Deliverer', // increase normal signet buff
		2: 'Resolve of the Deliverer', // total dmg
		3: 'Triumph of the Deliverer' // ignore def & ele resist
	}
};
export const kosma: Signets = {
	name: 'Kosma',
	signet: 'Daybreak',
	regular: {
		1: 'Breath that Slanders Sulphur', // sp restore
		2: 'Eyes that Overlook the Vicious Abyss', // shield dmg
		3: 'Heart that Committed Seven Crimes', // time ext
		4: 'Horns that Rip the Bleak Sky', // ult
		5: 'Talons that Desecrate the Santuary', // basic/combo/charged
		6: 'Wings that Mask the Sanguine Moon' // evasion
	},
	nexus1: {
		name: 'Daybreak, an Undying Light (Nexus)',
		1: 'Unbending Hero', // phys ele breach
		2: 'Undetermined Judgement', // bonus dmg to broken shield
		3: 'Unwavering Promies' // vuln
	},
	nexus2: {
		name: 'Daybreak, Lone Beacon (Nexus)',
		1: 'Choice, Ensuing Regret', // restore hp
		2: 'Dawn, Perpetual Wait', // phys ele breach
		3: 'Heart, Unshakable Character' // phys ele dmg
	}
};
export const mobius: Signets = {
	name: 'Mobius',
	signet: 'Infinity',
	regular: {
		1: 'Dark Pupil', // elf sp
		2: 'Entwined [P]', // vuln
		3: 'Lip Poison [E]', // entity dmg
		4: 'Lodging [C]', // cd reduc
		5: 'Rodent [V]', // total dmg
		6: 'Silent [B]' // dmg reduc
	},
	nexus1: {
		name: 'Infinite [X] (Nexus)',
		1: 'Dead [X]', // total dmg
		2: 'Newborn [X]', // extend mind sync duration
		3: 'Unknown [X]' // reduce elf ult & supp valk skills
	},
	nexus2: {
		name: 'Infinite [M] (Nexus)',
		1: 'Collapsed [M]', // vuln
		2: 'Immortal [M]', // phys ele dmg
		3: 'Sacrificial [M]' // increase sentience sync duration
	}
};
export const pardofelis: Signets = {
	name: 'Pardofelis',
	signet: 'Reverie',
	regular: {
		1: 'Back-Curled Tail', // phys ele dmg
		2: 'Flexible P&C', // restore hp sp
		3: 'Merchant\'s Philosophy', // currency
		4: 'Motto of Meow', // total dmg
		5: 'Neighborhood Chatters', // max hp sp
		6: 'Shiny & Valuable' // currency/kill
	},
	nexus1: {
		name: 'Empty Dreams, Self, Set, and Joy (Nexus)',
		1: 'Improvised Drama', // evasion trigger move
		2: 'Setsuna Paw', // ult trigger move
		3: 'This Is Now Where We Die' // phys ele breach
	},
	nexus2: {
		name: 'Empty Illusions, Empty Fantasies (Nexus)',
		1: 'Improve Magic: Zeroing', // total dmg
		2: 'My Dreams Will Come True', // vuln
		3: 'Snowy Paw' // vip service stack
	}
};
export const sakura: Signets = {
	name: 'Sakura',
	signet: 'Setsuna',
	regular: {
		1: 'Bountiful Blossom: Ayame', // sp restore
		2: 'Bountiful Blossom: Botan', // total dmg
		3: 'Bountiful Blossom: Fuji', // +1 evasion, reduce cd
		4: 'Bountiful Blossom: Kiku', // reset evaision
		5: 'Bountiful Blossom: Koyo', // vuln
		6: 'Bountiful Blossom: Ume' // atk & move speed
	},
	nexus1: {
		name: 'Setsuna Blade: Sakura ni Maku (Nexus)',
		1: 'Setsuna Blade: Ame-Shiko', // reset ult & weap cd
		2: 'Setsuna Blade: Ino-Shika-Cho', // pause sakura screen dur
		3: 'Setsuna Blade: Tsukimi-de Ippai' // ice
	},
	nexus2: {
		name: 'Setsuna Blade: Yasha (Nexus)',
		1: 'Setsuna Blade: Mugenjigoku', // reduce evasion cd
		2: 'Setsuna Blade: Mumyo', // setsuna blade: karuma, ice dmg
		3: 'Setsuna Blade: Shinra Bansho' // evasion, ice dmg
	}
};
export const su: Signets = {
	name: 'Su',
	signet: 'Bodhi',
	regular: {
		1: 'Motto of Asavakkhaya', // 25 combo
		2: 'Motto of Ceto-Pariya-Nana', // sp restore
		3: 'Motto of Dibba-Cakkhu', // vuln
		4: 'Motto of Dibba-Sota', // dmg reduc
		5: 'Motto of Iddhi-Vidha', // 60 combo
		6: 'Motto of Pubbe-Nivasanussati' // total dmg
	},
	nexus1: {
		name: 'Maxim of Bodhi (Nexus)',
		1: 'Maxim of Anatman', // reduce enemy dmg
		2: 'Maxim of Anitya', // disable shield recovery
		3: 'Maxim of Santam' // bonus dmg to shield and unshielded
	},
	nexus2: {
		name: 'Dictum of Bodhi (Nexus)',
		1: 'Dictum of Anatman', // total dmg per debuff
		2: 'Dictum of Anitya', // adaptive dmg per debuff
		3: 'Dictum of Santam' // random debuff
	}
};
export const vv: Signets = {
	name: 'Vill-V',
	signet: 'Helix',
	regular: {
		1: 'Act I: Magic', // weap dmg
		2: 'Act II: Pendulum', // vuln
		3: 'Act III: Conflict', // total dmg
		4: 'Act IV: Spoon', // phys ele dmg
		5: 'Act V: Spider Web', // ranged dmg
		6: 'Act VI: Sneer' // sp restore & weap cd
	},
	nexus1: {
		name: 'Interlude: Reversed Spiral (Nexus)',
		1: 'Act VII: Half-Closed Door', // blades
		2: 'Act VIII: Adorned Chamber', // phys breach
		3: 'Finale: Broken Truth' // bonus dmg to shield
	},
	nexus2: {
		name: 'Intermezzo: Holistic Helix (Nexus)',
		1: 'Puppetry: Interlacing Cells', // phys ele breach
		2: 'Drama: Origin of Slumber', // vuln
		3: 'Saga: Overlapping Needles' // grav field
	}
};
type signetSummaryType = { signets: string | string[], summary: string }[]
// rough signet effect summaries
const damageDealt: string[] = [
	aponia.regular[1], eden.regular[3], griseo.nexus1[1], griseo.nexus2[2], hua.regular[3],
	hua.nexus2[3], kalpas.regular[1], kevin.regular[3], mobius.regular[5], mobius.nexus1[1],
	pardofelis.regular[4], pardofelis.nexus2[1], sakura.regular[2], su.regular[6], vv.regular[3]
];
const damageTaken: string[] = [
	aponia.regular[2], eden.regular[1], hua.regular[4], kalpas.regular[5], mobius.regular[6], su.regular[4]
];
const physEleDamage: string[] = [
	aponia.nexus2[1], eden.regular[2], griseo.regular[1], kalpas.regular[2], kosma.nexus2[3],
	pardofelis.regular[1], vv.regular[4]
];
const physDamage: string[] = [
	hua.regular[2], kevin.regular[5]
];
const eleDamage: string[] = [
	hua.regular[1], kevin.regular[2]
];
const physEleBreach: string[] = [
	aponia.nexus1[1], aponia.nexus2[2], griseo.nexus1[2], kalpas.nexus2[3], kosma.nexus2[2],
	pardofelis.nexus1[3], vv.nexus2[1]
];
const physBreach: string[] = [
	hua.regular[5], kevin.regular[4], vv.nexus1[2]
];
const eleBreach: string[] = [
	hua.regular[6], kevin.regular[1]
];
const vurnerability: string[] = [
	aponia.regular[6], aponia.nexus2[3], eden.nexus1[3], eden.nexus1[2], griseo.regular[4],
	griseo.regular[6], kalpas.regular[3], kevin.nexus2[3], mobius.regular[2], pardofelis.nexus2[2],
	sakura.regular[5], su.regular[3], su.nexus2[1], vv.regular[2], vv.nexus2[2]
];
const spRecovery: string[] = [
	aponia.regular[3], eden.regular[5], eden.regular[6], eden.nexus1[2], eden.nexus2[3],
	griseo.regular[5], kalpas.regular[4], kevin.regular[6], sakura.regular[1], su.regular[2],
	kosma.regular[1]
];
const lightningDamage: string[] = [
	eden.nexus1[1], eden.nexus2[2]
];
const bonusDamage: string[] = [
	griseo.nexus1[3], kalpas.nexus2[1], su.nexus2[2]
];
const normalSignetCap: string[] = [
	hua.nexus1[3], hua.nexus2[1]
];
const normalSignetBuff: string[] = [
	kevin.nexus1[1], kevin.nexus2[1]
];
const elfUltSuppValkCD: string[] = [
	mobius.regular[4], mobius.nexus1[3]
];
const ultimateEvasion: string[] = [
	kosma.regular[6], pardofelis.nexus1[1]
];
const ultBonusDamage: string[] = [
	kosma.regular[4], pardofelis.nexus1[2]
];
const iceDamage: string[] = [
	sakura.nexus1[3], sakura.nexus2[3], sakura.nexus2[2]
];
const damageShields: string[] = [
	su.nexus1[3], kosma.regular[2], vv.nexus1[3]
];
export const signetSummary: signetSummaryType = [
	{ signets: damageDealt,           summary: 'Total Damage Dealt' },
	{ signets: damageTaken,           summary: 'Total Damage Taken' },
	{ signets: physEleDamage,         summary: 'Physical & Elemental Damage' },
	{ signets: physDamage,            summary: 'Physical Damage' },
	{ signets: eleDamage,             summary: 'Elemental Damage' },
	{ signets: physEleBreach,         summary: 'Physical & Elemental Breach' },
	{ signets: physBreach,            summary: 'Physical Breach' },
	{ signets: eleBreach,             summary: 'Elemental Breach' },
	{ signets: vurnerability,         summary: 'Damage Taken By Enemies' },
	{ signets: spRecovery,            summary: 'SP Recovery' },
	{ signets: lightningDamage,       summary: 'Lightning Damage' },
	{ signets: bonusDamage,           summary: 'Bonus Damage' },
	{ signets: normalSignetCap,       summary: 'Increase Normal Signet Cap Increased' },
	{ signets: normalSignetBuff,      summary: 'Normal Signets Increased Buff' },
	{ signets: elfUltSuppValkCD,      summary: 'Elf Ultimate and Support Valk Skill Reduced CD' },
	{ signets: ultimateEvasion,       summary: 'Ultimate Evasion Trigger Bonus Damage' },
	{ signets: ultBonusDamage,        summary: 'Ultimate Trigger Bonus Damage' },
	{ signets: iceDamage,             summary: 'Ice Damage' },
	{ signets: damageShields,         summary: 'Bonus Damage to Shields' },
	{ signets: aponia.regular[4],     summary: 'Increase Ultimate Physical & Elemental Damage' },
	{ signets: aponia.regular[5],     summary: 'Start With More Exhortation' },
	{ signets: aponia.nexus1[2],      summary: 'Fixed Exhortation Value' },
	{ signets: aponia.nexus1[3],      summary: 'Increase Ultimate Total Damage' },
	{ signets: eden.regular[4],       summary: 'Initial and SP Cap Increased' },
	{ signets: kosma.regular[5],      summary: 'Basic/Combo/Charged ATKs Trigger Bonus Damage' },
	{ signets: kosma.regular[3],      summary: 'Longer Rend' },
	{ signets: griseo.regular[2],     summary: 'Reduce Enemy Damage and Movement' },
	{ signets: griseo.regular[3],     summary: 'Longer Taint' },
	{ signets: griseo.nexus2[1],      summary: 'Reduce Enemy Resist' },
	{ signets: griseo.nexus2[3],      summary: 'Increase Color Effect' },
	{ signets: hua.nexus1[2],         summary: 'Additional Initial Stack of Soldier\'s Resolve' },
	{ signets: hua.nexus1[1],         summary: 'Bonus Resolve Stack per Second to Normal Signets' },
	{ signets: hua.nexus2[2],         summary: 'Extends Incincibility From Soldier\'s Remembrance' },
	{ signets: kalpas.nexus1[1],      summary: 'Bonus Fire Damage' },
	{ signets: kalpas.regular[6],     summary: 'Max HP Increase' },
	{ signets: kalpas.nexus1[2],      summary: 'Losing HP Recharges Blood Boil ' },
	{ signets: kalpas.nexus1[3],      summary: 'More BB Damage to Higher HP% Enemies' },
	{ signets: kalpas.nexus2[2],      summary: 'BA Absorb Damage Equal to % of Charges' },
	{ signets: kevin.nexus1[3],       summary: 'Total Damage Increase in Burst Mode' },
	{ signets: kevin.nexus1[2],       summary: 'Final Battle and Normal Signet Duration Extended' },
	{ signets: kevin.nexus2[2],       summary: 'Total Damage Increase in Ultimate or Burst Mode Hit' },
	{ signets: kosma.nexus2[1],       summary: 'Combo/Charged ATKs Deal Adaptive Damage & Restore HP' },
	{ signets: mobius.regular[3],     summary: 'Entity Damage Dealt' },
	{ signets: mobius.regular[1],     summary: 'Elf SP Recovery' },
	{ signets: mobius.nexus1[2],      summary: 'Mind Sync Duration Extended' },
	{ signets: pardofelis.regular[5], summary: 'HP and SP Cap' },
	{ signets: pardofelis.regular[2], summary: 'HP and SP Recovery' },
	{ signets: pardofelis.regular[3], summary: 'Shiny Silver Increase Each Floor' },
	{ signets: pardofelis.regular[6], summary: 'Shiny Silver Each Kill ' },
	{ signets: pardofelis.nexus2[3],  summary: 'VIP Service Stack Duration' },
	{ signets: sakura.regular[6],     summary: 'Attack Speed & Move Speed' },
	{ signets: sakura.regular[4],     summary: 'Ultimate Evasion Reset CD' },
	{ signets: sakura.regular[3],     summary: 'Ultimate Evasion 1 More Charge and Reduced CD' },
	{ signets: sakura.nexus1[1],      summary: 'Sakura Screen Resets Ultimate and Weapon CD' },
	{ signets: sakura.nexus1[2],      summary: 'Sakura Screen Pause Duration' },
	{ signets: sakura.nexus2[1],      summary: 'Reduce Ultimate Evasion Remaining CD' },
	{ signets: su.regular[5],         summary: 'Combo Increased to 60 When Below 60' },
	{ signets: su.regular[1],         summary: '25 Bonus Combo' },
	{ signets: su.nexus1[2],          summary: 'Enemy Disable Shield Recovery' },
	{ signets: su.nexus1[1],          summary: 'Reduce Enemy Damage' },
	{ signets: su.nexus2[3],          summary: '3 Random Debuffs on Hit' },
	{ signets: vv.regular[1],         summary: 'Weapon Bonus Damage' },
	{ signets: vv.regular[5],         summary: 'Ranged Total Damage' },
	{ signets: vv.regular[6],         summary: 'SP Recovery and Reduce Weapon CD' },
	{ signets: vv.nexus1[1],          summary: 'Marvelous Magic Deals Bonus ATK' },
	{ signets: vv.nexus2[3],          summary: 'Larger Area and Stronger Gravitational Field'  }
];
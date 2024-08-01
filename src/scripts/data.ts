export type NameAcr = {
	name: string;
	acr: string;
}
type Nexus = {
	name: string;
	[key: string]: string;
}
export type Signet = {
	name: string;
	signet: string;
	regular: {
		[key: string]: string;
	}
	nexus1: Nexus;
	nexus2: Nexus;
}
export const isMobile = /Mobi/i.test(window.navigator.userAgent);
// priority terms
export const start = 'Start';
export const first = '1st';
export const second = '2nd';
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
export const anOldPalsLegacy:		NameAcr = { name: 'An Old Pal\'s Legacy',		acr: 'aopl' };
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
export const dafl:  NameAcr = { name: 'Deepspace Anchor: First Light', acr: 'dafl' };
export const dp:  NameAcr = { name: 'Divine Prayer',				acr: 'dp' };
export const fr:  NameAcr = { name: 'Fallen Rosemary',				acr: 'fr' };
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
export const brdm: NameAcr = { name: 'Broboli: Demo M', acr: 'brdm' };
export const brot: NameAcr = { name: 'Bronya: N-EX T', acr: 'brot' };
export const brom: NameAcr = { name: 'Bronya: N-EX M', acr: 'brom' };
export const brob: NameAcr = { name: 'Bronya: N-EX B', acr: 'brob' };
export const cart: NameAcr = { name: 'Carlo Collodi T', acr: 'cart' };
export const carm: NameAcr = { name: 'Carlo Collodi M', acr: 'carm' };
export const carb: NameAcr = { name: 'Carlo Collodi B', acr: 'carb' };
export const cect: NameAcr = { name: 'Cecilia: Youth T', acr: 'cect' };
export const cecm: NameAcr = { name: 'Cecilia: Youth M', acr: 'cecm' };
export const cecb: NameAcr = { name: 'Cecilia: Youth B', acr: 'cecb' };
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
export const fltt: NameAcr = { name: 'Fu Hua: Ordinary Day T', acr: 'fltt' };
export const fltm: NameAcr = { name: 'Fu Hua: Ordinary Day M', acr: 'fltm' };
export const fltb: NameAcr = { name: 'Fu Hua: Ordinary Day B', acr: 'fltb' };
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
export const litt: NameAcr = { name: 'TeRiRi: Gift T', acr: 'litt' };
export const litm: NameAcr = { name: 'Broboli: Demo M', acr: 'litm' };
export const litb: NameAcr = { name: 'Vollerei: Review B', acr: 'litb' };
export const marm: NameAcr = { name: 'Marco Polo M', acr: 'marm' };
export const mict: NameAcr = { name: 'Michealangelo T', acr: 'mict' };
export const micb: NameAcr = { name: 'Michealangelo B', acr: 'micb' };
export const murt: NameAcr = { name: 'Murata Himeko T', acr: 'murt' };
export const murm: NameAcr = { name: 'Murata Himeko M', acr: 'murm' };
export const murb: NameAcr = { name: 'Murata Himeko B', acr: 'murb' };
export const pagt: NameAcr = { name: 'Paganini T', acr: 'pagt' };
export const pagm: NameAcr = { name: 'Paganini M', acr: 'pagm' };
export const pagb: NameAcr = { name: 'Paganini B', acr: 'pagb' };
export const pert: NameAcr = { name: 'Pericles T', acr: 'pert' };
export const perm: NameAcr = { name: 'Pericles M', acr: 'perm' };
export const perb: NameAcr = { name: 'Pericles B', acr: 'perb' };
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
export const swet: NameAcr = { name: 'Himeko: Sweet Dreams T', acr: 'swet' };
export const swem: NameAcr = { name: 'Luna: Sweet Dreams M', acr: 'swem' };
export const sweb: NameAcr = { name: 'Kallen: Sweet Dreams B', acr: 'sweb' };
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
export const vont: NameAcr = { name: 'Von Neumann T', acr: 'vont' };
export const vonb: NameAcr = { name: 'Von Neumann B', acr: 'vonb' };
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
export const blha: NameAcr = { name: 'Blast Hammer: Blazing Red', acr: 'blha' };
export const codu: NameAcr = { name: 'Cosmic Duality', acr: 'codu' };
export const dabr: NameAcr = { name: 'Dawn Breaker: Talwar', acr: 'dabr' };
export const doeg: NameAcr = { name: 'Domain of Ego: Flawless Return', acr: 'doeg' };
export const doin: NameAcr = { name: 'Domain of Incandescence', acr: 'doin' };
export const dore: NameAcr = { name: 'Domain of Revelation', acr: 'dore' };
export const dosa: NameAcr = { name: 'Domain of Sanction', acr: 'dosa' };
export const dose: NameAcr = { name: 'Domain of Sentience', acr: 'dose' };
export const dovo: NameAcr = { name: 'Domain of the Void', acr: 'dovo' };
export const ecpa: NameAcr = { name: 'Echo of Paradise', acr: 'ecpa' };
export const elar: NameAcr = { name: 'Electrifying Arc: Azure Sky', acr: 'elar' };
export const elas: NameAcr = { name: 'Elysian Astra: Heart\'s Color', acr: 'elas' };
export const eogl: NameAcr = { name: 'Eos Gloria', acr: 'eogl' };
export const fafl: NameAcr = { name: 'Falcon Flare: FINAL', acr: 'fafl' };
export const frna: NameAcr = { name: 'Frozen Naraka', acr: 'frna' };
export const heso: NameAcr = { name: 'Hekate\'s Sombre', acr: 'heso' };
export const inin: NameAcr = { name: 'Incredibly Infinite Intimidator', acr: 'inin' };
export const irhe: NameAcr = { name: 'Iris of Helheim', acr: 'irhe' };
export const kevo: NameAcr = { name: 'Keys of the Void', acr: 'kevo' };
export const loco: NameAcr = { name: 'Lost Conviction: Damnation', acr: 'loco' };
export const miat: NameAcr = { name: 'Midnight Ataegina', acr: 'miat' };
export const miec: NameAcr = { name: 'Midnight Eclipse', acr: 'miec' };
export const miki: NameAcr = { name: 'Miracle Kissy Pillow', acr: 'miki' };
export const miwa: NameAcr = { name: 'Mitternachts Waltz', acr: 'miwa' };
export const mubl: NameAcr = { name: 'Muramasa Bloodlust', acr: 'mubl' };
export const nost: NameAcr = { name: 'Nocturnal Stealth: Beam', acr: 'nost' };
export const nure: NameAcr = { name: 'Nuada\'s Revenge', acr: 'nure' };
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
		'RPC-6626 weak to Elements',
		'Couatl: Revenant',
		'Huodou',
		'DJXY',
		'RPC', //
		'Dominator of Wolves',
		'Cruising Tribunal',
		'Pishacha',
		'Parvati',
		'HOMU', //
		'MHT-3B'
	],
	// 5
	[
		'Same type damage bonus',
		'At max HP gain 1 SP/s',
		'Ultimate Evasion recovers 10 SP',
		'Valk type matching enemy +TDM',
		'Weapon active vulnerability',
		'Melee ATK for 10% TDM', //
		'SP cap up',
		'SP +30',
		'Shieldbreak 5 SP',
		'Charged ATK vulnerability',
		'Summons TDM bonus', //
		'Max HP +200',
		'Max HP +500',
		'Different type support bonus'
	],
	// 10
	[
		'Enemy affected by status gives TDM',
		'TDM bonus if no damage taken',
		'For every 100 HP + TDM',
		'Ignite or para, valk +dmg',
		'60 combo vulnerability',
		'Both damage boosts after ultimate evasion', //
		'Paralyzed or bleeding TDM bonus',
		'Support type DMG bonus',
		'Shield broken vulnerability',
		'Ultimate evasion dmg boost',
		'Melee atk TDM', //
		'Counter type TDM boost',
		'Status TDM bonus',
		'Combo ATK vulnerability',
		'Status vulnerability',
		'Weapon active vulnerability', //
		'Abnormal status TDM bonus',
		'Ele DMG bonus',
		'Weapon skill TDM bonus',
		'Physical DMG',
		'Elemental DMG' //
	],
	// 15
	[
		'SP usage vulnerability',
		'Weapon type TDM bonus',
		'Support type breach',
		'300 elemental DMG vulnerability',
		'Combo ATK bonus',
		'Bleed vulnerability', //
		'Weapon type breach',
		'Melee vulnerability',
		'Ult vulnerability',
		'QTE bonus',
		'Summons TDM bonus', //
		'Ignite vulnerability',
		'Weapon active vulnerability',
		'Max HP DMG buff',
		'Melee ATK breach',
		'Max HP breach', //
		'Support type DMG bonus',
		'Ele DMG bonus',
		'Nexus Ice DMG bonus',
		'Weapon skill TDM bonus',
		'Weapon skill / Combo TDM bonus' //
	]
];
// signets
export const aponia: Signet = {
	name: 'Aponia',
	signet: 'Discipline',
	regular: {
		basicAtk: 'First, No Betrayal', // evasion, basic atk
		dmgReduc: 'Second, No Deception', // dmg reduc, entity
		spRestore: 'Third, No Brutality', // combo hit, sp regen
		dmgPhysEle: 'Fourth, No Insolence', // weap skill, ult phys & elem dmg
		vuln: 'Fifth, No Falsehood', // vuln, exhortation red
		dmgTotal: 'Sixth, No Decadence' // total dmg, qte
	},
	nexus1: {
		name: 'You Shall Be Subject to Numerous Disciplines (Nexus)',
		breachPhysEle: 'You Shall Be Bound by Thy Body', // phys ele breach
		limit: 'You Shall Be Committed to Thy Life', // exhortation limit
		dmgUlt: 'You Shall Be Witnessed by Thy Heart' // more ult dmg less phy ele basic atk
	},
	nexus2: {
		name: 'You Shall Receive Disciplines\' Blessing (Nexus)',
		dmgPhysEle: 'You Shall Answer Prayers', // phys ele dmg
		breachPhysEle: 'You Shall Follow Good', // phys ele breach
		vuln: 'You Shall Punish Evil' // vuln
	}
};
export const eden: Signet = {
	name: 'Eden',
	signet: 'Gold',
	regular: {
		dmgReduc: 'Recitatif of Birds', // dmg reduc
		dmgPhysEle: 'Recitatif of Creeks', // phys ele dmg
		dmgTotal: 'Recitatif of Eden', // total dmg
		spCapInitial: 'Recitatif of Fine Jade', // max & initial sp
		spRestoreAtk: 'Recitatif of Fruit Trees', // sp restore from atk
		spRestore: 'Recitatif of Good Wine' // sp restore
	},
	nexus1: {
		name: 'Aria of Gold (Nexus)',
		lightning: 'Aria of Dawn', // adaptive dmg
		spRestore: 'Aria of Life', // sp restore
		vuln: 'Aria of Soil' // vuln
	},
	nexus2: {
		name: 'Echo of Gold (Nexus)',
		lightning: 'Echo of Shrill Wind', // adaptive dmg
		vuln: 'Echo of Silent Night', // reduce enemy resist
		spCapRestore: 'Echo of Withered Soil' // sp cap, restore sp
	}
};
export const griseo: Signet = {
	name: 'Griseo',
	signet: 'Stars',
	regular: {
		black: 'Black & Dark', // phys ele dmg
		blue: 'Blue & Cold', // reduce enemy dmg & move speed
		grey: 'Grey & Empty', // taint extension
		red: 'Red & Hot', // phys ele dmg
		white: 'White & Bright', // sp restore
		yellow: 'Yellow & Warm' // vuln
	},
	nexus1: {
		name: 'Shining Like Stars (Nexus)',
		purple: 'Blooming Like Flowers', // total dmg
		orange: 'Burning Like Flames', // breach
		green: 'Stretching Like Leaves' // adaptive dmg
	},
	nexus2: {
		name: 'Faded Stars (Nexus)',
		orange: 'A Flame Extinguished', // enemy resist
		green: 'Fallen Leaves', // adaptive dmg
		purple: 'Petals in the Wind' // effect
	}
};
export const hua: Signet = {
	name: 'Hua',
	signet: 'Vicissitude',
	regular: {
		dmgEle: 'Dark Garb No More', // ele dmg
		dmgPhys: 'Days Gone', // phys dmg
		dmgTotal: 'Long trip', // total dmg
		dmgReduc: 'Lost and Found', // dmg reduc
		breachPhys: 'No One to Share', // phys breach
		breachEle: 'Old Dreams Again' // ele breach
	},
	nexus1: {
		name: 'Vivid Vicissitude (Nexus)',
		stackRegen: 'Fallen Flowers', // stack per sec
		stackInitial: 'Fleeting Fantasy', // initial stack
		stackEffect: 'Forgotten and Forsaken' // increase normal signet stack
	},
	nexus2: {
		name: 'Suffering Mass (Nexus)',
		stackCap: 'Broken Dream', //  increase normal signet stack
		extend: 'Go with the Flow', // absorb more dmg, extend invincibility
		dmgTotal: 'Worldy Troubles' // total dmg
	}
};
export const kalpas: Signet = {
	name: 'Kalpas',
	signet: 'Decimation',
	regular: {
		dmgTotal: 'Blade, Grave, and Scar', // total dmg
		dmgPhysEle: 'Bone, Blood, and Ribbon', // phys ele dmg
		vuln: 'Desireless, Mindless, and Homeless', // vuln
		spRestore: 'God, Me, and the Only', // sp restore
		dmgReduc: 'Letter, Maniac, and Ravings', // dmg reduc
		hp: 'Path, Misfortune, and Written Fate' // hp
	},
	nexus1: {
		name: 'Fight, Struggle, and Decimation (Nexus)',
		fire: 'Burden, Difficulty, and Calamity', // adaptive dmg
		bbRecharge: 'Inhuman, Unevil, and Ungodly', // lose hp recharge blood boil
		dmgBonus: 'Man, Mask, and Contract' // more dmg to higher hp%
	},
	nexus2: {
		name: 'Soldiers, Scissors, Spoils, and Slaughter (Nexus)',
		dmgBonus: 'Body, Bones, Heart , and Soul', // bonus dmg on cap threshold
		absorb: 'Death, Life, Oblivion, and Existence', // absorb dmg equal to % of charges
		breachPhysEle: 'Homeland and Friends' // phys ele breach
	}
};
export const kevin: Signet = {
	name: 'Kevin',
	signet: 'Deliverance',
	regular: {
		breachEle: 'Artifact of the Inhibitor', // ele breach
		dmgEle: 'Brand of the Undead', // ele dmg
		dmgTotal: 'Goblet of the Giver', // total dmg
		breachPhys: 'Mask of the Predator', // phys breach
		dmgPhys: 'Pendant of the Watcher', // phys dmg
		spRestore: 'Rochet of the Pilgrim' // sp restore
	},
	nexus1: {
		name: 'Blade of the Deliverer (Nexus)',
		effect: 'Crusade of the Deliverer', // increase normal signet buff
		dur: 'Echo of the Deliverer', // increase normal signet dur
		burst: 'Flock of the Deliverer' // burst mode
	},
	nexus2: {
		name: 'Shadow of the Deliverer (Nexus)',
		effect: 'Dream of the Deliverer', // increase normal signet buff
		dmgTotal: 'Resolve of the Deliverer', // total dmg
		ignoreRes: 'Triumph of the Deliverer' // ignore def & ele resist
	}
};
export const kosma: Signet = {
	name: 'Kosma',
	signet: 'Daybreak',
	regular: {
		spRestore: 'Breath that Slanders Sulphur', // sp restore
		dmgShield: 'Eyes that Overlook the Vicious Abyss', // shield dmg
		extend: 'Heart that Committed Seven Crimes', // time ext
		ult: 'Horns that Rip the Bleak Sky', // ult
		atk: 'Talons that Desecrate the Santuary', // basic/combo/charged
		evasion: 'Wings that Mask the Sanguine Moon' // evasion
	},
	nexus1: {
		name: 'Daybreak, an Undying Light (Nexus)',
		breachPhysEle: 'Unbending Hero', // phys ele breach
		dmgPhysEle: 'Undetermined Judgement', // phys ele dmg
		vuln: 'Unwavering Promise' // vuln
	},
	nexus2: {
		name: 'Daybreak, Lone Beacon (Nexus)',
		hpRestore: 'Choice, Ensuing Regret', // restore hp
		breachPhysEle: 'Dawn, Perpetual Wait', // phys ele breach
		dmgPhysEle: 'Heart, Unshakable Character' // phys ele dmg
	}
};
export const mobius: Signet = {
	name: 'Mobius',
	signet: 'Infinity',
	regular: {
		elfSp: 'Dark Pupil', // elf sp
		vuln: 'Entwined [P]', // vuln
		dmgEntity: 'Lip Poison [E]', // entity dmg
		cdReduc: 'Lodging [C]', // cd reduc
		dmgTotal: 'Rodent [V]', // total dmg
		dmgReduc: 'Silent [B]' // dmg reduc
	},
	nexus1: {
		name: 'Infinite [X] (Nexus)',
		dmgTotal: 'Dead [X]', // total dmg
		breachPhysEle: 'Newborn [X]', // phys ele breach
		reduce: 'Unknown [X]' // reduce elf ult & supp valk skills
	},
	nexus2: {
		name: 'Infinite [M] (Nexus)',
		vuln: 'Collapsed [M]', // vuln
		dmgPhysEle: 'Immortal [M]', // phys ele dmg
		extend: 'Sacrificial [M]' // increase sentience sync duration
	}
};
export const pardofelis: Signet = {
	name: 'Pardofelis',
	signet: 'Reverie',
	regular: {
		dmgPhysEle: 'Back-Curled Tail', // phys ele dmg
		spHpRestore: 'Flexible P&C', // restore hp sp
		curr: 'Merchant\'s Philosophy', // currency
		dmgTotal: 'Motto of Meow', // total dmg
		spHpCap: 'Neighborhood Chatters', // max hp sp
		currKill: 'Shiny & Valuable' // currency/kill
	},
	nexus1: {
		name: 'Empty Dreams, Self, Set, and Joy (Nexus)',
		evasion: 'Improvised Drama', // evasion trigger move
		ult: 'Setsuna Paw', // ult trigger move
		breachPhysEle: 'This Is Now Where We Die' // phys ele breach
	},
	nexus2: {
		name: 'Empty Illusions, Empty Fantasies (Nexus)',
		dmgTotal: 'Improve Magic: Zeroing', // total dmg
		vuln: 'My Dreams Will Come True', // vuln
		stack: 'Snowy Paw' // vip service stack
	}
};
export const sakura: Signet = {
	name: 'Sakura',
	signet: 'Setsuna',
	regular: {
		spRestore: 'Bountiful Blossom: Ayame', // sp restore
		dmgTotal: 'Bountiful Blossom: Botan', // total dmg
		evasionAdd: 'Bountiful Blossom: Fuji', // +1 evasion, reduce cd
		evasionReset: 'Bountiful Blossom: Kiku', // reset evasion
		vuln: 'Bountiful Blossom: Koyo', // vuln
		speed: 'Bountiful Blossom: Ume' // atk & move speed
	},
	nexus1: {
		name: 'Setsuna Blade: Sakura ni Maku (Nexus)',
		cd: 'Setsuna Blade: Ame-Shiko', // reset ult & weap cd
		pause: 'Setsuna Blade: Ino-Shika-Cho', // pause sakura screen dur
		ice: 'Setsuna Blade: Tsukimi-de Ippai' // adaptive dmg
	},
	nexus2: {
		name: 'Setsuna Blade: Yasha (Nexus)',
		cd: 'Setsuna Blade: Mugenjigoku', // reduce evasion cd
		ice: 'Setsuna Blade: Mumyo', // adaptive dmg
		evasionIce: 'Setsuna Blade: Shinra Bansho' // adaptive dmg
	}
};
export const su: Signet = {
	name: 'Su',
	signet: 'Bodhi',
	regular: {
		combo25: 'Motto of Asavakkhaya', // 25 combo
		spRestore: 'Motto of Ceto-Pariya-Nana', // sp restore
		vuln: 'Motto of Dibba-Cakkhu', // vuln
		dmgReduc: 'Motto of Dibba-Sota', // dmg reduc
		combo60: 'Motto of Iddhi-Vidha', // 60 combo
		dmgTotal: 'Motto of Pubbe-Nivasanussati' // total dmg
	},
	nexus1: {
		name: 'Maxim of Bodhi (Nexus)',
		vuln: 'Maxim of Anatman', // vuln
		breachPhysEle: 'Maxim of Anitya', // phys ele breach
		dmgShield: 'Maxim of Santam' // bonus dmg to shield and unshielded
	},
	nexus2: {
		name: 'Dictum of Bodhi (Nexus)',
		vuln: 'Dictum of Anatman', // vuln
		dmgBonus: 'Dictum of Anitya', // adaptive dmg per debuff
		debuff: 'Dictum of Santam' // random debuff
	}
};
export const vv: Signet = {
	name: 'Vill-V',
	signet: 'Helix',
	regular: {
		dmgWeap: 'Act I: Magic', // weap dmg
		vuln: 'Act II: Pendulum', // vuln
		dmgTotal: 'Act III: Conflict', // total dmg
		dmgPhysEle: 'Act IV: Spoon', // phys ele dmg
		dmgRanged: 'Act V: Spider Web', // ranged dmg
		spRestore: 'Act VI: Sneer' // sp restore & weap cd
	},
	nexus1: {
		name: 'Interlude: Reversed Spiral (Nexus)',
		blades: 'Act VII: Half-Closed Door', // blades/phys dmg
		breachPhys: 'Act VIII: Adorned Chamber', // phys breach
		dmgShield: 'Finale: Broken Truth' // bonus dmg to shield
	},
	nexus2: {
		name: 'Intermezzo: Holistic Helix (Nexus)',
		breachPhysEle: 'Puppetry: Interlacing Cells', // phys ele breach
		vuln: 'Drama: Origin of Slumber', // vuln
		gravField: 'Saga: Overlapping Needles' // adaptive dmg
	}
};
type signetSummaryType = { signets: string | string[], summary: string }[]
// rough signet effect summaries
const damageDealt: string[] = [
	aponia.regular.basicAtk, eden.regular.dmgTotal, griseo.nexus1.purple, griseo.nexus2.green, hua.regular.dmgTotal,
	hua.nexus2.dmgTotal, kalpas.regular.dmgTotal, kevin.regular.dmgTotal, mobius.regular.dmgTotal, mobius.nexus1.dmgTotal,
	pardofelis.regular.dmgTotal, pardofelis.nexus2.dmgTotal, sakura.regular.dmgTotal, su.regular.dmgTotal, vv.regular.dmgTotal
];
const damageTaken: string[] = [
	aponia.regular.dmgReduc, eden.regular.dmgReduc, hua.regular.dmgReduc, kalpas.regular.dmgReduc, mobius.regular.dmgReduc, su.regular.dmgReduc
];
const physEleDamage: string[] = [
	aponia.nexus2.dmgPhysEle, eden.regular.dmgPhysEle, griseo.regular.black, kalpas.regular.dmgPhysEle, kosma.nexus1.dmgPhysEle,
	kosma.nexus2.dmgPhysEle, pardofelis.regular.dmgPhysEle, vv.regular.dmgPhysEle
];
const physDamage: string[] = [
	hua.regular.dmgPhys, kevin.regular.dmgPhys
];
const eleDamage: string[] = [
	hua.regular.dmgEle, kevin.regular.dmgEle
];
const physEleBreach: string[] = [
	aponia.nexus1.breachPhysEle, aponia.nexus2.breachPhysEle, griseo.nexus1.orange, kalpas.nexus2.breachPhysEle, kosma.nexus1.breachPhysEle,
	kosma.nexus2.breachPhysEle, pardofelis.nexus1.breachPhysEle, vv.nexus2.breachPhysEle, su.nexus1.shieldDisable, mobius.nexus1.extend
];
const physBreach: string[] = [
	hua.regular.breachPhys, kevin.regular.breachPhys, vv.nexus1.breachPhys
];
const eleBreach: string[] = [
	hua.regular.breachEle, kevin.regular.breachEle
];
const vurnerability: string[] = [
	aponia.regular.dmgTotal, aponia.nexus2.vuln, eden.nexus1.vuln, griseo.regular.red,
	griseo.regular.yellow, kalpas.regular.vuln, kevin.nexus2.ignoreRes, mobius.regular.vuln, pardofelis.nexus2.vuln,
	sakura.regular.vuln, su.regular.vuln, su.nexus2.vuln, vv.regular.vuln, vv.nexus2.vuln,
	su.nexus1.enemyDmg, kosma.nexus1.vuln
];
const spRecovery: string[] = [
	aponia.regular.spRestore, eden.regular.spRestoreAtk, eden.regular.spRestore, eden.nexus1.spRestore, eden.nexus2.spCapRestore,
	griseo.regular.white, kalpas.regular.spRestore, kevin.regular.spRestore, sakura.regular.spRestore, su.regular.spRestore,
	kosma.regular.spRestore
];
const adaptiveDamaage: string[] = [
	eden.nexus1.lightning, eden.nexus2.vuln, kalpas.nexus1.fire, sakura.nexus1.ice, sakura.nexus2.evasionIce,
	sakura.nexus2.ice,  vv.nexus2.gravField
];
const bonusDamage: string[] = [
	griseo.nexus1.green, kalpas.nexus2.dmgBonus, su.nexus2.dmgBonus
];
const normalSignetCap: string[] = [
	hua.nexus1.stackEffect, hua.nexus2.stackCap
];
const normalSignetBuff: string[] = [
	kevin.nexus1.effect, kevin.nexus2.effect
];
const elfUltSuppValkCD: string[] = [
	mobius.regular.cdReduc, mobius.nexus1.reduce
];
const ultimateEvasion: string[] = [
	kosma.regular.evasion, pardofelis.nexus1.evasion
];
const ultBonusDamage: string[] = [
	kosma.regular.ult, pardofelis.nexus1.ult
];
const damageShields: string[] = [
	su.nexus1.dmgShield, kosma.regular.dmgShield, vv.nexus1.dmgShield
];
export const signetSummary: signetSummaryType = [
	{ signets: damageDealt, summary: 'Total Damage Dealt' },
	{ signets: damageTaken, summary: 'Total Damage Taken' },
	{ signets: physEleDamage, summary: 'Physical & Elemental Damage' },
	{ signets: physDamage, summary: 'Physical Damage' },
	{ signets: eleDamage, summary: 'Elemental Damage' },
	{ signets: physEleBreach, summary: 'Physical & Elemental Breach' },
	{ signets: physBreach, summary: 'Physical Breach' },
	{ signets: eleBreach, summary: 'Elemental Breach' },
	{ signets: vurnerability, summary: 'Damage Taken By Enemies' },
	{ signets: spRecovery, summary: 'SP Recovery' },
	{ signets: adaptiveDamaage, summary: 'Adaptive Damage' },
	{ signets: bonusDamage, summary: 'Bonus Damage' },
	{ signets: normalSignetCap, summary: 'Increase Normal Signet Cap Increased' },
	{ signets: normalSignetBuff, summary: 'Normal Signets Increased Buff' },
	{ signets: elfUltSuppValkCD, summary: 'Elf Ultimate and Support Valk Skill Reduced CD' },
	{ signets: ultimateEvasion, summary: 'Ultimate Evasion Trigger Bonus Damage' },
	{ signets: ultBonusDamage, summary: 'Ultimate Trigger Bonus Damage' },
	{ signets: damageShields, summary: 'Bonus Damage to Shields' },
	{ signets: aponia.regular.dmgPhysEle, summary: 'Increase Ultimate Physical & Elemental Damage' },
	{ signets: aponia.regular.vuln, summary: 'Start With More Exhortation' },
	{ signets: aponia.nexus1.limit, summary: 'Fixed Exhortation Value' },
	{ signets: aponia.nexus1.dmgUlt, summary: 'Increase Ultimate Total Damage' },
	{ signets: eden.regular.spCapInitial, summary: 'Initial and SP Cap Increased' },
	{ signets: kosma.regular.atk, summary: 'Basic/Combo/Charged ATKs Trigger Bonus Damage' },
	{ signets: kosma.regular.extend, summary: 'Longer Rend' },
	{ signets: griseo.regular.blue, summary: 'Reduce Enemy Damage and Movement' },
	{ signets: griseo.regular.grey, summary: 'Longer Taint' },
	{ signets: griseo.nexus2.orange, summary: 'Reduce Enemy Resist' },
	{ signets: griseo.nexus2.purple, summary: 'Increase Color Effect' },
	{ signets: hua.nexus1.stackInitial, summary: 'Additional Initial Stack of Soldier\'s Resolve' },
	{ signets: hua.nexus1.stackRegen, summary: 'Bonus Resolve Stack per Second to Normal Signets' },
	{ signets: hua.nexus2.extend, summary: 'Extends Incincibility From Soldier\'s Remembrance' },
	{ signets: kalpas.regular.hp, summary: 'Max HP Increase' },
	{ signets: kalpas.nexus1.bbRecharge, summary: 'Losing HP Recharges Blood Boil ' },
	{ signets: kalpas.nexus1.dmgBonus, summary: 'More BB Damage to Higher HP% Enemies' },
	{ signets: kalpas.nexus2.absorb, summary: 'BA Absorb Damage Equal to % of Charges' },
	{ signets: kevin.nexus1.burst, summary: 'Total Damage Increase in Burst Mode' },
	{ signets: kevin.nexus1.dur, summary: 'Final Battle and Normal Signet Duration Extended' },
	{ signets: kevin.nexus2.dmgTotal, summary: 'Total Damage Increase in Ultimate or Burst Mode Hit' },
	{ signets: kosma.nexus2.hpRestore, summary: 'Combo/Charged ATKs Deal Adaptive Damage & Restore HP' },
	{ signets: mobius.regular.dmgEntity, summary: 'Entity Damage Dealt' },
	{ signets: mobius.regular.elfSp, summary: 'Elf SP Recovery' },
	{ signets: pardofelis.regular.spHpCap, summary: 'HP and SP Cap' },
	{ signets: pardofelis.regular.spHpRestore, summary: 'HP and SP Recovery' },
	{ signets: pardofelis.regular.curr, summary: 'Shiny Silver Increase Each Floor' },
	{ signets: pardofelis.regular.currKill, summary: 'Shiny Silver Each Kill ' },
	{ signets: pardofelis.nexus2.stack, summary: 'VIP Service Stack Duration' },
	{ signets: sakura.regular.speed, summary: 'Attack Speed & Move Speed' },
	{ signets: sakura.regular.evasionReset, summary: 'Ultimate Evasion Reset CD' },
	{ signets: sakura.regular.evasionAdd, summary: 'Ultimate Evasion 1 More Charge and Reduced CD' },
	{ signets: sakura.nexus1.cd, summary: 'Sakura Screen Resets Ultimate and Weapon CD' },
	{ signets: sakura.nexus1.pause, summary: 'Sakura Screen Pause Duration' },
	{ signets: sakura.nexus2.cd, summary: 'Reduce Ultimate Evasion Remaining CD' },
	{ signets: su.regular.combo60, summary: 'Combo Increased to 60 When Below 60' },
	{ signets: su.regular.combo25, summary: '25 Bonus Combo' },
	{ signets: su.nexus2.debuff, summary: '3 Random Debuffs on Hit' },
	{ signets: vv.regular.dmgWeap, summary: 'Weapon Bonus Damage' },
	{ signets: vv.regular.dmgRanged, summary: 'Ranged Total Damage' },
	{ signets: vv.regular.spRestore, summary: 'SP Recovery and Reduce Weapon CD' },
	{ signets: vv.nexus1.blades, summary: 'Marvelous Magic Deals Bonus ATK' }
];
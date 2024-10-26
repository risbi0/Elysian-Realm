const cacheName = 'herrscher-of-cache-v22';

const cacheAssets = [
	'./site.webmanifest',
	'./static/img/bg-dt.png',
	'./static/img/bg-mb.png',
	// fonts
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@200',
	'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200&display=swap',
	'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300&display=swap',
	// html
	'./index.html',
	'./about.html',
	// javascript
	'./static/script.js',
	// styles
	'./static/styles/reset.css',
	'./static/styles/styles.css',
	// favicon
	'./static/favicon/favicon.ico',
	'./static/favicon/android-chrome-192x192.png',
	'./static/favicon/android-chrome-512x512.png',
	'./static/favicon/favicon-16x16.png',
	'./static/favicon/favicon-32x32.png',
	'./static/favicon/maskable-icon.png',
	'./static/favicon/safari-pinned-tab.svg'
];

const bannerImages = [
	'Argent_Knight_Artemis',
	'Bright_Knight_Excelsis',
	'Chrono_Navi',
	'Cosmic_Expression',
	'Dea_Anchora',
	'Deepspace_Anchor_First_Light',
	'Disciplinary_Perdition',
	'Dreamweaver',
	'Fallen_Rosemary',
	'Fenghuang_of_Vicissitude',
	'Fervent_Tempo',
	'Golden_Diva',
	'Goushinnso_Memento',
	'Helical_Contraption',
	'Herrscher_of_Finality',
	'Herrscher_of_Flamescion',
	'Herrscher_of_Human_Ego',
	'Herrscher_of_Origin',
	'Herrscher_of_Reason',
	'Herrscher_of_Rebirth',
	'Herrscher_of_Sentience',
	'Herrscher_of_the_Void',
	'Herrscher_of_Thunder',
	'Herrscher_of_Truth',
	'Infinite_Ouroboros',
	'Jade_Knight',
	'Jovial_Deception_Shadowdimmer',
	'Lone_Destruction_Shadowchaser',
	'Lone_Planetfarer',
	'Luna_Kindred',
	'Lunar_Vow_Crimson_Love',
	'Mad_Pleasure_Shadowbringer',
	'Midnight_Absinthe',
	'Miracle_Magical_Girl',
	'Miss_Pink_Elf',
	'Palatinus_Equinox',
	'Prinzessin_der_Verurteilung',
	'Reverist_Calico',
	'Ritual_Imayoh',
	'Shadow_Knight',
	'Schicksal\'s_Imperative',
	'Silverwing_N-EX',
	'Sixth_Serenade',
	'Spina_Astera',
	'Starchasm_Nyx',
	'Starry_Impression',
	'Stygian_Nymph',
	'Sugary_Starburst',
	'Sweet_n_Spicy',
	'Striker_Fulminata',
	'Terminal_Aide_0017',
	'Twilight_Paladin',
	'Valkyrie_Blastmetal',
	'Valkyrie_Boltstorm',
	'Valkyrie_Gloria',
	'Valkyrie_Quicksand',
	'Vermilion_Knight_Eclipse'
];

const images = [
	// avatars
	'Azure_Empyrea_Avatar',
	'Blood_Rose_Avatar',
	'Bright_Knight_Excelsis_Avatar',
	'Deepspace_Anchor_First_Light_Avatar',
	'Divine_Prayer_Avatar',
	'Fallen_Rosemary_Avatar',
	'Haxxor_Bunny_Avatar',
	'Lightning_Empress_Avatar',
	'Midnight_Absinthe_Avatar',
	'Reverist_Calico_Avatar',
	'Snowy_Sniper_Avatar',
	'Starlit_Astrologos_Avatar',
	'Stygian_Nymph_Avatar',
	'Valkyrie_Chariot_Avatar',
	'Vermilion_Knight_Eclipse_Avatar',
	// signets
	'Aponia_Signet',
	'Eden_Signet',
	'Griseo_Signet',
	'Hua_Signet',
	'Kalpas_Signet',
	'Kevin_Signet',
	'Kosma_Signet',
	'Mobius_Signet',
	'Pardofelis_Signet',
	'Sakura_Signet',
	'Su_Signet',
	'Vill-V_Signet',
	// emblems
	'An_Old_Pals_Legacy',
	'Because_of_You',
	'Boundless_Feeling',
	'Boundless_Logos',
	'Burden',
	'Dreamful_Gold',
	'Empty_Like_Shala',
	'Falling_in_Past_Light',
	'Faraway_Ship',
	'Feast_of_Emptiness',
	'Forbidden_Seed',
	'Forget_Me_Not',
	'Fragile_Friend',
	'Gold_Goblet',
	'Good_Old_Days',
	'Grey_Scale_Rainbow',
	'Heavy_as_a_Million_Lives',
	'Home_Lost',
	'Hometown',
	'It_Will_Be_Written',
	'Key_to_the_Deep',
	'Light_as_a_Bodhi_Leaf',
	'Mad_Kings_Mask',
	'Memory',
	'Out_of_Reach',
	'Proof_of_Good_and_Evil',
	'Pseudo_Miracle',
	'Rainbow_of_Absence',
	'Resolve',
	'Ruined_Legacy',
	'Stained_Sakura',
	'The_First_Scale',
	'The_Lonely_Moon',
	'Thorny_Crown',
	'Tin_Flask',
	'Tsukimi_Himiko',
	'Veil_of_Tears',
	// non-full-set stigmatas
	'Linnaeus_T',
	'Marco_Polo_M',
	'Michelangelo_T',
	'Michelangelo_B',
	'Leeuwenhoek_B',
	'Leeuwenhoek_T',
	'Mei_Spectramancer_T',
	'Fu_Hua_Onyx_Simurgh_B',
	'Raksha_T',
	'Sushang_M',
	'Empyrea_Phoenix_B',
	'Siegfried_Kaslana_M',
	'Thales_M',
	'Broboli_M',
	'Von_Neumann_T',
	'Von_Neumann_B',
	// weapons
	'0_high_atk_weap',
	'3rd_Sacred_Relic',
	'Abyss_Flower_Liminal_Spiral',
	'Astral_Divide_Pisces',
	'Basilisks_Image_Deathshroud',
	'Blast_Hammer_Blazing_Red',
	'Blood_Dance',
	'Cosmic_Duality',
	'Dawn_Breaker_Talwar',
	'Domain_of_Ego_Flawless_Return',
	'Domain_of_Incandescence',
	'Domain_of_Revelation',
	'Domain_of_Sanction',
	'Domain_of_Sentience',
	'Domain_of_the_Void',
	'Echo_of_Paradise',
	'Electrifying_Arc_Azure_Sky',
	'Elysian_Astra_Hearts_Color',
	'Eos_Gloria',
	'Falcon_Flare_FINAL',
	'Frozen_Naraka',
	'Hekates_Sombre',
	'Incredibly_Infinite_Intimidator',
	'Iris_of_Helheim',
	'Keys_of_the_Void',
	'Lost_Conviction_Damnation',
	'Midnight_Ataegina',
	'Midnight_Eclipse',
	'Miracle_Kissy_Pillow',
	'Mitternachts_Waltz',
	'Muramasa_Bloodlust',
	'Nocturnal_Stealth_Beam',
	'Nuadas_Revenge',
	'Oblivion_Down',
	'Obscuring_Wing',
	'Path_to_Acheron_Kindred',
	'Positron_Blasters',
	'Purana_Phantasma',
	'Rudder_in_Dream',
	'Sagittarius_Astra',
	'Sanguine_Gaze',
	'Sanguine_Gaze_Union',
	'Seven_Thunders_of_Retribution_Narukami',
	'Seven_Thunders_of_Retribution_Rumble',
	'Shuhadaku_of_Uriel',
	'Skadi_of_Thrymheim',
	'Sleepers_Dream',
	'Star_of_Eden_World',
	'Surtr_Muspellsverd',
	'Tower_of_the_Past_Silk_Ladder',
	'Whisper_of_the_Past_Sonnet'
];

const stigType = ['T', 'M', 'B'];
const stigImages = [
	'Allan_Poe',
	'Ana_Schariac',
	'Aslaug',
	'Bastet',
	'Benares_Awakening',
	'Bianka_Theatre',
	'Bronya_N-EX',
	'Carlo_Collodi',
	'Cecilia_Youth',
	'Cezanne',
	'Dante',
	'Dirac',
	'Dracula',
	'Elysia',
	'Elysia_Pristine',
	'Flavors_of_Time',
	'Handel',
	'Idol_Transformation',
	'Irene_Adler',
	'Kafka',
	'Li_Sushang_Shenzhou_Reminiscence',
	'Little_Joys',
	'Murata_Himeko',
	'Paganini',
	'Pericles',
	'Ragna',
	'Robert_Peary',
	'Shakespeare_Adrift',
	'Sirin_Ascendant',
	'Sweet_Dreams',
	'Verne',
	'Wang_Zhenyi',
	'Welt_Yang',
	'Willows',
	'Zeno'
];

// installation
self.addEventListener('install', (e) => {
	const selfUrl = new URL(self.location);
	const device = selfUrl.searchParams.get('device');
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			console.log('Service Worker: Caching Files...');
			for (let i = 0; i < images.length; i++) {
				cacheAssets.push(`./static/img/${images[i]}.png`);
			}
			for (let i = 0; i < bannerImages.length; i++) {
				cacheAssets.push(`./static/img/${bannerImages[i]}_${device}.png`);
			}
			for (let i = 0; i < stigImages.length; i++) {
				for (let j = 0; j < stigType.length; j++) {
					cacheAssets.push(`./static/img/${stigImages[i]}_${stigType[j]}.png`);
				}
			}
			cache.addAll(cacheAssets);
		}).then(() => {
			self.skipWaiting();
			console.log('Service Worker: Installed');
		})
	);
});

// activation
self.addEventListener('activate', (e) => {
	e.waitUntil(
		caches.keys().then((keys) => {
			Promise.all(
				keys.map((key) => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			);
		}).then(() => {
			console.log('Service Worker: Activated');
		})
	);
});

// fetch
self.addEventListener('fetch', (e) => {
	console.log('Service Worker: Fetching...');
	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
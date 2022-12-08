const cacheName = 'herrscher-of-cache-v2';

const cacheAssets = [
	'./site.webmanifest',
	'./static/img/bg.png',
	// fonts
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap',
	'https://fonts.gstatic.com/s/raleway/v27/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCIPrEVJz9d.woff2',
	'https://fonts.gstatic.com/s/materialicons/v129/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
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
	'./static/favicon/mstile-150x150.png',
	'./static/favicon/safari-pinned-tab.svg'
];

const bannerImages = [
	'Argent_Knight_Artemis',
	'Bright_Knight_Excelsis',
	'Chrono_Navi',
	'Dea_Anchora',
	'Disciplinary_Perdition',
	'Fallen_Rosemary',
	'Fervent_Tempo',
	'Golden_Diva',
	'Goushinnso_Memento',
	'Helical_Contraption',
	'Herrscher_of_Flamescion',
	'Herrscher_of_Human_Ego',
	'Herrscher_of_Reason',
	'Herrscher_of_Sentience',
	'Herrscher_of_the_Void',
	'Herrscher_of_Thunder',
	'Infinite_Ouroboros',
	'Jade_Knight',
	'Luna_Kindred',
	'Midnight_Absinthe',
	'Miss_Pink_Elf',
	'Palatinus_Equinox',
	'Prinzessin_der_Verurteilung',
	'Reverist_Calico',
	'Ritual_Imayoh',
	'Silverwing_N-EX',
	'Spina_Astera',
	'Starchasm_Nyx',
	'Starry_Impression',
	'Stygian_Nymph',
	'Sweet_n_Spicy',
	'Striker_Fulminata',
	'Twilight_Paladin',
	'Valkyrie_Gloria',
	'Vermilion_Knight_Eclipse'
];

const images = [
	// avatars
	'Azure_Empyrea_Avatar',
	'Blood_Rose_Avatar',
	'Bright_Knight_Excelsis_Avatar',
	'Divine_Prayer_Avatar',
	'Haxxor_Bunny_Avatar',
	'Lightning_Empress_Avatar',
	'Midnight_Absinthe_Avatar',
	'Reverist_Calico_Avatar',
	'Snowy_Sniper_Avatar',
	'Starlit_Astrologos_Avatar',
	'Stygian_Nymph_Avatar',
	'Valkyrie_Chariot_Avatar',
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
	// stigmatas
	'Allan_Poe_T',
	'Allan_Poe_M',
	'Allan_Poe_B',
	'Ana_Schariac_T',
	'Ana_Schariac_M',
	'Ana_Schariac_B',
	'Aslaug_T',
	'Aslaug_M',
	'Aslaug_B',
	'Bastet_T',
	'Bastet_M',
	'Bastet_B',
	'Benares_Awakening_T',
	'Benares_Awakening_M',
	'Benares_Awakening_B',
	'Bianka_Theatre_T',
	'Bianka_Theatre_M',
	'Bianka_Theatre_B',
	'Bronya_N-EX_T',
	'Bronya_N-EX_M',
	'Bronya_N-EX_B',
	'Carlo_Collodi_T',
	'Carlo_Collodi_M',
	'Carlo_Collodi_B',
	'Cezanne_T',
	'Cezanne_M',
	'Cezanne_B',
	'Dante_T',
	'Dante_M',
	'Dante_B',
	'Dirac_T',
	'Dirac_M',
	'Dirac_B',
	'Dracula_T',
	'Dracula_M',
	'Dracula_B',
	'Elysia_T',
	'Elysia_M',
	'Elysia_B',
	'Elysia_Pristine_T',
	'Elysia_Pristine_M',
	'Elysia_Pristine_B',
	'Handel_T',
	'Handel_M',
	'Handel_B',
	'Idol_Transformation_T',
	'Idol_Transformation_M',
	'Idol_Transformation_B',
	'Irene_Adler_T',
	'Irene_Adler_M',
	'Irene_Adler_B',
	'Kafka_T',
	'Kafka_M',
	'Kafka_B',
	'Leeuwenhoek_T',
	'Leeuwenhoek_B',
	'Li_Sushang_Shenzhou_Reminiscence_T',
	'Li_Sushang_Shenzhou_Reminiscence_M',
	'Li_Sushang_Shenzhou_Reminiscence_B',
	'Linnaeus_T',
	'Linnaeus_M',
	'Linnaeus_B',
	'Marco_Polo_M',
	'Michelangelo_T',
	'Michelangelo_B',
	'Murata_Himeko_T',
	'Murata_Himeko_M',
	'Murata_Himeko_B',
	'Paganini_T',
	'Paganini_M',
	'Paganini_B',
	'Ragna_T',
	'Ragna_M',
	'Ragna_B',
	'Mei_Spectramancer_T',
	'Fu_Hua_Onyx_Simurgh_B',
	'Robert_Peary_T',
	'Robert_Peary_M',
	'Robert_Peary_B',
	'Shakespeare_Adrift_T',
	'Shakespeare_Adrift_M',
	'Shakespeare_Adrift_B',
	'Raksha_T',
	'Sushang_M',
	'Empyrea_Phoenix_B',
	'Siegfried_Kaslana_M',
	'Sirin_Ascendant_T',
	'Sirin_Ascendant_M',
	'Sirin_Ascendant_B',
	'Thales_M',
	'Verne_T',
	'Verne_M',
	'Verne_B',
	'Wang_Zhenyi_T',
	'Wang_Zhenyi_M',
	'Wang_Zhenyi_B',
	'Welt_Yang_T',
	'Welt_Yang_M',
	'Welt_Yang_B',
	'Willows_T',
	'Willows_M',
	'Willows_B',
	'Zeno_T',
	'Zeno_M',
	'Zeno_B',
	// weapons
	'0_high_atk_weap',
	'3rd_Sacred_Relic',
	'Abyss_Flower_Liminal_Spiral',
	'Astral_Divide_Pisces',
	'Basilisks_Image_Deathshroud',
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
	'Elysian_Astra_Hearts_Color',
	'Eos_Gloria',
	'Falcon_Flare_FINAL',
	'Frozen_Naraka',
	'Hekates_Sombre',
	'Iris_of_Helheim',
	'Keys_of_the_Void',
	'Lost_Conviction_Damnation',
	'Midnight_Ataegina',
	'Midnight_Eclipse',
	'Miracle_Kissy_Pillow',
	'Mitternachts_Waltz',
	'Muramasa_Bloodlust',
	'Nocturnal_Stealth_Beam',
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
	'Tower_of_the_Past_Silk_Ladder',
	'Whisper_of_the_Past_Sonnet'
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
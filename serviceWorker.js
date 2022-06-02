const cacheName = 'herrscher-of-cache';

const cacheAssets = [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap',
    'https://fonts.gstatic.com/s/raleway/v27/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCIPrEVJz9d.woff2',
    'https://fonts.gstatic.com/s/materialicons/v129/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'index.html',
    'about.html',
    '/scripts/isMobile.js',
    '/scripts/data.js',
    '/scripts/guide.js',
    '/scripts/build.js',
    '/scripts/main.js',
    '/assets/img/bg.webp',
    '/assets/styles/reset.css',
    '/assets/styles/styles.css',
    '/assets/img/valks/Argent_Knight_Artemis.webp',
    '/assets/img/valks/Bright_Knight_Excelsis.webp',
    '/assets/img/valks/Dea_Anchora.webp',
    '/assets/img/valks/Disciplinary_Perdition.webp',
    '/assets/img/valks/Fallen_Rosemary.webp',
    '/assets/img/valks/Golden_Diva.webp',
    '/assets/img/valks/Herrscher_of_Flamescion.webp',
    '/assets/img/valks/Herrscher_of_Reason.webp',
    '/assets/img/valks/Herrscher_of_Sentience.webp',
    '/assets/img/valks/Herrscher_of_Thunder.webp',
    '/assets/img/valks/Infinite_Ouroboros.webp',
    '/assets/img/valks/Luna_Kindred.webp',
    '/assets/img/valks/Midnight_Absinthe.webp',
    '/assets/img/valks/Miss_Pink_Elf.webp',
    '/assets/img/valks/Palatinus_Equinox.webp',
    '/assets/img/valks/Prinzessin_der_Verurteilung.webp',
    '/assets/img/valks/Reverist_Calico.webp',
    '/assets/img/valks/Ritual_Imayoh.webp',
    '/assets/img/valks/Silverwing_N-EX.webp',
    '/assets/img/valks/Spina_Astera.webp',
    '/assets/img/valks/Starchasm_Nyx.webp',
    '/assets/img/valks/Stygian_Nymph.webp',
    '/assets/img/valks/Sweet_n_Spicy.webp',
    '/assets/img/valks/Twilight_Paladin.webp',
    '/assets/img/valks/Striker_Fulminata.webp',
    '/assets/img/valks/Valkyrie_Gloria.webp',
    '/assets/img/avatars/Azure_Empyrea_Avatar.webp',
    '/assets/img/avatars/Blood_Rose_Avatar.webp',
    '/assets/img/avatars/Divine_Prayer_Avatar.webp',
    '/assets/img/avatars/Haxxor_Bunny_Avatar.webp',
    '/assets/img/avatars/Lightning_Empress_Avatar.webp',
    '/assets/img/avatars/Midnight_Absinthe_Avatar.webp',
    '/assets/img/avatars/Snowy_Sniper_Avatar.webp',
    '/assets/img/avatars/Starlit_Astrologos_Avatar.webp',
    '/assets/img/avatars/Valkyrie_Chariot_Avatar.webp',
    '/assets/img/signets/Aponia_Signet.webp',
    '/assets/img/signets/Eden_Signet.webp',
    '/assets/img/signets/Griseo_Signet.webp',
    '/assets/img/signets/Hua_Signet.webp',
    '/assets/img/signets/Kalpas_Signet.webp',
    '/assets/img/signets/Kevin_Signet.webp',
    '/assets/img/signets/Kosma_Signet.webp',
    '/assets/img/signets/Mobius_Signet.webp',
    '/assets/img/signets/Pardofelis_Signet.webp',
    '/assets/img/signets/Sakura_Signet.webp',
    '/assets/img/signets/Su_Signet.webp',
    '/assets/img/signets/Vill-V_Signet.webp',
    '/assets/img/emblems/Because_of_You.webp',
    '/assets/img/emblems/Boundless_Logos.webp',
    '/assets/img/emblems/Burden.webp',
    '/assets/img/emblems/Dreamful_Gold.webp',
    '/assets/img/emblems/Empty_Like_Shala.webp',
    '/assets/img/emblems/Falling_in_Past_Light.webp',
    '/assets/img/emblems/Forbidden_Seed.webp',
    '/assets/img/emblems/Forget_Me_Not.webp',
    '/assets/img/emblems/Gold_Goblet.webp',
    '/assets/img/emblems/Good_Old_Days.webp',
    '/assets/img/emblems/Grey_Scale_Rainbow.webp',
    '/assets/img/emblems/Heavy_as_a_Million_Lives.webp',
    '/assets/img/emblems/Hometown.webp',
    '/assets/img/emblems/It_Will_Be_Written.webp',
    '/assets/img/emblems/Key_to_the_Deep.webp',
    '/assets/img/emblems/Light_as_a_Bodhi_Leaf.webp',
    '/assets/img/emblems/Mad_Kings_Mask.webp',
    '/assets/img/emblems/Memory.webp',
    '/assets/img/emblems/Out_of_Reach.webp',
    '/assets/img/emblems/Pseudo_Miracle.webp',
    '/assets/img/emblems/Rainbow_of_Absence.webp',
    '/assets/img/emblems/Resolve.webp',
    '/assets/img/emblems/Stained_Sakura.webp',
    '/assets/img/emblems/The_Lonely_Moon.webp',
    '/assets/img/emblems/Tsukimi_Himiko.webp',
    '/assets/favicon/site.webmanifest',
    '/assets/favicon/favicon.ico',
    '/assets/favicon/android-chrome-192x192.png',
    '/assets/favicon/android-chrome-512x512.png',
    '/assets/favicon/favicon-16x16.png',
    '/assets/favicon/favicon-32x32.png',
    '/assets/favicon/maskable-icon.png',
    '/assets/favicon/mstile-150x150.png',
    '/assets/favicon/safari-pinned-tab.svg'
]

// installation
self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// activation
self.addEventListener('activate', () => {
    console.log('Service Worker: Installed');
});

// fetch
self.addEventListener('fetch', (e) => {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); 
});
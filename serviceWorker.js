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
    '/assets/img/bg.png',
    '/assets/styles/reset.css',
    '/assets/styles/styles.css',
    '/assets/img/valks/Argent_Knight_Artemis.png',
    '/assets/img/valks/Bright_Knight_Excelsis.png',
    '/assets/img/valks/Dea_Anchora.png',
    '/assets/img/valks/Disciplinary_Perdition.png',
    '/assets/img/valks/Fallen_Rosemary.png',
    '/assets/img/valks/Golden_Diva.png',
    '/assets/img/valks/Herrscher_of_Flamescion.png',
    '/assets/img/valks/Herrscher_of_Reason.png',
    '/assets/img/valks/Herrscher_of_Sentience.png',
    '/assets/img/valks/Herrscher_of_Thunder.png',
    '/assets/img/valks/Infinite_Ouroboros.png',
    '/assets/img/valks/Luna_Kindred.png',
    '/assets/img/valks/Midnight_Absinthe.png',
    '/assets/img/valks/Miss_Pink_Elf.png',
    '/assets/img/valks/Palatinus_Equinox.png',
    '/assets/img/valks/Prinzessin_der_Verurteilung.png',
    '/assets/img/valks/Reverist_Calico.png',
    '/assets/img/valks/Ritual_Imayoh.png',
    '/assets/img/valks/Silverwing_N-EX.png',
    '/assets/img/valks/Spina_Astera.png',
    '/assets/img/valks/Starchasm_Nyx.png',
    '/assets/img/valks/Stygian_Nymph.png',
    '/assets/img/valks/Swwet_n_Spicy.png',
    '/assets/img/valks/Twilight_Paladin.png',
    '/assets/img/valks/Striker_Fulminata.png',
    '/assets/img/valks/Valkyrie_Gloria.png',
    '/assets/img/avatars/Azure_Empyrea_Avatar.png',
    '/assets/img/avatars/Blood_Rose_Avatar.png',
    '/assets/img/avatars/Divine_Prayer_Avatar.png',
    '/assets/img/avatars/Haxxor_Bunny_Avatar.png',
    '/assets/img/avatars/Lightning_Empress_Avatar.png',
    '/assets/img/avatars/Midnight_Absinthe_Avatar.png',
    '/assets/img/avatars/Snowy_Sniper_Avatar.png',
    '/assets/img/avatars/Starlit_Astrologos_Avatar.png',
    '/assets/img/avatars/Valkyrie_Chariot_Avatar.png',
    '/assets/img/signets/Aponia_Signet.png',
    '/assets/img/signets/Eden_Signet.png',
    '/assets/img/signets/Griseo_Signet.png',
    '/assets/img/signets/Hua_Signet.png',
    '/assets/img/signets/Kalpas_Signet.png',
    '/assets/img/signets/Kevin_Signet.png',
    '/assets/img/signets/Kosma_Signet.png',
    '/assets/img/signets/Mobius_Signet.png',
    '/assets/img/signets/Pardofelis_Signet.png',
    '/assets/img/signets/Sakura_Signet.png',
    '/assets/img/signets/Su_Signet.png',
    '/assets/img/signets/Vill-V_Signet.png',
    '/assets/img/emblems/Because_of_You.png',
    '/assets/img/emblems/Boundless_Logos.png',
    '/assets/img/emblems/Burden.png',
    '/assets/img/emblems/Dreamful_Gold.png',
    '/assets/img/emblems/Empty_Like_Shala.png',
    '/assets/img/emblems/Falling_in_Past_Light.png',
    '/assets/img/emblems/Forbidden_Seed.png',
    '/assets/img/emblems/Forget_Me_Not.png',
    '/assets/img/emblems/Gold_Goblet.png',
    '/assets/img/emblems/Good_Old_Days.png',
    '/assets/img/emblems/Heavy_as_a_Million_Lives.png',
    '/assets/img/emblems/Hometown.png',
    '/assets/img/emblems/It_Will_Be_Written.png',
    '/assets/img/emblems/Key_to_the_Deep.png',
    '/assets/img/emblems/Light_as_a_Bodhi_Leaf.png',
    '/assets/img/emblems/Mad_Kings_Mask.png',
    '/assets/img/emblems/Memory.png',
    '/assets/img/emblems/Out_of_Reach.png',
    '/assets/img/emblems/Pseudo_Miracle.png',
    '/assets/img/emblems/Rainbow_of_Absence.png',
    '/assets/img/emblems/Resolve.png',
    '/assets/img/emblems/Stained_Sakura.png',
    '/assets/img/emblems/The_Lonely_Moon.png',
    '/assets/img/emblems/Tsukimi_Himiko.png',
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
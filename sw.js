var CACHE_NAME = 'dragos-v3';
var assets = [
    './',
    './index.html',
    './dist/css/style.css',
    './js/script.js',
    './dist/img/pole.jpg',
    './dist/img/logo1.png',
    './dist/img/work/dashboard.png',
    './dist/img/work/meteo.png',
    './dist/img/work/pig.png',
    './dist/img/work/quote.png',
    './dist/img/work/restaurant.png',
    './dist/img/work/xo.png',
    './dist/img/small/meteo.jpg',
    './dist/img/arrow-down.png'
];

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
        .then(response => console.log('SW registered'))
        .catch(err => console.log("Failed to register sw", err));
}

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
        .then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }))
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            if (res) return res;
            else {
                return fetch(e.request).then(response => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request.url, response.clone());
                        return response;
                    }).catch(err => caches.match(e.request));
                });
            }
        })
    );
});
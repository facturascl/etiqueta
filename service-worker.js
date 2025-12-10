self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("notas-v1").then(cache => {
            return cache.addAll([
                "/notas/",
                "/notas/index.html",
                "/notas/manifest.json",
                "/notas/service-worker.js",
                "/notas/logo.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
    );
});

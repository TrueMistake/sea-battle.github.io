‘use strict’;
importScripts(‘sw - toolbox.js’);
self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('Got Push?', {
            body: 'Push Message received'
        }));
});
toolbox.precache([“index.html”]);
toolbox.router.get(‘/ *’,toolbox.cacheFirst);
toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});


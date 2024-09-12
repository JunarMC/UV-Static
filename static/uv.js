importScripts('http://client.junarmc.xyz/UV-Static/static/uv/uv.bundle.js');
importScripts('http://client.junarmc.xyz/UV-Static/static/uv/uv.config.js');
importScripts('http://client.junarmc.xyz/UV-Static/static/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));

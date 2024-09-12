importScripts("http://client.junarmc.xyz/UV-Static/static/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));

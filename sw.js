// Servicio del panel: guarda una copia de los archivos del panel para que abra rápido
// y siempre intenta bajar la versión más nueva primero.
const CACHE = 'panel-v1';
const ARCHIVOS = [
  'admin.html',
  'assets/css/style.css',
  'assets/css/universos.css',
  'manifest.json',
  'assets/icons/icon-192.png'
];
const RUTAS = ARCHIVOS.map((a) => new URL(a, self.registration.scope).pathname);

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;       // GitHub, fuentes, etc.: directo a la red
  if (!RUTAS.includes(url.pathname)) return;             // el resto del blog: directo a la red
  e.respondWith(
    fetch(req, { cache: 'no-cache' })
      .then((res) => {
        if (res && res.ok) {
          const copia = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copia));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});

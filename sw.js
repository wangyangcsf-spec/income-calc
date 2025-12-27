const CACHE_NAME = 'calc-v1';
const ASSETS = [
  './',
  './index.html',
  './icon.svg',
  './font.otf',
  './manifest.json'
];

// 安装时预缓存资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 拦截请求，优先使用缓存
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

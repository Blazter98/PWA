//asignar nombre y version cache

const CACHE_NAME = 'v1.cache.AWP';

var urlToCache = [
    './',
    './css/style.css',
    './images/1.png',
    './images/2.png'
]

// Evento Install

self.addEventListener('install', e=>{
e.waitUntil(
    caches.open(CACHE_NAME)
    .then( cache =>{
        return cache.addAll(urlToCache)
        .then(()=>{
            self.skipWaiting();
        })
    })
    .catch(err =>{
        console.log('No se ha registrado el cache', err);
    })
)

})
// Evento de activacion

self.addEventListener('activate', e=>{
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        cache.keys()
            .then( cacheNames =>{
                return Promise.all(
                    cacheNames.map(cacheName =>{
                        if (cacheWhiteList.indexOf(cacheName) === -1) {
                            // borrar los elementos que no se necesitan
                            return caches.delete(cacheName);
                            
                        }
                    })
                )
            })
            .then(()=>{
                //activar el cache
                self.clients.claim();
            })
    )

    //Evento fetch
    self.addEventListener('fetch', e=> {
        e.respondWidth(
            caches.match(e.request)
            .then(res => {
                if(res){
                    return res;
                }
                return fetch(e.request);
            })
        )
    })

})

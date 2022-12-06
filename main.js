//service worker
if('serviceWorker' in navigator){
    console.log('Puedes usar los service worker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente',res))
                            .catch(err => console.log('serviceWorker no se ha podido usar',err))
}else{
    console.log('NO puedes usar los service worker en tu navegador');
}
var url = window.location.href;
var swlocation = 'sw.js'; 
// Añadir el SW
if ( navigator.serviceWorker ) {

    if ( url.includes('localhost') ) {
        swlocation = '/sw.js';
    }

    
    navigator.serviceWorker.register(swlocation);
}
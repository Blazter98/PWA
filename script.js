var url = window.location.href;
var swlocation = 'sw.js'; 
// Añadir el SW
if ( navigator.serviceWorker ) {

    if ( url.includes('localhost') ) {
        swlocation = '/sw.js';
    }

    
    navigator.serviceWorker.register(swlocation);
}
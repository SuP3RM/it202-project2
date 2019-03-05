// register the service worker for offline use
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function() {
      console.log("Service Worker Registered");
    });
}

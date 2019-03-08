

self.addEventListener('install', function(e) {
    console.log('Perform install step' );
});

self.addEventListener('activate', function(e) {
    console.log('Perform activate step' );
});

self.addEventListener('fetch', (e) => {
    console.log('Perform fetch step ', e.request );

    if ( e.request.url.endsWith('css') ) {
      console.log( ' if file has CSS format ');
      e.respondWith( fetch('/main2.css') );
    }

    if ( e.request.url.endsWith('json') ) {
      console.log( ' if file has JSON format ');
      e.respondWith(proxyFetch(e))
    }
});

function proxyFetch(event) {
  const newRequest = new Request(event.request, {
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'x-my-custom-header': 'The Most Amazing Header Ever'
    }
  })
  return fetch(newRequest)
}
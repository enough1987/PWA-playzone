if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful: ', registration);
      })
      .catch((err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }


setTimeout(() => {
    console.log(' setTimeout is done ');

    const link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.media = 'all';
    link.href = '/main.css';
    document.head.appendChild(link);

    fetch('data.json').then((data) => {
      console.log(data);
    });

}, 3000);
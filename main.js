if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(reg => console.log('Service Worker Registered', reg))
  .catch(err => console.log('Service Worker Not Registered', err));
}

function updateDateTime() {
    const datetimeDiv = document.getElementById('datetime');
    const now = new Date();
    datetimeDiv.innerText = now;
}

setInterval(updateDateTime, 1000);

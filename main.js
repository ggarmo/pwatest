if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(reg => console.log('Service Worker Registered', reg))
  .catch(err => console.log('Service Worker Not Registered', err));
}

let greetings = ['Hello', 'Hi', 'Hey', 'Hola', 'Bonjour'];
let names = ['Emily', 'Sophia', 'Emma', 'Olivia', 'Ava', 'Clara', 'Peyton', 'Carly', 'Cecelia', 'Ashlee', 'Delaney', 'Harley', 'Gianna', 'Kristen', 'Annalise', 'Desiree', 'Mara'];

document.getElementById('generate').addEventListener('click', () => {
  let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  let randomName = names[Math.floor(Math.random() * names.length)];
  let listItem = document.createElement('li');
  listItem.textContent = `${randomGreeting}, ${randomName}!`;
  document.getElementById('greetings').appendChild(listItem);
});

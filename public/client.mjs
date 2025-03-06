console.log('client.mjs loaded');


// MAGIC!!! **************************************** */
// io was imported by the script tag in index.html
// When you run a Socket.io server with Express, it automatically
// serves the client-side script at /socket.io/socket.io.js
//************************************************* */
const socket = io(); // Connect to WebSocket server
//************************************************* */

socket.on('welcome', (data) => {
  console.log('Server says:', data);
  socket.emit('thanks', 'Thank you for the welcome message!');
})

document.getElementById('test-button').onclick = () => {
  socket.emit('hello', 'Hello, server!');
}

const htmlMessages = document.getElementById('messages');
const testButton = document.getElementById('test-button');

testButton.onclick = () => {
  const name = document.getElementById('name').value;
  socket.emit('submit', name);
}

socket.on('server-message', (data) => {
  htmlMessages.innerHTML += `<p>${data}</p>`;
})


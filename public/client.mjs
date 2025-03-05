console.log('client.mjs loaded');


// MAGIC!!! **************************************** */
// io was imported by the script tag in index.html
// When you run a Socket.io server with Express, it automatically
// serves the client-side script at /socket.io/socket.io.js
//************************************************* */
const socket = io(); // Connect to WebSocket server
//************************************************* */

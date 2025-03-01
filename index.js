// Node.js is an asynchronous event-driven JavaScript runtime
// Node.js uses the V8 JavaScript engine from Google Chrome

// $ npm init -y  // create package.json file
// $ npm install express
import express from 'express';
const app = express();
const PORT = 3000;
import { readFile } from 'fs';

app.get('/', (request, response) => {
    // read the home.html file
    readFile('home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Sorry, we cannot find that file!');
        }
        response.send(html);
    });
});




app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});





process.on('exit', function() {
    console.log('Exiting...');
})
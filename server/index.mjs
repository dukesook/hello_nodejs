// Node.js is an asynchronous event-driven JavaScript runtime
// Node.js uses the V8 JavaScript engine from Google Chrome

// $ npm init -y  // create package.json file
// $ npm install express
import express from 'express';
const app = express();
const PORT = 3000;


// Serve static files in Express
import path from 'path';
app.use(express.static(path.join(process.cwd(), '../public')));




app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});

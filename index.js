// Node.js is an asynchronous event-driven JavaScript runtime
// Node.js uses the V8 JavaScript engine from Google Chrome

// $ npm init -y  // create package.json file
// $ npm install express

console.log('Hello World!');

// global is a global object in Node.js
global.my_num = 5;
console.log('global.my_num', global.my_num);

console.log('process.platform', process.platform);


process.on('exit', function() {
    console.log('Exiting...');
})
// Global Object - a global object, with its properties, that it's kind of implict, you don't have to call the object to access its properties and methods. Like window for the browser, you can use setTimeout (a property for the global object) and then pass the function. In nodejs, the object is called global.

// console.log(global);

// SetTimeout is a function that runs once after X millisecond.
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

// SetInterval is a function that runs once every X milliseconds. You can also use clearInterval to stop this loop.
const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname); // Gets the absolute path of the current folder we are in
console.log(__filename); // Gets the absolute path of the current folder we are in plus the file itself

// console.log(document.querySelector); would'n work, because document is in the window object, and in node we have the global object.
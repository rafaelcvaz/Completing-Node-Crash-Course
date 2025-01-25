// When we use large files, we couldn't use wait for it to finish processing before we start using it.

// Streams are used so we can start using the data before it has finished loading. "Stream" because it delivers the data like a river stream, the data is passed as chunks, the buffers, they are like little packets where part of the data is stored, goes to the delivery, then other buffer is filled, goes to the destiny, the other buffer... 

const fs = require('fs'); // built in object.

// The first argument is where we want to read the stream from. A possbile second argument is an object that defines how to read the buffers, { encoding: 'utf8'} defines string format
const readStream = fs.createReadStream('');


// The first argument is where we want to write it to, the relative path to the file.
const writeStream = fs.createWriteStream('')

// With this, it starts reading the data. Below, the .on is a listener to events. Any time we receive a buffer of the data (a chunk), if lauches the callback.
// the first argument means it's a stream of data

readStream.on('data', (chunk) => {
    console.log(' ------------- NEW CHUNK -------------- ')
    console.log(chunk.toString());
    writeStream.write('\nNEW CHUNK\n'); // This is how we pass the data from streams to write in a new file.
    writeStream.write(chunk);
;})

// We could write all of the block above using pipe.

readStream.pipe(writeStream);
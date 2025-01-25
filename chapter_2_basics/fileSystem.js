const fs = require('fs'); // Built in model

// reading files - the first argument is the relative path of the file you want to read. the second is a async function
fs.readFile('', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data); // As data for this, you get a buffer, a packeage of that you get when you read the file, you can use data.toString() to see the data from the file you input in the first argument.
}) ;

// Since it's async, it doesn't block the code. Every sinc code is run before, and then the reading files lauches the callback function.

// writing files - the first argument is the relative path of the file you want to write (if it doesn't exist, it creats a new one), the second is the content you want to write, the third is the callback function

fs.writeFile('','', () => {
    console.log('file was writen')
});

// directories - async function that uses the folder you want to create. It also executes a callback function

fs.mkdir('./assets', (err) => {
    if (err) {
        console.log('and error ocurred');
    }
    else {
        console.log('folder created');
    }
})

// If we try to run this for an existing folder, we get an error, but not the one we planned. A good idea is to check first if the folder exists:

if (!fs.existsSync('.assets')){ // Sinc function, it blocks the execution of the rest of the code, but takes little time to do it.
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else { // If it already exists, remove the folder
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files - make sure the file exists before trying
if(fs.existSync('.docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}


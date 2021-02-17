const fs = require('fs');

console.log("hello");

let getFileContents = new Promise((resolve, reject) => {
    let data = fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            reject("failed to read");
        }
        else{
            resolve("data: " + data);
        }
    });
});

getFileContents
    .then((message) => console.log(message))
    .catch((message) => console.log(message));

console.log("bye");

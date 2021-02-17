const fs = require('fs');

console.log("hello");

let getFileContents = (fileName) => {
    return new Promise((resolve, reject) => {
        let data = fs.readFile(fileName, {encoding: 'utf-8'}, (err, data) => {
            if(err) {
                reject(`${fileName}: failed to read`);
            }
            else{
                resolve(`${fileName}: ${data}`);
            }
        });
    });
};

(async () => {
    console.log("about to get file");
    await getFileContents('./test.txt')
        .then((message) => console.log(message))
        .catch((message) => console.log(message));
    console.log("done getting file");
})();

console.log("bye");

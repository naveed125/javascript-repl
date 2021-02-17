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
    // without try catch
    console.log("about to get file");
    await getFileContents('./test.txt')
        .then((message) => console.log(message))
        .catch((message) => console.log(message));
    console.log("done getting file");

    // with try catch
    console.log("about to get file again");
    try {
        await getFileContents('./test1.txt')
            .then((message) => console.log(message));
        console.log("never gets here");
    }
    catch(ex) {
        console.log(ex);
    }
    console.log("done getting file again");

})();

console.log("bye");

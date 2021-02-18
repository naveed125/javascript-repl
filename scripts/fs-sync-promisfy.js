const fs = require('fs');
const util = require('util');

console.log("hello");

const readFile = util.promisify(fs.readFile);

(async () => {
    // without try catch
    console.log("about to get file");
    await readFile('./test.txt')
        .then((buffer) => console.log(buffer.toString()))
        .catch((message) => console.log(message));
    console.log("done getting file");

    // with try catch
    console.log("about to get file again");
    try {
        await readFile('./test1.txt')
            .then((message) => console.log(message));
        console.log("never gets here");
    }
    catch(ex) {
        console.log(ex.message);
    }
    console.log("done getting file again");

})();

console.log("bye");

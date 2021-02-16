console.log("starting up");

let p = new Promise((resolve, reject) => {
    a = 1 + 2;
    if (a === 2) {
        resolve("success")
    }
    else {
        reject("failure")
    }
});

console.log("after promise declared");

p.then(message => {
   console.log("message from promise in then part:" + message)
}).catch(message => {
   console.log("message from promise in catch part:" + message)
});

console.log("after promise processed");

console.log("promises");

let p = new Promise((resolve, reject) => {
    console.log("inside the promise function");
    let a = 1 + 2;
    if (a === 2) {
        console.log("just before calling resolve");
        resolve("success");
        console.log("after calling resolve");
    }
    else {
        console.log("just before calling reject");
        reject("failure");
        console.log("after calling reject");
    }
});

console.log("after promise declared");

// p.then(message => {
//    console.log("message from promise in then part:" + message)
// }).catch(message => {
//    console.log("message from promise in catch part:" + message)
// });

Promise.all([p])
    .then((messages) => {
        console.log("in then part", messages);
    })
    .catch((messages) => {
        console.log("in catch part", messages);
    });

console.log("after promise processed");

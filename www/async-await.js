console.log("async await");

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log("1. making request to:", location);
        if (location === "Google") {
            resolve("Google says hi");
        }
        else {
            reject("We can only talk to Google");
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("3. processing response", response);
        resolve(`extra information: ${response}`);
    })
}

// without async await
// makeRequest("Google").then(response => {
//     console.log("2. response received", response);
//     return processRequest(response);
// }).then(message => {
//     console.log("4. final step:", message);
// }).catch(err => {
//     console.log("error", err);
// });

// with async await
(async () => {
    try {
        const response = await makeRequest("Google");
        console.log("2. response received", response);
        const processedResponse = await processRequest(response);
        console.log("4. final step:", processedResponse);
    }
    catch(error) {
        console.log(error);
    }
})();

const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve("The promise was resolved successfully")
    } else {
        reject("The promise was rejected")
    }
})

// Using a promise//
myPromise
    .then((message) => {
        console.log("Success:",message);
    })
    .catch((error) => {
        console.error("Error:",error);
    })
    .finally(() => {
        console.log("Prmomise completed");
    })
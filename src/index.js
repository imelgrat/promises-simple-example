// Create the promise object
const appID = document.getElementById("app");

const myFirstPromise = new Promise(function(resolve, reject) {
  const val1 = "This is a value";
  const val2 = "This is a value";
  if (val1 === val2) {
    resolve("SUCCESS! The values are equal");
  } else {
    reject("FAILURE! The values are different.");
  }
});

// "Consume" the promise by invoking then() and catch() methods
myFirstPromise
  .then(result => {
    // The promise was fulfilled (it was successful). 
    // The result parameter contains the value returned by resolve()
    appID.insertAdjacentHTML("beforeend", result);
  })
  .catch(error => {
    // The promise was rejected (it failed)
    // The error parameter contains the value returned by reject()
    appID.insertAdjacentHTML("beforeend", error);
  });

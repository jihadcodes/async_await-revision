
// Promise = Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. 

const promise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("খাবার আসছে!"); // ✅
  } else {
    reject("খাবার আসবে না!"); // ❌
  }
});

promise
  .then((result) => console.log(result))  // success হলে
  .catch((error) => console.log(error));  // error হলে
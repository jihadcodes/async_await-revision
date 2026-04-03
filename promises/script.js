// Promise = Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

const promise = new Promise((resolve, reject) => {
  let val = Math.floor(Math.random() * 10) + 1; // 1 থেকে 10 পর্যন্ত একটি র্যান্ডম সংখ্যা

  if (val > 5) {
    resolve("   resolved with success "  +  val); // ✅
  } else {
    reject("  rejected with error "  +  val); // ❌
  }
});

promise
  .then((result) => console.log(result)) // success হলে
  .catch((error) => console.log(error)); // error হলে

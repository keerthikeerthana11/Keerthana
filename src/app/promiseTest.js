var promise = new Promise(function (resolve, reject) {
    resolve('hello');
});
promise.then(function (message) {
    console.log(message);
});

function greeting(value, callBack) {
    setTimeout(function () {
        var multiple = value * 10;
        callBack(multiple);
    }, 3000);
}
greeting(10, function (result) {
    console.log(result);
});

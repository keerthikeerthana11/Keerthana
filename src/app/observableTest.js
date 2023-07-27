"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (subscriber) {
    subscriber.next(1);
});
console.log('before');
observable.subscribe({
    next: function (x) {
        console.log('value' + x);
    }
});

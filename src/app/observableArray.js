"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// const observable = of ([1,2,3,4,5,6,7]);
// const subscription = observable.subscribe((x)=>
// console.log(x));
var sum1 = 0;
var source = (0, rxjs_1.from)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var example = source.pipe((0, operators_1.filter)(function (num) { return num % 2 === 0; }), (0, operators_1.map)(function (num) { return (+num); }));
var subscri = example.subscribe(function (val) { return console.log(val); });
// const source = of ([1,2,3,4,5,6,7,8,9,10]);
//  const example = source.pipe(filter(x => x% 2 ===0),reduce((acc,one)=> 0 ))
//  example.subscribe(x=> console.log(x));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var testing = /** @class */ (function () {
    function testing() {
        this.title = 'hai';
        this.title1 = 'ok';
    }
    testing.prototype.gettitle = function () {
        return this.title;
    };
    testing.prototype.getst = function () {
        return this.title1;
    };
    return testing;
}());
var car = /** @class */ (function () {
    function car() {
        this.typea = "belno";
    }
    car.prototype.getType = function () {
        return this.typea;
    };
    return car;
}());
var carm = /** @class */ (function (_super) {
    __extends(carm, _super);
    function carm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typea = "belno2";
        return _this;
    }
    carm.prototype.cost = function () {
        return 5000;
    };
    return carm;
}(car));
var cartype = new carm();
console.log(cartype.typea);
console.log(cartype.cost());
//   let obj = new testing;
//   console.log(obj.gettitle());
//   console.log(obj.getst());
// // }

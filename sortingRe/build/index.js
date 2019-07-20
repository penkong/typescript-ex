"use strict";
// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json
// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () { };
    return Sorter;
}());
var sorter = new Sorter([10, 3, 5, 7]);
sorter.sort();
console.log(sorter.collection);

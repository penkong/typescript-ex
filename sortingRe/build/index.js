"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, 5, 7, -2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('sfdKFRd');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);

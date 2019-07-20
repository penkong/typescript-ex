"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, 5, 7, -2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('sfdKFRd');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(444);
linkedList.add(4);
linkedList.add(-44);
linkedList.add(344);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();

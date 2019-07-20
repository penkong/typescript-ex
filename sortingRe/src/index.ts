// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
const numbersCollection = new NumbersCollection([10, 3, 5, 7, -2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

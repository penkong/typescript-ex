// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, 5, 7, -2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('sfdKFRd');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);

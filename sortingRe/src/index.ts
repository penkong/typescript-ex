// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, 5, 7, -2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('sfdKFRd');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(444);
linkedList.add(4);
linkedList.add(-44);
linkedList.add(344);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

// tsc --init
// tsc -w
// add nodemon and concurrently with tsconfig.json

// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {}
}

const sorter = new Sorter([10, 3, 5, 7]);
sorter.sort();
console.log(sorter.collection);

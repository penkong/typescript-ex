// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
// (union type : string | num ) use both common to derive .
// not idea code.

export interface Sortable {
  // getters come like props
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

class Sorters {
  constructor(public collection: number[] | string) {}
  // use of type guard
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // this is type guard
        // instance of use for every value that created in constructor
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
        // type of use for nums string boolean symbol
        if (typeof this.collection === 'string') {
          this.collection;
        }
      }
    }
  }
}

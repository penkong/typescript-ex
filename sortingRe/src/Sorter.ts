// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
// (union type : string | num ) use both common to derive .
// not idea code.
// interfaces or abstract classes?
// for diff obj vs when building a definition of an obj
export interface Sortable {
  // getters come like props
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
// make sorter class to abstract class to let him know about compare and swap method
// abstract class can not create obj ( no instances );
// its only parent,
// refer to methods that does not exist like compare ...
// child promise to implement methods
export abstract class Sorter {
  // we promise ts every child have this methods specificity
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
class Sort {
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

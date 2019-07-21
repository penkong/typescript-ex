//
import fs from 'fs';
import { dateStringToDate } from '../utilsAndEnum/utils';
import { MatchResultEnum } from '../MatchResultEnum';
// its tuples
type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResultEnum,
  string
];

// first style refactor

// we are going use of generics instead of specific type for reusabilit
// generic are like args for class ( types for class/funcs);
// generic allow to define type of prop arg return for future;
// generic <TypeOfDataWePass> generic is var for types
export abstract class CsvFileReader<T> {
  // read from right arr that has MatchData tuples
  data: T[] = [];
  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        // we tell what type of file we expect find in csv files.
        // if not define this it will turn back to us a buffer
        encoding: 'utf-8'
      })
      // how to parse it.
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      )
      .map(this.mapRow);
  }
}
//
//
//
//
//

//

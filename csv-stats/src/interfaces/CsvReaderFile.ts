//
import fs from 'fs';
import { DataReader } from './MatchReader';

// second refactor
// it is reusable for future to read file
export class CsvReaderFile implements DataReader {
  // read from right arr that has MatchData tuples
  data: string[][] = [];
  // file name will receive
  constructor(public fileName: string) {}

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
      );
  }
}

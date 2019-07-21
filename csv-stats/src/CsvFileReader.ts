//
import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = [];
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
      )
      .map(
        (row: string[]): any => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            // its type assertion
            row[5] as MatchResult,
            row[6]
          ];
        }
      );
  }
}

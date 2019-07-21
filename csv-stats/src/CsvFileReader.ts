//
import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// its tuples
type MatchData = [Date, string, string, number, number, MatchResult, string];

// first style refactor
export abstract class CsvFileReader {
  // read from right arr that has MatchData tuples
  data: MatchData[] = [];
  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): MatchData;
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





class CsvFileReaders {
  // read from right arr that has MatchData tuples
  data: MatchData[] = [];
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
        (row: string[]): MatchData => {
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

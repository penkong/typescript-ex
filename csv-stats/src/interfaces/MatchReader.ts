import { dateStringToDate } from '../utilsAndEnum/utils';
import { MatchResultEnum } from '../utilsAndEnum/MatchResultEnum';
import { MatchData } from '../MatchData';

// its tuples

export interface DataReader {
  data: string[][];
  read(): void;
}

// THIS IS COMPOSITION(has a relationship) STYLE VS INHERITANCE(is a)

// it will be source of truth for index.ts
// csvFileReader on any reader like api reader implement DataReader as
// blue print to match themselves with MatchReader
// csvFileReader is DataReader come here and seat in reader
export class MatchReader {
  matches: MatchData[] = [];
  // reader == csvReaderFile
  // magic come by reader (can many other class seat here)
  constructor(public reader: DataReader) {}
  load(): void {
    // this.reader is csvFileReader in reality
    // this.reader.read() is entire loading process
    // we delegate read file to obj that statisfy DataReader as interface
    this.reader.read();
    // then we can take look at data of reader(csvFileReader);
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // its type assertion
          row[5] as MatchResultEnum,
          row[6]
        ];
      }
    );
  }
}

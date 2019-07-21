import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
// enum
import { MatchResult } from './MatchResult';

export class MatchReader extends CsvFileReader {
  mapRow(row: string): MatchData {
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
}

// csv => load it => node => parse => analyze  => stats
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
// analyze
// instead of obj in ts we use enum - enumeration to show simple data
// enum - to store some related close values
// enum is signaling to others this is collections or related values
// it is also a type by itself
// behind scene it creates obj
// we use enum for definite set of data not categories of movie or any async req
// not for large set of values;

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// report
console.log(`man united won ${manUnitedWins} games`);

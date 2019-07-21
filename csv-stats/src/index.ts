// csv => load it => node => parse => analyze  => stats
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// parse
const reader = new CsvFileReader('football.csv');
reader.read();
// analyze
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

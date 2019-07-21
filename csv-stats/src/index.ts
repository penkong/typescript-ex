// csv => load it => node => parse => analyze  => stats
import { MatchReader } from './MatchReader';
import { MatchResultEnum } from './MatchResultEnum';

// parse - reusable
// const reader = new CsvFileReader('football.csv');
const reader = new MatchReader('football.csv');
reader.read();
// analyze
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResultEnum.HomeWin) {
    manUnitedWins++;
  } else if (
    match[2] === 'Man United' &&
    match[5] === MatchResultEnum.AwayWin
  ) {
    manUnitedWins++;
  }
}

// report
console.log(`man united won ${manUnitedWins} games`);

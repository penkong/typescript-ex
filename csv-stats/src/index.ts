// csv => load it => node => parse => analyze  => stats
import { MatchReader } from './interfaces/MatchReader';
import { MatchResultEnum } from './utilsAndEnum/MatchResultEnum';
import { CsvReaderFile } from './interfaces/CsvReaderFile';
// parse - reusable
// const reader = new CsvFileReader('football.csv');
// const reader = new MatchReader('football.csv');
// reader.read();

// create obj for satisfy DataReader
const csvReaderFile = new CsvReaderFile('football.csv');
// create an instance of MatchReader to satisfy DataReader
const matchReader = new MatchReader(csvReaderFile);
matchReader.load();
//matchReader.matches

// analyze
let manUnitedWins = 0;

for (let match of matchReader.matches) {
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

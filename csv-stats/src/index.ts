// csv => load it => node => parse => analyze  => stats
import { MatchReader } from './interfaces/MatchReader';
// import { CsvReaderFile } from './interfaces/CsvReaderFile';
// import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary/Summary';
// import { ConsoleReports } from './ReportTargets/ConsoleReport';
// import { HtmlReports } from './ReportTargets/HtmlReport';
// parse - reusable
// const reader = new CsvFileReader('football.csv');
// const reader = new MatchReader('football.csv');
// reader.read();

// create obj for satisfy DataReader
// const csvReaderFile = new CsvReaderFile('football.csv');
// // create an instance of MatchReader to satisfy DataReader
// // we are parse it from csv and make it av on matchReader
// const matchReader = new MatchReader(csvReaderFile);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// actual parse data is av on matchReader.matches

// analyze
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReports());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
// report

summary.buildAndPrintReport(matchReader.matches);

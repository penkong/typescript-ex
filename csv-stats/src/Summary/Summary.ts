import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// source of truth for analyze step in out app
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  // it take all matchData and pomp it in analyzer
  // analyzer wins retrun string buildAndPrint take it and
  // toss it in to Console Report class
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

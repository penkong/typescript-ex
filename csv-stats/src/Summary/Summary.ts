import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  run(report: string): void;
}

// source of truth for analyze step in out app
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}

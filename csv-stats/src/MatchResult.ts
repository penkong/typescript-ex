// instead of obj in ts we use enum - enumeration to show simple data
// enum - to store some related close values
// enum is signaling to others this is collections or related values
// it is also a type by itself
// behind scene it creates obj
// we use enum for definite set of data not categories of movie or any async req
// not for large set of values;

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

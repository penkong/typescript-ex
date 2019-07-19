// annotations for functions
// inference work for what func return
// type script control correct val not correct logic

// no inference for args, it work for out put but we dont use it
const add = (a: number, b: number): number => {
  return a + b;
};
// we use for out put to make sure of return;
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return null || undefined;
};

// not return any thing never reach end of func
const throwErr = (message: string): never => {
  throw new Error(message);
};

const foreCast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (foreCast: { date: Date; weather: string }): void => {
  console.log(foreCast.date);
  console.log(foreCast.weather);
};

const logWeather2 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

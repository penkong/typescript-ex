// this is annotations
let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothing: null = null;

let nothings: undefined = undefined;

// built in objs

let now: Date = new Date();

// Array

let colors: string[] = ["red", "blue", "green"];
let myNums: number[] = [1, 3, 2, 4];
let truth: boolean[] = [true, false];

// classes

class Car {}
let car: Car = new Car();

// obj literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// funcs
// what in come and what return
const logNums: (i: number) => void = (i: number) => {
  console.log(i);
};

// inference type if var declare = var initialization
// if both on same line ts will figure type

// when annotations we use
// 1) func that return any type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);

// 2) more than on line declaration
let words = ["red", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "blue") {
    foundWord = true;
  }
}

// 3) vars that cannot be inferred correctly
let nums = [10, -1, 132];
let numAboveZero: boolean | number = false;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numAboveZero = nums[i];
  }
}

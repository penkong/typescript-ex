const carMakers = ["ford", "toyota", "chevy"];
const cars: string[] = [];
const dates = [new Date(), new Date()];

const carsBy: string[][] = [["f139"], ["corolla"], ["camaro"]];
const carsByIt: string[][] = [];

// help inference when extract values from arr;
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with map forEach reduce

carMakers.map(
  (car: string): string => {
    return car.toLowerCase();
  }
);

// array with multi types

const importantDates: (string | Date)[] = [new Date(), "2002"];
importantDates.push("2030");
importantDates.push(new Date());
// importantDates.push(45);

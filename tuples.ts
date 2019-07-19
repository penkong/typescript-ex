// array like structure each el represent some prop of a record
const drink = {
  color: "brown",
  carbon: true,
  sugar: 50
};

type Drink = [string, boolean, number];

// must keep order. this is tuple == > usage in csv files;
const pepsi: Drink = ["brown", true, 44];

const carSpecs: [number, number] = [4444, 55454];

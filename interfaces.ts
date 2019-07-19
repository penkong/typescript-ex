// interfaces + classes = how to get really strong code reuse
// interface for design app and software

//tuples
type drink = [string, boolean, number];

// to create new type describe the props and type of values;
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  year: Date;
}
////////////////////////////////////////////

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  }
};

const drunk = {
  color: "brown",
  carbon: true,
  sugar: 43,
  summary(): string {
    return `my drink has ${this.sugar}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
printVehicle(oldCivic);
//.................................
// interface is gate keeper like Olgu for define func in obj.
interface Reportable {
  summary(): string;
}
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

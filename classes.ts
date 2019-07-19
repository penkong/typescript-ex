// classes is blue print of obj

class Vehicle {
  // public drive(): void {
  //   console.log("chunk chung");
  // }
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}
  protected honk(): void {
    // only access from child not in instances
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

class Car extends Vehicle {
  // can not call private outside of class
  // we can not override modifier in child class
  private drive(): void {
    console.log("rung kung");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const car = new Car();
// car.startDrivingProcess();
// car.honk();

// in ts  => modifiers => public, private, protected.
// modifier also work for vars and methods
// to access diff var and funcs
// public anywhere anytime
// private in only this class
// protected  in this class and in child classes;

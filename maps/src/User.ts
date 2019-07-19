// use type definition file  as adaptor between ts files and js libs
// those created by Definitely Typed project
import faker from "faker";

export class User {
  name: string;
  // it will be a obj or string but we need init that in below
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}

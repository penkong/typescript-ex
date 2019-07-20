// use type definition file  as adaptor between ts files and js libs
// those created by Definitely Typed project
import faker from 'faker';
// this is interface
import { Mappable } from './Map';
export class User implements Mappable {
  name: string;
  // it will be a obj or string but we need init that in below
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `user name: ${this.name}`;
  }
}

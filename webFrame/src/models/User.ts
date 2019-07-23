import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attribute } from './Attribute';

//
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const url = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(url);
  public attributes: Attribute<UserProps>;
  constructor(attrs: UserProps) {
    this.attributes = new Attribute<UserProps>(attrs);
  }
}

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
// composition is delegation we don't want to reach methods on
// classes we want them to be here by itself
// caller.save() is good not caller.events.save();
// get on trigger are direct pass through
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(url);
  public attributes: Attribute<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attribute<UserProps>(attrs);
  }
  // we just get ref to on on events we not call it => by getter
  get on() {
    // usage in index => const on = user.on => on(args) or user.on(args);
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}

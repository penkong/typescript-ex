//
interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  // type annotation
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  // adding eventing for framework
  // equal as addEventListener
  // register an event
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  // trigger (call) an event or call it
}

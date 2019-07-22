import axios, { AxiosResponse } from 'axios';

//
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
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
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;
    handlers.forEach(callback => {
      callback();
    });
  }
  // promises to save data and user info to backend or whatever
  // json-server -w db.json => each field on db is like route for backend
  // "users" => /users "info" => /info
  // fetcher
  // saver
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
      (res: AxiosResponse): void => {
        this.set(res.data);
      }
    );
  }
  save(): void {
    const id = this.get('id');
    // post without id put need id
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}

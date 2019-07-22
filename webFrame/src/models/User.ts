import axios, { AxiosResponse } from 'axios';

//
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
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

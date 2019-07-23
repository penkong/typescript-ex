import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';
// deserialize(fetching) --> json -> obj
// : put data on an obj from prior data saved json
// serialize(saving) --> obj -> json
// : convert data from obj into some save-able format json

export class Sync {
  constructor(public rootUrl: string) {}
  // promises to save data and user info to backend or whatever
  // json-server -w db.json => each field on db is like route for backend
  // "users" => /users "info" => /info
  // fetcher
  // saver
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  // it bring back promise that will resolve with Generic T
  save(data: UserProps): AxiosPromise {
    // const id = this.get('id');
    const { id } = data;
    // post without id put need id
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}

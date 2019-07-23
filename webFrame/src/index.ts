// MODEL CLASSES
// to handle some data resources images posts comments
// classes that represent some data
// VIEW CLASSES
// html producers and handle events cause by user
import axios from 'axios';
import { User } from './models/User';

// const user = new User({ id: 1 });
// user.fetch();
const user = new User({ name: 'new record', age: 0 });

user.save();
user.events.on('change', () => {
  console.log('change!!!');
});

user.events.trigger('change');

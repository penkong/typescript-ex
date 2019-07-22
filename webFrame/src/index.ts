// MODEL CLASSES
// to handle some data resources images posts comments
// classes that represent some data
// VIEW CLASSES
// html producers and handle events cause by user
import { User } from './models/User';

const user = new User({ name: 'fds', age: 32 });
user.get('name');
user.get('age');

user.on('change', () => {});

console.log(user);

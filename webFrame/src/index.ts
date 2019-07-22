// MODEL CLASSES
// to handle some data resources images posts comments
// classes that represent some data
// VIEW CLASSES
// html producers and handle events cause by user
import axios from 'axios';
import { User } from './models/User';

const user = new User({ id: 1 });
user.fetch();

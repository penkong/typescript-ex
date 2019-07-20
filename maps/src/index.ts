// install typed definition for global google

import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
// map id divId for refer in html
const map = new Map('map');

// ts implicitly( behind scene) check user satisfy interface of map
map.addMarker(user);
map.addMarker(company);

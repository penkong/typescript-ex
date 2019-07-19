// install typed definition for global google

// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();
// const company = new Company();
// console.log(user);
// console.log(company);

// ctrl shift p => fold lvl 2
new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});
// interface is description of how the obj should be

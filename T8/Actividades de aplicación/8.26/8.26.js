import * as geo from "./geo.js";

geo.askPermissions();

navigator.geolocation.getCurrentPosition(pos => {
  console.log(geo.getLatitude(pos));
  console.log(geo.getLongitude(pos));
  console.log(geo.getAltitude(pos));
});

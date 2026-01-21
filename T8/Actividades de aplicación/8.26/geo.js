export function askPermissions() {
  navigator.geolocation.getCurrentPosition(() => {});
}

export function getLatitude(pos) {
  return pos.coords.latitude;
}

export function getLongitude(pos) {
  return pos.coords.longitude;
}

export function getAltitude(pos) {
  return pos.coords.altitude;
}

//

// ctrl shift p => fold lvl 2

// interface is description of how the obj should be
export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 4,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
}

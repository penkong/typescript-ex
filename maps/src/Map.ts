// ctrl shift p => fold lvl 2
// class can be reference for type , dual nature
// interface is description of how the obj should be
// obj must satisfy interface then can use methods on classes
// instructions for other classes
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
  color: string;
}

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

  // using interfaces to not use multi addMarker(methods);
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      // which map i use there is 5(bing , yahoo ,...) of them? this.googleMap
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapServicesService {
  private map?: Map;

  get mapReady(): boolean {
    return !!this.map;
  }

  isMapReady(map: Map) {
    this.map = map;
  }

  constructor() {}

  flyTo(coords: LngLatLike) {
    if (!this.mapReady) throw Error('mapReady is not Ready');

    this.map?.flyTo({
      zoom: 14,
      center: coords,
    });
  }
}

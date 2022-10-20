import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/maps/services/places.service';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapServicesService } from '../../../services/map-services.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement?: ElementRef;

  constructor(
    private placesService: PlacesService,
    private mapService: MapServicesService
  ) {}

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) {
      throw Error('Error not user location ');
    }
    const map = new Map({
      container: this.mapDivElement?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`<h6>Iam here</h6>`);

    const marker = new Marker({ color: 'red' })
      .setLngLat(this.placesService.useLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.isMapReady(map);
  }
}

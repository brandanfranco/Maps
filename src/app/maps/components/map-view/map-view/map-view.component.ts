import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/maps/services/places.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement?: ElementRef;
  constructor(private placesService: PlacesService) {}
  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) {
      throw Error('Error not user location ');
    }
    const map = new Map({
      container: this.mapDivElement?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      // display the map as a 3D globe
    });
  }
}

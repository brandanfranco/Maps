import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent {
  constructor(private placesService: PlacesService) {
    console.log(this.placesService.useLocation);
  }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
}

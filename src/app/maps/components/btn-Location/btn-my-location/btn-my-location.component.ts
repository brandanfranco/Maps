import { Component, OnInit } from '@angular/core';
import { MapServicesService } from '../../../services/map-services.service';
import { PlacesService } from '../../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent implements OnInit {
  constructor(
    private mapService: MapServicesService,
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {}

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady)
      throw Error('Ther is not using location service');
    if (!this.mapService.mapReady) throw Error('there is not Map ready');

    this.mapService.flyTo(this.placesService.useLocation);
  }
}

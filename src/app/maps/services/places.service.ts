import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public isloadingPlace = false;
  public places: Feature[] = [];

  public useLocation!: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private placesApiHttp: PlacesApiClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];

          resolve(this.useLocation);
        },

        (err) => {
          alert(err);
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    if (!this.useLocation) {
      throw Error('Cannot get user location');
    }

    this.isloadingPlace = true;
    this.placesApiHttp
      .get<PlacesResponse>(`/${query}.json`, {
        params: {
          proximity: this.useLocation.join(','),
        },
      })
      .subscribe((results) => {
        console.log(results.features);
        this.isloadingPlace = false;
        this.places = results.features;
      });
  }
}

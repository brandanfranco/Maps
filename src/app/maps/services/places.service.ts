import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

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

  constructor(private http: HttpClient) {
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
    this.isloadingPlace = true;
    this.http
      .get<PlacesResponse>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=6.94445310855005%2C50.915651726419725&types=postcode%2Caddress%2Cregion%2Cplace%2Cneighborhood&language=de%2Cen%2Ces&access_token=pk.eyJ1IjoiZnJhbmNvZGFtaWFuIiwiYSI6ImNsNnVsdThiNTA0cHIzZHM4bDZlc2t0cHkifQ.JeNWl15HX6dypMIwtgf7ZA`
      )
      .subscribe((results) => {
        console.log(results.features);
        this.isloadingPlace = false;
        this.places = results.features;
      });
  }
}

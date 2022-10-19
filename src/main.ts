import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJhbmNvZGFtaWFuIiwiYSI6ImNsNnVsdThiNTA0cHIzZHM4bDZlc2t0cHkifQ.JeNWl15HX6dypMIwtgf7ZA';

if (!navigator.geolocation) {
  prompt('Navigator Cannot support geolocation');

  throw new Error('Navigator Cannot support geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

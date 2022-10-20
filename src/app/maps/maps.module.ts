import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { LoadingComponent } from './components/loading/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view/map-view.component';
import { LogoAngularComponent } from './components/logo-angular/logo-angular/logo-angular.component';
import { BtnMyLocationComponent } from './components/btn-Location/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    MapPageComponent,
    LoadingComponent,
    MapViewComponent,
    LogoAngularComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchResultsComponent,
  ],
  imports: [CommonModule],
  exports: [MapPageComponent],
})
export class MapsModule {}

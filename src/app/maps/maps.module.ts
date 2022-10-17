import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { LoadingComponent } from './components/loading/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view/map-view.component';

@NgModule({
  declarations: [MapPageComponent, LoadingComponent, MapViewComponent],
  imports: [CommonModule],
  exports: [MapPageComponent],
})
export class MapsModule {}

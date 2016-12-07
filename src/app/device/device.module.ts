import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { DeviceContainerComponent } from './device-container/device-container.component';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule
  ],
  declarations: [
    DeviceInfoComponent,
    DeviceSearchComponent,
    DeviceContainerComponent
  ]
})
export class DeviceModule { }

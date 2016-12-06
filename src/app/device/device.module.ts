import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { DeviceSearchComponent } from './device-search/device-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeviceInfoComponent, DeviceSearchComponent]
})
export class DeviceModule { }

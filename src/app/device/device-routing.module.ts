import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceInfoComponent } from './device-info/device-info.component';

const routes: Routes = [
  { path: 'DeviceInfo', component: DeviceInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule { }

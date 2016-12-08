import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceInfoComponent } from './device-info/device-info.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { DeviceContainerComponent } from './device-container/device-container.component';

const routes: Routes = [
  { path: '', component: DeviceContainerComponent, children: [
    { path: '', redirectTo: 'DeviceSearch'},
    { path: 'DeviceSearch', component: DeviceSearchComponent },
    { path: 'DeviceInfo', component: DeviceInfoComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule { }

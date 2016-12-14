import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { DeviceContainerComponent } from './device-container/device-container.component';
import { DeviceRoutingModule } from './device-routing.module';
import { CartModule } from '../cart/cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceViewComponent } from './device-view/device-view.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { BtnNavService } from '../shared/services/btn-nav/btn-nav.service';
import { CatalogDeviceService } from '../shared/services/catalog-device/catalog-device.service';
import { CustomerDeviceService } from '../shared/services/customer-device/customer-device.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DeviceRoutingModule,
    DirectivesModule,
    CartModule
  ],
  declarations: [
    DeviceInfoComponent,
    DeviceSearchComponent,
    DeviceContainerComponent,
    DeviceViewComponent
  ],
  providers: [
    BtnNavService,
    CatalogDeviceService,
    CustomerDeviceService
  ]
})
export class DeviceModule { }

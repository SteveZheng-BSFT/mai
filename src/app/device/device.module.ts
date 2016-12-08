import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { DeviceContainerComponent } from './device-container/device-container.component';
import { DeviceRoutingModule } from './device-routing.module';
import { DirectivesModule } from 'directives/directives.module';
import { CartModule } from '../cart/cart.module';
import { BtnNavService } from 'services/btn-nav/btn-nav.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogDeviceService } from 'services/catalog-device/catalog-device.service';
import { CustomerDeviceService } from 'services/customer-device';
import { DeviceViewComponent } from './device-view/device-view.component';

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

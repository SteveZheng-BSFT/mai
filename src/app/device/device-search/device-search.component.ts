import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogDeviceService } from '../../shared/services/catalog-device/catalog-device.service';
import { CustomerDeviceService } from '../../shared/services/customer-device/customer-device.service';
import { BtnNavService } from '../../shared/services/btn-nav/btn-nav.service';

@Component({
  selector: 'app-device-search',
  templateUrl: './device-search.component.html',
  styleUrls: ['./device-search.component.scss']
})
export class DeviceSearchComponent implements OnInit {

  constructor(private router: Router, private catalogDeviceService: CatalogDeviceService,
              private customerDeviceService: CustomerDeviceService, private btnNavService: BtnNavService) {
  }

  ngOnInit() {
    this.btnNavService.setDesignatedButton('NoBtn');
  }

  search(value: any) {
    this.catalogDeviceService.getDeviceBySKU(value.imei).then(device => {
      this.customerDeviceService.setCurrentCustomerDevice(device, value.imei);
      this.router.navigate(['DeviceInfo'])
    });
  }

}

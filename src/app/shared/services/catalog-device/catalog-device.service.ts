import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { CatalogDevice } from './catalog-device';
import { ApiService } from '../api/api.service';
import { DEVICEDATA } from './device-data';
import { Brand } from './brand';
import { BRANDDATA } from './brand-data';
import { BrowseDevice } from './browse-device';
import { BROWSEDEVICEDATA } from './browse-devices-data';

@Injectable()
export class CatalogDeviceService {
  // The vars deviceUrl and mockAPI should be removed
  // private deviceUrl = 'http://localhost:3000/catalog-device';  // URL to web api
  // private mockAPI = false;
  // private currentCatalogDevice: CatalogDevice;
  path: string = 'catalog-device';

  constructor(private apiService: ApiService) { }




  getDevices() {
    // return this.apiService.get(this.path);
    return Promise.resolve(DEVICEDATA);
  }

  getDeviceBySKU(sku: string) {
    // return this.apiService.get(`${this.path}/${sku}`);
    return Promise.resolve(this.findDeviceBySKU(sku));
  }

  findDeviceBySKU(sku: string): CatalogDevice {
    for (let device of DEVICEDATA) {
      if (device.sku = sku) {
        return device;
      }
    }
    return null;
  }

  getBrandData(): Promise<Brand[]> {
    return Promise.resolve(BRANDDATA);
  }

  getBrowseData(): Promise<BrowseDevice[]> {
    return Promise.resolve(BROWSEDEVICEDATA);
  }

  getAsync<T extends CatalogDevice>(): Promise<T[]> {
    return Promise.resolve(DEVICEDATA);
  }

  // private handleError(error: any): Promise<any> {
  //     console.error('An error occurred in the CatalogDeviceService:' + error);
  //     return Promise.reject(error.message || error);
  // }
}

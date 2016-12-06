/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatalogDeviceService } from './catalog-device.service';

describe('CatalogDeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogDeviceService]
    });
  });

  it('should ...', inject([CatalogDeviceService], (service: CatalogDeviceService) => {
    expect(service).toBeTruthy();
  }));
});

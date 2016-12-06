import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
// import { CustomerDevice } from './customer-device';
import { CustomerDeviceService } from './customer-device.service';

describe('CustomerDeviceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CustomerDeviceService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#CustomerDeviceService should be defined', inject([CustomerDeviceService], (service: CustomerDeviceService) => {
        expect(service).toBeDefined();
    }));
});

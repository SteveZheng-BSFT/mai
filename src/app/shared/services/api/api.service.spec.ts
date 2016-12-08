import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApiService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#ApiService should be defined', inject([ApiService], (service: ApiService) => {
        expect(service).toBeDefined();
    }));

    it('should have a title property equal to XFINITY Mobile Retail', inject([ApiService], (api) => {
      expect(api.title).toBe('XFINITY Mobile Retail'); // we need to come go-back and fix this(102816)
    }));
});

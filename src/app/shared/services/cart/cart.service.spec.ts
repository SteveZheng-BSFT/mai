import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
// import { Cart } from './cart';
import { CartService } from './cart.service';

describe('CartService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CartService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#CartService should be defined', inject([CartService], (service: CartService) => {
        expect(service).toBeDefined();
    }));
});

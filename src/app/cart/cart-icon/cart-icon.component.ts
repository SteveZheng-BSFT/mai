import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';

@Component({
    selector: 'my-cart-icon',
    templateUrl: './cart-icon.component.html',
    styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
    quantity: number;
    constructor(public cartService: CartService) {
    }

    ngOnInit() {
        this.quantity = this.cartService.getQuantity();
    }
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works

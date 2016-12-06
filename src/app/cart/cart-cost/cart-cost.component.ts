import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/services/cart/cart';
import { CartService } from '../../shared/services/cart/cart.service';

@Component({
    selector: 'my-cart-cost',
    templateUrl: './cart-cost.component.html',
    styleUrls: ['./cart-cost.component.scss']
})
export class CartCostComponent implements OnInit {
    cart: Cart;
    constructor(public cartService: CartService) {
    }

    ngOnInit() {
        this.cart = this.cartService.cart;
        this.cartService.calculateTotal(); // should calculate total after hitting on the page
    }
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works

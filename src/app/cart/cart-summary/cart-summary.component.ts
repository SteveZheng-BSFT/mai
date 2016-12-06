import { Component, OnInit } from '@angular/core';
import { Item, CartService } from 'services/cart';

@Component({
    selector: 'my-cart-summary',
    templateUrl: './cart-summary.component.html',
    styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
    items: Item[];
    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.items = this.cartService.getItems();
    }

    deleteItem(item: Item) {
        this.cartService.deleteItem(item);
        this.cartService.calculateTotal(); // when delete, should calculate again
    }
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works

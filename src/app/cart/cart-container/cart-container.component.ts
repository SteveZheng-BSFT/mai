import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-cart-container',
    templateUrl: './cart-container.component.html',
    styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works

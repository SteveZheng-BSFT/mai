import { Injectable } from '@angular/core';
import { Item } from './item';
import { Cart } from './cart';
import { CustomerDevice } from '../customer-device/customer-device';

@Injectable()
export class CartService {
    public cart: Cart;
    // an internal method used to query state tax
    private static querySalesTax(stateName: string): number {
        let tax = 0;
        switch (stateName) {
            case 'PA':
                tax = 0.2;
                break;
            default:
                tax = 0.1;
                break;
        }
        return tax;
    }

    constructor() {
        // init cart
        this.cart = new Cart();
        this.cart.cartID = Math.round( Math.random() * 1000000) + ''; // generate a cart cart id
        this.cart.customerID = '1111111'; // should get from customer at very beginning
        this.cart.tax = CartService.querySalesTax('PA');
    }
    getItems(): Item[] {
        return this.cart.items;
    }
    getQuantity(): number {
        return this.cart.items.length;
    }
    addItem(customerDevice: CustomerDevice): void {
        let savedItem = {
            id: Math.round(Math.random() * 1000000) + '',
            device: customerDevice
        };
        this.cart.items.push(savedItem);
    }
    deleteItem(item: Item): void {
        this.cart.items.forEach((v, k, arr) => {
            if (item === v) {
                arr.splice(k, 1); // delete this item from current array
            }
        });
    }
    resetCart(): void {
        this.cart.items = [];
    }
    calculateTotal(): number {
        let total = this.calculateSubtotal();
        total = total * (1 + this.cart.tax);
        // add this total to cart obj so we can use in next step
        this.cart.total = total;
        return total;
    }
    private calculateSubtotal(): number {
        let total = 0;
        // get all prices together
        for (let item of this.getItems()) {
            total += item.device.catalogDevice.price;
        }
        // add this total to cart obj so we can use in next step
        this.cart.subtotal = total;
        return total;
    }
}

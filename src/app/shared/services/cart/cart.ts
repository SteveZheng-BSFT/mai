import { Item } from './item';

export class Cart {
    public cartID: String;
    public customerID: String;
    public subtotal: number; // raw total w/o tax
    public total: number;
    public tax: number;
    public items: Item[];
    constructor() {
        this.items = [];
        this.subtotal = 0;
        this.total = 0;
    }
}

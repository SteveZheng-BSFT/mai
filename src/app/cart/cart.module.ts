import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartContainerComponent, CartIconComponent, CartCostComponent, CartSummaryComponent, CartRoutingModule } from 'module/cart';
import { CartService } from 'services/cart';

@NgModule({
    imports: [
        CommonModule,
        CartRoutingModule
    ],
    exports: [
        CartContainerComponent,
        CartIconComponent
    ],
    declarations: [
        CartContainerComponent,
        CartCostComponent,
        CartSummaryComponent,
        CartIconComponent
    ],
    providers: [CartService],
})
export class CartModule { }

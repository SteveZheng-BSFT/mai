import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartContainerComponent } from './cart-container';
import { CartCostComponent } from './cart-cost/cart-cost.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartService } from '../shared/services/cart/cart.service';
import { CartRoutingModule } from './cart-routing.module';
import { CartIconComponent } from './cart-icon/cart-icon.component';

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

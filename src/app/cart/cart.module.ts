import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container';
import { CartIconComponent } from './cart-icon';
import { CartCostComponent } from './cart-cost';
import { CartSummaryComponent } from './cart-summary';
import { DirectivesModule } from '../shared/directives/directives.module';
import { CartService } from '../shared/services/cart/cart.service';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    DirectivesModule
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
export class CartModule {
}

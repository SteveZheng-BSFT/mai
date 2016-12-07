import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from 'services/cart';
import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container';
import { CartIconComponent } from './cart-icon';
import { CartCostComponent } from './cart-cost';
import { CartSummaryComponent } from './cart-summary';
import { DirectivesModule } from 'directives/directives.module';

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

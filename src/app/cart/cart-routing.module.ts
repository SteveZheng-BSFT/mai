import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartContainerComponent } from './cart-container';

const routes: Routes = [
  { path: 'ShoppingCart', component: CartContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule { }

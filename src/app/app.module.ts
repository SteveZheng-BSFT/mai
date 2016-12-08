import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeviceModule } from './device/device.module';
import { AppRoutingModule } from './app-routing.module';
import { CartModule } from './cart/cart.module';
import { ApiService } from 'services/api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DeviceModule,
    CartModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

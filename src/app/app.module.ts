import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeviceModule } from './device/device.module';
import { AppRoutingModule } from './app-routing.module';
import { CartModule } from './cart/cart.module';
import { CommentModule } from './comment/comment.module';
import { ApiService } from './shared/services/api/api.service';
import { MoneyPipe } from './shared/pipes/money/money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoneyPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DeviceModule,
    CartModule,
    CommentModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

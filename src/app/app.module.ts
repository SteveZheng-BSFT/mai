import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentModule } from './comment/comment.module';
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
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

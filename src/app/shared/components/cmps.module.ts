import { NgModule } from '@angular/core';

import { RadioBtnComponent } from './radio-btn/radio-btn.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [
      RadioBtnComponent
    ],
    declarations: [
      RadioBtnComponent
    ],
    providers: [],
})
export class CmpsModule { }

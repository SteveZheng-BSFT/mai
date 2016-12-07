import { NgModule } from '@angular/core';

import { BackDirective } from './back';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [BackDirective],
    declarations: [BackDirective]
})
export class DirectivesModule { }

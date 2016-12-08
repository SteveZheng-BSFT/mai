import { NgModule } from '@angular/core';

import { GoBackDirective } from './go-back';
import { CommonModule } from '@angular/common';
import { CancelItemDirective } from './cancel-item/cancel-item.directive';

@NgModule({
    imports: [CommonModule],
    exports: [GoBackDirective, CancelItemDirective],
    declarations: [GoBackDirective, CancelItemDirective]
})
export class DirectivesModule { }

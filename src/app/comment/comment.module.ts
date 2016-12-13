/**
 * Created by stevezheng on 12/13/16.
 */
import { NgModule } from '@angular/core';

import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentVoteComponent } from './comment-vote/comment-vote.component';
import { CommentRoutingModule } from './comment-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      CommentRoutingModule,
      FormsModule
    ],
    exports: [],
    declarations: [CommentBoxComponent, CommentContainerComponent, CommentVoteComponent],
    providers: [],
})
export class CommentModule { }

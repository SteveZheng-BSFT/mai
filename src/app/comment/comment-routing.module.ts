/**
 * Created by stevezheng on 12/13/16.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentContainerComponent } from './comment-container/comment-container.component';

const routes: Routes = [
  { path: 'comments', component: CommentContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule { }

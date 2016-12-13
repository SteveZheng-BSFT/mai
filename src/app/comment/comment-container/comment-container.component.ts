import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {
  comments: Comment[];
  constructor() { }

  ngOnInit() {
    this.comments = [];
  }

  saveComment(comment: Comment): void {
    this.comments.push(comment);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Output() commentEvent: EventEmitter<Object>;

  constructor() {
    this.commentEvent = new EventEmitter(true);
  }

  ngOnInit() {
  }

  addComment(form) {
    this.commentEvent.emit(new Comment(form.username, form.comment));
    form.username = '';
    form.comment = ''
  }
}

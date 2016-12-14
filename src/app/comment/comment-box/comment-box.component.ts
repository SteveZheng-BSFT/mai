import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Comment } from '../comment.model';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Output() commentEvent: EventEmitter<Object>;
  form: FormGroup;
  username: AbstractControl;
  comment: AbstractControl;
  stay: boolean;

  constructor(fb: FormBuilder, private el: ElementRef) {
    this.commentEvent = new EventEmitter(true);
    this.form = fb.group({
      'username': [],
      'comment': []
    });
    this.username = this.form.controls['username'];
    this.comment = this.form.controls['comment'];
    this.username.valueChanges.subscribe(value => {
      this.stay = value != '';
    });
  }

  ngOnInit() {
  }

  addComment(form) {
    this.commentEvent.emit(new Comment(form.username, form.comment));
    this.username.setValue('');
    this.comment.setValue('');
  }
}

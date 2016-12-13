import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment-vote',
  templateUrl: './comment-vote.component.html',
  styleUrls: ['./comment-vote.component.scss']
})
export class CommentVoteComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

  voteUp(): void {
    this.comment.voteUp();
  }

  voteDown(): void {
    this.comment.voteDown();
  }
}

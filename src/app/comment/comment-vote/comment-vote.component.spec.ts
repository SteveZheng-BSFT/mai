/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentVoteComponent } from './comment-vote.component';

describe('CommentVoteComponent', () => {
  let component: CommentVoteComponent;
  let fixture: ComponentFixture<CommentVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

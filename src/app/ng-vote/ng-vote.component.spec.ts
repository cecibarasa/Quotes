import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVoteComponent } from './ng-vote.component';

describe('NgVoteComponent', () => {
  let component: NgVoteComponent;
  let fixture: ComponentFixture<NgVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

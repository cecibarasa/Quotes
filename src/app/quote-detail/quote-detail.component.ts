import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() vote = new EventEmitter<number>();
  @Output() downvote = new EventEmitter<number>();

  //quoteComplete(complete:boolean){
    //this.isComplete.emit(complete);
  //}

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  votes(increase:number){
    this.vote.emit(increase + 1);
  }

  downvotes(decrease:number){
    this.downvote.emit(decrease + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

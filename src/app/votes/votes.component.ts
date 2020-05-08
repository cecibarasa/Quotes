import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor() { }
  @Input() quote: Quote;
  @Output() votes = new EventEmitter();

  //newVote = function (votes) {
    //votes.vote = function (index) {
    //  votes.quote[index].like += 1;
    //}
    //votes.downvote = function (index) {
      //votes.quote[index].dislike += 1;
    //}
  //}
  
  ngOnInit() {
    
  }

}

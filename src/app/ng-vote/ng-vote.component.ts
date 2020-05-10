import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-vote',
  templateUrl: './ng-vote.component.html',
  styleUrls: ['./ng-vote.component.css']
})
export class NgVoteComponent implements OnInit {
  
  onVote(vote, downvote){
    console.log('onVote: ', vote, downvote)
  }
  votes:number = 0;
  vote(){
    this.votes=this.votes + 1;

  }
  downvotes:number = 0;
  downvote(){
    this.downvotes=this.downvotes + 1;

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

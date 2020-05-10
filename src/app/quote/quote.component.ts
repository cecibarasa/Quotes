
import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Put your mind, and soul into even your smallest acts.This is the secret to success', 'Swami Sivananda', new Date(2020,5,2)),
    new Quote(2,'The key to success is to start before you are ready', 'Marie Forleo', new Date(2020,5,5)),
    new Quote(3, 'Get new Phone Case', 'IDK', new Date(2020,5,2)),
    new Quote(4, 'Get Dog Food', 'For Jazz', new Date(2020,5,1)),
  ];
  

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;  
  }


  //completeQuote(isComplete, index){
    //if (isComplete) {
      //this.quotes.splice(index,1);
    //}
  //}

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.unshift(quote)
    
  }

    // vote(){
    //   this.votes=this.votes + 1;

    // }
    // downvotes:number = 0;
    // downvote(){
    //   this.downvotes=this.downvotes + 1;

    // }
    

  constructor() { 
    
  }

  ngOnInit() {
  }

  votes:number = 0;
  downvotes:number = 0;
Votes =  function(vote, downvote){
  vote(function(){
    this.votes=this.votes + 1;
  })
  downvote(function(){
    this.downvotes=this.downvotes + 1;
  })
    
}
}

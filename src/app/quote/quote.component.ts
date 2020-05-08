import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Sleeep', new Date(2020,4,2), +5, -5),
    new Quote(2,'Buy Cookies', 'Eat', new Date(2020,1,1), +10, -5),
    new Quote(3, 'Get new Phone Case', 'IDK', new Date(2020,2,2), +5, 0),
    new Quote(4, 'Get Dog Food', 'For Jazz', new Date(2020,5,1), 0, 0),
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
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)
    
  }
  like(like,index){
    if(like){
      this.quotes[index].vote= this.quotes[index].vote +=1
      
      }
    }
    dislike(dislike,index){
      if(dislike){
        this.quotes[index].downvote= this.quotes[index].downvote -=1

      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}

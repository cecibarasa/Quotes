import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Sleeep', new Date(2020,4,2)),
    new Quote(2,'Buy Cookies', 'Eat', new Date(2020,1,1)),
    new Quote(3, 'Get new Phone Case', 'IDK', new Date(2020,2,2)),
    new Quote(4, 'Get Dog Food', 'For Jazz', new Date(2020,5,1)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}

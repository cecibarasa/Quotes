import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Sleeep'),
    new Quote(2,'Buy Cookies', 'Eat'),
    new Quote(3, 'Get new Phone Case', 'IDK'),
    new Quote(4, 'Get Dog Food', 'For Jazz'),
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

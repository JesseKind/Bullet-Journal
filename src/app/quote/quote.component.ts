import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];
  randomQuote!: Quote;

  ngOnInit() {
    this.quotes = QUOTES;
    this.getRandomQuote();
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}

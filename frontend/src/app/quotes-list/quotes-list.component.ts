import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent {

  quotesList = [
    {"quote": "quote", "book": "book", "author": "author"},
    {"quote": "quote", "book": "book", "author": "author"}
  ]

}

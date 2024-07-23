import { Observable } from 'rxjs';
import { Book } from '../quote-form/model/book';
import { Quote } from '../services/remeber-quotes/model/quote.model';
import { RememberQuotesService } from './../services/remeber-quotes/remember-quotes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {

  ngOnInit(): void {
    this.updateQuoteList()
  }

  private updateQuoteList() {
    this.rememberQuotesService.getAllQuotes().subscribe( response => {
      var quoteResponse: Quote[] = response._embedded.quotes
      console.log("quote response", quoteResponse)
      for (let index = 0; index < quoteResponse.length; index++) {
        const quote = quoteResponse[index];
        this.updateBook(quote._links?.book.href).subscribe(response => {
          quote.book = response.name
          quote.author = response.author
        })
        console.log(quote);
      }
      this.quotesList = quoteResponse;
      // quoteResponse.forEach(quote => {
      //   var book = this.updateBook(quote._links?.book.href)
      //   console.log("quote", quote)
      //   console.log("book", book)
      //   quoteResponse[quoteResponse.indexOf(quote)].book = book.name;
      //   quote.book = book.name;
      //   quote.author = book.author;
      //   console.log("quote", quote)
      // });
      //this.quotesList = quoteResponse
      console.log(quoteResponse)
      // quoteResponse[0].book = "teste";
      console.log("testando alterar na mao", quoteResponse)
    })
  }

  private updateBook(refBook: string| undefined): Observable<Book> {
    var responseBook: Book = new Book();
    if(!!refBook) {
      return this.rememberQuotesService.getBookByHref(refBook)
      //  this.rememberQuotesService.getBookByHref(refBook).subscribe( response => {
      //   responseBook.author = response.author;
      //   responseBook.name = response.name
      // })
    }
    throw Error("Quote sem referencia");
    //return this.rememberQuotesService.getBookByHref(refBook)
  }

  constructor (
    private rememberQuotesService: RememberQuotesService
  ){}

  quotesList: Quote[] = []
}

import { LinksQuote } from './../services/remeber-quotes/model/quote.model';

import { RememberQuotesService } from './../services/remeber-quotes/remember-quotes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteForm } from './model/quote-form';
import { HttpClient } from '@angular/common/http';
import { Book } from './model/book';
import { Quote } from '../services/remeber-quotes/model/quote.model';
import { environment } from 'src/app/environments/environment';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {

  books: Book[] = [];
  quoteForm: FormGroup;
  private basepath = environment.apiUrl

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private remeberQuotesService: RememberQuotesService
  ) {
    this.quoteForm = this.formBuilder.group({
      quote : '',
      book : ''
    });
  }

  ngOnInit(): void {
    console.log("iniciado");
    this.getAllBooks()
  }

  onSubmit(): void {
    if(this.quoteForm.valid) {
      var teste = this.quoteForm.value
      console.log(this.quoteForm.value);
      this.remeberQuotesService.registerQuote(this.buildRegisterQuoteRequestBody()).subscribe(
        response => {
          console.log((response))
        },
        error => {
          console.error(error)
        }
      )
    }
  }

  private buildRegisterQuoteRequestBody(): Quote{
    var quote = new Quote()
    quote.quote = this.quoteForm.get('quote')?.value;
    quote.book = this.quoteForm.get('book')?.value;
    return quote;
  }

  getAllBooks() {
    this.http.get<any>(this.basepath.concat("/books")).subscribe(data => {
      this.books = data._embedded.books;
    });
  }

}

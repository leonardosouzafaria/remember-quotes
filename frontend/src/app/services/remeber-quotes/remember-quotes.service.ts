import { Quote } from './model/quote.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Book } from 'src/app/quote-form/model/book';

@Injectable({
  providedIn: 'root'
})
export class RememberQuotesService {

  private basePath = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerQuote(quote: Quote): Observable<any> {
    console.log("register")
    return this.http.post<any>(this.basePath.concat("/quotes"), quote)
  }

  getAllQuotes(): Observable<any> {
    console.log("getAllQuotes")
    return this.http.get<any>(this.basePath.concat("/quotes"))
  }

  getBookByHref(href: string): Observable<Book> {
    return this.http.get<Book>(href)
  }

  registerBook(book: Book) {
    return this.http.post<any>(this.basePath.concat("/books"), book)
  }

}

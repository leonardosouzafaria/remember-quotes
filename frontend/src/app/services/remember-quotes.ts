import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BooksResponse } from '../shared/models';
import { RegisterQuoteRequest } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RememberQuotes {

  private basePath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<BooksResponse>(`${this.basePath}/books`);
  }

  registrerQuote(payload: RegisterQuoteRequest) {
    return this.http.post(`${this.basePath}/quotes`, payload);
  } 
}

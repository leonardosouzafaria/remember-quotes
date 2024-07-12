import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RememberQuotesService } from '../services/remeber-quotes/remember-quotes.service';
import { Book } from '../quote-form/model/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private rememberQuotesService: RememberQuotesService
  ){
    this.bookForm = this.formBuilder.group(new Book())
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit() {
    if(this.bookForm.valid) {
      var form = this.bookForm.value
      console.log(form)
      this.rememberQuotesService.registerBook(form).subscribe(response => {
        console.log(response)
      })
    }
  }

}

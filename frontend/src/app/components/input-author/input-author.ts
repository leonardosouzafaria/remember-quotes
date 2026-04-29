import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiComboBox, TuiDataListWrapper, TuiFilterByInputPipe } from '@taiga-ui/kit';
import { RememberQuotes } from '../../services/remember-quotes';
import { Book } from '../../models';

@Component({
  selector: 'app-input-author',
  imports: [
    TuiComboBox,
    ReactiveFormsModule,
    TuiTextfield,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiButton,
  ],
  templateUrl: './input-author.html',
  styleUrl: './input-author.scss',
})
export class InputAuthor implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() nextInput = new EventEmitter<void>();

  protected items: String[] = [];

  constructor(private rememberQuotesService: RememberQuotes) {}

  ngOnInit() {
    this.loadAuthors();
  }

  private loadAuthors() {
    this.rememberQuotesService.getBooks().subscribe((books) => {
      this.items = this.prepareAuthorsList(books._embedded.books);
    });
  }

  private prepareAuthorsList(books: Book[]): string[] {
    const authorsSet = new Set<string>();
    books.forEach((book) => {
      authorsSet.add(book.author);
    });
    return Array.from(authorsSet);
  }

  next() {
    this.nextInput.emit();
  }
}

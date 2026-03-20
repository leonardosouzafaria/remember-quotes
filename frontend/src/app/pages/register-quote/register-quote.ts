import { Component } from '@angular/core';
import { InputQuote } from '../../components/input-quote/input-quote';
import { TuiGroup } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiChip, TuiCarousel } from '@taiga-ui/kit';
import { InputAuthor } from '../../components/input-author/input-author';
import { InputBook } from '../../components/input-book/input-book';

@Component({
  selector: 'app-register-quote',
  imports: [
    ReactiveFormsModule,
    InputQuote,
    TuiGroup,
    TuiChip,
    TuiCarousel,
    InputAuthor,
    InputBook,
  ],
  templateUrl: './register-quote.html',
  styleUrl: './register-quote.scss',
})
export class RegisterQuote {
  protected readonly menuOptions = [
    { label: 'Cadastrar livro', targetRoute: 'edit' },
    { label: 'Livros cadastrados', targetRoute: 'source' },
    { label: 'Citações cadastradas', targetRoute: 'source' },
  ];
  quoteForm = new FormGroup({
    quoteText: new FormControl(),
    authorName: new FormControl(),
    bookName: new FormControl(),
  });
}

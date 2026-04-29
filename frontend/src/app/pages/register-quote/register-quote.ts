import { Component, OnInit } from '@angular/core';
import { InputQuote } from '../../components/input-quote/input-quote';
import { TuiGroup } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiChip, TuiCarousel } from '@taiga-ui/kit';
import { InputAuthor } from '../../components/input-author/input-author';
import { InputBook } from '../../components/input-book/input-book';
import { RememberQuotes } from '../../services/remember-quotes';
import { Book } from '../../models';
import { RegisterQuoteRequest } from '../../shared/models';
import { Router } from '@angular/router';

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
export class RegisterQuote implements OnInit {

  constructor(
    private rememberQuotesService: RememberQuotes,
    private router: Router
  ) {}

  protected readonly menuOptions = [
    { label: 'Cadastrar livro', targetRoute: 'edit' },
    { label: 'Livros cadastrados', targetRoute: 'source' },
    { label: 'Citações cadastradas', targetRoute: 'list-quotes' },
  ];
  
  quoteForm = new FormGroup({
    quoteText: new FormControl(),
    authorName: new FormControl(),
    bookName: new FormControl(),
  });

  protected authors: String[] = [];
  protected allBooks: Book[] = [];
  protected filteredBooks: string[] = [];

  ngOnInit(): void {
    this.loadBooks();
    this.setupAuthorChangeListener();
  }

  private loadBooks() {
    this.rememberQuotesService.getBooks().subscribe((response) => {
      this.allBooks = response._embedded.books;
      this.authors = this.prepareAuthorsList(this.allBooks);
    });
  }

  private setupAuthorChangeListener() {
    this.quoteForm.get('authorName')?.valueChanges.subscribe((author) => {
      this.filteredBooks = this.filterBooksByAuthor(author);
    });
  }

  private filterBooksByAuthor(author: string): string[] {
    if (!author) {
      return [];
    }
    return this.allBooks
      .filter((book) => book.author === author)
      .map((book) => book.name);
  }

  private prepareAuthorsList(books: Book[]): string[] {
    const authorsSet = new Set<string>();
    books.forEach((book) => {
      authorsSet.add(book.author);
    });
    return Array.from(authorsSet);
  }

  registerQuote() {
    const selectedBookName = this.quoteForm.get('bookName')?.value;
    const selectedBook = this.allBooks.find(book => book.name === selectedBookName);

    if (!selectedBook) {
      console.error('Nenhum livro selecionado');
      return;
    }

    const payload: RegisterQuoteRequest = {
      quote: this.quoteForm.get('quoteText')?.value,
      book: selectedBook._links.book.href,
    };

    this.rememberQuotesService.registrerQuote(payload).subscribe(() => {
      // Lógica para lidar com o sucesso do registro da citação, como mostrar uma mensagem ou limpar o formulário
    });
  } 
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

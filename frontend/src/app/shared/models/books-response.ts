import { Book } from './book';
import { Link } from './book';

export interface BooksResponse {
  _embedded: {
    books: Book[];
  };
  _links: {
    self: Link;
    profile: Link;
  };
}

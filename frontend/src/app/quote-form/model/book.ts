import { LinksQuote } from "src/app/services/remeber-quotes/model/quote.model";

export class Book {
  name: string = "";
  author: string= "";
  _links: LinksQuote| null = null;
}

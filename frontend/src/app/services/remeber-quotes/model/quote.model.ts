
export class Quote {
  quote: string = "";
  book: string = "";
  author: string = "";
  _links: LinksQuote| null = null;
}

export interface LinksQuote {
  book: LinkBook
}

export interface LinkBook {
  href: string
}

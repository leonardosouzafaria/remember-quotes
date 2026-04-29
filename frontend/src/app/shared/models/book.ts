export interface Book {
  name: string;
  author: string;
  _links: {
    self: Link;
    book: Link;
  };
}

export interface Link {
  href: string;
}

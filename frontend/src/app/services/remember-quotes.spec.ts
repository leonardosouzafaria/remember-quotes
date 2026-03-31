import { TestBed } from '@angular/core/testing';

import { RememberQuotes } from './remember-quotes';

describe('RememberQuotes', () => {
  let service: RememberQuotes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RememberQuotes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

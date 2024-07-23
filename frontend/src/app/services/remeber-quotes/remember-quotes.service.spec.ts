import { TestBed } from '@angular/core/testing';

import { RememberQuotesService } from './remember-quotes.service';

describe('RememberQuotesService', () => {
  let service: RememberQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RememberQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

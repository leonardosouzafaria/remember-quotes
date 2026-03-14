import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQuote } from './register-quote';

describe('RegisterQuote', () => {
  let component: RegisterQuote;
  let fixture: ComponentFixture<RegisterQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

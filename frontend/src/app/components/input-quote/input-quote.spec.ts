import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuote } from './input-quote';

describe('InputQuote', () => {
  let component: InputQuote;
  let fixture: ComponentFixture<InputQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(InputQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

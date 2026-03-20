import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBook } from './input-book';

describe('InputBook', () => {
  let component: InputBook;
  let fixture: ComponentFixture<InputBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBook],
    }).compileComponents();

    fixture = TestBed.createComponent(InputBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

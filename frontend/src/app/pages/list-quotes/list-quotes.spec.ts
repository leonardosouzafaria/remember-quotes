import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuotes } from './list-quotes';

describe('ListQuotes', () => {
  let component: ListQuotes;
  let fixture: ComponentFixture<ListQuotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListQuotes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListQuotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

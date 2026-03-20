import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthor } from './input-author';

describe('InputAuthor', () => {
  let component: InputAuthor;
  let fixture: ComponentFixture<InputAuthor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAuthor],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAuthor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

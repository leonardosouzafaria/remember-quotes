import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiComboBox, TuiDataListWrapper, TuiFilterByInputPipe } from '@taiga-ui/kit';

@Component({
  selector: 'app-input-book',
  imports: [
    TuiComboBox,
    ReactiveFormsModule,
    TuiTextfield,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiButton,
  ],
  templateUrl: './input-book.html',
  styleUrl: './input-book.scss',
})
export class InputBook {

  @Input() formGroup!: FormGroup;
  @Output() nextInput = new EventEmitter<void>();

  protected readonly books = [
    'Darth Vader',
    'Luke Skywalker',
    'Princess Leia',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
  ] as const;

  next() {
    this.nextInput.emit();
  }

}

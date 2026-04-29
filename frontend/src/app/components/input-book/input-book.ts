import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiComboBox, TuiDataListWrapper, TuiFilterByInputPipe } from '@taiga-ui/kit';
import { Book } from '../../models';

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
export class InputBook implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() books: string[] = [];
  @Output() nextInput = new EventEmitter<void>();
  @Output() register = new EventEmitter<void>();

  ngOnInit() {
    // Quando o componente inicializa, a lista de books já foi definida via input binding
  }

  registerQuote() {
    this.register.emit();
  }
}

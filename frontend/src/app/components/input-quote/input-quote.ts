import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiTextarea } from '@taiga-ui/kit';

@Component({
  selector: 'app-input-quote',
  imports: [ReactiveFormsModule, TuiTextarea, TuiTextfield, TuiButton],
  templateUrl: './input-quote.html',
  styleUrl: './input-quote.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputQuote {
  @Input() formGroup!: FormGroup;
}

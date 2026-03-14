import { Component } from '@angular/core';
import { InputQuote } from "../../components/input-quote/input-quote";
import { TuiButton, TuiGroup } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-register-quote',
  imports: [ReactiveFormsModule, InputQuote, TuiGroup],
  templateUrl: './register-quote.html',
  styleUrl: './register-quote.scss',
})
export class RegisterQuote {
  quoteForm = new FormGroup({ quoteText: new FormControl() });
}

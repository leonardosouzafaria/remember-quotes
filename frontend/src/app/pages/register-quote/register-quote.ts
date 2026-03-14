import { Component } from '@angular/core';
import { InputQuote } from "../../components/input-quote/input-quote";
import { TuiButton } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-register-quote',
  imports: [ReactiveFormsModule, InputQuote, TuiButton, ɵInternalFormsSharedModule],
  templateUrl: './register-quote.html',
  styleUrl: './register-quote.scss',
})
export class RegisterQuote {
  quoteForm = new FormGroup({ quoteText: new FormControl() });
}

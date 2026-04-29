import { Routes } from '@angular/router';
import { RegisterQuote } from './pages/register-quote/register-quote';
import { ListQuotes } from './pages/list-quotes/list-quotes';

export const routes: Routes = [
    { path: '', component: RegisterQuote},
    { path: 'list-quotes', component: ListQuotes}
];

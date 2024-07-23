import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { HomeComponent } from './home/home.component';
import { BookFormComponent } from './book-form/book-form.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: QuotesListComponent},
  {path: 'cadastrar-livro', component: BookFormComponent},
  {path: 'cadastrar-citacao', component: QuoteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { TuiRoot, TuiButton, TuiTitle } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiAppBar } from '@taiga-ui/layout';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('remember-quotes');
}

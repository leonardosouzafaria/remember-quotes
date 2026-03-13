import { Component } from '@angular/core';
import { TuiAppBar } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  imports: [TuiAppBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}

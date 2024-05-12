import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'andela-books-test';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MdbCheckboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

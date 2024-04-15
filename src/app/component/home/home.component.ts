import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tiles: any[] = [
    {title: 'Skills', content: 'Here are my skills and knowledge'},
    {title: 'Experiences', content: 'Here are my experiences'},
    {title: 'Projects', content: 'Here are my projects'}
  ];

  isMobile(): boolean {
    const toCheck = window.innerWidth;
    return toCheck <= 768;
  }

}

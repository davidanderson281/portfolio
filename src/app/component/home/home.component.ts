import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tiles: any[] = [
    {title: 'Skills', content: 'Java'},
    {title: 'Experiences', content: 'Here are my experiences'},
    {title: 'Projects', content: 'Glasgow Subcrawl - Android app written in Kotlin'},
  ];

  isMobile(): boolean {
    const toCheck = window.innerWidth;
    return toCheck <= 768;
  }

}

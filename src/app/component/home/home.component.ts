import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  cols: number = 2;
    private windowWidth: number = window.innerWidth;
    // change cols variable dynamically based on screen size
    ngOnInit(): void {
      window.addEventListener('resize', () => {
        if (window.innerWidth < 600) {
          this.cols = 1;
          console.log("Small screen");
        } else {
          this.cols = 2;
          console.log("Large screen");
        }
      });
    }
}

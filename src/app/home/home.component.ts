import { Component, ElementRef, ViewChild ,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  @ViewChild('elem') elem: ElementRef = {} as ElementRef;
 @ViewChild('elem1') elem1: ElementRef = {} as ElementRef;

 mouseX = 0;
 mouseY = 0;
 top = 60;
 left = 60;
  constructor(private renderer: Renderer2) {}

}

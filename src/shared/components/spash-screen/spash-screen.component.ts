import { Component } from '@angular/core';

@Component({
  selector: 'app-spash-screen',
  templateUrl: './spash-screen.component.html',
  styleUrls: ['./spash-screen.component.css']
})
export class SpashScreenComponent {

  showHome = false;

  constructor() {}

  ngOnInit(): void {
    this.showHome = false;
    setTimeout(() => {
      this.showHome = true;
    }, 50000);
  }
}
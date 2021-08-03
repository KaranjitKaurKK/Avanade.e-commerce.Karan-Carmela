import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
  <div class='container'>
  <div class='image'>
    <router-outlet></router-outlet>
  </div>
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'BEERVANADE';
}

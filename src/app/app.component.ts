import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class='image'>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'BEERVANADE';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" routerLink='/home'>BEERVANADE</a>   
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" routerLink='/home'> Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink='/profile'> Profile </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink='/catalog'> Catalog </a>
        </li>
      </ul>
        <a class="nav-link"  routerLink='/cart'>Cart <i class="fa fa-shopping-cart"></i></a>
    </div>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
`,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

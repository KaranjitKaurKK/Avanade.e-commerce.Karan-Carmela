import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink='/home'>BEERVANADE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
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
    <span class="navbar-text" style="float: right">
      <a class="nav-link navbar-right" style="float: right" routerLink='/cart'><i class="fas fa-shopping-cart"></i> Cart </a>  
    </span>
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

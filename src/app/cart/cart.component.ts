import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  pageTitle: string='CART';

  constructor() { }

  ngOnInit(): void {
  }

}

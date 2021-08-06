import { HttpClient } from '@angular/common/http';
import { Component, InputDecorator, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
 templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  products=this.cartService.getProducts();
  clickEventSubscription: Subscription | undefined;
  count: number = 0;

  constructor(private cartService: CartService) { 
    this.clickEventSubscription = this.cartService.getClickEvent().subscribe(()=>{
      this.countFunction();
    });
  }
  countFunction(){
    this.count += 1;
  }

  minusFunction(){
    if (this.count > 0)
    this.count-=1;
  }

  addQuantity(){
    this.cartService.addClickEvent();
  }
  
  ngOnInit(): void {

  }
}
  

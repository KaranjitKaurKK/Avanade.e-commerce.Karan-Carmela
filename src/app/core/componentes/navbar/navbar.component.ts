import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl:  './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  ecommerceName: string="BEERVANADE"; 
  firstComponent: string ="HOME"; 
  secondComponent: string="SHOP"; 

  count: number=0;

  clickEventSubscription:Subscription| undefined;
  constructor(private cartService: CartService) 
  { 
    this.clickEventSubscription = this.cartService.getClickEvent().subscribe(()=>{
      this.countFunction();
    });
  }

  countFunction(){
    this.count+=1; 
  }
  

  ngOnInit(): void {
  }
}

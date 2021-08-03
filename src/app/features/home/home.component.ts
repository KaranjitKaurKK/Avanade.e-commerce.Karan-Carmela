import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //per passare il parametro
  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.queryParamMap);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //per controllare gli oggetti
      console.log('user =', params.user);
    });
  }
}

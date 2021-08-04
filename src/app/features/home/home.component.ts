import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  user : IUser | null=null; 

  //per passare il parametro
  constructor(private route: ActivatedRoute, private userService: UserService) {
    console.log(route.snapshot.queryParamMap);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //per controllare gli oggetti
      console.log('user =', params.user);
    });
  }
}
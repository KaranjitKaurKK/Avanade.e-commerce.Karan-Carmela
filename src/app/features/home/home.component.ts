import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl:  './home.component.html' ,
  styleUrls: ['./home.component.css'],

  //providers: [UserService]

})
export class HomeComponent implements OnInit {
  pageTitle: string = "Welcome";
  description: string = "Una birra artigianale è una birra cruda, prodotta senza aggiungere conservanti e prediligendo materie prime di qualità. É prodotta da mastri birrai con entusiasmo e creatività e sempre in quantità abbastanza limitate.";
  user: IUser | null = null;
  params: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService, private toastrService: ToastrService) {
    console.log(route.snapshot.queryParamMap);
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params)

      if (params && !params.user) {
        this.toastrService.error('user not found!', 'FAILED', { timeOut: 3000, });
      }
      else {
        this.params = params.user;
        this.userService.getUser(this.params).subscribe((data) => {
          this.user = data;
          console.log("user->", this.user);
        }, error => {
          this.toastrService.error('user not found!', 'FAILED', { timeOut: 3000, });
        })
      }
    })
  }
}

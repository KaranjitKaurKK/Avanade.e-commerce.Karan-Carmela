import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  pageTitle: string='PROFILE';

  constructor() { }

  ngOnInit(): void {
  }

}

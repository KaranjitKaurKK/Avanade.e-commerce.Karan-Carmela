import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  pageTitle: string='HOME';

  constructor() { }

  ngOnInit(): void {
  }

}

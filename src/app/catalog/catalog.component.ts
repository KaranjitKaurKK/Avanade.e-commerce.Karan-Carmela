import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  pageTitle: string='CATALOG';

  constructor() { }

  ngOnInit(): void {
  }

}

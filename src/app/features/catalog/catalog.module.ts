import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeerFilterPipe } from './pipe/beer-filter.pipe';


@NgModule({
  declarations: [
    CatalogComponent,
    BeerFilterPipe
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CatalogModule { }

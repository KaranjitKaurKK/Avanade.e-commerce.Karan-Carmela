import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styles: [ ],
  providers: [ProductService],
})
export class CatalogComponent implements OnInit {
  errorMessage:string='';
  private _listFilter: string = '';
  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }



  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products=products;
        this.filteredProducts = this.products;
      }, 
      error: err => this.errorMessage=err
    });
    
  }
}

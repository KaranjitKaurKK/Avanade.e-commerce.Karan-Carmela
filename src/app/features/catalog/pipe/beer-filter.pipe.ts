import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/models/product';

@Pipe({
  name: 'beerFilter'
})
export class BeerFilterPipe implements PipeTransform {

  transform(products: IProduct[], inputFilter: string): IProduct[] {
    console.log("beerpipe =", inputFilter);
    
    if (!inputFilter||inputFilter.length <= 3) //true: se null, stringa vuota o 0, o undefined
    { 
      return products;
    }

    const inputFilteredLowerCase = inputFilter.toLocaleLowerCase();
    return products.filter((product: IProduct, index: number, array: IProduct[]) => {
      return product.productName.toLocaleLowerCase().includes(inputFilteredLowerCase);
    });
  }
}

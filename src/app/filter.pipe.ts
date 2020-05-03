import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products, search:string) {
    if(search === undefined){
      return products;
    } else{
      return products.filter(product => {
        return product.productName.toLowerCase().includes(search.toLowerCase());
      });
    }
    
  }

}

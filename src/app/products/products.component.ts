import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  search;
  message: string;
  products;

  constructor(
    private productService: ProductService,
    private router: Router) {
    this.getProducts();
  }

  getProducts(){
    this.productService.getData().subscribe(response=>{
      console.log(response);
      this.products = response.products;
      
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(product){
    this.productService.deleteData(product).subscribe(response =>{
      console.log(response);
      if(response.error){
        this.message = 'Failed to delete the product';
      } else{
        this.message = 'Product Deleted Successfully';
      }
      setTimeout(()=>{
        this.message = null;
      }, 5000);
      this.getProducts();
    });
  }

  selectProduct(product){
    this.router.navigate(['/edit-product'], {queryParams: product});
  }

  ngOnInit(): void {
  }

}

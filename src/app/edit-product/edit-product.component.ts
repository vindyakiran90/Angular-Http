import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productToBeUpdated;
  message: string;
  constructor( private router: Router,
    private route: ActivatedRoute, 
    private productService: ProductService) {
    this.route.queryParams.subscribe(data => {
      console.log('product to be updated', data);
      this.productToBeUpdated = data;
    });
   }

  editProduct(form: NgForm){
    this.productService.updateData(form.value).subscribe(response => {
      console.log('edit form value', form.value);
      console.log(response);
      form.reset();
      this.router.navigateByUrl('/products');
    });
  }

  ngOnInit(): void {
  }

}

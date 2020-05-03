import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    //products;

    myURL='http://localhost:8080/springrestcrud/'


    constructor(private http: HttpClient){}
       
    postData(product){
        return this.http.post<any>(`${this.myURL}addProduct`, product);
    }

    getData() {
        return this.http.get<any>(`${this.myURL}getAllProduct`);
    }

    deleteData(product){
        return this.http.get<any>(`${this.myURL}deleteProduct/${product.productName}`);
    }

    updateData(product){
        return this.http.put<any>(`${this.myURL}updateProduct/${product.productName}`, product);
    }
 
 //   products = [{
 //       productName: "Iphone",
 //       productPrice: 23000
 //   },{
 //       productName: "Samsung Galaxy phone",
 //       productPrice: 10000
 //   },{
 //       productName: "Nokia 6",
 //       productPrice: 12000
 //   }
 // ];
}
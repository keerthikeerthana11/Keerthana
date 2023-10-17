import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';
import {  ProductService} from '../productsService' ;

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  @Output() addValue = new EventEmitter<Product>();
  constructor(private productservice:ProductService){}


  createProduct(name:string,price:number){
    this.productservice.addProduct(name,price).subscribe(product=>{
      this.addValue.emit(product);
    });

  }

}

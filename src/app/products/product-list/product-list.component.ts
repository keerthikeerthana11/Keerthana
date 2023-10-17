import { Component } from '@angular/core';
import {Product} from'../products';
import {ProductService} from'../productsService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent   {

  products: Product[]=[];
  constructor(private productservice:ProductService){ }
  ngOnInit():void
  {
    this.getProducts();

  }
  private getProducts(){
    this.productservice.getProduct().subscribe(products =>
      {
        this.products = products;
      })
  }
  onAdd(product:Product){
    this.products.push(product)

  }

}

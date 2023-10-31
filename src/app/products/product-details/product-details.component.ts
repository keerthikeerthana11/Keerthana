import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import{ProductService}from'../productsService';
import{Product}from'../products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {
@Input() product: Product | undefined;
@Output() bought = new EventEmitter();
@Input() id = -1;
product$: Observable<Product> | undefined;
constructor(private productservice:ProductService){}

ngOnChanges(){
  this.product$ = this.productservice.getProducts(this.id);
}
changePrice(product:Product,price:number){
  this.productservice.updateProduct(product.id,price).subscribe(()=>{
    alert(`pricewas changed${product.name}`)
  })

}
}

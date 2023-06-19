import { Component, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  selectedProduct: Product | undefined; // ={ name: '',price: 0, isOffer: false}
  @ViewChild(ProductDetailsComponent) productDetail: ProductDetailsComponent | undefined;
  
  
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100,
      isOffer: true
    },
    {
      name:  'Microphone',
      price: 200,
      isOffer: false
    },
    {
      name: 'Wireless keyboard',
      price: 85,
      isOffer: false
    }
  ];

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onBuy() {
    
    
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }




}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {product} from'../productJson';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
 
  selectedProduct: product | undefined; // ={ name: '',price: 0, isOffer: false}
//  selectedProduct = '';
 
productItems:product[]=[
  {
    name: 'Webcam',
      price: 100,
      isOffer: true
  },
  {
    name:'microPhone',
    price:200,
    isOffer: false
  }
];

// onBuy() {
    
    
//   window.alert(`You just bought ${this.selectedProduct?.name}!`);
// }

  








}

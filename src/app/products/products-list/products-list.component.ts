import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
 selectedProduct = '';
 onBuy() {
  window.alert(`You just bought ${this.selectedProduct}!`);
  window.alert(event)
 }





}

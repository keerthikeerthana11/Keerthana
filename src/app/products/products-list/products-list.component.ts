import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
 selectedProduct = '';
 
 assignValue(element:any){
  this.selectedProduct = element;
  console.log(this.selectedProduct)
}
 
//  onBuy() {
//   window.alert(`You just bought ${this.selectedProduct}!`);
//    this.assignValue(element:any){
//   this.selectedProduct = element;
//   console.log(this.selectedProduct)
// }
//  }


onBuy(event:any):void {
  // window.alert(`You just bought ${this.selectedProduct}!`);
  window.alert(event)
}


}

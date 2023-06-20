import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
 selectedProduct = '';
 
 
 

// onBuy(event:any){
 
//   window.alert(event);
// }
onBuy(event:any):void{
  let result = `You just buy item ${event.product} 
  with cost of Rs: ${event.cost}`
window.alert(result)

}


}

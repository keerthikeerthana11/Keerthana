import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  selectedProduct ='None is selected';
  

  updateSelection(selectedProduct:string):void {
    this.selectedProduct = selectedProduct;
  }

}

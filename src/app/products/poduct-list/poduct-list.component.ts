import { Component } from '@angular/core';

@Component({
  selector: 'app-poduct-list',
  templateUrl: './poduct-list.component.html',
  styleUrls: ['./poduct-list.component.css']
})
export class PoductListComponent {

  selectedProduct ='None is selected';
  produtsname='';

  

  updateSelection(selectedProduct:string,produtsname:string,):void {
    this.selectedProduct = selectedProduct;
    this.produtsname = produtsname;
  }

}

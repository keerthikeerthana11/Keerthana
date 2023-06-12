import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoductListComponent } from '../poduct-list/poduct-list.component';
import { ProductsAddComponent } from '../products-add/products-add.component';



@NgModule({
  declarations: [PoductListComponent,ProductsAddComponent],
  imports: [
    CommonModule
  ],
  exports:[
     PoductListComponent,
    // ProductsAddComponent
  ]

})
export class ProductsModule { }

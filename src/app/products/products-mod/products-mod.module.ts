import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';


@NgModule({
  declarations: [ ProductListComponent,
    ProductCreateComponent,
    ProductDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductsModModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import{ProductViewComponent}from '../product-view/product-view.component';



@NgModule({
  declarations: [ProductsListComponent,    
    ProductDetailsComponent,  ProductViewComponent,],
  imports: [
    CommonModule
  ],
  exports:[ProductsListComponent],
})
export class ProductModule { }

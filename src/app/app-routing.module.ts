import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

const routes: Routes = [
  {
    path:'details',component: ProductDetailsComponent,
    
  },
  // {
  //   path: 'create',component:ProductCreateComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

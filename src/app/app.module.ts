import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/product/product.module';
import { ProductViewComponent } from './products/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ProductModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

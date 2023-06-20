import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements AfterViewInit, OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 selectedProduct = '';
 @ViewChild(ProductDetailsComponent)productD:ProductDetailsComponent|undefined
 
 
 
ngAfterViewInt():void{
  console.log(`you are in Afterview inint`)
  if(this.productD){
    console.log(this.productD.name);

  }
}

  // ngOnInit():void{
  //   console.log(`you are in productList 
  //   ngOninit value of productdetails${this.productD}`);
  // }

  // ngOnInit():void {
    
  //   console.log(`you are in productList 
  //   ngOninit value of productdetails${this.productD}`);
  // }



onBuy(event:any):void{
  let result = `You just buy item ${event.product} 
  with cost of Rs: ${event.cost}`
window.alert(result)

}


}

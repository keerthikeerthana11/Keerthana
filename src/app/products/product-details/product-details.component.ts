import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {


// implements OnChanges {

@Input() product: Product | undefined;
@Output() bought = new EventEmitter();


ngOnChanges(changes: SimpleChanges): void {
  const product = changes['product'];
  if (!product.isFirstChange()) {
    const oldValue = product.previousValue.name;
    const newValue = product.currentValue.name;
    console.log(`Product changed from ${oldValue} to ${newValue}`);
  }
}

buy() {
  this.bought.emit();
}

}
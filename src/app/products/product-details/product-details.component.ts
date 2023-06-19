import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() name ='';
  @Output() bought = new EventEmitter();
  // buynow()
  // {
   

  //  window.alert(`You just bought ${this.name}`);
  // window.alert(event)
    
  // }

  buynow() {
    this.bought.emit();
    const choosenIten = 'thanks for buying '+ this.name + ' which cost $50';

    this.bought.emit(choosenIten);
  }
}

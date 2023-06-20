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
   
// parent ku sent pannama child la display

  //  window.alert(`You just bought ${this.name}`);
  // window.alert(event)
    
  // }

  buynow() {

   // this.bought.emit(); nu we gave it product list and it show just one alert box
    // this.bought.emit();
    const choosenIten = 'thanks for buying '+ this.name + ' which cost $50';

    this.bought.emit(choosenIten);
  }
}

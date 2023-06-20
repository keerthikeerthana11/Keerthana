import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 

  @Input() name ='';
  @Output() bought = new EventEmitter<any>();  

//   buynow()
//   {    
// const item ={
//   "product":"",
//   "cost": "",
// };
// item.product = this.name;
// item.cost= this.calculate();
// this.bought.emit(item);
//   }
// calculate():string{
// if(!this.name) {
//   throw new Error('Selected product not exist');
// }
// return "";
// }

buynow()
{    
const item ={
"product":"",
"cost": 0,
};
item.product = this.name;
item.cost= this.calculate();
this.bought.emit(item);
}
calculate():number{
  let amount =0;
if(!this.name) {
throw new Error('Selected product not exist');
}
switch (this.name) {
  case 'webcam':
    amount = 1000;    
    break;
    case 'mobilePhone':
      amount = 1500;    
      break;

  default:
    break;
}
return amount;

 
}
}


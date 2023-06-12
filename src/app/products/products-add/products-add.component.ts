import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent {
  @Input() cartItem=  'hai';
}

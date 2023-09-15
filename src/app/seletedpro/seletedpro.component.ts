import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletedpro',
  templateUrl: './seletedpro.component.html',
  styleUrls: ['./seletedpro.component.css']
})
export class SeletedproComponent {
  @Input() name ='';

}

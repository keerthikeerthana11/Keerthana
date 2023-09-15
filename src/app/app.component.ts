import { Component } from '@angular/core';
// import{appservice} from'./appservice';
import { studends } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mystudent:studends;
  constructor(){
    this.mystudent = new studends('ke','ko');
    
  }
  selectedProduct ='';









}
 
  
//     private title ='hai';
//     public gettitle(): string{
//       return this.title;

//     }

// }
//   let obj = new AppComponent;
//   console.log(obj.gettitle());
// }

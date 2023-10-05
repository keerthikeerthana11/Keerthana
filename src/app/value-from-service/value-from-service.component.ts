import { Component,OnInit } from '@angular/core';
import {studentDetails}from "./declarValue";
import {valuesservice}from "./valueservice"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-value-from-service',
  templateUrl: './value-from-service.component.html',
  styleUrls: ['./value-from-service.component.css'],
  providers:[valuesservice]
})
export class ValueFromServiceComponent implements OnInit{
  
    stu: studentDetails[] = [];

  constructor(private valueser:valuesservice){

  }
  ngOnInit(): void {
    this.getvalue1();
  }

  private getvalue1()
  {
    
    this.valueser.getStuValue().subscribe(stu =>{
      this.stu = stu;
    });
  }


}

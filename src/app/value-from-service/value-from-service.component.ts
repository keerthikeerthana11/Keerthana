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
  studentValOb$: Observable<studentDetails[]> | undefined;
    // studentDetails:student[]=[];

  constructor(private valueser:valuesservice){

  }
  ngOnInit(): void {
    this.getvalue1();
    // this.studentDetails = this.valueser.getvalue();
  }

  private getvalue1()
  {
    this.studentValOb$ = this.valueser.getStuValue();
  }


}

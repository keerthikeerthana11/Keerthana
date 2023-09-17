import { Component,OnInit } from '@angular/core';
import {student}from "./declarValue";
import {valuesservice}from "./valueservice"

@Component({
  selector: 'app-value-from-service',
  templateUrl: './value-from-service.component.html',
  styleUrls: ['./value-from-service.component.css'],
  providers:[valuesservice]
})
export class ValueFromServiceComponent implements OnInit{
    studentDetails:student[]=[];

  constructor(private valueser:valuesservice){

  }
  ngOnInit(): void {
    this.studentDetails = this.valueser.getvalue();
  }



}

import { Component,OnInit } from '@angular/core';
import {studentDetails}from "./declarValue";
import {valuesservice}from "./valueservice"

@Component({
  selector: 'app-value-from-service',
  templateUrl: './value-from-service.component.html',
  styleUrls: ['./value-from-service.component.css'],
  providers:[valuesservice]
})
export class ValueFromServiceComponent implements OnInit{
    studentDet:studentDetails[]=[];

  constructor(private valueser:valuesservice){

  }
  ngOnInit(): void {
    this.studentDet = this.valueser.getvalue();
  }



}

import { Injectable } from "@angular/core";
import { studentDetails } from"./declarValue";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class valuesservice{
    constructor(){}

    private student =[
        
            {
                name: 'keerthi',
                rollno: 1
            },
            {
                name:'anitha',
                rollno: 2
            }
        ];

        


getStuValue():Observable<studentDetails[]>
{
    return of(this.student);
}

    
}
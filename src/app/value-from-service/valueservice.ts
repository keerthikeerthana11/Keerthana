import { Injectable } from "@angular/core";
import { studentDetails } from"./declarValue";

@Injectable({
    providedIn:'root'
})
export class valuesservice{
    constructor(){}

    getvalue(): studentDetails[]{
        return[
            {
                name: 'keerthi',
                rollno: 1
            },
            {
                name:'anitha',
                rollno: 2
            }

        ];
    }
}
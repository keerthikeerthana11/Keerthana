import { Injectable } from "@angular/core";
import { student } from"./declarValue";

@Injectable({
    providedIn:'root'
})
export class valuesservice{
    constructor(){}

    getvalue(): student[]{
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
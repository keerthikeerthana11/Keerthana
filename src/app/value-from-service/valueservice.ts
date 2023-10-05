import { Injectable } from "@angular/core";
import { studentDetails } from"./declarValue";
import { Observable, map, of } from "rxjs";
import {HttpClient} from"@angular/common/http";


interface productDTO{
    id: number;
    title: string;
    price: number;
}

@Injectable({
    providedIn:'root'
})
export class valuesservice{

    private productUrl = 'https://fakestoreapi.com/products';

    constructor(private http : HttpClient){}      


getStuValue():Observable<studentDetails[]>
{
    return this.http.get<productDTO[]>(this.productUrl).pipe(
        map(products => products.map(product =>{
            return this.convertToProduct(product);

        }))
    );
}


private convertToProduct(product:productDTO): studentDetails {
    return {
      id: product.id,
      name: product.title,
      price: product.price
    };
  }
    
}
import {Injectable} from'@angular/core';
import {Product} from './products';
import {HttpClient}from '@angular/common/http'
import { Observable, map } from 'rxjs';


interface productDTO{
    id : number;
    title : string;
    price: number;

}
@Injectable({
    providedIn:'root'
})
export class ProductService{
    private productUrl = 'https://fakestoreapi.com/products';

    constructor (private http:HttpClient){ }

    getProduct(): Observable<Product[]>{

        return this.http.get<productDTO[]>(this.productUrl)
        .pipe(
          map(temp => temp.map(temppr =>{
            return this.convertToProduct(temppr)
          }))  
        );
    }
    getProducts(id:number):Observable<Product>{
        return this.http.get<productDTO>(`${this.productUrl}/${id}`).pipe(
        map(product => this.convertToProduct(product)))

    }
    addProduct(name:string,price:number):Observable<Product>{
        return this.http.post<productDTO>(this.productUrl,{
            title :name,
            price : price,
        }).pipe(map(product =>this.convertToProduct(product)));

    }

    updateProduct(id:number,price:number):Observable<void>{
        return this.http.patch<void>(`${this.productUrl}/${id}`,{price});

    }

    private convertToProduct(product: productDTO):Product{
        return{
            id : product.id,
            name :product.title,
            price : product.price
        }

    }

}

import{ProductsService}from'../products.service';
import{Product}from'../product';
import { Injectable} from "@angular/core";
@Injectable()
export class ProductViewService {
    private product : Product | undefined;
    constructor(private productService:ProductsService){ }

    getProduct(id:number):Product | undefined{
        const products = this.productService.getProducts();
        if(!this.product){
            this.product=products[id];
            
        }
        return this.product;
    }

}

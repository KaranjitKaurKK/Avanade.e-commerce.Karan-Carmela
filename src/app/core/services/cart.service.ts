import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    products: IProduct[]=[];
    private subject=new Subject<any>();

    constructor() {
        this.products = [];
    }
    addClickEvent(){
        this.subject.next();
    }
    getClickEvent():Observable<any> {
        return this.subject.asObservable();
    }

    addToCart(product: IProduct) {
        this.products.push(product);
    }

    remove(index: number) {
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    clear() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }
}

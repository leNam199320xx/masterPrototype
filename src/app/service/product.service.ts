import { Injectable } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    products: ProductModel[] = [];
    productsSubject: Subject<ProductModel[]> = new Subject();
    productsObserve: Observable<ProductModel[]> = new Observable();
    pageIndex = 0;
    index = 0;
    constructor(private http: HttpClient) {
        this.productsSubject.subscribe(res => {
            this.products = res;
            console.log(this.products);
        });

        // this.getProductsFromServer();
    }
    getProductsFromServer(productsCurrent: ProductModel[] = []) {
        // test data
        this.productsObserve = new Observable(res => {
            res.next(
                [
                    {
                        id: this.index++,
                        name: 'product ' + this.index++,
                        detail: 'product ' + this.index++,
                        title: 'new product', url_main: '/',
                        urls: ['/']
                    },
                    {
                        id: this.index++,
                        name: 'product ' + this.index++,
                        detail: 'product ' + this.index++,
                        title: 'new product', url_main: '/',
                        urls: ['/']
                    },
                    {
                        id: this.index++,
                        name: 'product ' + this.index++,
                        detail: 'product ' + this.index++,
                        title: 'new product', url_main: '/',
                        urls: ['/']
                    },
                    {
                        id: this.index++,
                        name: 'product ' + this.index++,
                        detail: 'product ' + this.index++,
                        title: 'new product', url_main: '/',
                        urls: ['/']
                    }
                ]
            );
        }
        );
        // server data

        // this.productsObserve = this.http.get<ProductModel[]>('api/getProducts');
        console.log(1);
        this.productsObserve.subscribe(res => {
            this.productsSubject.next(res);
            productsCurrent = res;
        });
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductModel } from './product.model';

@Component({
    selector: 'nam-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.scss']
})
export class NamProductComponent implements OnInit {
    @Input() lengthOnPage = 10;
    @Input() length = 100;
    products: ProductModel[] = [];
    countPages = 1;
    constructor(public productService: ProductService) {        
    }
    // default methods
    ngOnInit() {
        this.countPages = Math.floor(this.length / this.lengthOnPage);
        this.loadProducts();
    }

    // defined methods
    loadProducts() {
        this.productService.productsSubject.subscribe(res => this.products = this.productService.products);
        this.productService.getProductsFromServer();
    }

    // events
    btnClick() {
        this.loadProducts();
    }
}

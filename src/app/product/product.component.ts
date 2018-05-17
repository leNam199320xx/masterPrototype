import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { NamProductModel } from './product.model';
import { NamContentType } from '../common/content/content.component';

@Component({
    selector: 'nam-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.scss']
})
export class NamProductComponent implements OnInit {
    products: NamProductModel[] = [];
    type: NamContentType = NamContentType.products;
    constructor(public productService: ProductService) {
        this.productService.isLoadMore = false;
        this.productService.productsSubject.subscribe(res => this.products = this.productService.products);
    }
    // default methods
    ngOnInit() {
        this.productService.gotoPage(1);
    }

    // defined methods
    loadProducts(isBack = false) {
        if (isBack) {
            this.productService.backData();
        } else {
            this.productService.nextData();
        }
    }

    // events
    btnNextClick() {
        this.loadProducts();
    }

    btnBackClick() {
        this.loadProducts(true);
    }

    btnGotoClick(index = 0) {
        this.productService.gotoPage(index + 1);
    }
}

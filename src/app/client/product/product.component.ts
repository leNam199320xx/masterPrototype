import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { NamProductModel } from './product.model';
import { NamContentType } from '../../common/content/content.component';
import { NamCheckboxModel } from '../../common/checkbox/checkbox.component';
import { NamPageModel } from '../../model/page.model';

@Component({
    selector: 'nam-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.scss']
})
export class NamProductComponent implements OnInit {
    products1: NamProductModel[] = [];
    products2: NamProductModel[] = [];
    products3: NamProductModel[] = [];
    checkboxes: NamCheckboxModel[] = [
        { text: 'checkbox 1', value: true },
        { text: 'checkbox 1', value: false },
        { text: 'checkbox 1', value: false },
        { text: 'checkbox 1', value: true }
    ];
    type: NamContentType = NamContentType.products;
    page1: NamPageModel = new NamPageModel(10, 30);
    page2: NamPageModel = new NamPageModel(50, 30);
    page3: NamPageModel = new NamPageModel(200, 30);
    constructor(public productService: ProductService) {
        this.productService.isLoadMore = false;
        this.productService.getProductsFromServer(this.products1, this.page1).subscribe(res => {
            this.products1 = res;
        });

        this.productService.getProductsFromServer(this.products2, this.page2).subscribe(res => {
            this.products2 = res;
        });

        this.productService.getProductsFromServer(this.products3, this.page3).subscribe(res => {
            this.products3 = res;
        });

    }
    // default methods
    ngOnInit() {
    }

}

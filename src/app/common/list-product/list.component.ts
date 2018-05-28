import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { NamProductModel } from '../../client/product/product.model';
import { NamPageModel } from '../../model/page.model';
import { NamCommonService } from '../../service/common.service';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'nam-list-product',
    templateUrl: 'list.component.html'
})
export class NamListProductComponent implements OnInit {
    @Output() nextPage: EventEmitter<any> = new EventEmitter();
    @Output() backPage: EventEmitter<any> = new EventEmitter();
    @Output() gotoPage: EventEmitter<any> = new EventEmitter();
    @Input() products: NamProductModel[] = [];
    @Input() page: NamPageModel;
    @Input() isLoadMore = false;

    constructor(private commonService: NamCommonService, private productService: ProductService) {

    }

    ngOnInit() {
        // this.btnNextClick();
    }

    btnNextClick() {
        const check = this.commonService.nextData(this.page);
        if (check.status) {
            this.page = check.page;
            this.productService.getProductsFromServer(this.products, this.page).subscribe(res => {
                this.products = res;
            });
            this.nextPage.emit();
        }
    }

    btnBackClick() {
        const check = this.commonService.backData(this.page);
        if (check.status) {
            this.page = check.page;
            this.productService.getProductsFromServer(this.products, this.page).subscribe(res => this.products = res);
            this.backPage.emit();
        }
    }

    btnGotoClick(pageNumber: number) {
        const check = this.commonService.gotoPage(this.page, pageNumber);
        if (check.status) {
            this.page = check.page;
            this.productService.getProductsFromServer(this.products, this.page).subscribe(res => this.products = res);
            this.gotoPage.emit(event);
        }
    }
}

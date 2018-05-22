import { Injectable } from '@angular/core';
import { NamProductModel } from '../client/product/product.model';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { NamPageModel } from '../model/page.model';
import { NamCommonService } from './common.service';

@Injectable()
export class ProductService {
    products: NamProductModel[] = [];
    productsSubject: Subject<NamProductModel[]> = new Subject();
    productsObserve: Observable<NamProductModel[]> = new Observable();
    isLoadMore = false;
    page: NamPageModel;
    pageSize = 30;
    constructor(private http: HttpClient, private commonService: NamCommonService) {
        this.productsSubject.subscribe(res => {
            this.products = res;
        });

        this.page = new NamPageModel(100, this.pageSize);
    }
    getProductsFromServer() {
        // test data
        const testData: NamProductModel[] = [];
        for (let i = 0; i < this.page.pageSize; i++) {
            const id = i + this.page.pageIndex * this.page.pageLength;
            testData.push({
                id: id,
                name: 'product ' + id,
                detail: 'product ' + id,
                title: 'new product ' + id,
                preview: 'new product ',
                url_main: '/',
                url_image: '../../assets/images/bo-quan-ao-bibos-dai-tay-be-trai-nhieu-mau-114575-5_1.jpg',
                urls: ['/']
            });
        }
        this.productsObserve = new Observable(res => {
            res.next((this.isLoadMore) ? this.products.concat(testData) : testData);
        });
        // server data

        // this.productsObserve = this.http.get<ProductModel[]>('api/getProducts');
        this.productsObserve.subscribe(res => {
            this.productsSubject.next(res);
        });
    }

    nextData() {
        if (this.commonService.nextData(this.page)) {
            this.getProductsFromServer();
        }
    }
    backData() {
        if (this.commonService.backData(this.page)) {
            this.getProductsFromServer();
        }
    }

    gotoPage(_page: number = this.page.pageIndex + 1) {
        if (this.commonService.gotoPage(this.page, _page)) {
            this.getProductsFromServer();
        }
    }
}

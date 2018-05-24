import { Injectable } from '@angular/core';
import { NamProductModel } from '../client/product/product.model';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { NamPageModel } from '../model/page.model';
import { NamCommonService } from './common.service';

@Injectable()
export class ProductService {
    isLoadMore = false;
    constructor(private http: HttpClient, private commonService: NamCommonService) {
    }
    getProductsFromServer(_currentProducts: NamProductModel[], _page: NamPageModel) {
        let productsObserve: Observable<NamProductModel[]> = new Observable();
        const testData: NamProductModel[] = [];
        console.log(_page.pageIndex);
        for (let i = 0; i < _page.pageSize; i++) {
            const id = i + _page.pageIndex * _page.pageSize;
            if (id < _page.count) {
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
        }
        productsObserve = new Observable(res => {
            res.next((this.isLoadMore) ? _currentProducts.concat(testData) : testData);
        });
        return productsObserve;
    }
}

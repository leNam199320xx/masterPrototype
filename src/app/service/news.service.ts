import { Injectable } from '@angular/core';
import { NamPageModel } from '../model/page.model';
import { NamNewsModel } from '../news/news.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NamCommonService } from './common.service';

@Injectable()
export class NewsService {
    page: NamPageModel;
    news: NamNewsModel[];
    newsCurrent: NamNewsModel;
    newsSubject: Subject<NamNewsModel[]> = new Subject();
    newsObservable: Observable<NamNewsModel[]> = new Observable();
    isLoadMore = false;
    constructor(private http: HttpClient, private commonService: NamCommonService) {
        this.newsSubject.subscribe(res => {
            this.news = res;
        });
        this.page = new NamPageModel(100, 10);
        this.isLoadMore = this.commonService.isLoadMore;
    }

    getNewsFromServer() {
        // test data
        // test data
        const testData: NamNewsModel[] = [];
        for (let i = 0; i < this.page.pageSize; i++) {
            const id = i + this.page.pageIndex * this.page.pageLength;
            testData.push({
                id: id,
                title: 'news',
                content: 'news _ ' + id,
                url: '',
                authorImage: '',
                authorLink: '',
                authorName: 'Lê Đắc Nam',
                comment: 123,
                view: 1111,
                createDate: '',
                imageSmallLink: '',
                imagesRootLink: '',
                published: true,
                tags: [],
                types: [],
                updateDate: ''
            } as NamNewsModel);
        }
        this.newsObservable = new Observable(res => {
            res.next((this.commonService.isLoadMore) ? this.news.concat(testData) : testData);
        });
        // server data

        // this.newsObservable = this.http.get<ProductModel[]>('api/getProducts');
        this.newsObservable.subscribe(res => {
            this.newsSubject.next(res);
        });
        // server data
    }

    nextData() {
        if (this.commonService.nextData(this.page)) {
            this.getNewsFromServer();
        }
    }

    backData() {
        if (this.commonService.backData(this.page)) {
            this.getNewsFromServer();
        }
    }
    gotoPage(_page: number = this.page.pageIndex + 1) {
        if (this.commonService.gotoPage(this.page, _page)) {
            this.getNewsFromServer();
        }
    }
}

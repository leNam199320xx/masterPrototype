import { Injectable } from '@angular/core';
import { NamPageModel } from '../model/page.model';
import { NamNewsModel } from '../client/news/news.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NamCommonService } from './common.service';

@Injectable()
export class NamNewsService {
    page: NamPageModel;
    news: NamNewsModel[] = [];
    newsCurrent: NamNewsModel;
    newsSubject: Subject<NamNewsModel[]> = new Subject();
    newsObservable: Observable<NamNewsModel[]> = new Observable();
    isLoadMore = false;
    constructor(private http: HttpClient, private commonService: NamCommonService) {
        this.newsSubject.subscribe(res => {
            this.news = res;
        });
        this.page = new NamPageModel(200, 10);
        this.isLoadMore = this.commonService.isLoadMore;
    }

    getNewsFromServer() {
        // test data
        // test data
        const testData: NamNewsModel[] = [];
        for (let i = 0; i < this.page.pageSize; i++) {
            const id = i + this.page.pageIndex * this.page.pageLength;
            const imgLink = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/32416504_1039141602928842_7627541332747091968_n.jpg'
                + '?_nc_cat=0&_nc_eui2=AeHahm5AccFdI8uzjTRl39H8iNGpUSaZvPK1hVqyTCsHRw3_yFpNzK2Guz'
                + '-PT7WLzgfjSLWtrkLOJR_IHF0-m-hmZJPBvs2q4YmqAwJpUycBAw&oh=f49506b3258f88ee2d7d30154eed4232&oe=5B9D5194';
            testData.push({
                id: id,
                title: 'caption here',
                content: 'this is content of a post by user  _ ' + id,
                url: '',
                authorImage: '',
                authorLink: '',
                authorName: 'Lê Đắc Nam',
                comment: 123,
                view: 1111,
                createDate: '',
                imageSmallLink: imgLink,
                imagesRootLink: [imgLink, imgLink, imgLink, imgLink],
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

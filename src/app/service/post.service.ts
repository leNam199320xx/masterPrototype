import { Injectable } from '@angular/core';
import { NamPageModel } from '../model/page.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NamCommonService } from './common.service';
import { NamContentModel } from '../model/content.model';
import { NamLoginService } from './login.service';
import { PostFacebookModel, PostsFacebookModel } from '../model/post.model';

@Injectable()
export class NamPostService {
    page: NamPageModel;
    posts: PostsFacebookModel;
    postSubject: Subject<PostsFacebookModel> = new Subject();
    postObservable: Observable<PostsFacebookModel> = new Observable();
    isLoadMore = false;
    constructor(private http: HttpClient, private commonService: NamCommonService, private loginService: NamLoginService) {
        this.postSubject.subscribe(res => {
            this.posts = res;
        });
        this.page = new NamPageModel(2000, 10);
        this.isLoadMore = this.commonService.isLoadMore;
    }

    getPostFromServer() {
        // server data
        this.loginService.postsSubject.subscribe(res => {
            this.posts = res;
        });
    }

    nextData() {
        if (this.commonService.nextData(this.page)) {
            this.getPostFromServer();
        }
    }

    backData() {
        if (this.commonService.backData(this.page)) {
            this.getPostFromServer();
        }
    }
    gotoPage(_page: number = this.page.pageIndex + 1) {
        if (this.commonService.gotoPage(this.page, _page)) {
            this.getPostFromServer();
        }
    }
}

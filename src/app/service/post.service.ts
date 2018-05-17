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
    // page: NamPageModel;
    posts: PostsFacebookModel = new PostsFacebookModel();
    postsSubject: Subject<PostsFacebookModel> = new Subject();
    isLoadMore = true;
    constructor(
        private http: HttpClient,
        private commonService: NamCommonService,
        private loginService: NamLoginService) {
        // this.page = new NamPageModel(2000, 10);
        this.isLoadMore = this.commonService.isLoadMore;
        this.loginService.postsSubject.subscribe(res => {
            this.postsSubject.next(res);
        });
        this.postsSubject.subscribe(res => {
            this.posts = res;
        });
    }

    loadMorePosts() {
        this.http.get<PostsFacebookModel>(this.posts.paging.next).subscribe(res => {
            this.posts.data = this.posts.data.concat(res.data);
            this.posts.paging = res.paging;
        });
    }
}

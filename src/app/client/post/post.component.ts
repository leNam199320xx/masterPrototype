import { Component, OnInit } from '@angular/core';
import { NamPostService } from '../../service/post.service';
import { NamLoginService } from '../../service/login.service';
import { NamContentType } from '../../common/content/content.component';
import { PostFacebookModel, PostsFacebookModel } from '../../model/post.model';

@Component({
    selector: 'nam-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.scss']
})
export class NamPostComponent implements OnInit {
    postType = NamContentType.post;
    postModel: PostsFacebookModel = new PostsFacebookModel();
    constructor(
        public postService: NamPostService
    ) {
        postService.postsSubject.subscribe(res => {
            this.postModel = res;
        });
    }

    // default methods
    ngOnInit() {
    }

    btnLoadMore() {
        this.postService.loadMorePosts();
    }
}

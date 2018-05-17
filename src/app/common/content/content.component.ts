import { Component, Input } from '@angular/core';
import { NamContentModel } from '../../model/content.model';
import { PostsFacebookModel, PostFacebookModel } from '../../model/post.model';
@Component({
    selector: 'nam-content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.scss']
})
export class NamContentComponent {
    @Input() content: PostFacebookModel;
    @Input() type: NamContentType = NamContentType.post;

    className = '';
    // events
    btnOpenImageDialog(urlImage: string) { }

    constructor() {
        this.className = (this.type === NamContentType.post)
            ? NamContentStringType.post
            : ((this.type === NamContentType.news)
                ? NamContentStringType.news
                : NamContentStringType.products);
    }
}

export enum NamContentType {
    post = 0,
    news = 1,
    products = 2
}

export enum NamContentStringType {
    post = 'post',
    news = 'news',
    products = 'products'
}

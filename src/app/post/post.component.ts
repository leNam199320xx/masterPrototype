import { Component, OnInit } from '@angular/core';
import { NamPostService } from '../service/post.service';

@Component({
    selector: 'nam-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.scss']
})
export class NamPostComponent implements OnInit {
    constructor(public postService: NamPostService) {
    }

    // default methods
    ngOnInit() {
        this.postService.gotoPage(1);
    }

    // defined methods
    loadProducts(isBack = false) {
        if (isBack) {
            this.postService.backData();
        } else {
            this.postService.nextData();
        }
    }

    // events
    btnNextClick() {
        this.loadProducts();
    }

    btnBackClick() {
        this.loadProducts(true);
    }

    btnGotoClick(index = 0) {
        this.postService.gotoPage(index + 1);
    }
}

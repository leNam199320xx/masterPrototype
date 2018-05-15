import { Component, OnInit } from '@angular/core';
import { NamNewsService } from '../service/news.service';

@Component({
    selector: 'nam-news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.scss']
})
export class NamNewsComponent implements OnInit {
    constructor(public newsService: NamNewsService) {
    }

    // default methods
    ngOnInit() {
        this.newsService.gotoPage(1);
    }

    // defined methods
    loadProducts(isBack = false) {
        if (isBack) {
            this.newsService.backData();
        } else {
            this.newsService.nextData();
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
        this.newsService.gotoPage(index + 1);
    }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NamPageModel } from '../../model/page.model';

@Component({
    selector: 'nam-paging',
    templateUrl: 'paging.component.html',
    styleUrls: ['paging.scss']
})

export class NamPagingComponent implements OnInit {
    @Input() page: NamPageModel;
    @Input() isLoadMore = false;
    @Output() backClick = new EventEmitter<any>();
    @Output() nextClick = new EventEmitter<any>();
    @Output() gotoClick = new EventEmitter<any>();

    indexOfPaging = 0;
    lengthOfPaging = 0;
    sizeOfPaging = 5;

    ngOnInit() {
        this.lengthOfPaging = Math.round(this.page.pageLength / this.sizeOfPaging);
        this.setIndex();
    }

    btnBackClick() {
        this.backClick.emit();
        this.setIndex();
    }

    btnNextClick() {
        this.nextClick.emit();
        this.setIndex();
    }
    setIndex() {
        this.indexOfPaging = Math.floor(this.page.pageIndex / this.sizeOfPaging);
    }
    btnGotoClick(_index: number) {
        this.gotoClick.emit(_index);
    }

    nextPaging() {
        this.indexOfPaging += (this.indexOfPaging >= 0 && this.indexOfPaging < this.lengthOfPaging - 1) ? 1 : 0;
    }

    backPaging() {
        this.indexOfPaging -= (this.indexOfPaging > 0 && this.indexOfPaging <= this.lengthOfPaging - 1) ? 1 : 0;
    }
}

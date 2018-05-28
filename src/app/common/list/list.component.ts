import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NamItemModel } from '../../model/item.model';
@Component({
    selector: 'nam-list',
    templateUrl: 'list.component.html'
})
export class NamListComponent {
    itemCurrent: NamItemModel = {
        enabled: true,
        image: '../../assets/images/bo-quan-ao-bibos-dai-tay-be-trai-nhieu-mau-114575-5_1.jpg',
        index: 1,
        text: 'item of list 1',
        url: null
    };
    list: NamItemModel[] = [];
    @Input() hasBorder = false;
    @Input() isLinkList = true;
    @Output() itemClick: EventEmitter<NamItemModel> = new EventEmitter();
    btnItemClick(_item: NamItemModel) {
        this.itemClick.emit(_item);
    }

    constructor() {
        this.list.push(this.itemCurrent);
        this.list.push(this.itemCurrent);
        this.list.push(this.itemCurrent);
        this.list.push(this.itemCurrent);
        this.list.push(this.itemCurrent);
        this.list.push(this.itemCurrent);
    }
}

import { Component, Input } from '@angular/core';
import { NamContentModel } from '../../model/content.model';

@Component({
    selector: 'nam-content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.scss']
})
export class NamContentComponent {
    @Input() content: NamContentModel;
    @Input() type: NamContentType = NamContentType.post;
    // events
    btnOpenImageDialog(urlImage: string) {

    }
}

export enum NamContentType {
    post = 0,
    news = 1,
    products = 2
}

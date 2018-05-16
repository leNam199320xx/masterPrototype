import { Component, Input } from '@angular/core';
import { NamContentModel } from '../../model/content.model';

@Component({
    selector: 'nam-content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.scss']
})
export class NamContentComponent {
    @Input() content: NamContentModel;
    // events
    btnOpenImageDialog(urlImage: string) {

    }
}

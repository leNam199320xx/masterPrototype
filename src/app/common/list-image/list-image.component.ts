import { Component, Input } from '@angular/core';
import { ImageModel } from '../../model/image.model';

@Component({
    selector: 'nam-list-image',
    templateUrl: 'list-image.component.html',
    styleUrls: ['list-image.scss']
})
export class NamListImageComponent {
    @Input() images: ImageModel[] = [{
        link: '/',
        title: 'link image 1',
        url: '../../assets/images/bo-quan-ao-bibos-dai-tay-be-trai-nhieu-mau-114575-5_1.jpg'
    }];

}

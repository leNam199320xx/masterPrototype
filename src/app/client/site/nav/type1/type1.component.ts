import { Component, Input } from '@angular/core';
import { NamNavItemModel } from '../nav.model';

@Component({
    selector: 'nam-creater-nav-t1',
    templateUrl: 'type1.component.html',
    styleUrls: ['type1.scss']
})

export class NamCreaterNavType1Component {
    @Input() navItems: NamNavItemModel[];
}

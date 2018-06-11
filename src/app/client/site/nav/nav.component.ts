import { Component, Input } from '@angular/core';
import { NamNavItemModel } from './nav.model';

@Component({
    selector: 'nam-creater-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.scss']
})

export class NamSiteNavComponent {
    @Input() navItems: NamNavItemModel[];

    constructor() {
    }
}

import { Component, Input } from '@angular/core';
import { NamPanelType, NamCreaterPanelModel, NamCreaterNavModel } from './panel.model';

@Component({
    selector: 'nam-creater-panel',
    templateUrl: 'panel.component.html'
})

export class NamSitePanelComponent {
    @Input() panel: NamCreaterPanelModel;
    constructor() {
    }
}

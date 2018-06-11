import { Component } from '@angular/core';
import { NamCreaterPanelModel, NamCreaterNavModel } from './panel/panel.model';
import { NamSiteService } from './site.service';

@Component({
    selector: 'nam-site',
    templateUrl: 'site.component.html',
    styleUrls: ['site.scss']
})

export class NamSiteComponent {
    panels: NamCreaterPanelModel[];
    nav: NamCreaterNavModel;
    width: string;
    constructor(public siteService: NamSiteService) {
        this.siteService.getConfig().subscribe(res => {
            this.panels = this.siteService.panels;
            this.nav = this.siteService.nav;
            this.width = this.siteService.width;
        });
    }

    // event
    btnAddPanel() {
        const newPanel = new NamCreaterPanelModel();
        this.panels.push(newPanel);
    }

    btnSaveConfig() {
        this.siteService.setConfig(this.panels);
    }
}

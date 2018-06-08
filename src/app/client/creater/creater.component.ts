import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NamCreaterPanelModel } from './panel/panel.model';

@Component({
    selector: 'nam-creater',
    templateUrl: 'creater.component.html'
})
export class NamCreaterComponent {
    @Input() panels: NamCreaterPanelModel[];
    constructor(private http: HttpClient) {
        const configConnect = this.http.get('/api/getconfig');
        configConnect.subscribe(res => {
            this.panels = <NamCreaterPanelModel[]>(<any>res).config.panels;
        });
    }

    // event
    btnAddPanel() {
        const newPanel = new NamCreaterPanelModel();
        this.panels.push(newPanel);
    }

    btnSaveConfig() {
    }
}

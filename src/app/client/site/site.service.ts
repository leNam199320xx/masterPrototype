import { Injectable } from '@angular/core';
import { NamCreaterPanelModel, NamCreaterNavModel } from './panel/panel.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NamSiteService {
    panels: NamCreaterPanelModel[];
    nav: NamCreaterNavModel;
    width: string;
    constructor(private http: HttpClient) {

    }

    getConfig() {
        const configObs = this.http.get('http://localhost:3000/api/getconfig');
        configObs.subscribe(res => {
            this.panels = <NamCreaterPanelModel[]>(<any>res).config.panels;
            this.nav = <NamCreaterNavModel>(<any>res).config.nav;
            this.width = (<any>res).config.width;
        });
        return configObs;
    }

    setConfig(_panels: NamCreaterPanelModel[]) {
        this.panels = _panels;
        const configObsSaved = this.http.post('http://localhost:3000/api/setconfig', {
            fileValue: this.panels
        });
        configObsSaved.subscribe();
        return configObsSaved;
    }
}

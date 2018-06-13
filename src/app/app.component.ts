import { Component } from '@angular/core';
import { NamWindowService } from './service/window.service';
import { NamPageConfigService } from './service/page-config.service';

@Component({
    selector: 'nam-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        public windowService: NamWindowService,
        public namPageConfigService: NamPageConfigService
    ) {

    }
}

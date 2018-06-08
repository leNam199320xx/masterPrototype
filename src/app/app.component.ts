import { Component } from '@angular/core';
import { NamWindowService } from './service/window.service';

@Component({
    selector: 'nam-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(
        windowService: NamWindowService
    ) {
    }
}

import { Component, Input } from '@angular/core';
import { NamLoginService } from '../service/login.service';
import { NamPageConfigService } from '../service/page-config.service';

@Component({
    selector: 'nam-nav-top',
    templateUrl: 'nav-top.component.html'
})
export class NamNavTopComponent {
    constructor(
        public loginService: NamLoginService,
        public namPageConfigService: NamPageConfigService
    ) { }
    btnLogin() {
        this.loginService.login();
    }
    btnLogout() {
        this.loginService.logout();
    }
}

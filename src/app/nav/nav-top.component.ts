import { Component } from '@angular/core';
import { NamLoginService } from '../service/login.service';

@Component({
    selector: 'nam-nav-top',
    templateUrl: 'nav-top.component.html'
})
export class NamNavTopComponent {
    constructor(public loginService: NamLoginService) { }
    btnLogin() {
        this.loginService.login();
    }
    btnLogout() {
        this.loginService.logout();
    }
}

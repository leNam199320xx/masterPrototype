import { Component, Output, EventEmitter } from '@angular/core';
import { NamLoginService } from '../service/login.service';

@Component({
    selector: 'nam-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.scss']
})

export class NamHomeComponent {
    loging = false;
    constructor(private loginService: NamLoginService) {
        this.loginService.userSubject.subscribe(res => {
            this.loging = this.loginService.loging;
        });
    }
    btnLogin() {
        this.loginService.login();
    }
}

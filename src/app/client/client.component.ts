import { Component, HostListener, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NamLoginService } from '../service/login.service';
import { NamPostService } from '../service/post.service';
import { NamWindowService } from '../service/window.service';

@Component({
    selector: 'nam-client',
    templateUrl: 'client.component.html'
})
export class NamClientComponent implements AfterViewInit {
    constructor(
        public http: HttpClient, private router: Router,
        public loginService: NamLoginService,
        public postService: NamPostService,
        private windowService: NamWindowService
    ) {
        console.log('client');
    }
    @HostListener('window:resize', ['$event']) onresize(_event: Event) {
        this.windowService.setBreakpoint();
    }
    ngAfterViewInit() {

        this.loginService.getLoginStatus();
    }

    btnPostsOfPage() {

    }

    btnLogin() {
        this.loginService.login();
    }
    btnLogout() {
        this.loginService.logout();
    }
}

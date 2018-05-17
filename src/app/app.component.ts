import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NamLoginService } from './service/login.service';
import { NamPostService } from './service/post.service';
import { NamWindowService } from './service/window.service';

const FB = (<any>window).FB;

@Component({
  selector: 'nam-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.scss']
})
export class AppComponent implements OnInit {
  constructor(public http: HttpClient, private router: Router,
    public loginService: NamLoginService,
    public postService: NamPostService,
    private windowService: NamWindowService
  ) {
  }

  @HostListener('window:resize', ['$event']) onresize(_event: Event) {
    this.windowService.setBreakpoint();
  }
  ngOnInit() {
    this.loginService.initFB(FB);
    this.loginService.getLoginStatus();
  }

  btnLogin() {
    this.loginService.login();
  }
  btnLogout() {
    this.loginService.logout();
  }
}

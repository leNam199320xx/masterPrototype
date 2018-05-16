import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { NamTagComponent } from './nam/nam-tag/tag.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NamLoginService } from './service/login.service';

const FB = (<any>window).FB;

@Component({
  selector: 'nam-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.scss']
})
export class AppComponent implements OnInit {
  title = 'nam app';
  userName = '';
  userId = '';
  loging = false;
  socialPlatform = 'facebook';

  // Configs
  clientId = '500288897006445';
  constructor(public http: HttpClient, private router: Router, private loginService: NamLoginService) {
  }

  @HostListener('window:resize', ['$event']) onresize(_event: Event) {
    console.log(_event);
  }
  ngOnInit() {
    FB.init({
      appId: this.clientId,
      cookie: true,
      xfbml: true,
      version: 'v3.0'
    });

    this.getLoginStatus();
  }

  btnLogin() {
    if (FB) {
      FB.login((res) => {
        this.getLoginStatus();
      }, { scope: 'public_profile,email,user_posts' });
    }
  }
  btnLogout() {
    if (FB) {
      FB.logout(res => {
        this.clearData();
      });
    }
  }

  getLoginStatus() {
    FB.getLoginStatus((res) => {
      if (res.authResponse) {
        this.loging = true;
        this.getDataUser();
        this.router.navigate(['/news']);
      } else {
        this.loging = false;
      }
    });
  }

  getDataUser() {
    FB.api('/me', (res) => {
      this.userName = res.name;
      this.userId = res.id;

      this.loginService.user.userId = this.userId;
      this.loginService.user.userName = this.userName;
    });
  }

  clearData() {
    this.userName = '';
    this.userId = '';
    this.loging = false;

    this.loginService.user.userId = this.userId;
    this.loginService.user.userName = this.userName;
  }
}

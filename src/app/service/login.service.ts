import { Injectable } from '@angular/core';
import { NamUserModel } from '../model/user.model';
import { NamContentModel } from '../model/content.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class NamLoginService {
    user: NamUserModel = new NamUserModel();
    userSubject: Subject<NamUserModel> = new Subject();
    loging = false;
    FB = (<any>window).FB;
    clientId = '500288897006445';
    versionFb = 'v3.0';
    constructor(private router: Router) {
    }
    saveLocalState(isSave = false) {
        if (!isSave) {
            localStorage.removeItem('user');
        } else {
            localStorage.setItem('user', 'login');
        }
        console.log(isSave);
    }
    initFB(_FB: any) {
        this.FB = _FB;
        (this.FB) ? this.FB.init({
            appId: this.clientId,
            cookie: true,
            xfbml: true,
            version: this.versionFb
        }) : console.log('facebook is not init');
    }
    login() {
        (this.FB) ? this.FB.login((res) => {
            this.getLoginStatus();
        }, { scope: 'public_profile,email,user_posts' }) : console.log('facebook is not init');
    }
    logout() {
        (this.FB) ? this.FB.logout(res => {
            this.clearData();
            this.router.navigate(['/']);
        }) : console.log('facebook is not init');
    }
    getLoginStatus() {
        (this.FB) ? this.FB.getLoginStatus((res) => {
            if (res.authResponse) {
                this.loging = true;
                this.getDataUser();
                this.saveLocalState(this.loging);
                (this.router) ? this.router.navigate(['/post']) : console.log('can not navigator to post page');
            } else {
                this.loging = false;
            }
        }) : console.log('facebook is not init');
    }

    getDataUser() {
        (this.FB) ? this.FB.api('/me', (res) => {
            this.user.userId = res.id;
            this.user.userName = res.name;
            this.user.pictureProfile = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/'
                + '15871486_946881748780803_7912349944280000329_n.jpg'
                + '?_nc_cat=0&_nc_eui2=AeG7Ja5dBgIEan8K_BqVbSHUydLOGWespbvjMMkFFLP9rRo6L5lsBxHArsNVMO44lDnEtDR2Oe6QGjdqS9nZCsyZeos'
                + '1Ol0EgzbUNsTuzD8H8A&oh=74d53ff89ef985b12f126f6fba8998e3&oe=5B7A5982';

            this.userSubject.next(this.user);
        }) : console.log('facebook is not init');
    }

    clearData() {
        this.loging = false;
        this.user = new NamUserModel();
        this.saveLocalState(this.loging);
        this.userSubject.next(this.user);
    }
}

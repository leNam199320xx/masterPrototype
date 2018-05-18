import { Injectable } from '@angular/core';
import { UsersFacebookModel, UserFacebookModel } from '../model/user.model';
import { NamContentModel } from '../model/content.model';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { PostsFacebookModel } from '../model/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NamLoginService {
    user: UserFacebookModel;
    friends: UsersFacebookModel;
    userSubject: Subject<UserFacebookModel> = new Subject();
    postsSubject: Subject<PostsFacebookModel> = new Subject();
    friendsSubject: Subject<UsersFacebookModel> = new Subject();
    loging = false;
    FB = (<any>window).FB;
    clientId = '500288897006445';
    versionFb = 'v3.0';
    currentUrl: string;
    numberPostsLoaded = 10;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject.next(null);
        this.currentUrl = window.location.pathname;
        this.postsSubject.subscribe(res => {
            console.log(res);
        });
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
        this.redirectToLoginPage();
        // (this.FB) ? this.FB.login((res) => {
        //     this.getLoginStatus();
        // }, { scope: 'public_profile,email,user_posts' }) : console.log('facebook is not init');
    }
    redirectToLoginPage() {
        const domain = window.location.origin;
        const randomParam = '{st=state123abc,ds=123456789}';
        window.location.href = ('https://www.facebook.com/v3.0/dialog/oauth?' +
            'client_id=' + this.clientId +
            '&redirect_uri=' + domain +
            '&response_type=token' +
            '&auth_type=reauthorize' +
            '&scope=public_profile,email,user_posts,user_friends');
    }
    logout() {
        (this.FB) ? this.FB.logout(res => {
            this.clearData();
            this.router.navigate(['/']);
        }) : console.log('facebook is not init');
    }
    getLoginStatus() {
        (this.FB) ? this.FB.getLoginStatus((res) => {
            // console.log(res);
            if (res.authResponse) {
                this.loging = true;
                this.getDataUser();
                // this.getDataPost();
            } else {
                this.loging = false;
            }
        }) : console.log('facebook is not init');
    }

    getDataUser() {
        (this.FB) ? this.FB.api('/me?fields=id,name,picture', (res) => {
            this.user = res as UserFacebookModel;
            this.userSubject.next(this.user);
            // console.log(this.user);
            if (this.currentUrl) {
                this.router.navigate([this.currentUrl]);
                this.currentUrl = null;
            }
            this.getDataPost();
            this.getDataFriend();
        }
        ) : console.log('facebook is not init');
    }

    getDataPost() {
        (this.FB) ? this.FB.api('/' + this.user.id + '?fields=posts.limit(' + this.numberPostsLoaded + '){'
            + 'full_picture,'
            + 'message,'
            + 'message_tags,'
            + 'picture,'
            + 'created_time,'
            + 'updated_time'
            + '}', (res) => {
                console.log(res);
                this.postsSubject.next(res.posts as PostsFacebookModel);
            }
        ) : console.log('facebook is not init');
    }

    getDataFriend() {
        (this.FB) ? this.FB.api('/' + this.user.id + '?fields=friends.limit(' + this.numberPostsLoaded + '){'
            + 'id,'
            + 'name,'
            + 'picture'
            + '}', (res) => {
                console.log(res);
                this.friendsSubject.next(res.friends as UsersFacebookModel);
            }
        ) : console.log('facebook is not init');
    }
    clearData() {
        this.loging = false;
        this.user = null;
        this.userSubject.next(this.user);
        this.postsSubject.next(null);
    }
}

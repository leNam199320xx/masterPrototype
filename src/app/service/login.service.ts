import { Injectable, Inject, PLATFORM_ID, APP_ID, OnInit } from '@angular/core';
import { UsersFacebookModel, UserFacebookModel, PictureFacebookModel, NamPictureModel } from '../model/user.model';
import { NamContentModel } from '../model/content.model';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { PostsFacebookModel, PagingFabookModel } from '../model/post.model';
import { HttpClient } from '@angular/common/http';

import { isPlatformBrowser } from '@angular/common';
import { NamWindowService } from './window.service';

@Injectable()
export class NamLoginService implements OnInit {
    user: UserFacebookModel;
    friends: UsersFacebookModel;
    userSubject: Subject<UserFacebookModel> = new Subject();
    postsSubject: Subject<PostsFacebookModel> = new Subject();
    friendsSubject: Subject<UsersFacebookModel> = new Subject();
    loging = false;
    FB: any;
    clientId = '500288897006445';
    versionFb = 'v3.0';
    currentUrl: string;
    numberPostsLoaded = 10;
    window: any;
    constructor(
        private router: Router,
        // private windowService: NamWindowService,
        private http: HttpClient
    ) {
        this.userSubject.next(null);
        this.postsSubject.subscribe(res => {
        });
        this.friendsSubject.subscribe(res => {
            this.friends = res;
        });
    }
    ngOnInit() {
    }
    initFB() {
        (this.FB) ? this.FB.init({
            appId: this.clientId,
            cookie: true,
            xfbml: true,
            version: this.versionFb
        }) : console.log('not found fb');
        this.getLoginStatus();
    }
    login() {
        (this.FB) ? this.FB.login((res) => {
            this.getLoginStatus();
        }, { scope: 'public_profile,email,user_posts,user_friends' }) : console.log('facebook is not inited, can not login');
    }
    redirectToLoginPage() {
        const domain = this.window.location.origin;
        const randomParam = '{st=state123abc,ds=123456789}';
        this.window.location.href = ('https://www.facebook.com/v3.0/dialog/oauth?' +
            'client_id=' + this.clientId +
            '&redirect_uri=' + domain +
            '&response_type=token' +
            '&auth_type=reauthorize' +
            '&scope=public_profile,email,user_posts');
    }
    logout() {
        (this.FB) ? this.FB.logout(res => {
            this.clearData();
            this.router.navigate(['/']);
        }) : console.log('facebook is not inited, can not logout');
    }
    getLoginStatus() {
        (this.FB) ? this.FB.getLoginStatus((res) => {
            console.log(res);
            if (res.authResponse) {
                this.loging = true;
                this.getDataUser();
                // this.getDataPost();
            } else {
                this.loging = false;
            }
        }) : console.log('facebook is not inited, can not get status of user');
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
        ) : console.log('facebook is not init, can not get user profile');
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
                this.postsSubject.next(res.posts as PostsFacebookModel);
            }
        ) : console.log('facebook is not init, can not get posts list of user');
    }

    getDataFriend() {
        (this.FB) ? this.FB.api('/' + this.user.id + '?fields=friends.limit(' + this.numberPostsLoaded + '){'
            + 'id,'
            + 'name,'
            + 'picture'
            + '}', (res) => {
                console.log(res);
                // this.friendsSubject.next(res.friends as UsersFacebookModel);

            }
        ) : console.log('facebook is not inited, can not get friends list of user');

        const testModel = new UsersFacebookModel();
        testModel.paging = {
            next: '',
            previous: ''
        } as PagingFabookModel;
        testModel.data.push(this.user);
        this.friendsSubject.next(testModel);
    }
    clearData() {
        this.loging = false;
        this.user = null;
        this.userSubject.next(this.user);
        this.postsSubject.next(null);
    }
}

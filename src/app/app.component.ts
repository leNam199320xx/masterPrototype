import { Component, ViewEncapsulation, OnInit, HostListener, OnChanges, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NamLoginService } from './service/login.service';
import { NamPostService } from './service/post.service';
import { NamWindowService } from './service/window.service';
import { UsersFacebookModel } from './model/user.model';

import { StitchClientFactory } from 'mongodb-stitch';

// const stitch = require('mongodb-stitch');

@Component({
  selector: 'nam-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  friends: UsersFacebookModel;
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
    // const clientPromise = StitchClientFactory.create('ifakebook-eqvwi');

    // clientPromise.then(client => {
    //   const db = client.service('mongodb', 'mongodb-atlas').db('ifakebook_db');
    //   client.login().then(() =>
    //     db.collection('user').updateOne({ owner_id: client.authedId() }, { $set: { number: 42 } }, { upsert: true })
    //   ).then(() =>
    //     db.collection('user').find({ owner_id: client.authedId() }).limit(100).execute()
    //   ).then(docs => {
    //     console.log('Found docs', docs)
    //     console.log('[MongoDB Stitch] Connected to Stitch')
    //   }).catch(err => {
    //     console.error(err)
    //   });
    // });
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

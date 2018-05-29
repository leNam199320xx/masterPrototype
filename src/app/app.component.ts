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
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(
        windowService: NamWindowService
    ) {
    }
}

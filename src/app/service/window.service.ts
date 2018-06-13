import { HostListener, Injectable, OnDestroy, PLATFORM_ID, APP_ID, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { NamLoginService } from './login.service';
import { NamHeaderModel } from '../model/header.model';
import { NamFooterModel } from '../model/footer.model';

@Injectable()
export class NamWindowService implements OnDestroy, OnInit {
    isSite = false;
    currentBreakpoint: Breakpoints;
    currentBreakpointSubject: Subject<Breakpoints> = new Subject();
    breakpoints: Breakpoints[] = [{
        query: '(min-width: 1280px)',
        device: 'desktop',
        value: 0
    },
    {
        query: '(min-width: 960px) and (max-width: 1289px) and (orientation:landscape)',
        device: 'tablet landscape',
        value: 1
    },
    {
        query: '(min-width: 600px) and (max-width: 839px)',
        device: 'tablet portrait',
        value: 2
    },
    {
        query: '(min-width: 480px) and (max-width: 959px) and (orientation:landscape)',
        device: 'mobile landscape',
        value: 3
    },
    {
        query: '(min-width: 0px) and (max-width: 599px)',
        device: 'mobile portrait',
        value: 4
    }];
    window: any;
    document: Document;
    body: HTMLElement;
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string,
        private loginService: NamLoginService
    ) {
        this.setBreakpoint();
        if ((isPlatformBrowser(platformId))) {
            this.document = <any>document;
            this.window = <any>window;
            this.body = this.document.body;
            this.loginService.FB = this.window.FB;
            this.loginService.initFB();
            this.setBreakpoint();
            this.loginService.windowSubject.next(this.window);
        }
    }
    ngOnInit() {
    }
    @HostListener('window:resize', ['$event']) onresize(_event: Event) {
        this.setBreakpoint();
    }
    matchMedia(_mediaquery) {
        const result = (this.window) ? <MediaQueryList>this.window.matchMedia(_mediaquery) : {
            matches: false,
            media: '',
            onchange: null
        };
        return result;
    }
    ngOnDestroy() {
        this.currentBreakpointSubject.unsubscribe();
    }
    setBreakpoint() {
        this.breakpoints.forEach(b => {
            const r = this.matchMedia(b.query);
            if (r.matches) {
                this.currentBreakpoint = b;
                this.body.className = b.device;
                this.currentBreakpointSubject.next(this.currentBreakpoint);
            }
        });
    }
}

export interface Breakpoints {
    device: string;
    query: string;
    value: number;
}

import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NamWindowService implements OnDestroy {
    currentBreakpoint: Breakpoints;
    currentBreakpointSubject: Subject<Breakpoints> = new Subject();
    body = <HTMLBodyElement>document.body;
    breakpoints: Breakpoints[] = [
        {
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
        },
    ];
    constructor() {
        this.setBreakpoint();
    }
    @HostListener('window:resize', ['$event']) onresize(_event: Event) {
        this.setBreakpoint();
    }
    matchMedia(_mediaquery) {
        const result = <MediaQueryList>window.matchMedia(_mediaquery);
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

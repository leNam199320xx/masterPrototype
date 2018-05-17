import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NamUserModel } from '../model/user.model';
import { NamLoginService } from '../service/login.service';
import { Route } from '@angular/compiler/src/core';


@Injectable()
export class NamCanActivateService implements CanActivate, CanActivateChild, OnDestroy, CanLoad, OnInit {
    constructor(
        private currentUser: NamUserModel,
        private router: Router,
        private loginService: NamLoginService
    ) {
        this.loginService.userSubject.subscribe(res => {
            this.currentUser = res;
        });
        this.currentUser = this.loginService.user;
    }

    ngOnInit() {
        this.currentUser = this.loginService.user;
    }

    ngOnDestroy() {
        this.loginService.userSubject.unsubscribe();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }

    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }
    check() {
        const result = (this.currentUser) ? true : false;
        if (!result) {
            this.router.navigate(['/notfound']);
        }
        return result;
    }
}

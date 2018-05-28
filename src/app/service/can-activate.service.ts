import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacebookModel } from '../model/user.model';
import { NamLoginService } from '../service/login.service';
import { Route } from '@angular/compiler/src/core';


@Injectable()
export class NamCanActivateService implements CanActivate, CanActivateChild, OnDestroy, CanLoad, OnInit {
    loginSuccess = false;
    currentUser: UserFacebookModel;
    currentUrl: string;
    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        this.currentUrl = state.url;
        return this.check();
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        this.currentUrl = state.url;
        return this.check();
    }

    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }
    check() {
        // console.log('user:', this.loginService.getDataUser());
        // this.loginService.userSubject.subscribe(res => {
        //     console.log('check login status ', res);
        //     this.loginSuccess = true;
        //     const result = (this.currentUser) ? true : false;
        //     if (!result) {
        //         console.log('not found');
        //         this.loginSuccess = result;
        //         this.router.navigate(['/notfound']);
        //     }
        // });
        const result = this.currentUser !== undefined && this.loginSuccess;
        return result;
        // const result = (this.currentUser) ? true : false;
        // if (!result) {
        //     console.log('not found');
        //     this.router.navigate(['/notfound']);
        // }
        // return result;
    }
}

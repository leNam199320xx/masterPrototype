
// import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NamCommonService } from './service/common.service';
import { NamLoginService } from './service/login.service';
import { NamPostService } from './service/post.service';
import { NamCanActivateService } from './service/can-activate.service';
import { NamWindowService } from './service/window.service';
import { CloudConnectionService } from './service/cloud-connection.service';
import { NamNavTopComponent } from './nav/nav-top.component';
import { NamNavRightComponent } from './nav/right/nav-right.component';
import { NamNavLeftComponent } from './nav/left/nav-left.component';
import { NamCommonMatModule } from './common/NamCommonMat.module';
import { NamCommonModule } from './common/NamCommon.module';
import { NamSiteModule } from './client/site/site.module';
import { NamNotFoundComponent } from './client/notfound/notfound.component';
import { NamFooterComponent } from './client/footer/footer.component';
import { NamPrivacyComponent } from './client/privacy/privacy.component';
import { UserFacebookModel } from './model/user.model';
import { NamPageConfigService } from './service/page-config.service';
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
// import { BrowserTransferStateModule } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
}

@NgModule({
    declarations: [
        AppComponent,
        NamNavTopComponent,
        NamNavRightComponent,
        NamNavLeftComponent,
        NamFooterComponent,
        NamPrivacyComponent,
        NamNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NamCommonModule,
        NamCommonMatModule,
        NamSiteModule,
        BrowserModule.withServerTransition({ appId: '1234567890' }),
        // ModuleMapLoaderModule,
        // BrowserTransferStateModule
    ],
    providers: [
        NamCommonService,
        NamLoginService,
        NamPostService,
        NamCanActivateService,
        NamWindowService,
        CloudConnectionService,
        NamPageConfigService,
        UserFacebookModel,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string,
        private loginService: NamLoginService) {
        console.log(this.loginService.FB);
        const platform = isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}

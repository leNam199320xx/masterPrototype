import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NamNotFoundComponent } from './client/notfound/notfound.component';
import { NamHomeComponent } from './client/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NamCommonService } from './service/common.service';
import { NamCommonModule } from './common/NamCommon.module';
import { NamNewsService } from './service/news.service';
import { NamLoginService } from './service/login.service';
import { NamPostService } from './service/post.service';
import { NamFooterComponent } from './client/footer/footer.component';
import { UserFacebookModel } from './model/user.model';
import { NamCanActivateService } from './service/can-activate.service';
import { NamWindowService } from './service/window.service';
import { NamPrivacyComponent } from './client/privacy/privacy.component';
import { NamChatComponent } from './client/chat/chat.component';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CloudConnectionService } from './service/cloud-connection.service';
import { NamNavTopComponent } from './nav/nav-top.component';
import { NamNavRightComponent } from './nav/right/nav-right.component';
import { NamNavLeftComponent } from './nav/left/nav-left.component';
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

    BrowserModule.withServerTransition({ appId: '1234567890' })
    // ModuleMapLoaderModule
  ],
  providers: [
    NamCommonService,
    NamLoginService,
    NamPostService,
    NamCanActivateService,
    NamWindowService,
    CloudConnectionService,
    UserFacebookModel
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

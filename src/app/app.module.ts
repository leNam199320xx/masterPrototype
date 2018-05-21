import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NamNotFoundComponent } from './notfound/notfound.component';
import { NamHomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NamCommonService } from './service/common.service';
import { NamCommonModule } from './common/NamCommon.module';
import { NamNewsService } from './service/news.service';
import { NamLoginService } from './service/login.service';
import { NamPostService } from './service/post.service';
import { NamFooterComponent } from './footer/footer.component';
import { UserFacebookModel } from './model/user.model';
import { NamCanActivateService } from './service/can-activate.service';
import { NamWindowService } from './service/window.service';
import { NamPrivacyComponent } from './privacy/privacy.component';
import { NamChatComponent } from './chat/chat.component';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NamFooterComponent,
    NamPrivacyComponent,
    NamChatComponent,
    NamNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NamCommonModule,
    BrowserModule.withServerTransition({ appId: '1234567890' }),
    ModuleMapLoaderModule
  ],
  providers: [
    NamCommonService,
    NamLoginService,
    NamPostService,
    NamCanActivateService,
    NamWindowService,
    UserFacebookModel
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

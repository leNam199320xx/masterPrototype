import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CloudConnectionService } from './service/cloudConnection';

@NgModule({
  imports: [
    AppModule,
    ServerModule,

    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
    CloudConnectionService
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(private cloudConnectionService: CloudConnectionService) {
    console.log('server is running');
    cloudConnectionService.login();
  }
}

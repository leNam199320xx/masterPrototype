import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NameButtonComponent } from './nam/nam-button/button.component';
import { NamTagComponent } from './nam/nam-tag/tag.component';
import { NamDialogComponent, NamDialogDirective } from './nam/nam-dialog/dialog.component';
import { NamLeftSiteComponent } from './leftsite/leftsite.component';
import { NamNotFoundComponent } from './notfound/notfound.component';
import { NamHomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NameButtonComponent,
    NamTagComponent,
    NamDialogComponent,
    NamDialogDirective,
    NamLeftSiteComponent,
    NamNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NamTagComponent]
})
export class AppModule { }
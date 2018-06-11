import { NgModule } from '@angular/core';
import { NamSiteComponent } from './site.component';
import { NamSiteRoutingModule } from './site-routing.module';
import { NamSitePanelComponent } from './panel/panel.component';
import { NamSiteNavComponent } from './nav/nav.component';
import { NamSiteFooterComponent } from './footer/footer.component';
import { NamCreaterNavType1Component } from './nav/type1/type1.component';
import { CommonModule } from '@angular/common';
import { NamSiteService } from './site.service';

@NgModule({
    declarations: [
        NamSiteComponent,
        NamSitePanelComponent,
        NamSiteNavComponent,
        NamCreaterNavType1Component,
        NamSiteFooterComponent
    ],
    exports: [
        NamSiteComponent
    ],
    imports: [NamSiteRoutingModule, CommonModule],
    providers: [NamSiteService]
})

export class NamSiteModule {

}

import { NgModule } from '@angular/core';
import { NamClientComponent } from './client.component';
import { NamClientRoutingModule } from './client-routing.module';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../common/NamCommon.module';
import { NamFooterComponent } from './footer/footer.component';
import { NamPrivacyComponent } from './privacy/privacy.component';
import { NamChatComponent } from './chat/chat.component';
import { NamNotFoundComponent } from './notfound/notfound.component';

@NgModule({
    declarations: [
        NamClientComponent,
        NamChatComponent
    ],
    imports: [NamClientRoutingModule, CommonModule, NamCommonModule]
})
export class NamClientModule {

}

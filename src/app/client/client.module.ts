import { NgModule } from '@angular/core';
import { NamClientComponent } from './client.component';
import { NamClientRoutingModule } from './client-routing.module';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../common/NamCommon.module';
import { NamChatComponent } from './chat/chat.component';

@NgModule({
    declarations: [
        NamClientComponent,
        NamChatComponent
    ],
    imports: [NamClientRoutingModule, CommonModule, NamCommonModule]
})
export class NamClientModule {

}

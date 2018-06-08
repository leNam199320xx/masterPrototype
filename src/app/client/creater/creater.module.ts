import { NgModule } from '@angular/core';
import { NamCreaterComponent } from './creater.component';
import { NamCreaterRoutingModule } from './creater-routing.module';
import { NamCreaterPanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../../common/NamCommon.module';

@NgModule({
    declarations: [
        NamCreaterComponent,
        NamCreaterPanelComponent
    ],
    imports: [
        CommonModule,
        NamCommonModule,
        NamCreaterRoutingModule
    ]
})

export class NamCreaterModule {

}

import { NgModule } from '@angular/core';
import { NamCreaterComponent } from './creater.component';
import { NamCreaterRoutingModule } from './creater-routing.module';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../../common/NamCommon.module';
import { NamCreaterService } from './creater.service';
import { NamCreaterControlComponent } from './control/control.component';

@NgModule({
    declarations: [
        NamCreaterComponent,
        NamCreaterControlComponent
    ],
    imports: [
        CommonModule,
        NamCommonModule,
        NamCreaterRoutingModule
    ],
    providers: [NamCreaterService]
})

export class NamCreaterModule {

}

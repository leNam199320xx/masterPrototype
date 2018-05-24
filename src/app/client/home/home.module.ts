import { NgModule } from '@angular/core';
import { NamHomeComponent } from './home.component';
import { HOME_ROUTING } from './home.routes';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../../common/NamCommon.module';

@NgModule({
    declarations: [NamHomeComponent],
    imports: [HOME_ROUTING, CommonModule, NamCommonModule]
})
export class NamHomeModule {

}

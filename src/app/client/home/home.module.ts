import { NgModule } from '@angular/core';
import { NamHomeComponent } from './home.component';
import { HOME_ROUTING } from './home.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NamHomeComponent],
    imports: [HOME_ROUTING, CommonModule]
})
export class NamHomeModule {

}

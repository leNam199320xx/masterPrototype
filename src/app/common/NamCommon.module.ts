import { NgModule, ModuleWithProviders } from '@angular/core';
import { NamPagingComponent } from './paging/paging.component';
import { CommonModule } from '@angular/common';
import { NamContentComponent } from './content/content.component';
import { NamCheckboxComponent } from './checkbox/checkbox.component';
import { NamListProductComponent } from './list-product/list.component';
import { NamListImageComponent } from './list-image/list-image.component';
import { NamButtonComponent } from './button/button.component';
import { NamRadioComponent } from './radio/radio.component';
import { NamListComponent } from './list/list.component';

@NgModule({
    declarations: [
        NamPagingComponent,
        NamContentComponent,
        NamCheckboxComponent,
        NamListProductComponent,
        NamListImageComponent,
        NamButtonComponent,
        NamRadioComponent,
        NamListComponent
    ],
    exports: [
        NamPagingComponent,
        NamContentComponent,
        NamCheckboxComponent,
        NamListProductComponent,
        NamListImageComponent,
        NamButtonComponent,
        NamRadioComponent,
        NamListComponent
    ],
    imports: [CommonModule]
})
export class NamCommonModule {
}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { NamPagingComponent } from './paging/paging.component';
import { CommonModule } from '@angular/common';
import { NamContentComponent } from './content/content.component';
import { NamCheckboxComponent } from './checkbox/checkbox.component';
import { NamListProductComponent } from './list-product/list.component';
import { NamListImageComponent } from './list-image/list-image.component';
import { NamButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        NamPagingComponent,
        NamContentComponent,
        NamCheckboxComponent,
        NamListProductComponent,
        NamListImageComponent,
        NamButtonComponent,
    ],
    exports: [
        NamPagingComponent,
        NamContentComponent,
        NamCheckboxComponent,
        NamListProductComponent,
        NamListImageComponent,
        NamButtonComponent,
    ],
    imports: [CommonModule]
})
export class NamCommonModule {
}

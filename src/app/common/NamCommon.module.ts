import { NgModule, ModuleWithProviders } from '@angular/core';
import { NamPagingComponent } from './paging/paging.component';
import { CommonModule } from '@angular/common';
import { NamContentComponent } from './content/content.component';
import { NamCheckboxComponent } from './checkbox/checkbox.component';
import { NamListProductComponent } from './list-product/list.component';

@NgModule({
    declarations: [
        NamPagingComponent, NamContentComponent, NamCheckboxComponent, NamListProductComponent
    ],
    exports: [
        NamPagingComponent, NamContentComponent, NamCheckboxComponent, NamListProductComponent
    ],
    imports: [CommonModule]
})
export class NamCommonModule {
}

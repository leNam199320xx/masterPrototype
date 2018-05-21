import { NgModule, ModuleWithProviders } from '@angular/core';
import { NamPagingComponent } from './paging/paging.component';
import { CommonModule } from '@angular/common';
import { NamContentComponent } from './content/content.component';
import { NamCheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
    declarations: [NamPagingComponent, NamContentComponent, NamCheckboxComponent],
    exports: [NamPagingComponent, NamContentComponent, NamCheckboxComponent],
    imports: [CommonModule]
})
export class NamCommonModule {
}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { NamPagingComponent } from './paging/paging.component';
import { CommonModule } from '@angular/common';
import { NamContentComponent } from './content/content.component';

@NgModule({
    declarations: [NamPagingComponent, NamContentComponent],
    exports: [NamPagingComponent, NamContentComponent],
    imports: [CommonModule]
})
export class NamCommonModule {
}

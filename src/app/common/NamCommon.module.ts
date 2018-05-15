import { NgModule, ModuleWithProviders } from '@angular/core';
import { NamPagingComponent } from './paging/paging.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NamPagingComponent],
    exports: [NamPagingComponent],
    imports: [CommonModule]
})
export class NamCommonModule {
}

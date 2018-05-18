import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../common/NamCommon.module';
import { NamPostComponent } from './post.component';
import { PostRoutingModule } from './post.routes';
import { NamPostCreateComponent } from './create/create.component';

@NgModule({
    declarations: [NamPostComponent, NamPostCreateComponent],
    imports: [CommonModule, NamCommonModule, PostRoutingModule]
})
export class NamPostModule {

}

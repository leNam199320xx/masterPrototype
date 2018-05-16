import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../common/NamCommon.module';
import { NamPostComponent } from './post.component';
import { PostRoutingModule } from './post.routes';

@NgModule({
    declarations: [NamPostComponent],
    imports: [CommonModule, NamCommonModule, PostRoutingModule]
})
export class NamPostModule {

}

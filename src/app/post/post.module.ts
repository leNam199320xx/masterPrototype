import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../common/NamCommon.module';
import { NamPostService } from '../service/post.service';
import { NamPostComponent } from './post.component';
import { PostRoutingModule } from './post.routes';

@NgModule({
    declarations: [NamPostComponent],
    imports: [CommonModule, NamCommonModule, PostRoutingModule],
    providers: [NamPostService]
})
export class NamPostModule {

}

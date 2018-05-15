import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news.routes';
import { CommonModule } from '@angular/common';
import { NamNewsComponent } from './news.component';
import { NamNewsService } from '../service/news.service';
import { NamCommonModule } from '../common/NamCommon.module';

@NgModule({
    declarations: [NamNewsComponent],
    imports: [NewsRoutingModule, CommonModule, NamCommonModule],
    providers: [NamNewsService]
})
export class NamNewsModule {

}

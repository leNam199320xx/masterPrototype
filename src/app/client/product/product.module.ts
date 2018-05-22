import { NgModule } from '@angular/core';
import { NamProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routes';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { NamCommonModule } from '../../common/NamCommon.module';

@NgModule({
    declarations: [NamProductComponent],
    providers: [ProductService],
    imports: [CommonModule, ProductRoutingModule, NamCommonModule]
})
export class NamProductModule {
}

import { NgModule } from '@angular/core';
import { NamProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routes';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NamProductComponent],
    providers: [ProductService],
    imports: [CommonModule, ProductRoutingModule]
})
export class NamProductModule {
}

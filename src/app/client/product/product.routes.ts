import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NamProductComponent } from './product.component';

const routes: Routes = [
    {
        path: '',
        component: NamProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamClientComponent } from './client.component';
import { NamCanActivateService } from '../service/can-activate.service';
import { NamPrivacyComponent } from './privacy/privacy.component';
import { NamNotFoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {
        path: 'customer',
        loadChildren: './customer/customer.module#NamCustomerModule',
        canLoad: [NamCanActivateService]
    },
    {
        path: 'product',
        loadChildren: './product/product.module#NamProductModule',
        canActivate: [NamCanActivateService]
    },
    {
        path: 'news',
        loadChildren: './news/news.module#NamNewsModule'
    },
    {
        path: 'post',
        loadChildren: './post/post.module#NamPostModule',
        canLoad: [NamCanActivateService]
    },
    {
        path: '',
        loadChildren: './home/home.module#NamHomeModule'
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class NamClientRoutingModule { }

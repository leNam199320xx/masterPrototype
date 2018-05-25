import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamClientComponent } from './client.component';
import { NamCanActivateService } from '../service/can-activate.service';
import { NamPrivacyComponent } from './privacy/privacy.component';
import { NamNotFoundComponent } from './notfound/notfound.component';

// const routes: Routes = [
//     {
//         path: '',
//         component: NamClientComponent
//     }
// ];
const routes: Routes = [
    {
        path: 'customer',
        loadChildren: './customer/customer.module#NamCustomerModule',
        canLoad: [NamCanActivateService]
    },
    {
        path: 'product',
        loadChildren: './product/product.module#NamProductModule',
        canLoad: [NamCanActivateService]
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
    },
    {
        path: 'privacy-policy',
        component: NamPrivacyComponent
    },
    {
        path: '**',
        component: NamNotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class NamClientRoutingModule { }

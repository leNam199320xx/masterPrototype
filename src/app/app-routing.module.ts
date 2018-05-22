import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamNotFoundComponent } from './client/notfound/notfound.component';
import { NamCanActivateService } from './service/can-activate.service';
import { NamPrivacyComponent } from './client/privacy/privacy.component';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: './client/customer/customer.module#NamCustomerModule',
    canLoad: [NamCanActivateService]
  },
  {
    path: 'product',
    loadChildren: './client/product/product.module#NamProductModule',
    canLoad: [NamCanActivateService]
  },
  {
    path: 'news',
    loadChildren: './client/news/news.module#NamNewsModule'
  },
  {
    path: 'post',
    loadChildren: './client/post/post.module#NamPostModule',
    canLoad: [NamCanActivateService]
  },
  {
    path: '',
    loadChildren: './client/home/home.module#NamHomeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

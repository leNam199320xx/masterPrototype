import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamNotFoundComponent } from './notfound/notfound.component';
import { NamCanActivateService } from './service/can-activate.service';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: './customer/customer.module#NamCustomerModule',
    canLoad: ['NamCanActivateService']
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
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }, {
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamNotFoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: './customer/customer.module#NamCustomerModule'
  },
  {
    path: 'product',
    loadChildren: './product/product.module#NamProductModule'
  },
  {
    path: '',
    loadChildren: './home/home.module#NamHomeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

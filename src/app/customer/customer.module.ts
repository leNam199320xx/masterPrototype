import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CustomerRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class NamCustomerModule { }

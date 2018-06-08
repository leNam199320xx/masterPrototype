import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamCreaterComponent } from './creater.component';

const routes: Routes = [
  { path: '', component: NamCreaterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NamCreaterRoutingModule { }

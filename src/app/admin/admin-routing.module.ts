import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamAdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: NamAdminComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class NamAdminRoutingModule { }

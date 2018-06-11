import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamNotFoundComponent } from './client/notfound/notfound.component';
import { NamCanActivateService } from './service/can-activate.service';
import { NamPrivacyComponent } from './client/privacy/privacy.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './client/client.module#NamClientModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#NamAdminModule'
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

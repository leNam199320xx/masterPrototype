import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NamPostComponent } from './post.component';
import { NamCanActivateService } from '../service/can-activate.service';
import { NamUserModel } from '../model/user.model';

const routes: Routes = [
    {
        path: '',
        component: NamPostComponent,
        canActivateChild: ['NamCanActivateService']
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [NamCanActivateService, NamUserModel]
})

export class PostRoutingModule { }

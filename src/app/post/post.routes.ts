import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NamPostComponent } from './post.component';

const routes: Routes = [
    {
        path: '',
        component: NamPostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }

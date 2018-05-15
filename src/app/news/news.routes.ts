import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NamNewsComponent } from './news.component';

const routes: Routes = [
    { path: '', component: NamNewsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewsRoutingModule { }

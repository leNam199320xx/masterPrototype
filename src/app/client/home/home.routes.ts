import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NamHomeComponent } from './home.component';

const homeRoutes: Routes = [
    { path: '', component: NamHomeComponent}
];

export const HOME_ROUTING: ModuleWithProviders = RouterModule.forChild(homeRoutes);

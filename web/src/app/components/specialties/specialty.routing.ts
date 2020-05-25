import { Routes } from '@angular/router';
import { SpecialtyListComponent } from './specialty-list/specialty-list.component';
import { SpecialtyFormComponent } from './specialty-form/specialty-form.component';

export const specialtyRoutes: Routes = [
    { path: '', component: SpecialtyListComponent },
    { path: 'crear', component: SpecialtyFormComponent },
    { path: 'editar', component: SpecialtyFormComponent }
];

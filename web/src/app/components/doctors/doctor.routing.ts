import { Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';

export const doctorRoutes: Routes = [
    { path: '', component: DoctorListComponent },
    { path: 'crear', component: DoctorFormComponent },
    { path: 'editar', component: DoctorFormComponent }
];

import { Routes } from '@angular/router';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

export const hospitalRoutes: Routes = [
    { path: '', component: HospitalListComponent },
    { path: 'crear', component: HospitalFormComponent },
    { path: 'editar', component: HospitalFormComponent },
    { path: 'agregarDoctor', component: AddDoctorComponent }
];

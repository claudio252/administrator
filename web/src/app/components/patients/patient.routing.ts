import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

export const patientRoutes: Routes = [
    { path: '', component: PatientListComponent },
    { path: 'crear', component: PatientFormComponent },
    { path: 'editar', component: PatientFormComponent }
];

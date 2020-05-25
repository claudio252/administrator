import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalListComponent } from './components/hospitals/hospital-list/hospital-list.component';

const routes: Routes = [
    { path: 'hospitales', loadChildren: () => import('./components/hospitals/hospital.module').then(m => m.HospitalModule) },
    { path: 'doctores', loadChildren: () => import('./components/doctors/doctor.module').then(m => m.DoctorModule) },
    { path: 'pacientes', loadChildren: () => import('./components/patients/patient.module').then(m => m.PatientModule) },
    { path: 'especialidades', loadChildren: () => import('./components/specialties/specialty.module').then(m => m.SpecialtyModule) },
    { path: 'notas-visita', loadChildren: () => import('./components/visit-notes/visit-notes.module').then(m => m.VisitNotesModule) },
    { path: '', redirectTo: '/hospitales', pathMatch: 'full' },
    { path: '**', component: HospitalListComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

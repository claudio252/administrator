import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { RouterModule } from '@angular/router';
import { hospitalRoutes } from './hospital.routing';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        RouterModule.forChild(hospitalRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatListModule,
        MatDividerModule
    ],
    exports: [],
    declarations: [
        HospitalListComponent,
        HospitalFormComponent,
        AddDoctorComponent
    ],
    providers: [],
})
export class HospitalModule { }

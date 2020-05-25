import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { doctorRoutes } from './doctor.routing';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        FlexLayoutModule,
        RouterModule.forChild(doctorRoutes),
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatTabsModule
    ],
    exports: [],
    providers: [],
    declarations: [
        DoctorListComponent,
        DoctorFormComponent
    ]
})
export class DoctorModule { }

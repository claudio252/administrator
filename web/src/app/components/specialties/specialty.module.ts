import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { specialtyRoutes } from './specialty.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SpecialtyListComponent } from './specialty-list/specialty-list.component';
import { SpecialtyFormComponent } from './specialty-form/specialty-form.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        FlexLayoutModule,
        RouterModule.forChild(specialtyRoutes),
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule
    ],
    exports: [],
    providers: [],
    declarations: [
        SpecialtyListComponent,
        SpecialtyFormComponent
    ]
})
export class SpecialtyModule { }

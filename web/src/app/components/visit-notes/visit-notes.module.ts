import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { visitNotesRoutes } from './visit-notes.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { VisitNoteListComponent } from './visit-note-list/visit-note-list.component';
import { VisitNoteFormComponent } from './visit-note-form/visit-note-form.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        FlexLayoutModule,
        RouterModule.forChild(visitNotesRoutes),
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    exports: [],
    providers: [],
    declarations: [
        VisitNoteListComponent,
        VisitNoteFormComponent
    ]
})
export class VisitNotesModule { }

import { Routes } from '@angular/router';
import { VisitNoteListComponent } from './visit-note-list/visit-note-list.component';
import { VisitNoteFormComponent } from './visit-note-form/visit-note-form.component';

export const visitNotesRoutes: Routes = [
    { path: '', component: VisitNoteListComponent },
    { path: 'crear', component: VisitNoteFormComponent },
    { path: 'editar', component: VisitNoteFormComponent }
];

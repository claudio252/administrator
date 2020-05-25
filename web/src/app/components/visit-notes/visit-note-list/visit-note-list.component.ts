import { Component, OnInit } from '@angular/core';
import { VisitNoteService } from '../visit-notes.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-visit-note-list',
    templateUrl: 'visit-note-list.component.html',
    styleUrls: [ './visit-note-list.component.scss' ]
})

export class VisitNoteListComponent implements OnInit {
    visitNotes: any[];
    constructor(
        private visitoNoteService: VisitNoteService
    ) { }

    ngOnInit() {
        this.visitoNoteService.getAllVisitNotes().subscribe((data: any) => {
            this.visitNotes = data._embedded.visitNote;
            this.visitNotes.map(visitNote => {
                forkJoin(this.visitoNoteService.getDoctorFromVisitNote(visitNote._links.doctor.href),
                    this.visitoNoteService.getPatientFromVisitNote(visitNote._links.patient.href))
                        .subscribe(response => {
                            visitNote.doctor = response[0];
                            visitNote.patient = response[1];
                        });
            });
        });
    }

    deleteVisitNote(url: string) {
        this.visitoNoteService.deleteVisitNoteByURL(url).subscribe(data => {
            this.ngOnInit();
        });
    }
}

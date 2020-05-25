import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { VisitNoteService } from '../../visit-notes/visit-notes.service';

@Component({
    selector: 'app-patient-list',
    templateUrl: 'patient-list.component.html',
    styleUrls: [ './patient-list.component.scss' ]
})

export class PatientListComponent implements OnInit {
    patients: any[];
    constructor(
        private patientService: PatientService,
        private visitNoteService: VisitNoteService
    ) { }

    ngOnInit() {
        this.patientService.getAllPatients().subscribe((data: any) => {
            this.patients = data._embedded.patient;
            this.patients.forEach(patient => {
                this.patientService.getDoctorsByURL(patient._links.doctors.href).subscribe((doctorsData: any) => {
                    patient.doctors = doctorsData._embedded.doctor;
                });
                this.visitNoteService.findVisitNotesByPatientId(patient._links.patient.href.split('/').pop())
                    .subscribe((visitNotes: any) => {
                        patient.visitNotes = visitNotes._embedded.visitNote;
                });
            });
        });
    }

    deleteDoctor(url: string) {
        this.patientService.deletePatientByURL(url).subscribe(data => {
            this.ngOnInit();
        });
    }
}

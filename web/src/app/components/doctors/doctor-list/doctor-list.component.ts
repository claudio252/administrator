import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { VisitNoteService } from '../../visit-notes/visit-notes.service';

@Component({
    selector: 'app-doctor-list',
    templateUrl: 'doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss']
})

export class DoctorListComponent implements OnInit {
    doctors: any[];
    constructor(
        private doctorService: DoctorService,
        private visitNoteService: VisitNoteService
    ) {}

    ngOnInit() {
        this.doctorService.getAllDoctors().subscribe((data: any) => {
            this.doctors = data._embedded.doctor;
            this.doctors.forEach(doctor => {
                this.doctorService.getPatientByURL(doctor._links.patients.href).subscribe((patientsData: any) => {
                    doctor.patients = patientsData._embedded.patient;
                });
                this.visitNoteService.findVisitNotesByDoctorId(doctor._links.doctor.href.split('/').pop()).subscribe((visitNotes: any) => {
                    doctor.visitNotes = visitNotes._embedded.visitNote;
                });
            });
        });
    }

    deleteDoctor(url: string) {
        this.doctorService.deleteDoctorByURL(url).subscribe(data => {
            this.ngOnInit();
        });
    }
}

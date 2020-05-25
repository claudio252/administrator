import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { VisitNoteService } from '../visit-notes.service';
import { Router } from '@angular/router';
import { PatientService } from '../../patients/patient.service';
import { DoctorService } from '../../doctors/doctor.service';
import { forkJoin, concat } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

export interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-visit-note-form',
    templateUrl: 'visit-note-form.component.html',
    styleUrls: ['./visit-note-form.component.scss']
})

export class VisitNoteFormComponent implements OnInit {
    visitNoteForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    isEdit = false;
    selfURL = '';
    doctors: any[];
    patients: any[];

    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
    selectedValue: string;


    constructor(
        private formBuilder: FormBuilder,
        private visitNoteService: VisitNoteService,
        private location: Location,
        private router: Router,
        private patientService: PatientService,
        private doctorService: DoctorService
    ) { }

    ngOnInit() {
        this.visitNoteForm = this.formBuilder.group({
            description: ['', Validators.required],
            visitDate: [''],
            doctor: [],
            patient: []
        });

        if (this.location.getState()['href']) {
            this.isEdit = true;
            this.selfURL = this.location.getState()['href'];
            this.visitNoteService.getVisitNoteByURL(this.selfURL).subscribe((visitNote: any) => {
                this.visitNoteForm.controls.description.setValue(visitNote.description);
                this.visitNoteForm.controls.visitDate.setValue(visitNote.visitDate);
            });
        }

        forkJoin(this.doctorService.getAllDoctors(), this.patientService.getAllPatients()).subscribe((response: any[]) => {
            this.doctors = response[0]._embedded.doctor;
            this.patients = response[1]._embedded.patient;
        });
    }

    submitVisitNote() {
        console.log(this.visitNoteForm.value);
        const visitDate = this.visitNoteForm.value.visitDate;
        const visitNote = {
            description: this.visitNoteForm.value.description,
            visitDate: (visitDate instanceof Object) ? visitDate.toDate() : visitDate,
            avatar: null
        };

        if (this.isEdit) {
            this.visitNoteService.updateVisitNoteByURL(this.selfURL, visitNote).subscribe(data => {
                this.router.navigate(['/notas-visita']);
            });
        } else {
            this.visitNoteService.createVisitNote(visitNote).subscribe((visitNoteResponse: any) => {
                const visitNoteUrl = visitNoteResponse._links.visitNote.href;
                const doctor = this.visitNoteForm.value.doctor;
                const patient = this.visitNoteForm.value.patient;

                if (doctor || patient) {
                    this.visitNoteService.addDoctorToVisitNote(visitNoteUrl, doctor.href).subscribe(() => {
                        this.visitNoteService.addPatientToVisitNote(visitNoteUrl, patient.href).subscribe(() => {
                            this.doctorService.addPatientByURL(doctor.href, patient.href).subscribe(() => {
                                this.router.navigate(['/notas-visita']);
                            });
                        });
                    });
                } else {
                    this.router.navigate(['/notas-visita']);
                }
            });
        }
    }
}

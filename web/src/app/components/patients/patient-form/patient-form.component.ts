import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-patient-form',
    templateUrl: 'patient-form.component.html',
    styleUrls: [ './patient-form.component.scss' ]
})

export class PatientFormComponent implements OnInit {
    patientForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    isEdit = false;
    selfURL = '';

    constructor(
        private formBuilder: FormBuilder,
        private patientService: PatientService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.patientForm = this.formBuilder.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            birthDate: []
        });

        if (this.location.getState()['href']) {
            this.isEdit = true;
            this.selfURL = this.location.getState()['href'];
            this.patientService.getPatientByURL(this.selfURL).subscribe((doctor: any) => {
                this.patientForm.controls.name.setValue(doctor.name);
                this.patientForm.controls.lastName.setValue(doctor.lastName);
                this.patientForm.controls.address.setValue(doctor.address);
                this.patientForm.controls.birthDate.setValue(doctor.birthDate);
            });
        }
    }

    submitDoctor() {
        const birthDate = this.patientForm.value.birthDate;
        const doctor = {
            name: this.patientForm.value.name,
            lastName: this.patientForm.value.lastName,
            address: this.patientForm.value.address,
            birthDate: (birthDate instanceof Object) ? birthDate.toDate() : birthDate,
            image: null
        };

        if (this.isEdit) {
            this.patientService.updatePatientByURL(this.selfURL, doctor).subscribe(data => {
                this.router.navigate(['/pacientes']);
            });
        } else {
            this.patientService.createPatient(doctor).subscribe(data => {
                this.router.navigate(['/pacientes']);
            });
        }
    }
}

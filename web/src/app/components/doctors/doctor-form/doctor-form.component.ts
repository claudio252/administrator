import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-doctor-form',
    templateUrl: 'doctor-form.component.html',
    styleUrls: [ './doctor-form.component.scss' ]
})

export class DoctorFormComponent implements OnInit {
    doctorForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    isEdit = false;
    selfURL = '';

    constructor(
        private formBuilder: FormBuilder,
        private doctorService: DoctorService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.doctorForm = this.formBuilder.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            birthDate: []
        });

        if (this.location.getState()['href']) {
            this.isEdit = true;
            this.selfURL = this.location.getState()['href'];
            this.doctorService.getDoctorByURL(this.selfURL).subscribe((doctor: any) => {
                this.doctorForm.controls.name.setValue(doctor.name);
                this.doctorForm.controls.lastName.setValue(doctor.lastName);
                this.doctorForm.controls.address.setValue(doctor.address);
                this.doctorForm.controls.birthDate.setValue(doctor.birthDate);
            });
        }
    }

    submitDoctor() {
        const birthDate = this.doctorForm.value.birthDate;
        const doctor = {
            name: this.doctorForm.value.name,
            lastName: this.doctorForm.value.lastName,
            address: this.doctorForm.value.address,
            birthDate: (birthDate instanceof Object) ? birthDate.toDate() : birthDate,
            image: null
        };

        if (this.isEdit) {
            this.doctorService.updateDoctorByURL(this.selfURL, doctor).subscribe(data => {
                this.router.navigate(['/doctores']);
            });
        } else {
            this.doctorService.createDoctor(doctor).subscribe(data => {
                this.router.navigate(['/doctores']);
            });
        }
    }
}

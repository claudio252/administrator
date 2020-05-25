import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SpecialtyService } from '../specialty.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-patient-form',
    templateUrl: 'specialty-form.component.html',
    styleUrls: [ './specialty-form.component.scss' ]
})

export class SpecialtyFormComponent implements OnInit {
    specialtyForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    isEdit = false;
    selfURL = '';

    constructor(
        private formBuilder: FormBuilder,
        private specialtyService: SpecialtyService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.specialtyForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['']
        });

        if (this.location.getState()['href']) {
            this.isEdit = true;
            this.selfURL = this.location.getState()['href'];
            this.specialtyService.getSpecialtyByURL(this.selfURL).subscribe((doctor: any) => {
                this.specialtyForm.controls.name.setValue(doctor.name);
                this.specialtyForm.controls.description.setValue(doctor.description);
            });
        }
    }

    submitSpecialty() {
        const doctor = {
            name: this.specialtyForm.value.name,
            description: this.specialtyForm.value.description,
            avatar: null
        };

        if (this.isEdit) {
            this.specialtyService.updateSpecialtyByURL(this.selfURL, doctor).subscribe(data => {
                this.router.navigate(['/especialidades']);
            });
        } else {
            this.specialtyService.createSpecialty(doctor).subscribe(data => {
                this.router.navigate(['/especialidades']);
            });
        }
    }
}

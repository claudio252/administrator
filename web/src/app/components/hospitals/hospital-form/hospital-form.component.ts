import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HospitalService } from '../hospital.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-hospital-form',
    templateUrl: 'hospital-form.component.html',
    styleUrls: [ './hospital-form.component.scss' ]
})

export class HospitalFormComponent implements OnInit {
    hospitalForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    isEdit = false;
    selfURL = '';

    constructor(
        private formBuilder: FormBuilder,
        private hospitalService: HospitalService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.hospitalForm = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required]
        });

        if (this.location.getState()['href']) {
            this.isEdit = true;
            this.selfURL = this.location.getState()['href'];
            this.hospitalService.getHospitalByURL(this.selfURL).subscribe((hospital: any) => {
                this.hospitalForm.controls.name.setValue(hospital.name);
                this.hospitalForm.controls.address.setValue(hospital.address);
            });
        }
    }

    submitHospital() {
        const hospital = {
            name: this.hospitalForm.value.name,
            address: this.hospitalForm.value.address,
            avatar: null
        };

        if (this.isEdit) {
            this.hospitalService.updateHospitalByURL(this.selfURL, hospital).subscribe(data => {
                this.router.navigate(['/hospitales']);
            });
        } else {
            this.hospitalService.createHospital(hospital).subscribe(data => {
                this.router.navigate(['/hospitales']);
            });
        }
    }
}

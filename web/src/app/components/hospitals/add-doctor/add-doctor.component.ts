import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HospitalService } from '../hospital.service';
import { DoctorService } from '../../doctors/doctor.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-add-doctor',
    templateUrl: 'add-doctor.component.html'
})

export class AddDoctorComponent implements OnInit {
    hospitalURL: string;
    addedDoctors: any[];
    allDoctors: any[];

    constructor(
        private location: Location,
        private router: Router,
        private hospitalService: HospitalService,
        private doctorService: DoctorService
    ) { }

    ngOnInit() {
        if (this.location.getState()['href']) {
            this.hospitalURL = this.location.getState()['href'];
            const responses = forkJoin(this.hospitalService.getAllDoctorsByHospitalURL(this.hospitalURL + '/doctors'),
                this.doctorService.getAllDoctors());
            responses.subscribe((data: any) => {
                console.log(data);
                this.addedDoctors = data[0]._embedded.doctor;
                this.allDoctors = data[1]._embedded.doctor;
            });
        } else {
            this.router.navigate(['/hospitales']);
        }
    }

    addDoctor(doctorUrl: string) {
        this.hospitalService.addDoctorToHospital(this.hospitalURL, doctorUrl).subscribe(response => {
            this.router.navigate(['/hospitales']);
        });
    }

    alreadyAdded(doctorUrl: string) {
        return this.addedDoctors.find((doctor: any) => {
            return doctor._links.doctor.href === doctorUrl;
        });
    }
}

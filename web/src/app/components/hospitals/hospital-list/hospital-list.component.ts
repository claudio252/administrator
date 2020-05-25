import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

export interface Hospital {
    position: number;
    name: string;
    lastName: string;
    address: string;
    birthDate: string;
}

@Component({
    selector: 'app-hospital-list',
    templateUrl: 'hospital-list.component.html',
    styleUrls: ['./hospital-list.component.scss']
})

export class HospitalListComponent implements OnInit {
    hospitals: any[];
    displayedColumns: string[] = ['position', 'name', 'lastName', 'address', 'birthDate'];
    dataSource: [];

    constructor(
        private hospitalService: HospitalService
    ) { }

    ngOnInit() {
        this.hospitalService.getAllHospitals().subscribe((data: any) => {
            this.hospitals = data._embedded.hospital;
            this.hospitals.forEach((hospital: any) => {
                hospital.dataSource = [];
                this.hospitalService.getAllDoctorsByHospitalURL(hospital._links.doctors.href).subscribe((dataDoctors: any) => {
                    hospital.dataSource = dataDoctors._embedded.doctor.map((doctor: any, index) => {
                        return {
                            position: index + 1,
                            name: doctor.name,
                            lastName: doctor.lastName,
                            address: doctor.address,
                            birthDate: doctor.birthDate
                        };
                    });
                });
            });
        });
    }

    deleteHospital(url: string) {
        this.hospitalService.deleteHospitalByURL(url).subscribe(data => {
            this.ngOnInit();
        });
    }
}

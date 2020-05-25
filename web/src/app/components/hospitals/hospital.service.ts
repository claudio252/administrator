import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HospitalService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getAllHospitals() {
        return this.httpClient.get('http://localhost:8080/hospital');
    }

    createHospital(hospital: any) {
        return this.httpClient.post('http://localhost:8080/hospital', hospital);
    }

    getHospitalByURL(url: string) {
        return this.httpClient.get(url);
    }

    updateHospitalByURL(url: string, hospital: any) {
        return this.httpClient.put(url, hospital);
    }

    deleteHospitalByURL(url: string) {
        return this.httpClient.delete(url);
    }

    getAllDoctorsByHospitalURL(url: string) {
        return this.httpClient.get(url);
    }

    addDoctorToHospital(hospital: any, doctorUrl: any) {
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Content-Type', 'text/uri-list');

        return this.httpClient.put(doctorUrl.href + '/hospital', hospital, { headers: httpHeaders });
    }

    private buildDoctorsRequest(doctors: any[]): string {
        let putRequestLine = '';
        doctors.forEach(doctor => {
            putRequestLine += doctor.href + '\n';
        });
        return putRequestLine;
    }
}

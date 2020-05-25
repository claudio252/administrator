import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PatientService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getAllPatients() {
        return this.httpClient.get('http://localhost:8080/patient');
    }

    createPatient(patient: any) {
        return this.httpClient.post('http://localhost:8080/patient', patient);
    }

    getPatientByURL(url: string) {
        return this.httpClient.get(url);
    }

    updatePatientByURL(url: string, patient: any) {
        return this.httpClient.put(url, patient);
    }

    deletePatientByURL(url: string) {
        return this.httpClient.delete(url);
    }

    getDoctorsByURL(doctorsURL: string) {
        return this.httpClient.get(doctorsURL);
    }
}

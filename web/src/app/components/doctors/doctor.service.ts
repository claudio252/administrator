import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DoctorService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getAllDoctors() {
        return this.httpClient.get('http://localhost:8080/doctor');
    }

    createDoctor(doctor: any) {
        return this.httpClient.post('http://localhost:8080/doctor', doctor);
    }

    getDoctorByURL(url: string) {
        return this.httpClient.get(url);
    }

    updateDoctorByURL(url: string, doctor: any) {
        return this.httpClient.put(url, doctor);
    }

    deleteDoctorByURL(url: string) {
        return this.httpClient.delete(url);
    }

    addPatientByURL(doctorURL: string, patientURL: string) {
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Content-Type', 'text/uri-list');

        return this.httpClient.put(doctorURL + '/patients', patientURL, { headers: httpHeaders });
    }

    getPatientByURL(patientsURL: string) {
        return this.httpClient.get(patientsURL);
    }

    getVisitNotesByURL(visitNotesURL: string) {
        return this.httpClient.get(visitNotesURL);
    }
}

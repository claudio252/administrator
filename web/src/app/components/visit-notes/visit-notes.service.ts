import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class VisitNoteService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getAllVisitNotes() {
        return this.httpClient.get('http://localhost:8080/visitNote');
    }

    createVisitNote(visitNote: any) {
        return this.httpClient.post('http://localhost:8080/visitNote', visitNote);
    }

    getVisitNoteByURL(url: string) {
        return this.httpClient.get(url);
    }

    updateVisitNoteByURL(url: string, visitNote: any) {
        return this.httpClient.put(url, visitNote);
    }

    deleteVisitNoteByURL(url: string) {
        return this.httpClient.delete(url);
    }

    addDoctorToVisitNote(visitNoteUrl: string, doctorUrl: string) {
        if (!doctorUrl) {
            return of('');
        }

        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Content-Type', 'text/uri-list');

        return this.httpClient.put(visitNoteUrl + '/doctor', doctorUrl, { headers: httpHeaders });
    }

    addPatientToVisitNote(visitNoteUrl: string, patientUrl: string) {
        if (!patientUrl) {
            return of('');
        }

        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Content-Type', 'text/uri-list');

        return this.httpClient.put(visitNoteUrl + '/patient', patientUrl, { headers: httpHeaders });
    }

    getDoctorFromVisitNote(doctorUrl: string) {
        return this.httpClient.get(doctorUrl);
    }

    getPatientFromVisitNote(patientUrl: string) {
        return this.httpClient.get(patientUrl);
    }

    findVisitNotesByDoctorId(doctorId: string) {
        return this.httpClient.get('http://localhost:8080/visitNote/search/findByDoctorId?doctorId=' + doctorId);
    }

    findVisitNotesByPatientId(patientId: string) {
        return this.httpClient.get('http://localhost:8080/visitNote/search/findByPatientId?patientId=' + patientId);
    }
}

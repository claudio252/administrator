import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SpecialtyService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getAllSpecialities() {
        return this.httpClient.get('http://localhost:8080/specialty');
    }

    createSpecialty(specialty: any) {
        return this.httpClient.post('http://localhost:8080/specialty', specialty);
    }

    getSpecialtyByURL(url: string) {
        return this.httpClient.get(url);
    }

    updateSpecialtyByURL(url: string, specialty: any) {
        return this.httpClient.put(url, specialty);
    }

    deleteSpecialtyByURL(url: string) {
        return this.httpClient.delete(url);
    }
}

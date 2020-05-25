import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from '../specialty.service';

@Component({
    selector: 'app-specialty-list',
    templateUrl: 'specialty-list.component.html',
    styleUrls: [ './specialty-list.component.scss' ]
})

export class SpecialtyListComponent implements OnInit {
    specialties: any[];
    constructor(
        private specialtyService: SpecialtyService
    ) { }

    ngOnInit() {
        this.specialtyService.getAllSpecialities().subscribe((data: any) => {
            this.specialties = data._embedded.specialty;
        });
    }

    deleteSpecialty(url: string) {
        this.specialtyService.deleteSpecialtyByURL(url).subscribe(data => {
            this.ngOnInit();
        });
    }
}

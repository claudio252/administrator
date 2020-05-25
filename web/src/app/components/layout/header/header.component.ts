import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    title: string;

    constructor(
        private location: Location
    ) { }

    ngOnInit() {
        this.location.onUrlChange(url => {
            this.title = url.replace('/', '');
        });
    }
}

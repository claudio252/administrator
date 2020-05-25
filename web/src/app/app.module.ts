import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalModule } from './components/hospitals/hospital.module';
import { LayoutModule } from './components/layout/layout.module';
import { DoctorModule } from './components/doctors/doctor.module';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';

const APP_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'YYYY-MM-DD',
        monthYearA11yLabel: 'YYYY-MM-DD',
    },
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        LayoutModule,
        HospitalModule,
        DoctorModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MomentDateModule
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: APP_FORMATS },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

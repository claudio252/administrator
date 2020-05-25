import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RightMenuComponent } from './right-menu/right-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        RouterModule,
        MatListModule,
        MatDividerModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        RightMenuComponent,
        HeaderComponent
    ],
    declarations: [
        RightMenuComponent,
        HeaderComponent
    ],
    providers: [],
})
export class LayoutModule { }

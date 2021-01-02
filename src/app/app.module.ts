import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { LoginModule } from './main/login/login.module';
import { PaClientListModule } from './main/pa-client-list/pa-client-list.module';
import { CommonModule } from '@angular/common';
import { PaUsersModule } from './main/pa-users/pa-users.module';
import { ManageSubscriptionModule } from './main/manage-subscription/manage-subscription.module';
import { AddClientsComponent } from './main/add-clients/add-clients.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { PaUserEditComponent } from './main/pa-user-edit/pa-user-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrganizationProfileModule } from './main/org-profile/org-profile.module'
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HolidayModule } from './main/holidays/holidays.module';
import { FaqModule } from './main/faq/faq.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AddClientsComponent,
        PaUserEditComponent,
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,
        MatDatepickerModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MaterialFileInputModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        LoginModule,
        SampleModule,
        PaClientListModule,
        PaUsersModule,
        ManageSubscriptionModule,
        OrganizationProfileModule,
        HolidayModule,
        FaqModule,
    ],
    entryComponents : [
        AddClientsComponent,
        PaUserEditComponent
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}

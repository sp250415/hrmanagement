import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module'
import { OrgProfileComponent } from './org-profile.component'
import { MaterialFileInputModule } from 'ngx-material-file-input';

const routes = [
    {
        path     : 'org-profile',
        component: OrgProfileComponent
    }
];

@NgModule({
    declarations: [
        OrgProfileComponent
    ],
    imports     : [
        RouterModule.forRoot(routes),

        //Material
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatChipsModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MaterialFileInputModule,
        FuseSharedModule,
        NgxChartsModule,
        FuseWidgetModule

    ],
    exports     : [
        OrgProfileComponent
    ]
})

export class OrganizationProfileModule
{
}
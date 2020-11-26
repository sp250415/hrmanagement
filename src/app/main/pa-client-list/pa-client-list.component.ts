import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { AddClientsComponent } from '../add-clients/add-clients.component';


@Component({
    selector: 'app-pa-client-list',
    templateUrl: './pa-client-list.component.html',
    styleUrls: ['./pa-client-list.component.scss'],
    animations: fuseAnimations
})
export class PaClientListComponent implements OnInit {

    displayedColumns: string[] = ['org_name', 'org_code', 'email', 'expiry', 'active_status', 'subscription', 'action'];
    dataSource = new MatTableDataSource();
    searchValues = new FormControl();
    spinner: boolean = false;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    // pageParam: PaginationParam;
    pageNumber = 1;
    length: number = 50;
    pageSize = 10;
    pageSizeOptions: any[] = [10, 20];
    rowsPerPage: any;
    pageEvent: PageEvent;



    constructor(private _fuseConfigService: FuseConfigService,
        public dialog: MatDialog) {
        this._fuseConfigService.config = {
            layout: {
                toolbar: {
                    hidden: false
                }
            }
        };
    }

    ngOnInit(): void {
        let data = [{
            orgname: 'IdealTechLabs',
            orgcode: 'ITL',
            email: 'itl@itl.com',
            expiry_date: '30/12/2020',
            is_active: 'Active',
            subscriptionType: 'PLATINUM'
        }]
        this.dataSource = new MatTableDataSource<object>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    addClients() {
        const dialogRef: MatDialogRef<any> = this.dialog.open(AddClientsComponent, {
            height: '80%',
            width: '65%'
        });
    }

    editClient(value) {
        console.log(value)
        const dialogRef: MatDialogRef<any> = this.dialog.open(AddClientsComponent, {
            height: '80%',
            width: '65%'
        });
    }
}

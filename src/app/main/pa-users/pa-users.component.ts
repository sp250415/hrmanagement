import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { PaUserEditComponent } from '../pa-user-edit/pa-user-edit.component';
// import swal from 'sweetalert2';


@Component({
    selector: 'app-pa-users',
    templateUrl: './pa-users.component.html',
    styleUrls: ['./pa-users.component.scss'],
    animations: fuseAnimations
})
export class PaUsersComponent implements OnInit {

    displayedColumns: string[] = ['username', 'name', 'role', 'email', 'mobile', 'action'];
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
    deletedUI: Boolean = false;



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
            username: 'IdealTechLabs',
            name: 'ITL',
            email: 'itl@itl.com',
            role: 'SAMPLE',
            mobile: '0145236474'
        }]
        this.dataSource = new MatTableDataSource<object>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (data, header) => data[header];
    }

    deletedUsers() {
        this.deletedUI = true;
    }

    activeUsers() {
        this.deletedUI = false;
    }

    editUser(value) {
        const dialogRef: MatDialogRef<any> = this.dialog.open(PaUserEditComponent, {
            height: '65%',
            width: '50%'
        });
    }

    deleteUser(value) {
        // swal.fire(
        //     'Deleted!',
        //     'User Deleted',
        //     'success'
        // );
    }


}

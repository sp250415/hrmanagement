import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
  animations: fuseAnimations
})
export class HolidaysComponent implements OnInit {

  displayedColumns: string[] = ['S.No', 'date', 'day', 'particulars'];
  dataSource = new MatTableDataSource();
  searchValues = new FormControl();
  spinner: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
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
    this.dataSource.data = [];
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (data, header) => data[header];
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { HolidayService } from 'app/services/holiday.service';
import { AddHolidayComponent } from '../add-holiday/add-holiday.component';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
  animations: fuseAnimations
})
export class HolidaysComponent implements OnInit {

  displayedColumns: string[] = ['S.No', 'date', 'day', 'particulars', 'action'];
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
  data: any;


  constructor(
    private _fuseConfigService: FuseConfigService,
    private holidayService: HolidayService,
    private _snackBar: MatSnackBar,
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
    this.data = this.holidayService.getAllHolidays()
    this.getHolidays();
  }

  addHoliday(){
    const dialogRef: MatDialogRef<any> = this.dialog.open(AddHolidayComponent, {
        height: '65%',
        width: '50%'
    });
    // dialogRef.componentInstance.updateValue = element;
    dialogRef.componentInstance.successResponse.subscribe((response:any)=>{
    dialogRef.close();
      switch(response){
        case 'CREATED':
            this._snackBar.open('Holiday Created Successfully', 'Close', {
              duration: 2000,
            });
            this.getHolidays();
          break;
        case 'DELETED':
            this._snackBar.open('Holiday Deleted Successfully', 'Close', {
              duration: 2000,
            });
            this.getHolidays();
          break;
      }
    })
  }

  getHolidays(){
    this.data.subscribe((value:any) => {
        console.log(value)
        this.dataSource = new MatTableDataSource<object>(value);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (data, header) => data[header];
    })
  }

  deleteHoliday(element){
      console.log(element)
    this.holidayService.deleteHolidays(data => {
        console.log(data)
    })
  }
}

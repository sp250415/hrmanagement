import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HolidayService } from 'app/services/holiday.service'

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.scss']
})
export class AddHolidayComponent implements OnInit {

    holidayForm: FormGroup;
    spinner: boolean = false;
    saveBoolean: boolean = true;
    @Input() updateValue:any = null;
    @Output() successResponse: EventEmitter<any> = new EventEmitter 

    constructor(
        private _formBuilder: FormBuilder,
        public dialog: MatDialog,
        private dialogRef: MatDialogRef<any>,
        private holidayService : HolidayService
    ) {
        this.holidayForm = this._formBuilder.group({
            date: ['', Validators.required],
            day: ['', Validators.required],
            particulars: ['', Validators.required]            
        });
    }

    ngOnInit(): void {
    
    }

    addHolidays() {
        if (this.holidayForm.valid) {
            this.holidayService.postHoliday(this.holidayForm.value).subscribe(data => {
                this.successResponse.emit('CREATED');        
            })
        }
    }
}

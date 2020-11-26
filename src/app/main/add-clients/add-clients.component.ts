import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-clients',
    templateUrl: './add-clients.component.html',
    styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

    clientForm: FormGroup;
    spinner: boolean = false;
    saveBoolean: boolean = true;

    constructor(
        private _formBuilder: FormBuilder,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private dialogRef: MatDialogRef<any>
    ) {
        this.clientForm = this._formBuilder.group({
            orgName: ['', Validators.required],
            orgCode: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            pan: [''],
            address: ['', Validators.required],
            plan: ['', Validators.required],
            users: ['', Validators.required],
            date: ['']
        });
    }

    ngOnInit(): void {
    }

    addClient() {
        if (this.clientForm.valid) {
            this.spinner = true;
            this.dialogRef.close()
            this._snackBar.open('Client has been Created Successfuly !', 'Close', {
                duration: 2000,
            });
            this.spinner = false;
        }
    }

}

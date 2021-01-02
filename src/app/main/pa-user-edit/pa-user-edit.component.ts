import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pa-user-edit',
    templateUrl: './pa-user-edit.component.html',
    styleUrls: ['./pa-user-edit.component.scss']
})
export class PaUserEditComponent implements OnInit {

    userForm: FormGroup;
    spinner: boolean = false;
    saveBoolean: boolean = true;
    constructor(
        private router: Router,
        private _formBuilder: FormBuilder,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private dialogRef: MatDialogRef<any>
    ) {
        this.userForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
        });
    }

    ngOnInit(): void {
    }

    editUser() {
        if (this.userForm.valid) {
            this.spinner = true;
            this.dialogRef.close()
            this._snackBar.open('User has been Updated Successfuly !', 'Close', {
                duration: 2000,
            });
            this.spinner = false;
        }
    }

    back() {
        this.dialogRef.close();
    }
}

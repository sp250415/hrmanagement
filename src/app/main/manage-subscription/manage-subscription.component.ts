import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-manage-subscription',
    templateUrl: './manage-subscription.component.html',
    styleUrls: ['./manage-subscription.component.scss'],
    animations: fuseAnimations
})
export class ManageSubscriptionComponent implements OnInit {

    usersCountForm: FormGroup;
    spinner: boolean = false;

    constructor(private router: Router,
        private _formBuilder: FormBuilder) {
        this.usersCountForm = this._formBuilder.group({
            basic: ['', Validators.required],
            premium: ['', Validators.required],
            standard: ['', Validators.required],
            platinum: ['', Validators.required],
        });
    }

    ngOnInit(): void {
    }

    update() {

    }

}

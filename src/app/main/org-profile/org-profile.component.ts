import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {
    MatSnackBar
} from '@angular/material/snack-bar';
import {
    Router
} from '@angular/router';
import {
    fuseAnimations
} from '@fuse/animations';

@Component({
    selector: 'app-org-profile',
    templateUrl: './org-profile.component.html',
    styleUrls: ['./org-profile.component.scss'],
    animations: fuseAnimations
})
export class OrgProfileComponent implements OnInit {

    orgForm: FormGroup;
    initial: Boolean = true;
    final: Boolean = false;
    branchOffice: any[] = [];
    bankDetails: any[] = [];

    constructor(
        private _formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private router: Router
    ) {
        this.orgForm = this._formBuilder.group({
            orgName: ['', Validators.required],
            orgCode: ['', Validators.required],
            country: ['', [Validators.email, Validators.required]],
            currency: [''],
            tax: ['', Validators.required],
            removableInput: [undefined, [Validators.required]],
            pan: ['', Validators.required],
            cin: ['', Validators.required],
            hasgst: [''],
            type: [''],
            hoaddress: [''],
            state: [''],
            mobile: [''],
            telephone: [''],
            email: [''],
            website: [''],
            fax: [''],
            sign: ['']
        });
    }

    ngOnInit(): void {}

    next() {
        this.initial = false;
        this.final = true;
    }
    back() {
        this.final = false;
        this.initial = true;
    }
    addBranch() {
        let branch = {
            branchname: '',
            branchaddress: '',
            branchstate: ''
        }
        this.branchOffice.push({});
    }

    addBank() {
        let banks = {
            boname: '',
            bankname: '',
            bankaddress: '',
            accountnumber: '',
            ifsc: '',
            swift: ''
        }
        this.bankDetails.push({});
    }
    save() {
        if (this.orgForm.valid) {
            this.router.navigate(['/paclients'])
            this._snackBar.open('Organization details saved Successfuly !', 'Close', {
                duration: 2000,
            });
        }

    }

    removeBank(i) {
        this.bankDetails.splice(i, 1);
    }

    removeBranch(i) {
        this.branchOffice.splice(i, 1);
    }

}
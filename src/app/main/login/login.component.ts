import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { LoginService } from 'app/services/login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  orgName: string;
  username: string;
  password: string;
  dropdown : Boolean = false;
  none : Boolean = false;
  
  constructor(private _formBuilder: FormBuilder,
    private _fuseConfigService: FuseConfigService,
    private router: Router,
    private loginService: LoginService) {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  //OninIt
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      remember: [''],
      orgName:['', Validators.required],
      radio: ['']
  });
}

onSubmit() {
  var checked = this.loginForm.get('remember').value;
  this.rememberMe(checked);
  if(this.loginForm.valid){
    
    //   localStorage.setItem("login data",this.loginForm.value);

    this.loginService.login(this.loginForm.value).subscribe(
      (result:any) => {
      if(result.success){
        localStorage.setItem('token', JSON.stringify(result.token));
        // this.router.navigate(['/pausers']);
        this.router.navigate(['/paclients']);
      }else{
        console.log(result);
      }
      },
      (error:any) => {
        console.log(error);
      })
      
  }
 }


  rememberMe(checked) {
    if (checked == true) {
      console.log("Remember me checked")
    } else {
      console.log("Not checked")
    }
  }

  routeToForgot() {
    console.log("rout forget pass")
  }

}

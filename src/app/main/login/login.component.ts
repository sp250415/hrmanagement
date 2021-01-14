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
export class LoginComponent{

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
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: true
          },
          footer   : {
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
      username   : ['', [Validators.required]],
      password: ['', Validators.required],
      remember: [''],
      orgName:['', Validators.required],
      radio: ['']
  });
}

onSubmit(login) {
  console.log(this.loginForm.value)
  var checked = this.loginForm.get('remember').value
  this.rememberMe(login,checked);
  if(this.loginForm.valid){
      console.log("Login Happens");
    //   localStorage.setItem("login data",this.loginForm.value);
      this.router.navigate(['/paclients']);
  }
 }

// onSubmit() {
//     //  this.router.navigateByUrl('calendar');
//      this.loginService.login(this.loginForm.value).subscribe( (response:any) => {
//       if(response.isUserLoggedIn){
//         console.log('logging in');
//         // this.router.navigateByUrl('/calendar')
//       }else{
//         // Swal.fire('Error!', response.error_message, 'warning');
//         console.log('error logging in');
//       }
//     })
//   }


rememberMe(login, checked) {
  if (checked == true) {
      console.log("Remember me checked")
  }else{
      console.log("Not checked")
  }
}

routeToForgot(){
  console.log("rout forget pass")
}

}

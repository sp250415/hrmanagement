import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(creds){
    return this.http.post('http://localhost:3000/login' , creds )
  }

  googleOauth(){
    return this.http.get('http://localhost:3000/auth/google')
  }
 
  signup(userInfo){
    return this.http.post('http://localhost:3000/register' , userInfo )
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/Models/Account.model';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),

    });

  isSignedIn = false
  constructor(private http: HttpClient,private router: Router, private authService:AuthService) { }
  ngOnInit(){
    if(localStorage.getItem('user')!== null){
        this.isSignedIn= true
    //  location.reload()
    }

    else
    this.isSignedIn = false
  }
  // async onSignin(email:string,password:string){
  //   await this.authService.signin(email,password)
  //     console.log("email",email)
  //     console.log("password",password)
  //   if(this.authService.isLoggedIn)
  //   this.isSignedIn = true
  // this.router.navigate(['/home']);
  // }
  async login(){
    await this.authService.signin(this.loginForm.value.email,this.loginForm.value.password)
      console.log("email",this.loginForm.value.email)
      console.log("password",this.loginForm.value.password)
    if(this.authService.isLoggedIn)
    this.isSignedIn = true
  this.router.navigate(['/home']);
  }

  handleLogout(){
    this.isSignedIn = false

  }

}

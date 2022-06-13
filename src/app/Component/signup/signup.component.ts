import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Account } from './../../Models/Account.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    title = 'firebase-angular-auth';
  isSignedIn = false
  signUpForm = new FormGroup({
      // username: new FormControl('',[Validators.required, Validators.pattern(/^[a-z]{3,10}$/i),]),
      password: new FormControl('',Validators.required),
      fullName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    });
  constructor(private http: HttpClient,private router: Router, private authService:AuthService) { }
    ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  
  // Template driven
  // async onSignup(email:string,password:string,fullName:string){
  //   await this.authService.signup(email,password,fullName)
  //   console.log("email",email)
  //   console.log("password",password)
  //   console.log("fullName",fullName)
  //   if(this.authService.isLoggedIn)
  //   this.isSignedIn = true
  // }

  async onSubmitSignUp(){
    await this.authService.signup(this.signUpForm.value.email,this.signUpForm.value.password,this.signUpForm.value.fullName)
    console.log("email",this.signUpForm.value.email)
    console.log("password",this.signUpForm.value.password)
    console.log("fullName",this.signUpForm.value.fullName)
      this.router.navigate(['login']);
    if(this.authService.isLoggedIn)
    this.isSignedIn = true
  }

  }



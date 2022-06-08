import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Account } from './../../Models/Account.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // account: Account[]=[];
//  Validators.pattern(/^[a-z]{4,10}$/i)
//   Không được bỏ trống, có độ dài từ 3 đến 10 ký tự, chỉ chứa ký tự alphabet.

  // reactive form
 signUpForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.pattern(/^[a-z]{3,10}$/i),]),
      password: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    });

// Template form
  // signUpForm = {
  //   username: '',
  //     password: '',
  //     phone: '',
  //     email: '',
  //     address:''
  // }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
//   console.log("A",this.signUpForm.get('username'))
// this.signUpForm.get('username');
  }
  onSubmitSignUp(){
    // reactive fomr
  this.http.post<any>("http://localhost:3000/accounts",this.signUpForm.value).subscribe(res=>{
        this.signUpForm.reset();
        this.router.navigate(['login']);
    });


  // template Form
  //  console.log(userForm);
  // console.log(userForm.value)
    // this.http.post<any>("http://localhost:3000/accounts",userForm.value).subscribe(res=>{
    //     userForm.reset();
    //     this.router.navigate(['login']);
    // });
  }

  }


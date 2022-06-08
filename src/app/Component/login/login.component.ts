import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/Models/Account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),

    });
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
   onLoginForm(){
    console.log("login",this.loginForm.value.username)
     this.http.get<Account[]>("http://localhost:3000/accounts").subscribe(res=>{
      const userLogin = res.find((user)=>{
        // console.log("username",this.loginForm.value.username);
        // console.log("pass",this.loginForm.value.password);
          return  user.username === this.loginForm.value.username && user.password === this.loginForm.value.password
        })
        console.log("userLogin",userLogin)
        if(userLogin){

        localStorage.setItem('user', JSON.stringify(userLogin));
        this.loginForm.reset();
        this.router.navigate(['/home']);
        alert ("Login successfully")
        setTimeout(()=>{
          window.location.reload();
        },300)
        }
    });

  }

}

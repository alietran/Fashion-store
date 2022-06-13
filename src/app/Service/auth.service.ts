import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt"
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
nameSigup:string;

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
            console.log("res.user",res.user)
    })
  }
  async signup(email: string, password : string,fullName:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{

      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      console.log("fullNameSV",fullName)
      console.log("res.userTR",res.user)
  return res.user?.updateProfile({
    displayName: fullName
  })
      console.log("res.userSau",res.user)
    })

  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}

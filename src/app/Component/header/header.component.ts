import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin : boolean;
  user : any;
  constructor() { }
  ngOnInit(): void {
    if(localStorage.getItem('user') ){
      this.isLogin =  true;
      console.log("sddgsg", this.isLogin)
      this.user =JSON.parse(localStorage.getItem('user') || "")
    }
    else {
      this.isLogin=false;
    }

  }

}

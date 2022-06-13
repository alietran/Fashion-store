import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin : boolean;
  public productList: Product[] = [];
  user : any;
  name: any;
  message: string;
  constructor(private api: ApiServiceService, private auth: AuthService) { }
  ngOnInit(): void {
      if(localStorage.getItem('user') ){
      this.isLogin =  true;
      this.user =JSON.parse(localStorage.getItem('user') || "")
    }
    else {
      this.isLogin=false;
    }
  this.api.currentMess.subscribe(message=>this.message = message)
  }

  // ngOnChange(){
  //     if(localStorage.getItem('user') ){
  //     this.isLogin =  true;
  //     this.user =JSON.parse(localStorage.getItem('user') || "")
  //   }
  //   else {
  //     this.isLogin=false;
  //   }
  // }
 newMess(){
   this.api.changeMess("HI");
 }
  search(){
    if(this.name == "") {
      this.ngOnInit();
    }
    else{
      this.productList = this.productList.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
  handleLogout(){
    this.auth.logout();
    if (!localStorage.getItem('foo')) {
    localStorage.setItem('foo', 'no reload')
    location.reload()
  } else {
    localStorage.removeItem('foo')
  }
  }
}

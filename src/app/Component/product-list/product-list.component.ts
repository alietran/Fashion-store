import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { ApiServiceService } from 'src/app/Service/api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = [];
  name: any;
keyword:string;
  message: string;
   constructor(private api: ApiServiceService){

   }
  ngOnInit(): void {
    this.api.getProduct().subscribe(data=>{
       console.log("data",data)
      this.productList = data
    })
    // gán biến giả để reload 1 lần
    if (!localStorage.getItem('foo')) {
    localStorage.setItem('foo', 'no reload')
    location.reload()
  } else {
    localStorage.removeItem('foo')
  }
      this.api.currentMess.subscribe(message=>this.message = message)
      this.api.currentKeyword.subscribe(keyword=>this.keyword = keyword)
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



}

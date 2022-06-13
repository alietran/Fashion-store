import { Product } from './../Models/Product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  product: Product[] = [];
  api="http://localhost:3000/products";

  private mess = new BehaviorSubject<string>("default mess");
  currentMess = this.mess.asObservable();

  private keyword = new BehaviorSubject<string>("");
  currentKeyword = this.keyword.asObservable();

  constructor(private http: HttpClient) { }
// kh cần pipe.map vẫn chạy vậy pipe.map để làm gì
  getProduct(){
    return this.http.get<Product[]>(this.api).pipe(map(res => {
      return res
    }))
  }
  listProductById(id: number){
    return this.http.get<Product[]>(this.api + "/" + id);
  }

  changeMess(message: string){
    this.mess.next(message);
  }

  sendKeyword(keyword: string){
     this.keyword.next(keyword);
  }

   getProductDetail (id : number) {
    let param1 = new HttpParams().set('id', id);
    return this.http.get<Product>(this.api, {params : param1});
  }
}

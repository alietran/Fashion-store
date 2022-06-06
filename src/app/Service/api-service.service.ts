import { Product } from './../Models/Product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  product: Product[] = [];
  api="http://localhost:3000/products";

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

}

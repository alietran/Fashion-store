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

   constructor(private api: ApiServiceService){

   }
  ngOnInit(): void {
    this.api.getProduct().subscribe(data=>{
       console.log("data",data)
      this.productList = data
    })

  }

}

import { CartService } from 'src/app/Service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { Product } from 'src/app/Models/Product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  dataPro:any;
  id:any;
  product!: Product;
  constructor( private route: ActivatedRoute,
    private api: ApiServiceService,
    private router: Router,
    private cartService: CartService) {
      this.id = this.route.snapshot.params['id'];
    this.api.listProductById(this.id).subscribe((res)=>{
      // console.log(res);
        this.dataPro = res;
    })
  }

  ngOnInit(): void {

  }
addToCartList(){
  // nêu lấy this.product sẽ kh hiểu dc các thuộc tính product vì đã gán sp theo id vào dataPro
  //Tim hiểu dataPro: any khác vs product ntn mà product kh sd dc
  this.cartService.addToCart(this.dataPro);
  this.router.navigate(['cart']);
  }

}

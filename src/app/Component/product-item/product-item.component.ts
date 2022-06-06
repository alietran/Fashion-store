import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item !: Product;
  id:any;
  dataPro:any;
  // product!: Product;
  constructor(  private router: Router,
    private api: ApiServiceService,
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
    this.api.listProductById(this.id).subscribe((res)=>{
        this.dataPro = res;
    })
  }

  productDetail(id: number){
    this.router.navigate(['productDetail',id]);
  }

  addToCart(){
    this.cartService.addToCart(this.dataPro);
    this.router.navigate(['cart']);
  }
}

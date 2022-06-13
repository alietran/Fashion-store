import { CartService } from 'src/app/Service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { Product } from 'src/app/Models/Product.model';
import { CartItem } from 'src/app/Models/CartItem.model';
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
        this.dataPro = res;
    })
  }

  ngOnInit(): void {

  }
addToCartList(){
  //  console.log("this.dataPro", this.product);
  // nêu lấy this.product sẽ kh hiểu dc các thuộc tính product vì đã gán sp theo id vào dataPro
  //Tim hiểu dataPro: any khác vs product ntn mà product kh sd dc
  this.cartService.addToCart(this.dataPro);
  this.router.navigate(['cart']);
  }
    addToCart(id: number){
     this.api.getProductDetail(id).subscribe((data : any) => {
       data = data[0];
      if(localStorage.getItem('cart')){ //co san pham trong gio hang
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        let found : boolean = false;
        cart.find((item : any) => {
          if(item.id == id) { //sp pham vua add da ton tai trong gio hang
            item.quanty += 1;
            found = true;
          }
        });
        
        if (found) { 
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        else { //sp vua add chua co trong cart
          let productItem : Product = new Product(id, data.title, data.price, data.category, data.description, data.image);
          let cartItem = new CartItem(productItem);
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log(cart);
        }

      }
      else{ //chua them san pham nao vao gio hang - gio hang rong
        let productItem : Product = new Product(id, data.title, data.price, data.category, data.description, data.image);
        let cartItem = new CartItem(productItem);
        let cart : any[] = [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    })
   
    // setTimeout(() => {
    //   if (confirm("Go to Card")) {
    //     this.router.navigate(['cart']);
    //   };
    // }, 500)
  }
  
}

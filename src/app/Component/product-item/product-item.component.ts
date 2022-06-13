import { Cart } from './../../Models/Cart.model';
import { CartItem } from './../../Models/CartItem.model';
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
   private cartList : Cart  ;

  // product!: Product;
  constructor(  private router: Router,
    private api: ApiServiceService,
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    //  this.id = this.route.snapshot.params['id'];
   
  }

  productDetail(id: number){
    this.router.navigate(['productDetail',id]);
  }

  addToCart1(){
      this.api.listProductById(this.id).subscribe((res:any)=>{
        res= res[0];
        let productItem : Product = new Product(res.id, res.title, res.price, res.category, res.description, res.image);
          let cartItem = new CartItem(productItem);
        let cartList : any[] = [];
        cartList.push(cartItem);
 localStorage.setItem('cartList', JSON.stringify(cartList));
    })
    console.log("this.id", this.id)
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

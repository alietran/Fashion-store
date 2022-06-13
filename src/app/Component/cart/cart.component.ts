import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/Models/Cart.model';
import { CartItem } from 'src/app/Models/CartItem.model';
import { CartService } from 'src/app/Service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!:Cart; 
  cartList : any[] = [];
  constructor(private cartService: CartService ) {
  
    // console.log("carrt",this.cartService)

   }
  ngOnInit(): void {
  // console.log("cart-cartlist",this.cart);
 this.cartList = JSON.parse(localStorage.getItem('cart') || '[]');
  }

 
  removeItemFromCart(id : number ){
    console.log("id",id);
   let removeItem = JSON.parse(localStorage.getItem('cart') || '[]');
  this.cartList = removeItem.filter((item:any)=>{
    console.log("item.id",  item.id)
    console.log("id", id)

   return item.id !== id})
     localStorage.setItem('cart', JSON.stringify(  this.cartList));

  }



 setCart(){
  //  let  cartList =  [];

  this.cart = this.cartService.getCart();
  // this.cart = cartList;
  console.log("this.cart",this.cart)
  // localStorage.setItem('cartList', JSON.stringify(this.cart));
  // let cartListItem = this.cart.itemCartList;

  // localStorage.setItem('cartListItem', JSON.stringify(cartListItem));

 }
  getTotalPrice() : number {
    let totalPrice = 0;
    this.cartList.forEach(item =>{
      //kh ép kiểu dc
      totalPrice += +item.price * item.quanty;
      // + phía trước để ép kiểu string về number

    })
    return  totalPrice;
    }
}

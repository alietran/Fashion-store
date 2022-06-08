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

  constructor(private cartService: CartService ) {
    this.setCart();
    // console.log("carrt",this.cartService)

   }
  ngOnInit(): void {
  // console.log("cart-cartlist",this.cart);

  }

  removeItemFromCart(cartItem : CartItem ){
    this.cartService.removeItem(cartItem.product.id);
    this.setCart();
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

}

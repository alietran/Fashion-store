
import { Injectable } from '@angular/core';
import { Cart } from '../Models/Cart.model';
import { CartItem } from '../Models/CartItem.model';
import { Product } from '../Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cartList : Cart = new Cart() ;

  constructor() {}

  //lưu ds sp đã thêm vào mảng
  addToCart(product: Product): void{
    console.log("product ad to cart",product)
    let cartItem = this.cartList.itemCartList.find(item=>item.id === product.id);
    if(cartItem){
      this.changeQuantity(product.id, cartItem.quanty + 1);
      //  localStorage.setItem('cartItem', JSON.stringify(cartItem));
      return;
    }
    this.cartList.itemCartList.push(new CartItem(product));
  }

  removeItem(productId: number) : void{
    this.cartList.itemCartList = this.cartList.itemCartList.filter(item => item.product.id != productId)
  }

  changeQuantity(productId: number, quanty:number){
    let cartItem = this.cartList.itemCartList.find(item=>item.id === productId)
    if(!cartItem) return;
    cartItem.quanty = quanty;
  }

  getCart(): any{
    console.log("cartlist",this.cartList);
    let cartListItem = this.cartList;
localStorage.setItem('cartListItem', JSON.stringify(cartListItem));
  console.log("cartlist123",this.cartList);
    // JSON.parse(localStorage.getItem('cartList') || '[]');
    return this.cartList;

  }


}

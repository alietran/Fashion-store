
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
//     if(!localStorage.getItem('cartListItem') || undefined)
//       {this.cartList = new Cart();
//       console.log("A")
//       }
// // this.cartList = new Cart();
//          console.log("B")
//         console.log("Aaa", JSON.parse(localStorage.getItem('cartListItem') || '[]'));
//         let listCart : any = JSON.parse(localStorage.getItem('cartListItem') || '[]');
//         console.log("1244",typeof(listCart));

//         let i = 0;
//         // if(typeof(listCart).toString() == 'Array')


// //         listCart.forEach((element: any) => {
// // //            function addElement (cartList, listCart) {
// // //     let newList = Object.assign(cartList, thí.listCart)
// // //     return newList
// // // }
// //                   this.cartList.itemCartList.push(listCart);
// //         // this.cartList.itemCartList[i] =  new CartItem();
// //         //  this.cartList.itemCartList[i].product = element.product;
// //         //  this.cartList.itemCartList[i].quanty = element.quanty;
// //           console.log( "this.cartList.itemCartList[i]",this.cartList.itemCartList[i]);
// //         i++;

// //         });
// //         console.log(typeof(localStorage.getItem('cartListItem')))
//       // let  a = JSON.parse(localStorage.getItem('cartListItem'))
//       // this.cartList.itemCartList = JSON.parse(localStorage.getItem('cartListItem') || '{}');

//      console.log("cartList123",this.cartList);
//   }



  //lưu ds sp đã thêm vào mảng
  addToCart(product: Product): void{
    console.log("product ad to cart",product)
    let cartItem = this.cartList.itemCartList.find(item=>item.product.id === product.id);
    if(cartItem){
      this.changeQuantity(product.id, cartItem.quanty + 1);
      return;
    }
    this.cartList.itemCartList.push(new CartItem(product));
  }

  removeItem(productId: number) : void{
    this.cartList.itemCartList = this.cartList.itemCartList.filter(item => item.product.id != productId)
  }

  changeQuantity(productId: number, quanty:number){
    let cartItem = this.cartList.itemCartList.find(item=>item.product.id === productId)
    if(!cartItem) return;
    cartItem.quanty = quanty;
  }

  getCart(): Cart{
    console.log("cartlist",this.cartList);
    let cartListItem = this.cartList;
    localStorage.setItem('cartList', JSON.stringify(cartListItem));
    return this.cartList;

  }


}

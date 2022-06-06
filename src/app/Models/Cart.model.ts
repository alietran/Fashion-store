import { CartItem } from "./CartItem.model";
export class Cart{
  itemCartList:CartItem[] = [];

  getTotalPrice() : number {
    let totalPrice = 0;
    this.itemCartList.forEach(item =>{
      //kh ép kiểu dc
      totalPrice += +item.product.price;
      // + phía trước để ép kiểu string về number

    })
    return  totalPrice;
    }
}

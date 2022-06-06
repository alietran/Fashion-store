import { Product } from "./Product.model";

export class CartItem extends Product
{
     product: Product;
    quanty: number = 1 ;
    constructor(product : Product){
      // if(product){
      //   this.product= product ;
      // }
      // // this.quanty=quanty;
      // // this.getPrice()

      super(product.id,product?.title, product?.price,product?.category,product?.description, product?.image)
  }

    getPrice():number{
      return this.product.price * this.quanty;
    }

}

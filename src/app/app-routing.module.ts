import { CartComponent } from './Component/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';

import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';

const routes: Routes = [
  {path:"",component: ProductListComponent},
  {path:"cart",component: CartComponent},
  {path:"productDetail/:id",component: ProductDetailComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

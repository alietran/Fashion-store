// import { ProductComponent } from './Component/product/product.component';
import { CartComponent } from './Component/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';

import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
// children
  // {path:"productDetail",component: ProductComponent, children:[
  //   {path:"", component: ProductListComponent},
  //   {path:":id",component: ProductDetailComponent},
  // ]},
  // {path:"", redirectTo: "/productDetail", pathMatch:"full"},

 {path:"home",component: ProductListComponent},
{path:"", redirectTo: "/home", pathMatch:"full"},
  {path:"cart",component: CartComponent},
  {path:"signup",component: SignupComponent},
  {path:"login",component: LoginComponent},
   {path:"productDetail/:id",component: ProductDetailComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

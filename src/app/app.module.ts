import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';

import { FooterComponent } from './Component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Component/cart/cart.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductItemComponent } from './Component/product-item/product-item.component';
import { LoginComponent } from './Component/login/login.component';
import { AccountComponent } from './Component/account/account.component';
import { SignupComponent } from './Component/signup/signup.component';
import { ProductComponent } from './Component/product/product.component';
// import { CartItemComponent } from './Component/cart-item/cart-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    LoginComponent,
    AccountComponent,
    SignupComponent,
    ProductComponent,
    // CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

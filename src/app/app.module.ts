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
    // CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

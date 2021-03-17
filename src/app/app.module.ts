import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { SignComponent } from './components/sign/sign.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { InpBtnComponent } from './components/inp-btn/inp-btn.component';
import { SearchComponent } from './components/search/search.component';
import { BackComponent } from './components/back/back.component';
import { PagesComponent } from './components/pages/pages.component';
import { ReviewComponent } from './components/review/review.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    NavComponent,
    CartComponent,
    SignComponent,
    SliderComponent,
    ProductsComponent,
    ProductComponent,
    FooterComponent,
    ProductCardComponent,
    InpBtnComponent,
    SearchComponent,
    BackComponent,
    PagesComponent,
    ReviewComponent,
    ShoppingCartComponent,
    SubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

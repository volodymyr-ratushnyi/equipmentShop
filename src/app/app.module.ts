import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { SearchComponent } from './components/search/search.component';
import { PagesComponent } from './components/pages/pages.component';
import { ReviewComponent } from './components/review/review.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';
import { BtnComponent } from './components/btn/btn.component';
import { InpComponent } from './components/inp/inp.component';
import { StarsComponent } from './components/stars/stars.component';
import { SelectComponent } from './components/select/select.component';
import { MessageComponent } from './components/message/message.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    SearchComponent,
    PagesComponent,
    ReviewComponent,
    ShoppingCartComponent,
    SubtotalComponent,
    BtnComponent,
    InpComponent,
    StarsComponent,
    SelectComponent,
    MessageComponent,
    CartItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

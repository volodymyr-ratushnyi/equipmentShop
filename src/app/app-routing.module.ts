import { ProductComponent } from './components/product/product.component';
import { SignComponent } from './components/sign/sign.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '', component: ShopComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'sign', component: SignComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'search', component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

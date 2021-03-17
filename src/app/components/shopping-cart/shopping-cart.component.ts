import { IProduct, IProductAndCount } from './../../interfaces/iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: IProductAndCount[] = JSON.parse(`${localStorage.getItem('products')}`);
  // product = {} as IProduct;
  counts = Array;
  locStorLen = this.products.length;
  count = 0;
  referer = 'https://nodejs-final-mysql.herokuapp.com'
  constructor() { }

  ngOnInit(): void {
  };
}

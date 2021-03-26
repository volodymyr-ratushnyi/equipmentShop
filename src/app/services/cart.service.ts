import { IProduct, IProductAndCount } from '../interfaces';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: IProductAndCount[] = [];
  subtotal = 0;
  count = 0;
  subSubtotal = new Subject();
  subCount = new Subject();
  constructor() { }

  addToCart(product: IProduct, count: number): void {
    this.checkProducts();
    const prod = this.products.find(item => JSON.stringify(item.product) === JSON.stringify(product));

    if (prod) {
      prod.count = count;
      localStorage.setItem('products', JSON.stringify(this.products));
      this.calculateSubtotal();
      return;
    }
    this.products.push({ product, count });
    localStorage.setItem('products', JSON.stringify(this.products));
    this.calculateSubtotal();
  }
  checkProducts(): void {
    JSON.parse(`${localStorage.getItem('products')}`)
      ? this.products = JSON.parse(`${localStorage.getItem('products')}`)
      : localStorage.setItem('products', JSON.stringify(this.products));
  }

  deleteFromCart(i: number): void {
    this.products = JSON.parse(`${localStorage.getItem('products')}`);
    this.products.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
    this.calculateSubtotal();
  }
  calculateSubtotal(): void {
    this.count = 0;
    this.subtotal = 0;
    this.checkProducts();
    this.products.forEach((item) => {
      this.subtotal += item.product.price * item.count;
      this.count += item.count;
    });
    this.subSubtotal.next(this.subtotal);
    this.subCount.next(this.count);
  }

}

import { IProduct, IProductAndCount } from './../../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = {} as IProduct;
  referer = 'https://nodejs-final-mysql.herokuapp.com';
  id = '';
  products: IProductAndCount[] = [];
  counts = Array;
  count = 1;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get<IProduct>(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).
      subscribe((res: IProduct) => {
        this.product = res;
      })
  }
  addToCart(): void {
    let returner = false;
    JSON.parse(`${localStorage.getItem('products')}`)
      ? this.products = JSON.parse(`${localStorage.getItem('products')}`)
      : localStorage.setItem('products', JSON.stringify([]));
    this.products.forEach((item) => {
      if (JSON.stringify(item.product) === JSON.stringify(this.product)) {
        console.log('ss');
        item.count = parseInt(`${item.count}`);
        this.count = parseInt(`${this.count}`);
        item.count += this.count;
        localStorage.setItem('products', JSON.stringify(this.products));
        returner = true;
      }
    })
    if (returner) return;
    this.products.push({ product: this.product, count: this.count });
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}

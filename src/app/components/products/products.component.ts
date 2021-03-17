import { IProduct, IPage } from './../../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  valuePage = 1;
  pages: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.http.get<IPage>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.valuePage}`)
      .subscribe((res: IPage) => {
        this.products = res.products;
        this.pages = Array(res.pages);
      });
  }
  changeValuePage(i: number): void {
    this.valuePage = i;
    this.getProducts();
  }

}

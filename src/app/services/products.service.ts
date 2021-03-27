import { HttpClient } from '@angular/common/http';
import { IPage, IProduct } from '../interfaces';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  logSubject = new Subject();
  referer = 'https://nodejs-final-mysql.herokuapp.com';

  constructor(private http: HttpClient) { }

  getTopProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://nodejs-final-mysql.herokuapp.com/products/top');
  }
  getProducts(param: string): Observable<IPage> {
    return this.http.get<IPage>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${param}`);
  }
  getProductsSearch(keyWord: string): Observable<IPage> {
    return this.http.get<IPage>
      (`https://nodejs-final-mysql.herokuapp.com/products?keyword=${keyWord}&pageNumber=`);
  }
  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://nodejs-final-mysql.herokuapp.com/products/${id}`);
  }

}

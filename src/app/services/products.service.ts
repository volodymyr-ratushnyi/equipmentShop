import { HttpClient } from '@angular/common/http';
import { IPage, IProduct } from '../interfaces';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  logSubject = new Subject();
  searchSubject = new Subject();
  referer = 'https://shopqqqqqqqqqqqq.herokuapp.com';

  constructor(private http: HttpClient) { }

  getTopProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://shopqqqqqqqqqqqq.herokuapp.com/api/products/top');
  }
  getProducts(param: string): Observable<IPage> {
    return this.http.get<IPage>(`https://shopqqqqqqqqqqqq.herokuapp.com/api/products?keyword=&pageNumber=${param}`);
  }
  getProductsSearch(keyWord: string): Observable<IPage> {
    return this.http.get<IPage>
      (`https://shopqqqqqqqqqqqq.herokuapp.com/api/products?keyword=${keyWord}&pageNumber=`);
  }
  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://shopqqqqqqqqqqqq.herokuapp.com/api/products/${id}`);
  }

}

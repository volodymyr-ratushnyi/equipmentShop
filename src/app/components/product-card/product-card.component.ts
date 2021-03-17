import { IProduct } from './../../interfaces/iproduct';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product = {} as IProduct;
  referer = 'https://nodejs-final-mysql.herokuapp.com'
  constructor() { }

  ngOnInit(): void {
  }
}

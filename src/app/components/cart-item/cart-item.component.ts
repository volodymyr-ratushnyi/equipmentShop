import { IProduct } from 'src/app/interfaces';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { IProductAndCount } from '../../interfaces';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item = {} as IProductAndCount;
  @Input() index = 0;
  @Output() outDeleteFromCart = new EventEmitter<number>();
  referer = this.productsService.referer;
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

  }
  outCount(count: number, product: IProduct): void {
    this.cartService.addToCart(product, count);
  }
  deleteFromCart(i: number): void {
    this.outDeleteFromCart.emit(i);
  }

}

import { ProductsService } from './../../services/products.service';
import { CartService } from './../../services/cart.service';
import { IProduct, IProductAndCount } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: IProductAndCount[] = JSON.parse(`${localStorage.getItem('products')}`);
  product = {} as IProduct;
  counts = Array;
  count = 0;

  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngOnInit(): void {
  }

  onDeleteFromCart(i: number): void {
    this.cartService.deleteFromCart(i);
    this.products = JSON.parse(`${localStorage.getItem('products')}`);
  }
}

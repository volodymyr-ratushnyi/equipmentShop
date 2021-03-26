import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { IProduct, IProductAndCount } from '../../interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = {} as IProduct;
  referer = this.productsService.referer;
  id = '';
  literal = 'id';
  counts = Array;
  count = 1;
  loader = true;
  constructor(private activateRoute: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) {
    this.id = activateRoute.snapshot.params[this.literal];
  }

  ngOnInit(): void {
    this.productsService.getProductById(this.id).subscribe((res: IProduct) => {
      this.product = res;
      this.loader = false;
    });
  }
  addToCart(): void {
    this.cartService.addToCart(this.product, this.count);
  }
  outCount(i: number): void {
    this.count = i;
  }

}

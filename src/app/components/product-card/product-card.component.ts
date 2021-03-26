import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { IProduct } from '../../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product = {} as IProduct;
  referer = this.productService.referer;
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }
  goToProduct(): void {
    this.router.navigate(['product', this.product._id]);
  }
}

import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  topProducts: IProduct[] = [];
  referer = this.productsService.referer;
  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getTopProducts().subscribe((res: IProduct[]) => {
      this.topProducts = res;
    });
  }
  goToProduct(product: IProduct): void {
    this.router.navigate(['product', product._id]);
  }

}

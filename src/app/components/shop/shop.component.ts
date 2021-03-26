import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { IProduct, IPage } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  valuePage = 1;
  pages: any;
  loader = true;
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.productsService.getProducts(param.page).subscribe((res: IPage) => {
        this.products = res.products;
        this.pages = new Array(res.pages);
        this.loader = false;
      });
    });
  }
}

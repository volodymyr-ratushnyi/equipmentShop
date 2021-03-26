import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { IProduct, IPage } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: IProduct[] = [];
  pages: any;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.productsService.getProductsSearch(param.keyword).subscribe((res: IPage) => {
        this.products = res.products;
        this.pages = new Array(res.pages);
      });
    });
  }
}

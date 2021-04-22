import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { IProduct, IPage } from '../../interfaces';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  pages: any;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.productsService.getProductsSearch(param.keyword).subscribe((res: IPage) => {
        this.products = res.products;
        this.pages = new Array(res.pages);
      });
    });
  }

  ngOnDestroy(): void {
    this.productsService.searchSubject.next('');
  }
}

import { SearchService } from './../../services/search.service';
import { IProduct, IPage } from './../../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: IProduct[] = [];
  valuePage = this.searchService.valuePage;
  pages: any;
  constructor(private http: HttpClient, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.searchService.subSearch.subscribe((res: any) => {
      this.products = res.products;
      this.pages = Array(res.pages);
    })
  }
  changeValuePage(i: number): void {
    this.searchService.setValuePage(i);
    this.valuePage = this.searchService.valuePage;
    console.log(this.valuePage, this.searchService.keyWord);

    this.http.get<IPage>
      (`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.searchService.keyWord}&pageNumber=${this.searchService.valuePage}`)
      .subscribe((res: IPage) => {
        this.searchService.subSearch.next(res);
      });
  }
}

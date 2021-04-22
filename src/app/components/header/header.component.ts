import { ProductsService } from './../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyWord = '';
  s = '';
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productsService.searchSubject.subscribe((res: any) => {
      this.keyWord = res;
    })
  }
  outVal(s: string): void {
    this.keyWord = s;

  }
  search(): void {

    this.keyWord
      ? this.router.navigate(['search', this.keyWord])
      : this.router.navigate(['']);
  }
}

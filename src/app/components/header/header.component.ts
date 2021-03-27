import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/interfaces';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyWord = '';
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
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

import { ProductsService } from './../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input() pages: any[] = [];
  valuePage = 1;
  literal = 'page';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService) {

  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params[this.literal]) {
      this.valuePage = this.activatedRoute.snapshot.params[this.literal];
    }
  }
  changePage(i: number): void {
    this.valuePage = i;
    this.router.navigate(['/page', i]);
  }
}

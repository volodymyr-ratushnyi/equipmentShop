import { Subscription } from 'rxjs';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  user = 'SIGN IN';
  unSub = new Subscription();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.unSub = this.productsService.logSubject.subscribe((res: any) => {
      this.user = res;
    });
    this.user = JSON.parse(`${localStorage.getItem('user')}`)
      && JSON.parse(`${localStorage.getItem('user')}`).role === 'admin'
      ? 'ADMIN'
      : 'SIGN IN';
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }

}

import { CartService } from './../../services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit, OnDestroy {
  suma = 0;
  count = 0;
  subTot!: Subscription;
  subCon!: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.calculateSubtotal();
    this.suma = this.cartService.subtotal;
    this.count = this.cartService.count;
    this.subTot = this.cartService.subSubtotal.subscribe((res: any) => {
      this.suma = res;
    });
    this.subCon = this.cartService.subCount.subscribe((res: any) => {
      this.count = res;
    });
  }

  ngOnDestroy(): void {
    this.subTot.unsubscribe();
    this.subCon.unsubscribe();
  }

}

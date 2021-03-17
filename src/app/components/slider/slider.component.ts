import { IProduct } from './../../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  topProducts: IProduct[] = [];
  referer = 'https://nodejs-final-mysql.herokuapp.com'
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.http.get<IProduct[]>('https://nodejs-final-mysql.herokuapp.com/products/top').subscribe((res: IProduct[]) => {
      this.topProducts = res;
    })
  }
}

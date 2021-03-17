import { HttpClient } from '@angular/common/http';
import { IPage } from './../../interfaces/iproduct';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp-btn',
  templateUrl: './inp-btn.component.html',
  styleUrls: ['./inp-btn.component.scss']
})
export class InpBtnComponent implements OnInit {
  constructor(private http: HttpClient, private searchService: SearchService) { }
  keyWord = '';
  ngOnInit(): void {
  }

  setSearchValue() {
    this.http.get<IPage>
      (`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.keyWord}&pageNumber=${this.searchService.valuePage}`)
      .subscribe((res: IPage) => {
        this.searchService.subSearch.next(res);
      });
    this.searchService.setKeyWord(this.keyWord);
  }

}

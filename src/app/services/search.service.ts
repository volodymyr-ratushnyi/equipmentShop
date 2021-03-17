import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  subSearch = new Subject;
  valuePage = 1;
  keyWord = '';
  constructor() { }
  setValuePage(i: number) {
    this.valuePage = i;
  }
  setKeyWord(s: string) {
    this.keyWord = s;
  }
}

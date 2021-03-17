import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input('pages') pages: any;
  @Input('valuePage') valuePage = 1;
  @Output() changeValuePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  changePage(i: number): void {
    this.changeValuePage.emit(i);
  }
}

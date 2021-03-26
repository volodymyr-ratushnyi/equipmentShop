import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() allCount = 1;
  @Input() count = 1;
  @Output() outCount = new EventEmitter<number>();
  counts = Array;
  constructor() { }

  ngOnInit(): void {
  }
  onCount(i: number): void {
    this.outCount.emit(i);
  }
}

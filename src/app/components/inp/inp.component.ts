import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.scss']
})
export class InpComponent implements OnInit {
  outValue = '';
  @Input() classForComp = '';
  @Input() placeholder = '';
  @Input() type = '';
  @Input() inputFormControlName = '';
  @Output() outVal = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onOutVal(val: string): void {
    this.outVal.emit(val);
  }

}

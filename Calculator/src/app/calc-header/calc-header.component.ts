import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-calc-header]',
  templateUrl: './calc-header.component.html',
  styleUrls: ['./calc-header.component.css']
})
export class CalcHeaderComponent implements OnInit {

  @Input('parentTitle') public header_name;

  constructor() { }

  ngOnInit() {
  }

}

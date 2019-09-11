import { LogicService } from './../services/logic.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-calc-display]',
  templateUrl: './calc-display.component.html',
  styleUrls: ['./calc-display.component.css']
})
export class CalcDisplayComponent implements OnInit {

    // tslint:disable-next-line: no-input-rename
    public displayString;

    // tslint:disable-next-line: variable-name
    constructor(private _logicService: LogicService) { }

    ngOnInit() {
      this.displayString = this._logicService.getString(null);
    }
}

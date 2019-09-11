import { Injectable, Output } from '@angular/core';
import { CalcDisplayComponent } from '../calc-display/calc-display.component';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  public res_str: string;

  constructor() {
  }

  getString(str): string
  {
    this.res_str = (!str) ? '0' : str;
    return this.res_str;
  }
}

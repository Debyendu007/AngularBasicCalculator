import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcHeaderComponent } from './calc-header/calc-header.component';
import { CalcDisplayComponent } from './calc-display/calc-display.component';
import { CalcControlsComponent } from './calc-controls/calc-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcHeaderComponent,
    CalcDisplayComponent,
    CalcControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

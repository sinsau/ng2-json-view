import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsonTree } from 'ng2-json-view';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, JsonTree ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

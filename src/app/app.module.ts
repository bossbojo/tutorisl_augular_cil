import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppD } from './app.directive';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component'

@NgModule({
  declarations: [
    AppComponent,
    AppD,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

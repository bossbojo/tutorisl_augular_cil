import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { AppD } from './app.directive';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ServicCreateComponent } from './servic-create/servic-create.component';
import { ServicshowComponent } from './servicshow/servicshow.component';
import { GuardComponent } from './guard/guard.component';
import { AppGuard } from './app.guard';



@NgModule({
  declarations: [
    AppComponent,
    AppD,
    Child1Component,
    Child2Component,
    ServicCreateComponent,
    ServicshowComponent,
    GuardComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppGuard,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

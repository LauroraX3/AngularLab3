import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Komponent1Component } from './komponent1/komponent1.component';
import { Komponent2Component } from './komponent2/komponent2.component';
import { FormsModule } from "@angular/forms";
import { Komponent3Component } from './komponent3/komponent3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Komponent4Component } from './komponent4/komponent4.component';
import { Komponent5Component } from './komponent5/komponent5.component';
import { Zad12komponent1Component } from './zad12komponent1/zad12komponent1.component';
import { Zad12komponent2Component } from './zad12komponent2/zad12komponent2.component';
import { Zad14komponent1Component } from './zad14komponent1/zad14komponent1.component';
import { Zad14komponent2Component } from './zad14komponent2/zad14komponent2.component';
import { Zad15komponent1Component } from './zad1516komponent1/zad15komponent1.component';
import { Zad15komponent2Component } from './zad1516komponent2/zad15komponent2.component';
import { Zad1516komponent3Component } from './zad1516komponent3/zad1516komponent3.component';
import { Zad17komponent1Component } from './zad17komponent1/zad17komponent1.component';
import { Zad17komponent2Component } from './zad17komponent2/zad17komponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Komponent1Component,
    Komponent2Component,
    Komponent3Component,
    Komponent4Component,
    Komponent5Component,
    Zad12komponent1Component,
    Zad12komponent2Component,
    Zad14komponent1Component,
    Zad14komponent2Component,
    Zad15komponent1Component,
    Zad15komponent2Component,
    Zad1516komponent3Component,
    Zad17komponent1Component,
    Zad17komponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

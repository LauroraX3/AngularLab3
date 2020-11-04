import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
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
import { Zad9Component } from './zad9_10_11komponent/zad9.component';
import { Zad19Component } from './zad19komponent/zad19.component';
import { Zad20Component } from './zad20komponent/zad20.component';
import { Zad25Component } from './zad25komponent/zad25.component';
import { NumberState25Service } from './zad25komponent/number-state25.service';
import { Zad26Component } from './zad26komponent/zad26.component';
import { Zad26A2Component } from './zad26komponent/zad26-2.component';
import { NumberState26Service } from './zad26komponent/number-state26.service';
import { Zad30HomeComponent } from './zad30komponent/zad30.home.component';
import { Zad30KontaktComponent } from './zad30komponent/zad30.kontakt.component';
import { Zad30oNasComponent } from './zad30komponent/zad30.oNas.component';
import { Zad30MainComponent } from './zad30komponent/zad30.main.component';
import { Zad2124komponent1Component } from './zad21_24i27komponent/zad21_24komponent1/zad21_24komponent1.component';
import { Zad2124komponent2Component } from './zad21_24i27komponent/zad21_24komponent2/zad21_24komponent2.component';
import { Zad2124komponent3Component } from './zad21_24i27komponent/zad21_24komponent3/zad21_24komponent3.component';
import { LinksService } from './zad21_24i27komponent/zad21_24komponent1/links.service';
import { PhotosService } from './zad28i32komponent/photos.service';
import { Zad2832komponent1Component } from './zad28i32komponent/zad28_32komponent1/zad2832komponent1.component';
import { Zad2832komponent2Component } from './zad28i32komponent/zad28_32komponent2/zad2832komponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Komponent1Component,
    Komponent2Component,
    Komponent3Component,
    Komponent4Component,
    Komponent5Component,
    Zad9Component,
    Zad12komponent1Component,
    Zad12komponent2Component,
    Zad14komponent1Component,
    Zad14komponent2Component,
    Zad15komponent1Component,
    Zad15komponent2Component,
    Zad1516komponent3Component,
    Zad17komponent1Component,
    Zad17komponent2Component,
    Zad19Component,
    Zad20Component,
    Zad2124komponent1Component,
    Zad2124komponent2Component,
    Zad2124komponent3Component,
    Zad25Component,
    Zad26Component,
    Zad26A2Component,
    Zad30HomeComponent,
    Zad30KontaktComponent,
    Zad30oNasComponent,
    Zad30MainComponent,
    Zad2832komponent1Component,
    Zad2832komponent2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [NumberState25Service, NumberState26Service, LinksService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

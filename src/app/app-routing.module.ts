import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Zad2832komponent2Component } from './zad28i32komponent/zad28_32komponent2/zad2832komponent2.component';
import { Zad2832komponent1Component } from './zad28i32komponent/zad28_32komponent1/zad2832komponent1.component';
import { Zad30HomeComponent } from './zad30komponent/zad30.home.component';
import { Zad30KontaktComponent } from './zad30komponent/zad30.kontakt.component';
import { Zad30oNasComponent } from './zad30komponent/zad30.oNas.component';
import { Zad2124komponent1Component } from './zad21_24i27komponent/zad21_24komponent1/zad21_24komponent1.component';
import { Zad2124komponent3Component } from './zad21_24i27komponent/zad21_24komponent3/zad21_24komponent3.component';
import { Zad2124komponent2Component } from './zad21_24i27komponent/zad21_24komponent2/zad21_24komponent2.component';

const routes: Routes = [
  {path: 'home', component: Zad30HomeComponent },
  {path: '', component: Zad30HomeComponent },
  {path: 'oNas', component: Zad30oNasComponent },
  {path: 'kontakt', component: Zad30KontaktComponent },
  {path: 'listaZwierzakow', component: Zad2832komponent1Component },
  {path: 'zwierzak', component: Zad2832komponent2Component },
  {path: 'dodaj', component: Zad2124komponent1Component},
  {path: 'edytuj', component: Zad2124komponent1Component },
  {path: 'strony/:id/szczegoly', component: Zad2124komponent2Component},
  {path: 'strony/:id/usun', component: Zad2124komponent3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

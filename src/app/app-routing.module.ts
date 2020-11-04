import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Zad30HomeComponent } from './zad30komponent/zad30.home.component';
import { Zad30KontaktComponent } from './zad30komponent/zad30.kontakt.component';
import { Zad30oNasComponent } from './zad30komponent/zad30.oNas.component';

const routes: Routes = [
  {path: 'home', component: Zad30HomeComponent },
  {path: '', component: Zad30HomeComponent },
  {path: 'oNas', component: Zad30oNasComponent },
  {path: 'kontakt', component: Zad30KontaktComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

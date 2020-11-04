import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-komponent1></app-komponent1>
    <app-komponent2></app-komponent2>
    <app-komponent3></app-komponent3>
    <app-komponent4></app-komponent4>
    <app-zad12komponent1></app-zad12komponent1>
    <app-zad14komponent1></app-zad14komponent1>
    <app-zad15komponent1></app-zad15komponent1>
    <router-outlet></router-outlet>
    
    <div id="divRed">
      <app-zad17komponent1></app-zad17komponent1>
    </div>
    
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ang1';
}

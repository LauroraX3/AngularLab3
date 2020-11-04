import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-zad30homekomponent',
  template: `
  <h1>Zad 30 - komponent home</h1>
  <button routerLink="/home" routerLinkActive="active" type="button">Home</button>
  <button routerLink="/oNas" routerLinkActive="active" type="button">O nas</button>
  <button routerLink="/kontakt" routerLinkActive="active" type="button">Kontakt</button>
  `,
  styleUrls: [ ]
})
export class Zad30HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }


}
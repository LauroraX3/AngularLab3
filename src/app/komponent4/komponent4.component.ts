import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent4',
  templateUrl: './komponent4.component.html',
  styleUrls: [ './komponent4.component.scss']
})
export class Komponent4Component implements OnInit {

  cyfra: number = 0;
  cyfra2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addOne(){
    this.cyfra = this.cyfra +1;
  }

  deleteOne(){
    this.cyfra = this.cyfra -1;
  }

  //-----------------Zadanie 8 -----------------------
  dodajOdejmij(element : number){
    this.cyfra2 = this.cyfra2 + element;
  }
}

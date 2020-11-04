import { Component, OnInit } from '@angular/core';
import { NumberState26Service } from './number-state26.service';


@Component({
  selector: 'app-zad26komponent',
  templateUrl: './zad26.component.html',
  styleUrls: [ ]
})
export class Zad26Component implements OnInit {

  constructor(public numberState: NumberState26Service) { }


  ngOnInit(): void {
  }

  dodajOdejmij(element : number){
    this.numberState.dodajOdejmij(element);
  }

  getCyfra() {
      return this.numberState.cyfra;
  }


}
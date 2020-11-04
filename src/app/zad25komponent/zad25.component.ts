import { Component, OnInit } from '@angular/core';
import { NumberState25Service } from './number-state25.service';


@Component({
  selector: 'app-zad25komponent',
  templateUrl: './zad25.component.html',
  styleUrls: [ ]
})
export class Zad25Component implements OnInit {

  constructor(private numberState: NumberState25Service) { }


  ngOnInit(): void {
  }

  dodajOdejmij(element : number){
    this.numberState.dodajOdejmij(element);
  }

  getCyfra() {
      return this.numberState.cyfra;
  }

}
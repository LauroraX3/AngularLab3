import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberState25Service {
  cyfra: number;

  constructor() {
    this.cyfra = 0;
  }

  dodajOdejmij(element : number){
    this.cyfra = this.cyfra + element;
  }
}

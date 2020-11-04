import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent1',
  templateUrl: './komponent1.component.html',
  styleUrls: [ './komponent1.component.scss']
})
export class Komponent1Component implements OnInit {

  imieNazwiskoZad1 : string = null;
  imieNazwiskoZad2 : string = null;
  imieNazwiskoZad3 : string = null;
  imieNazwiskoZad4 : string = null;
  ClassesCSS: any
  ClassesCSS2: any;
  ClassesCSS3: any;

  constructor() { }

  ngOnInit(): void {
  }

  //---------------------zad 1-----------------------
  wyswietlImieNazwiskoZad1(){
    this.imieNazwiskoZad1 = "Katarzyna Łyszczarz"
  }

  //---------------------zad 2-----------------------

  wyswietlImieNazwiskoZad2(){
    this.imieNazwiskoZad2 = "Katarzyna Łyszczarz"
  }
  ustawKlase20px(){
    this.ClassesCSS = "fontSize20px"
  }

  ustawKlaseGreenColorAndLineThrough(){
    this.ClassesCSS = "greenColorAndLineThrough"
  }

  //---------------------zad 3-----------------------

  wyswietlImieNazwiskoZad3(){
    this.imieNazwiskoZad3 = "Katarzyna Łyszczarz"
  }

  ustawKlasyZad3(){
    this.ClassesCSS2 = {"greenColorAndLineThrough": true, "fontSize20px": true};
  }

  //---------------------zad 4-----------------------

  wyswietlImieNazwiskoZad4(){
    this.imieNazwiskoZad4 = "Katarzyna Łyszczarz"
  }
  ustawKlasyZad4(){
    this.ClassesCSS3 = {"greenColorAndLineThrough": true, "fontSize20px": true};
  }

  usunKlasyZad4(){
      this.ClassesCSS3 = {"greenColorAndLineThrough": false, "fontSize20px": false};
  }

  usunKlase20px(){
    if(this.ClassesCSS3.greenColorAndLineThrough == true) {
      this.ClassesCSS3 = {"fontSize20px": false, "greenColorAndLineThrough": true};
    } else {
      this.ClassesCSS3 = {"fontSize20px": false, "greenColorAndLineThrough": false};
    }
  }

  usunKlaseGreenLineThrough(){
    if(this.ClassesCSS3.fontSize20px == true) {
      this.ClassesCSS3 = {"greenColorAndLineThrough": false, "fontSize20px": true};
    } else {
      this.ClassesCSS3 = {"greenColorAndLineThrough": false, "fontSize20px": false};
    }
  }

  dodajKlase20px(){
    if(this.ClassesCSS3.greenColorAndLineThrough == true) {
      this.ClassesCSS3 = {"fontSize20px": true, "greenColorAndLineThrough": true};
    } else {
      this.ClassesCSS3 = {"fontSize20px": true, "greenColorAndLineThrough": false};
    }
  }

  dodajKlaseGreenLineThrough(){
    if(this.ClassesCSS3.fontSize20px == true) {
      this.ClassesCSS3 = {"greenColorAndLineThrough": true, "fontSize20px": true};
    } else {
      this.ClassesCSS3 = {"greenColorAndLineThrough": true, "fontSize20px": false};
    }
  }
}

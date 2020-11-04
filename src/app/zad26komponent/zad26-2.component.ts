import { Component, Input, OnInit } from '@angular/core';
import { NumberState26Service } from './number-state26.service';


@Component({
  selector: 'app-zad26Akomponent',
  templateUrl: './zad26-2.component.html',
  styleUrls: [ ]
})
export class Zad26A2Component implements OnInit {

  constructor(public numberState: NumberState26Service) { 
  }


  ngOnInit(): void {
  }


}
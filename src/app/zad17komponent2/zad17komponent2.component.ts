import { Component, OnInit } from '@angular/core';
import {Zad17DataStringService} from "../../zad17dataString.service";

@Component({
  selector: 'app-zad17komponent2',
  templateUrl: './zad17komponent2.component.html',
  styleUrls: ['./zad17komponent2.component.scss']
})
export class Zad17komponent2Component implements OnInit {

  receivedPhoto: string;

  constructor( private dataString: Zad17DataStringService) {
    dataString.currentMessageString.subscribe(photo =>{
      this.receivedPhoto = photo;
    })
  }

  ngOnInit(): void {
  }

}

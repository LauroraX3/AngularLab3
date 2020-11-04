import { Component, OnInit } from '@angular/core';
import {DataBooleanService} from "../../dataBoolean.service";

@Component({
  selector: 'app-zad12komponent2',
  templateUrl: './zad12komponent2.component.html',
  styleUrls: [ './zad12komponent2.component.scss']
})
export class Zad12komponent2Component implements OnInit {

  constructor(private data: DataBooleanService) { }

  ngOnInit(): void {
  }

  newMessage(): void {
    console.log('Wysłano wiadomosc ');
    this.data.changeMessage(false);
  }



}

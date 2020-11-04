import { Component, OnInit } from '@angular/core';
import {DataBooleanService} from "../../dataBoolean.service";

@Component({
  selector: 'app-zad12komponent1',
  templateUrl: './zad12komponent1.component.html',
  styleUrls: [ './zad12komponent1.component.scss']
})
export class Zad12komponent1Component implements OnInit {

  isOn: boolean = false;

  constructor(private data: DataBooleanService) { }

  ngOnInit(): void {


    this.data.currentMessage.subscribe(
      message=> {
        this.isOn = message;
    });

  }
}

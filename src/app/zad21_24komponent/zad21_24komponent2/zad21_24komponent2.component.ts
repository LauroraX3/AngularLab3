import { Component, OnInit } from '@angular/core';

import { DataStringService } from "../../../dataString.service";
import {DataStringZad15Service} from "../../../dataStringZad15.service";
import { DataBooleanZad16Service } from "../../../dataBooleanZad16.service";


@Component({
  selector: 'app-zad2124komponent2',
  templateUrl: './zad21_24komponent2.component.html',
  styleUrls: [ './zad21_24komponent2.component.scss']
})
export class Zad2124komponent2Component implements OnInit {

  opis: string;
  cosZServisu: boolean;

  constructor(private dataStringZad15: DataStringZad15Service, private  dataBooleamZad16: DataBooleanZad16Service) {
  }

  ngOnInit(): void {
    this.dataStringZad15.currentMessageString.subscribe(
        message=> {
          this.opis = message;
        });

  }

}

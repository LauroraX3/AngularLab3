import { Component, OnInit } from '@angular/core';
import {DataStringZad15Service} from "../../../dataStringZad15.service";
import {DataBooleanZad16Service} from "../../../dataBooleanZad16.service";


@Component({
  selector: 'app-zad2124komponent3',
  templateUrl: './zad21_24komponent3.component.html',
  styleUrls: [ './zad21_24komponent3.component.scss']
})
export class Zad2124komponent3Component implements OnInit {

  constructor(private dataStringZad15: DataStringZad15Service, private  dataBooleamZad16: DataBooleanZad16Service) {
  }

  ngOnInit(): void {
  }

  takUsun(){
    this.dataBooleamZad16.changeMessage(true);
  }

  nieNieUsuwaj(){
    this.dataBooleamZad16.changeMessage(true);
  }

}

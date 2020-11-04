import { Component, OnInit } from '@angular/core';
import {DataStringZad15Service} from "../../../dataStringZad15.service";
import {DataBooleanZad16Service} from "../../../dataBooleanZad16.service";
import { LinksService } from '../zad21_24komponent1/links.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-zad2124komponent3',
  templateUrl: './zad21_24komponent3.component.html',
  styleUrls: [ './zad21_24komponent3.component.scss']
})
export class Zad2124komponent3Component implements OnInit {

  constructor(
    private dataStringZad15: DataStringZad15Service, 
    private  dataBooleamZad16: DataBooleanZad16Service,
    private route: Router,
    private linksService: LinksService) {
  }

  ngOnInit(): void {
  }

  takUsun(){
    var r = /\d+/;
    var index = this.route.url.match(r)[0];  
    this.linksService.links.splice(parseInt(index), 1);
    this.dataBooleamZad16.changeMessage(true);
  }

  nieNieUsuwaj(){
    this.dataBooleamZad16.changeMessage(true);
  }

}

import { Component, OnInit } from '@angular/core';

import {LINKS} from "./mock-links";
import {Link} from "./link";
import {DataStringZad15Service} from "../../dataStringZad15.service";
import {DataBooleanZad16Service} from "../../dataBooleanZad16.service";


@Component({
  selector: 'app-zad15komponent1',
  templateUrl: './zad15komponent1.component.html',
  styleUrls: [ './zad15komponent1.component.scss']
})
export class Zad15komponent1Component implements OnInit {

  isOn: boolean = false;
  links = LINKS;
  selectedLink: Link;

  constructor(private dataStringZad15: DataStringZad15Service, private  dataBooleamZad16: DataBooleanZad16Service) {
  }

  ngOnInit(): void {
    this.dataBooleamZad16.currentMessage.subscribe(message => {
      this.dataStringZad15.changeMessageStringZad15("");
      this.isOn = false;
      if(message){
        let index = this.links.indexOf(this.selectedLink);
        if(index != -1){
          this.links.splice(index, 1);
        }
      }
    })

  }

  onSelect(link: Link): void{
    this.selectedLink = link;
    this.dataStringZad15.changeMessageStringZad15(this.selectedLink.opis);
  }

  potwierdzUsuniecie(link: Link): void{
    this.selectedLink = link;
    this.isOn = true;
  }

}

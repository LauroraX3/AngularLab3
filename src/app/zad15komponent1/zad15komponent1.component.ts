import { Component, OnInit } from '@angular/core';

import {LINKS} from "./mock-links";
import {Link} from "./link";
import {DataStringZad15Service} from "../../dataStringZad15.service";


@Component({
  selector: 'app-zad15komponent1',
  templateUrl: './zad15komponent1.component.html',
  styleUrls: [ './zad15komponent1.component.scss']
})
export class Zad15komponent1Component implements OnInit {

  links = LINKS;
  selectedLink: Link;

  constructor(private dataStringZad15: DataStringZad15Service) {
  }

  ngOnInit(): void {
  }

  onSelect(link: Link): void{
    this.selectedLink = link;
    this.dataStringZad15.changeMessageStringZad15(this.selectedLink.opis);
  }

}

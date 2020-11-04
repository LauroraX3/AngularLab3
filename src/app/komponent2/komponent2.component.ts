import { Component, OnInit } from '@angular/core';
import {Link} from "./link";
import {LINKS} from "./mock-links";

@Component({
  selector: 'app-komponent2',
  templateUrl: './komponent2.component.html',
  styleUrls: [ './komponent2.component.scss']
})
export class Komponent2Component implements OnInit {

  links = LINKS;
  selectedLink: Link;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(link: Link): void{
    this.selectedLink = link;
  }

}

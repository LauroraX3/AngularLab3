import { Component, OnInit } from '@angular/core';
import {LINKS} from "../komponent2/mock-links";
import {Link} from "../komponent2/link";

@Component({
  selector: 'app-komponent3',
  templateUrl: './komponent3.component.html',
  styleUrls: [ './komponent3.component.scss']
})
export class Komponent3Component implements OnInit {

  links = LINKS;
  selectedLinks: Array<Link> = new Array<Link>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(link: Link): void{
    let index = this.selectedLinks.indexOf(link)
    if(index == -1){
      this.selectedLinks.push(link)
    } else {
      this.selectedLinks.splice(index, 1);
    }
  }

}

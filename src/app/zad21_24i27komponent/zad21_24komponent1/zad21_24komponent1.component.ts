import { Component, OnInit } from '@angular/core';

import {LINKS} from "./mock-links";
import {Link} from "./link";
import {DataStringZad15Service} from "../../../dataStringZad15.service";
import {DataBooleanZad16Service} from "../../../dataBooleanZad16.service";
import $ from 'jquery';
import { LinksService } from './links.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zad2124komponent1',
  templateUrl: './zad21_24komponent1.component.html',
  styleUrls: [ './zad21_24komponent1.component.scss']
})
export class Zad2124komponent1Component implements OnInit {

  isOn: boolean = false;
  selectedLink: Link;

  name: string;
  adres: string;
  opis: string;

  zmienOpis: string;

  constructor(
    private dataStringZad15: DataStringZad15Service, 
    private  dataBooleamZad16: DataBooleanZad16Service,
    public linksService: LinksService,
    public router: Router) {
  }

  ngOnInit(): void {
    this.dataBooleamZad16.currentMessage.subscribe(message => {
      this.dataStringZad15.changeMessageStringZad15("");
      this.isOn = false;

      
      if(message){
        
        let index = this.linksService.links.indexOf(this.selectedLink);
        if(index != -1){
          this.linksService.links.splice(index, 1);
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

  addLink() {
    var newLink = {name: this.name, linkAddres: this.adres, opis: this.opis} as Link;
    this.linksService.links.push(newLink);
    
    $('#addLinkInp').find('input:text').val(''); 
  }

  clear() {
    $('#addLinkInp').find('input:text').val(''); 
  }

  changeDescription() {
    var podanaNazwa = $('#nazwaWpisanegoAdresu').val();
    
    if(this.name && this.opis && this.adres ) {
      document.getElementById('czyWszystkiePola').textContent = "Jedno z pol jest puste"
    }
    var changeSuccesfull = this.linksService.changeDescription(podanaNazwa, this.zmienOpis);
    if(changeSuccesfull) {
      document.getElementById('czyOpisZostalZmieniony').textContent = "Opis został zmieniony!"
      $('#opisForm').find('input:text').val(''); 
      return
    }

    $('#opisForm').find('input:text').val(''); 
    document.getElementById('czyOpisZostalZmieniony').textContent = "Opis nie został zmieniony!"
  }

  checkInputs() {
    if(this.name && this.opis && this.adres ) {
      return true;
    }
    return false;
  }
}

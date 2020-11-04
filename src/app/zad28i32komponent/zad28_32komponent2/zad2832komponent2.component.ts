import { Component, OnInit } from '@angular/core';
import {Zad17DataStringService} from "../../../zad17dataString.service";

@Component({
  selector: 'app-zad2832komponent2',
  templateUrl: './zad2832komponent2.component.html',
  styleUrls: ['./zad2832komponent2.component.scss']
})
export class Zad2832komponent2Component implements OnInit {

  receivedPhoto: string;

  constructor( private dataString: Zad17DataStringService) {
    dataString.currentMessageString.subscribe(photo =>{
      this.receivedPhoto = photo;
    })
  }

  ngOnInit(): void {
  }

}

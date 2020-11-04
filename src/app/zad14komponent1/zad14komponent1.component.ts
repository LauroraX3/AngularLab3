import { Component, OnInit } from '@angular/core';
import { DataBooleanService } from "../../dataBoolean.service";
import { DataStringService } from "../../dataString.service";

@Component({
  selector: 'app-zad14komponent1',
  templateUrl: './zad14.komponent1.component.html',
  styleUrls: [ './zad14.komponent1.component.scss']
})
export class Zad14komponent1Component implements OnInit {

  isOn: boolean = false;
  message: string;

  constructor(private data: DataBooleanService, private dataString: DataStringService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
        message=> {
          this.isOn = message;
        });

    this.dataString.currentMessageString.subscribe(
        message => {
            this.message = message;
        });
  }
}

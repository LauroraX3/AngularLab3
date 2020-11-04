import { Component, OnInit } from '@angular/core';
import {DataBooleanService} from "../../dataBoolean.service";
import {DataStringService} from "../../dataString.service";
import {Zad17DataStringService} from "../../zad17dataString.service";

@Component({
  selector: 'app-zad17komponent1',
  templateUrl: './zad17komponent1.component.html',
  styleUrls: ['./zad17komponent1.component.scss']
})
export class Zad17komponent1Component implements OnInit {

  photos : string[] = ["https://static.fajnyzwierzak.pl/media/uploads/media_image/auto/tag/63/mobile/kroliki.jpeg",
    "https://fajnepodroze.pl/wp-content/uploads/2020/03/krolik.jpg",
      "https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/542/krolik-miniaturka.jpg"
  ];
  selPhoto: string = this.photos[0];
  ClassesCSS: any;

  constructor( private dataString: Zad17DataStringService) {
  }

  ngOnInit(): void {
    this.dataString.changeMessageString(this.selPhoto);
    this.ClassesCSS = {"bg-color" : true};
  }

  selectedPhoto(selectedPhoto : string){
    this.selPhoto = selectedPhoto;
    this.dataString.changeMessageString(this.selPhoto);
  }

  isPhotoSelected(selectedPhoto : string): boolean{
    return this.selPhoto === selectedPhoto;
  }

  previousPhoto(){
    let currentPhotoIndex: number = this.photos.indexOf(this.selPhoto);
    if(currentPhotoIndex == 0){
      currentPhotoIndex = this.photos.length -1;
    } else {
      currentPhotoIndex--;
    }
    this.selPhoto = this.photos[currentPhotoIndex];
    this.dataString.changeMessageString(this.selPhoto);
  }

  nextPhoto(){
    let currentPhotoIndex: number = this.photos.indexOf(this.selPhoto);
    if(currentPhotoIndex == this.photos.length-1){
      currentPhotoIndex = 0;
    } else {
      currentPhotoIndex++;
    }
    this.selPhoto = this.photos[currentPhotoIndex];
    this.dataString.changeMessageString(this.selPhoto);
  }
}

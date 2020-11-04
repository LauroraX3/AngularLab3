import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

export interface PeriodicElement {
    imageUrl: string;
    imageUrl2: string;
    imageUrl3: string;
    position: number;
    
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, imageUrl: 'https://images.wallpaperscraft.com/image/waterfall_lake_river_191677_1920x1080.jpg',  imageUrl2: 'https://images.wallpaperscraft.com/image/waterfall_cliff_trees_150050_1920x1080.jpg', imageUrl3: 'https://images.wallpaperscraft.com/image/waterfall_cliff_river_157595_1920x1080.jpg' },
    { position: 2, imageUrl: 'https://images.wallpaperscraft.com/image/waterfall_cliff_river_183989_1920x1080.jpg',  imageUrl2: 'https://images.wallpaperscraft.com/image/waterfall_river_cliff_159010_1920x1080.jpg', imageUrl3: 'https://images.wallpaperscraft.com/image/waterfall_cliff_water_160382_1920x1080.jpg' },
    { position: 3, imageUrl: 'https://images.wallpaperscraft.com/image/waterfall_river_rock_148159_1920x1080.jpg',  imageUrl2: 'https://images.wallpaperscraft.com/image/waterfall_cliff_river_154198_1920x1080.jpg', imageUrl3: 'https://images.wallpaperscraft.com/image/waterfall_cliff_trees_150753_1920x1080.jpg' },
  ];

@Component({
  selector: 'app-zad9komponent',
  templateUrl: './zad9.component.html',
  styleUrls: [ './zad9.component.scss' ]
})

export class Zad9Component implements OnInit {

  displayedColumns: string[] = ['position', 'imageUrl', 'imageUrl2', 'imageUrl3'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    
  }

  showPhoto(ev) {
    $('#showWarningMsg').get(0).innerHTML = "";
    $('#pokazZdjecia').empty();
    $('#'+ `${ev.target.id}`).clone().appendTo("#pokazZdjecia");
    $('#previouslyBtn').attr('disabled', false);
    $('#nextBtn').attr('disabled', false);
  }

  previouslyPhoto() {
    if($('#pokazZdjecia').children().length === 0) {
      $('#showWarningMsg').get(0).innerHTML = "Dodaj zdjęcie do widoku!"
    }
    var img = $('#pokazZdjecia').children()[0];
    var imgId = $(img).attr('id');

    // ! ZAD 10 i 11
    if(imgId === '12') {
      // ! ZAD 10
      //$('#previouslyBtn').attr('disabled', true);

      // ! ZAD 11
      //$('#previouslyBtn').hide();
    }

    if(imgId === '11') {
      $('#showWarningMsg').get(0).innerHTML = "To jest pierwsze zdjęcie, nie można cofać!"
      
      return;
    }
    
    var checkPhotoPlace =  Math.floor((imgId / 10));

    if((imgId % 10 === 1)) {
      imgId -= 8;
    } else {
      imgId = imgId - 1;
    }
    
    $('#pokazZdjecia').empty();
    $('#'+ `${imgId}`).clone().appendTo("#pokazZdjecia");
    
  }

  nextPhoto() {
    if($('#pokazZdjecia').children().length === 0) {
      $('#showWarningMsg').get(0).innerHTML = "Dodaj zdjęcie do widoku!"
    }
    var img = $('#pokazZdjecia').children()[0];
    var imgId = $(img).attr('id');

     // ! ZAD 10 i 11
     if(imgId === '32') {
       // ! ZAD 10
      //$('#nextBtn').attr('disabled', true);

      // ! ZAD 11
      //$('#nextBtn').hide();
    }

    if(imgId === '33') {
      $('#showWarningMsg').get(0).innerHTML = "To jest ostatnie zdjęcie, nie można cofać!"
      $('#nextBtn').attr('disabled', true);
      return;
    }
    
    var checkPhotoPlace =  Math.floor((imgId / 10));
    console.log(checkPhotoPlace)
    console.log(imgId)
    if((imgId % 10 === 3)) {
      imgId = parseInt(imgId) + 8;
    } else {
      imgId = parseInt(imgId) + 1;
    }
    console.log(imgId)
    $('#pokazZdjecia').empty();
    $('#'+ `${imgId}`).clone().appendTo("#pokazZdjecia");
    
  }

}

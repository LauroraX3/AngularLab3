import { Injectable } from '@angular/core';
import { Link } from 'src/app/komponent2/link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  LINKS: Link[];
  constructor() {
    this.LINKS = [
      { name: 'Facebook', linkAddres: 'https://www.facebook.com/', opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nibh massa. Maecenas fermentum quam quis purus posuere, eu dictum mi finibus. Donec commodo, orci nec facilisis feugiat, arcu tellus posuere nulla, non ullamcorper lectus purus et ipsum.' } as Link,
      { name: 'Youtube', linkAddres: 'https://www.youtube.com/', opis: 'dfsfsfdsfsd sit amet, consectetur adipiscing elit. Donec sed nibh massa. Maecenas fermentum quam quis purus posuere, eu dictum mi finibus. Donec commodo, orci nec facilisis feugiat, arcu tellus posuere nulla, non ullamcorper lectus purus et ipsum.' } as Link,
      { name: 'Linkedin', linkAddres: 'https://www.linkedin.com/', opis: 'ASSASASAt amet, consectetur adipiscing elit. Donec sed nibh massa. Maecenas fermentum quam quis purus posuere, eu dictum mi finibus. Donec commodo, orci nec facilisis feugiat, arcu tellus posuere nulla, non ullamcorper lectus purus et ipsum.'} as Link,
      { name: 'Instagram', linkAddres: 'https://www.instagram.com/', opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nibh massa. Maecenas fermentum quam quis purus posuere, eu dictum mi finibus. Donec commodo, orci nec facilisis feugiat, arcu tellus posuere nulla, non ullamcorper lectus purus et ipsum.'} as Link,
      { name: 'Google', linkAddres: 'https://www.google.pl/', opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nibh massa. Maecenas fermentum quam quis purus posuere, eu dictum mi finibus. Donec commodo, orci nec facilisis feugiat, arcu tellus posuere nulla, non ullamcorper lectus purus et ipsum.' } as Link,
      { name: 'Allegro', linkAddres: 'https://allegro.pl/', opis: 'ewrwrwesit amet, consectetur adipiscing elit. Donec sed nibh massa. Maecenas fermentum quam quis purus posuere, eu dictum mi finibus. Donec commodo, orci nec facilisis feugiat, arcu tellus posuere nulla, non ullamcorper lectus purus et ipsum.' } as Link,
    ]
  }
}

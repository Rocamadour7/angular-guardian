import { Injectable, EventEmitter } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  heroSelected = new EventEmitter<Hero>();

  heroes = [
    { id: 1, name: 'Peter Quill', description: 'Lorem ipsum blablabla', imgPath: '/assets/heroes/StarLord.png'},
    { id: 2, name: 'Gamora', description: 'Lorem ipsum blebleble', imgPath: '/assets/heroes/Gamora.png'},
    { id: 3, name: 'Drax the Destroyer', description: 'Lorem ipsum bliblibli', imgPath: '/assets/heroes/Drax.png'},
    { id: 4, name: 'Rocket Raccoon', description: 'Lorem ipsum blobloblo', imgPath: '/assets/heroes/Rocket.png'},
    { id: 5, name: 'Groot', description: 'Lorem ipsum blublublu', imgPath: '/assets/heroes/Groot.png'},
    { id: 6, name: 'Mantis', description: 'Lorem ipsum blublublu', imgPath: '/assets/heroes/Mantis.png'},
  ];

  constructor() { }

  getHeroes() {
    // return Promise.resolve(this.heroes);
    return this.heroes;
  }

  getHero(id: number) {
    // return Promise.resolve(this.heroes).then(heroes => heroes.find(hero => hero.id === +id));
    return this.heroes[id - 1];
  }

}

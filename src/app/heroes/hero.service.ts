import { Injectable, EventEmitter } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  heroSelected = new EventEmitter<Hero>();

  heroes = [
    { id: 1, name: 'Hero 1', description: 'Lorem ipsum blablabla'},
    { id: 2, name: 'Hero 2', description: 'Lorem ipsum blebleble'},
    { id: 3, name: 'Hero 3', description: 'Lorem ipsum bliblibli'},
    { id: 4, name: 'Hero 4', description: 'Lorem ipsum blobloblo'},
    { id: 5, name: 'Hero 5', description: 'Lorem ipsum blublublu'},
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

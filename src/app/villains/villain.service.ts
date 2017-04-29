import { Injectable, EventEmitter } from '@angular/core';

import { Villain } from './villain.model';

@Injectable()
export class VillainService {
  villainSelected = new EventEmitter<Villain>();

  villains = [
    { id: 1, name: 'Villain 1', description: 'Lorem ipsum blablabla' },
    { id: 2, name: 'Villain 2', description: 'Lorem ipsum blebleble' },
    { id: 3, name: 'Villain 3', description: 'Lorem ipsum bliblibli' },
    { id: 4, name: 'Villain 4', description: 'Lorem ipsum blobloblo' },
    { id: 5, name: 'Villain 5', description: 'Lorem ipsum blublublu' },
  ];

  constructor() { }

  getVillains() {
    // return Promise.resolve(this.villains);
    return this.villains;
  }

  getVillain(id: number) {
    return this.villains[id - 1];
  }

}

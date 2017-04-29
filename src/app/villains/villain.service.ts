import { Injectable, EventEmitter } from '@angular/core';

import { Villain } from './villain.model';

@Injectable()
export class VillainService {
  villainSelected = new EventEmitter<Villain>();

  villains = [
    { name: 'Villain 1', description: 'Lorem ipsum blablabla' },
    { name: 'Villain 2', description: 'Lorem ipsum blebleble' },
    { name: 'Villain 3', description: 'Lorem ipsum bliblibli' },
    { name: 'Villain 4', description: 'Lorem ipsum blobloblo' },
    { name: 'Villain 5', description: 'Lorem ipsum blublublu' },
  ];

  constructor() { }

  getVillains(): Promise<Array<Villain>> {
    return Promise.resolve(this.villains);
  }

}

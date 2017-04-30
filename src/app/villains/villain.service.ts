import { Injectable, EventEmitter } from '@angular/core';

import { Villain } from './villain.model';

@Injectable()
export class VillainService {
  villainSelected = new EventEmitter<Villain>();

  villains = [
    { id: 1, name: 'Thanos', description: 'Lorem ipsum blablabla', imgPath: '/assets/villains/Thanos.png' },
    { id: 2, name: 'Sovereigns', description: 'Lorem ipsum blebleble', imgPath: '/assets/villains/Sovereign.png' },
    { id: 3, name: 'Sakaarans', description: 'Lorem ipsum bliblibli', imgPath: '/assets/villains/Sakaaran.png' },
    { id: 4, name: 'Ronan the Accuser', description: 'Lorem ipsum blobloblo', imgPath: '/assets/villains/Ronan.png' },
    { id: 5, name: 'Korath the Pursuer', description: 'Lorem ipsum blublublu', imgPath: '/assets/villains/Korath.png' },
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

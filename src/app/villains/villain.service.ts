import { Injectable, EventEmitter } from '@angular/core';

import { Villain } from './villain.model';

@Injectable()
export class VillainService {

  villains = [
    {
      id: 1,
      name: 'Thanos',
      specie: 'Titanian',
      description: 'Thanos, also known as the Dark Lord by his most loyal underlings and the Mad Titan by the galactic communities, is a powerful, cosmic warlord who rules over a distant region of space and also commands a massive army known as the Chitauri. His own main objective is to obtain the Infinity Stones, and his desire to achieve this goal is what led him to forging deals with the villains Loki and Ronan the Accuser in their respective campaigns against Earth and Xandar. Both of these new alliances cost Thanos much of his resources, including one of the stones and the loyalty of his two daughters, Gamora and Nebula, and also inadvertently resulted in the formation of the two superhero groups the Avengers and the Guardians of the Galaxy. Eventually, he lost his patience with his servants and opted to seek out the Stones personally.',
      imgPathAvatar: 'assets/villains/Thanos.png',
      imgPath: 'assets/villains/Thanos2.png',
      slug: 'Thanos'
    },
    {
      id: 2,
      name: 'Ayesha',
      specie: 'Sovereign',
      description: 'Ayesha is the Golden High Priestess of the Sovereign who is brought into conflict with the Guardians of the Galaxy.',
      imgPathAvatar: 'assets/villains/Ayesha.png',
      imgPath: 'assets/villains/Ayesha2.png',
      slug: 'Ayesha'
    },
    {
      id: 3,
      name: 'Sakaarans',
      specie: 'Sakaarans',
      description: 'The Sakaarans are a sentient insectoid race native to the planet Sakaar, which they share with a large number of stranded individuals of many different species. A client race of the Kree, Sakaaran soldiers were commonly placed within Kree military ranks.',
      imgPathAvatar: 'assets/villains/Sakaaran.png',
      imgPath: 'assets/villains/Sakaaran2.png',
      slug: 'Sakaarans'
    },
    {
      id: 4,
      name: 'Ronan the Accuser',
      specie: 'Kree',
      description: 'Ronan, also known as Ronan the Accuser was a radical member of the Kree race who was disgusted by a peace treaty made between the Kree Empire and Xandar. A ferocious, genocidal militarist, Ronan attempted to eradicate the Xandarians by forging an alliance with the Mad Titan Thanos, offering the Orb in exchange for the destruction of Xandar. After a long search, Ronan acquired the Orb but, having seen it\'s true destructive capabilities, decided against giving it to Thanos, choosing to take the Orb\'s power for himself. Using his new-found power, he attacked Xandar, but was defeated and killed by the combined strength of the Guardians of the Galaxy.',
      imgPathAvatar: 'assets/villains/Ronan.png',
      imgPath: 'assets/villains/Ronan2.png',
      slug: 'Ronan-the-Accuser'
    },
    {
      id: 5,
      name: 'Korath the Pursuer',
      specie: 'Kree',
      description: 'Korath the Pursuer was a Kree mercenary working for Ronan the Accuser under the order of Thanos with orders to locate the Orb. He choose to remained loyal to Ronan once the Orb was found and was killed by Drax the Destroyer during the Battle of Xandar.',
      imgPathAvatar: 'assets/villains/Korath.png',
      imgPath: 'assets/villains/Korath2.png',
      slug: 'Korath-the-Pursuer'
    },
  ];

  constructor() { }

  getVillains() {
    // return Promise.resolve(this.villains);
    return this.villains;
  }

  getVillain(slug: string) {
    return this.villains.find(villain => villain.slug === slug);
  }

}

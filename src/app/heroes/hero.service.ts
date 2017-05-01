import { Injectable, EventEmitter } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  heroes = [
    {
      id: 1,
      name: 'Peter Quill',
      specie: 'Human/Celestial Hybrid',
      description: 'A half-human who was kidnapped from Earth by the Ravagers at the age of eight. After living in space for nearly thirty years, Quill became wrapped up in an intergalactic conspiracy that introduced him to the Guardians, with him becoming their leader. He is the pilot of the Milano.',
      imgPathAvatar: '/assets/heroes/StarLord.png',
      imgPath: '/assets/heroes/StarLord2.png',
      slug: 'StarLord'
    },
    {
      id: 2,
      name: 'Gamora',
      specie: 'Zehoberei (Cyborg)',
      description: 'The only known survivor of the Zehoberei race, adopted by the Mad Titan Thanos. Renowned as the galaxy\'s deadliest assassin, Gamora had a falling out with her father that caused her to rebel against him, thereby making her an enemy of Thanos and his associates. Her fugitive status led to her becoming a member of the Guardians. She is known as the "Deadliest Woman in the Galaxy".',
      imgPathAvatar: '/assets/heroes/Gamora.png',
      imgPath: '/assets/heroes/Gamora2.png',
      slug: 'Gamora'
    },
    {
      id: 3,
      name: 'Drax the Destroyer',
      specie: 'Human',
      description: 'An enigma, with his true origin unknown. He is driven only by a burning desire to obtain vengeance against Ronan of the Kree, who killed Drax\'s wife and daughter. Drax\'s search for revenge resulted in him joining the Guardians.',
      imgPathAvatar: '/assets/heroes/Drax.png',
      imgPath: '/assets/heroes/Drax2.png',
      slug: 'Drax-the-Destroyer'
    },
    {
      id: 4,
      name: 'Rocket Raccoon',
      specie: 'Raccoon',
      description: 'A creature resembling a Terran raccoon that was genetically modified by an alien race, giving him human level intelligence. However, years of repetitive genetic rewrite and abuse resulted in Rocket developing a cynical and vain personality, making him an ideal mercenary and teammate to the other Guardians.',
      imgPathAvatar: '/assets/heroes/Rocket.png',
      imgPath: '/assets/heroes/Rocket2.png',
      slug: 'Rocket-Raccoon'
    },
    {
      id: 5,
      name: 'Groot',
      specie: 'Flora colossus',
      description: 'A sentient tree-like individual and accomplice of Rocket Raccoon. Groot\'s physiology renders the limits of his speech to the phrase, "I am Groot.", and "We are Groot.", due to having a wooden larynx. Though Groot\'s vocabulary is only limited to five words, he is usually trying to communicate other meanings. The only way to understand Groot\'s speech is for someone to translate what he is trying to say, which up until now only Rocket is shown to be able to do so.',
      imgPathAvatar: '/assets/heroes/Groot.png',
      imgPath: '/assets/heroes/Groot2.png',
      slug: 'Groot'
    },
    {
      id: 6,
      name: 'Mantis',
      specie: 'Unknown',
      description: 'A young woman raised by Ego.',
      imgPathAvatar: '/assets/heroes/Mantis.png',
      imgPath: '/assets/heroes/Mantis2.png',
      slug: 'Mantis'
    },
  ];

  constructor() { }

  getHeroes() {
    // return Promise.resolve(this.heroes);
    return this.heroes;
  }

  getHero(slug: string) {
    // return Promise.resolve(this.heroes).then(heroes => heroes.find(hero => hero.id === +id));
    // return this.heroes[id - 1];
    return this.heroes.find(hero => hero.slug === slug);
  }

}

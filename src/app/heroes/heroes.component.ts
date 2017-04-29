import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Component({
  selector: 'gog-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.heroSelected.subscribe((hero: Hero) => {
      this.selectedHero = hero;
    });
  }

}

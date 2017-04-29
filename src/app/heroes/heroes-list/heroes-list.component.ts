import { Component, OnInit, Input } from '@angular/core';

import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';

@Component({
  selector: 'gog-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  title: string = 'Heroes';
  heroes: Array<Hero>;
  @Input() selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then((heroes) => {
      this.heroes = heroes;
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';

@Component({
  selector: 'gog-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.hero = this.heroService.getHero(params['slug']);
    });
  }

}

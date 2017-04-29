import { Component, OnInit, Input } from '@angular/core';

import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';

@Component({
  selector: 'gog-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}

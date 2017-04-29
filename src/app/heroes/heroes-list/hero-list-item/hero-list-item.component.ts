import { Component, OnInit, Input } from '@angular/core';

import { HeroService } from './../../hero.service';
import { Hero } from './../../hero.model';

@Component({
  selector: 'gog-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.css']
})
export class HeroListItemComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  onSelected() {
    this.heroService.heroSelected.emit(this.hero);
  }

}

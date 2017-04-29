import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HeroesComponent } from './heroes.component';
import { HeroStartComponent } from './hero-start/hero-start.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroListItemComponent } from './heroes-list/hero-list-item/hero-list-item.component';

import { HeroService } from './hero.service';

import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroStartComponent,
    HeroesDetailsComponent,
    HeroesListComponent,
    HeroListItemComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule { }

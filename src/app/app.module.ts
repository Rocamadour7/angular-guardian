import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import "hammerjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesDetailsComponent } from './heroes/heroes-details/heroes-details.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainsListComponent } from './villains/villains-list/villains-list.component';
import { VillainsDetailsComponent } from './villains/villains-details/villains-details.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesDetailsComponent,
    VillainsComponent,
    VillainsListComponent,
    VillainsDetailsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

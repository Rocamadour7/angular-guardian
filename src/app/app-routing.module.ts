import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailsComponent } from './heroes/heroes-details/heroes-details.component';
import { VillainsComponent } from './villains/villains.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full'},
    // { path: 'heroes', component: HeroesComponent, children: [
    //     { path: ':id', component: HeroesDetailsComponent }
    // ]},
    { path: 'villains', component: VillainsComponent},
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


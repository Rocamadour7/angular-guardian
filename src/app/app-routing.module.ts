import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from './heroes/heroes.component';
import { VillainsComponent } from './villains/villains.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full'},
    { path: 'heroes', component: HeroesComponent},
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


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillainsComponent } from './villains.component';
import { VillainStartComponent } from './villain-start/villain-start.component';
import { VillainsDetailsComponent } from './villains-details/villains-details.component';

const villainsRoutes: Routes = [
    { path: 'villains', component: VillainsComponent, children: [
        { path: '', component: VillainStartComponent },
        { path: ':slug', component: VillainsDetailsComponent }
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(villainsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class VillainRoutingModule {}
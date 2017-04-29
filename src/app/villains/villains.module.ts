import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { VillainsComponent } from './villains.component';
import { VillainStartComponent } from './villain-start/villain-start.component';
import { VillainsDetailsComponent } from './villains-details/villains-details.component';
import { VillainsListComponent } from './villains-list/villains-list.component';
import { VillainListItemComponent } from './villains-list/villain-list-item/villain-list-item.component';

import { VillainService } from './villain.service';

import { VillainRoutingModule } from './villain-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VillainRoutingModule
  ],
  declarations: [
    VillainsComponent,
    VillainStartComponent,
    VillainsDetailsComponent,
    VillainsListComponent,
    VillainListItemComponent
  ],
  providers: [ VillainService ]
})
export class VillainsModule { }

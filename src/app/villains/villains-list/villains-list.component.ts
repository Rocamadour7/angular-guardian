import { VillainService } from './../villain.service';
import { Component, OnInit, Input } from '@angular/core';

import { Villain } from './../villain.model';

@Component({
  selector: 'gog-villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.css']
})
export class VillainsListComponent implements OnInit {
  title: string = 'Villains';
  villains: Array<Villain>;
 
  constructor(private villainService: VillainService) { }

  ngOnInit() {
    this.villains = this.villainService.getVillains();
  }

}

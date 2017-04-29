import { Component, OnInit } from '@angular/core';

import { VillainService } from './villain.service';
import { Villain } from './villain.model';

@Component({
  selector: 'gog-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css'],
  providers: [VillainService]
})
export class VillainsComponent implements OnInit {
  selectedVillain: Villain;

  constructor(private villainService: VillainService) { }

  ngOnInit() {
    this.villainService.villainSelected.subscribe((villain: Villain) => {
      this.selectedVillain = villain;
    });
  }

}

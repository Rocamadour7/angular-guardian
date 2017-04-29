import { Component, OnInit, Input } from '@angular/core';

import { VillainService } from './../villain.service';
import { Villain } from './../villain.model';

@Component({
  selector: 'gog-villains-details',
  templateUrl: './villains-details.component.html',
  styleUrls: ['./villains-details.component.css']
})
export class VillainsDetailsComponent implements OnInit {
  @Input() villain: Villain;

  constructor(private villainService: VillainService) { }

  ngOnInit() {
  }

}

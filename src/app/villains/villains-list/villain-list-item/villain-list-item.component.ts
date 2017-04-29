import { Component, OnInit, Input } from '@angular/core';

import { VillainService } from './../../villain.service';
import { Villain } from './../../villain.model';

@Component({
  selector: 'gog-villain-list-item',
  templateUrl: './villain-list-item.component.html',
  styleUrls: ['./villain-list-item.component.css']
})
export class VillainListItemComponent implements OnInit {
  @Input() villain: Villain;

  constructor(private villainService: VillainService) { }

  ngOnInit() {
  }

  onSelected() {
    this.villainService.villainSelected.emit(this.villain);
  }

}

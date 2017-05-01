import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { VillainService } from './../villain.service';
import { Villain } from './../villain.model';

@Component({
  selector: 'gog-villains-details',
  templateUrl: './villains-details.component.html',
  styleUrls: ['./villains-details.component.css']
})
export class VillainsDetailsComponent implements OnInit {
  villain: Villain;

  constructor(private villainService: VillainService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.villain = this.villainService.getVillain(params['slug']);
    });
  }

}

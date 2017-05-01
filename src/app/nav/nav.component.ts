import { Component, OnInit } from '@angular/core';

import { ThemingService } from './../theming.service';

@Component({
  selector: 'gog-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  darkTheme: boolean = false;

  constructor(private themingService: ThemingService) { }

  ngOnInit() {
  }

  onTheming() {
    this.darkTheme =! this.darkTheme;
    this.themingService.onThemeChange(this.darkTheme);
  }

}

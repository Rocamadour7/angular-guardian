import { Component, OnInit } from '@angular/core';

import { ThemingService } from './theming.service';

@Component({
  selector: 'gog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThemingService]
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor(private themingService: ThemingService) { }

  ngOnInit() {
    this.themingService.themeChanged.subscribe((isItDark: boolean) => {
      this.isDarkTheme = isItDark;
    });
  }
}

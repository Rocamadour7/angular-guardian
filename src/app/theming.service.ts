import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ThemingService {
  isDarkTheme: boolean = false;
  themeChanged = new EventEmitter<boolean>();

  constructor() { }

  getTheme() {
    return this.isDarkTheme;
  }

  onThemeChange(isItDark: boolean) {
    this.isDarkTheme = isItDark;
    this.themeChanged.emit(isItDark);
  }

}

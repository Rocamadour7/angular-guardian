import { browser, element, by } from 'protractor';

export class AngularGuardianPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gog-root h1')).getText();
  }
}

import { AngularGuardianPage } from './app.po';

describe('angular-guardian App', () => {
  let page: AngularGuardianPage;

  beforeEach(() => {
    page = new AngularGuardianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gog works!');
  });
});
